import { shallowMount } from "@vue/test-utils";
import ComponentFixture from "@/components/ComponentFixture.vue";
import FakeComponent from "../../mock/FakeComponent.vue";

const { console } = window;
const originalError = console.error;

const mountComponentWithDefaultSlot = (slot = FakeComponent) =>
  shallowMount(ComponentFixture, {
    slots: {
      default: slot
    }
  });

const mountForTest = async () => {
  const wrapper = mountComponentWithDefaultSlot();
  await await wrapper.vm.$nextTick();
  return wrapper;
};

describe("ComponentFixture.vue", () => {
  beforeEach(() => {
    console.error = () => {};
  });

  afterEach(() => {
    console.error = originalError;
  });

  it("throws when no default slot is passed", () => {
    const render = () => shallowMount(ComponentFixture, {});
    expect(render).toThrow(
      "ComponentFixture should have one unique default slot"
    );
  });

  const defaultSlotNotUnique = [
    [[]],
    [["<div/>", "<div/>"]],
    [["<div/>", "<component1/>", "<component2/>"]]
  ];

  test.each(defaultSlotNotUnique)(
    "throws when there is not exactly than one default slots are passed",
    args => {
      const render = () => mountComponentWithDefaultSlot(args);
      expect(render).toThrow(
        "ComponentFixture should have one unique default slot"
      );
    }
  );

  it("does not throw when one default slot is passed", () => {
    const render = () => mountComponentWithDefaultSlot("<component/>");
    expect(render).not.toThrow();
  });

  it("sets the component name", async () => {
    const wrapper = await mountForTest();
    expect(wrapper.vm.componentName).toEqual("FakeComponent");
  });

  it("computes the dynamicAttributes number with default value", async () => {
    const wrapper = await mountForTest();
    expect(wrapper.vm.dynamicAttributes.number).toEqual(25);
  });

  it("computes the dynamicAttributes with default value computed when required", async () => {
    const wrapper = await mountForTest();
    expect(wrapper.vm.dynamicAttributes.string).toEqual("");
  });

  it("computes the dynamicAttributes with default value undefined when required", async () => {
    const wrapper = await mountForTest();
    expect(wrapper.vm.dynamicAttributes.hasOwnProperty("undefinedString")).toBe(
      true
    );
    expect(wrapper.vm.dynamicAttributes.undefinedString).toBe(undefined);
  });

  it("computes the dynamicAttributes with default value computed from factory", async () => {
    const wrapper = await mountForTest();
    expect(wrapper.vm.dynamicAttributes.objectWithFactory).toEqual({
      createdByFactory: true
    });
  });
});