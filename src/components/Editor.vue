<template>
  <div class="control">
    <h1>{{componentName}}</h1>
    <form>
      <attributeEditor v-for="(value, key) in attributes" :key="key" :object="attributes" :attribute="key" :metaData="propsDefinition[key]">
      </attributeEditor>
    </form>
  </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.css";

import attributeEditor from "./AttributeEditor";

export default {
  components: {
    attributeEditor
  },
  props: {
    attributes: {
      required: true,
      type: Object
    },
    componentName: {
      required: true,
      type: String
    },
    propsDefinition: {
      required: true,
      type: Object
    }
  }
};
</script>
<style lang="less">
.control {
  background-color: lightgrey;
  width: 400px;

  form {
    margin: 10px;
  }
}
</style>