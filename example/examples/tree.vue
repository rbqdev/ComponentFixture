<template>
  <sandbox :defaults="{data, identifier}">
    <tree>
    </tree>
  </sandbox>
</template>
<script>
import { tree } from "vued3tree";
import Sandbox from "@/components/Sandbox";

export default {
  name: "tree-example",
  meta: {
    display: "Vue D3 tree"
  },
  data() {
    return {
      data: {
        name: "father",
        id: 0,
        children: [
          {
            name: "son1",
            id: 1,
            children: [
              { id: 2, name: "grandson" },
              { id: 6, name: "grandson2" }
            ]
          },
          {
            name: "son2",
            children: [
              { id: 4, name: "grandson3" },
              { id: 5, name: "grandson4" }
            ]
          }
        ]
      },
      identifier: n => n.id
    };
  },
  components: {
    Sandbox,
    tree
  }
};
</script>
