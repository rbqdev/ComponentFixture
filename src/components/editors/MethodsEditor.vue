<template>
  <div>
    <div
      v-if="orderedMethods.length>0"
      class="methods"
      role="group"
      aria-label="methods"
    >
      <div
        v-for="method in orderedMethods"
        :key="method.name"
        class="methods-button"
      >
        <button
          @click="executeMethod(method)"
          type="button"
          class="btn btn-primary"
        >{{method.name}}</button>
      </div>
    </div>
    <span
      class="no-info"
      v-else
    >No methods without argument detected.</span>
  </div>
</template>
<script>
const props = {
  methods: {
    required: true,
    type: Array
  }
};
export default {
  name: "methods-editor",
  key: "methods",
  display: "Methods",
  props,
  inheritAttrs: false,
  methods: {
    async executeMethod({ execute, name }) {
      try {
        const res = await execute();
        this.showResult(name, res);
      } catch (error) {
        this.$emit("error", `"${name}" executed with error: ${error}`);
      }
    },

    showResult(name, res) {
      const message =
        res === undefined
          ? `"${name}" executed without error`
          : `"${name}" returned: ${JSON.stringify(res, null, 2)}`;
      this.$emit("success", message);
    }
  },
  computed: {
    orderedMethods() {
      const ordered = [...this.methods];
      ordered.sort((a, b) => a.name.localeCompare(b.name));
      return ordered;
    }
  }
};
</script>
<style lang="less">
.methods {
  width: 100%;

  .methods-button {
    margin-top: 5px;
    margin-bottom: 5px;
    width: 100%;
    display: flex;
    justify-content: center;

    button {
      font-size: 12px;
    }
  }
}
</style>
