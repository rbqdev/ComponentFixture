<script>
import Vue from "vue";
import splitPane from "vue-splitpane";
import {
  extractDefaultValue,
  getTypeForProp,
  validateProp
} from "@/utils/VueHelper";
import compare from "@/utils/compare";
import consoleSilenter from "@/utils/consoleSilenter";

function getMethods(methods, component) {
  return Object.keys(methods).map(name => ({
    name,
    argumentNumber: methods[name].length,
    execute: methods[name].bind(component)
  }));
}

function filterMethods(methods) {
  if (!methods) {
    return {};
  }
  return Object.keys(methods)
    .filter(name => methods[name].length === 0)
    .reduce((acc, name) => {
      acc[name] = methods[name];
      return acc;
    }, {});
}

function buildListener(props, prop) {
  return evt => {
    props[prop] = evt;
  };
}

const defaultModel = {
  event: "input",
  prop: "value"
};

export default {
  name: "ComponentFixture",

  props: {
    defaults: {
      required: false,
      type: Object,
      default: () => ({})
    }
  },

  renderError: (h, err) => h("pre", { style: { color: "red" } }, err.stack),

  methods: {
    computedValuesFromProps(component, { props, name, model }) {
      this.componentName = name;
      this.componentModel = model || defaultModel;
      const photo = Object.assign({}, props);

      if (this.$photo !== undefined && compare(photo, this.$photo)) {
        return;
      }

      this.$photo = photo;
      this.dynamicAttributes = {};
      this.propsDefinition = {};
      const { dynamicAttributes, propsDefinition } = this;
      if (!props) {
        return;
      }
      Object.keys(props).forEach(key => {
        const propsValue = props[key];
        const proposedValue = this.defaults[key];
        const defaultValue = extractDefaultValue(
          component,
          propsValue,
          key,
          proposedValue,
          this
        );
        Vue.set(dynamicAttributes, key, defaultValue);
        Vue.set(propsDefinition, key, {
          defaultValue,
          definition: propsValue,
          types: getTypeForProp(propsValue, defaultValue),
          validate: validateProp.bind(null, propsValue)
        });
      });
    },

    getUnderTestComponent() {
      if (this.$stage === 1) {
        const [component] = this.$children;
        return component;
      }
      return this.$refs.cut;
    },

    setupEventsListeners(props, { event, prop }) {
      const on = {};
      if (props.hasOwnProperty(prop)) {
        on[event] = buildListener(props, prop);
      }
      Object.keys(props)
        .filter(p => p !== prop)
        .forEach(key => {
          on[`update:${key}`] = buildListener(props, key);
        });
      return on;
    },

    updateValuesFromCurrrentComponent() {
      const component = this.getUnderTestComponent();
      const options =
        this.$stage === 1 ? this.$children[0].$options : this.ctor.options;
      this.computedValuesFromProps(component, options);
      this.updateMethods(component, options);
      this.$nextTick(() => this.updateData());
    },

    updateMethods(component, options) {
      const { methods: rawMethods } = options;
      const methods = filterMethods(rawMethods);
      const { $methods } = this;

      if ($methods !== undefined && compare(methods, $methods)) {
        return;
      }
      this.componentMethods = getMethods(methods, component);
      this.$methods = Object.assign({}, methods);
    },

    update() {
      this.$refs.cut.$forceUpdate();
    },

    updateData() {
      this.data = this.getUnderTestComponent().$data;
    }
  },

  render(h) {
    const { default: defaultSlot } = this.$slots;
    if (!defaultSlot || defaultSlot.length !== 1) {
      throw new Error("ComponentFixture should have one unique default slot");
    }

    if (this.$stage == 2) {
      //Updates (needed for hot-reload)
      this.updateValuesFromCurrrentComponent();
    }

    const [slot] = defaultSlot;
    if (this.$stage === 0) {
      this.$consoleSilenter = consoleSilenter(window);
      return h("div", {}, [slot]);
    }

    const { Ctor: ctor } = slot.componentOptions;
    this.ctor = ctor;
    const { scopedSlots, slot: childSlot } = slot.data;
    const props = this.dynamicAttributes;
    const {
      componentName,
      componentMethods: methods,
      componentModel,
      events,
      propsDefinition,
      update
    } = this;

    const options = {
      props,
      scopedSlots,
      slot: childSlot,
      class: { "real-component": true },
      ref: "cut",
      on: this.setupEventsListeners(props, componentModel)
    };

    const { control, header = () => null } = this.$scopedSlots;
    if (!control) {
      return h(ctor, options, []);
    }

    return h(
      "div",
      {
        class: {
          "main-panel": true
        }
      },
      [
        header({
          componentName,
          update,
          methods
        }),
        h(
          splitPane,
          {
            class: {
              pane: true
            },
            props: {
              split: "vertical",
              defaultPercent: 30
            }
          },
          [
            h(
              "div",
              {
                class: { control: true, main: true },
                slot: "paneL"
              },
              [
                control({
                  attributes: props,
                  data: this.data,
                  componentName,
                  propsDefinition,
                  methods,
                  events
                })
              ]
            ),
            h(
              "div",
              {
                class: { component: true },
                slot: "paneR"
              },
              [h(ctor, options, [])]
            )
          ]
        )
      ]
    );
  },

  mounted() {
    if (this.$children.length !== 1) {
      return;
    }
    this.$stage = 1;
    this.updateValuesFromCurrrentComponent();
    this.$forceUpdate();
    this.$consoleSilenter();
  },

  updated() {
    if (this.$stage !== 1) {
      return;
    }
    this.$stage = 2;
    this.$nextTick(() => {
      const emit = this.$refs.cut.$emit;
      const newEmit = (eventName, ...args) => {
        emit.call(this.$refs.cut, eventName, ...args);
        if (eventName.startsWith("hook:")) {
          return;
        }
        this.events.push({
          name: eventName,
          args: args,
          instant: new Date()
        });
      };
      this.$refs.cut.$emit = newEmit;
    });
  },

  data() {
    this.$stage = 0;
    this.$photo == null;
    return {
      /**
       * The component under test name.
       */
      componentName: null,

      /**
       * This object will contain all the props to be bound with the component under test.
       * after initialization.
       */
      dynamicAttributes: {},

      /**
       * This object will contain the props definition as declared in the component under test.
       */
      propsDefinition: {},

      /**
       * This array will contain the methods as declared in the component under test.
       */
      componentMethods: [],

      /**
       * This object will contain the component under test data.
       */
      data: null,

      /**
       * Array of events emitted by the component under test.
       */
      events: []
    };
  }
};
</script>

<style lang="less" scoped>
.splitter-pane {
  height: 100vh;
}
</style>
