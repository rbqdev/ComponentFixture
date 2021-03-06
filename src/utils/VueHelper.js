import { getTypeFromValue } from "./TypeHelper";

const hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function getType(fn) {
  const match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : "";
}

function resolveFunctionIfNeeded(def, prop, vm) {
  return typeof def === "function" && getType(prop.type) !== "Function"
    ? def.call(vm)
    : def;
}

function getPropDefaultValue(vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, "default")) {
    return undefined;
  }
  const def = prop.default;

  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (
    vm &&
    vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key];
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return resolveFunctionIfNeeded(def, prop, vm);
}

function extractDefaultValue(vm, prop, key, proposedValue, fixtureVm) {
  if (proposedValue !== undefined) {
    const normalizedProposed = resolveFunctionIfNeeded(
      proposedValue,
      prop,
      fixtureVm
    );
    const propTypes = getTypeForProp(prop);
    const proposedTypes = getTypeFromValue(normalizedProposed);
    const typeMatch = propTypes.some(t => proposedTypes.includes(t));
    if (!typeMatch) {
      window.console.warn(
        `defaults: ${JSON.stringify(
          normalizedProposed
        )} will be discarded because type is not matching props type`
      );
    } else {
      const validation = validateProp(prop, normalizedProposed);
      if (!validation.ok) {
        window.console.warn(
          `defaults: ${JSON.stringify(
            normalizedProposed
          )} will be discarded because ${validation.message}.`
        );
      } else {
        return normalizedProposed;
      }
    }
  }
  const defaultValue = getPropDefaultValue(vm, prop, key);
  if (defaultValue !== undefined) {
    return defaultValue;
  }
  if (!prop.required) {
    return undefined;
  }
  const { type } = prop;
  if (!type) {
    return {};
  }
  return !Array.isArray(type) ? type() : type[0]();
}

function getTypeForProp(prop, defaultValue) {
  if (prop.type) {
    const types = Array.isArray(prop.type) ? prop.type : [prop.type];
    return types.map(getType);
  }
  return getTypeFromValue(defaultValue);
}

function validateProp(prop, value) {
  const absent = value === undefined || value === null;
  if (prop.required && absent) {
    return { ok: false, message: "Prop is required" };
  }
  if (value === null && !prop.required) {
    return { ok: true };
  }
  const { validator } = prop;
  if (!validator || validator(value)) {
    return { ok: true };
  }
  return { ok: false, message: "Invalid prop: custom validator" };
}

export { extractDefaultValue, getTypeForProp, validateProp };
