<template>
  <component
    :is="tag"
    :style="styleProps"
    class="m-text-component"
    @click="handleClick"
  >
    {{ text }}
  </component>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useComponentClick from "../../hooks/useComponentClick";
import useStylePick from "../../hooks/useStylePick";
import {
  componentsDefaultProps,
  transformToComponentProps,
  isEditingProp,
} from "../../defaultProps";
const extraProps = {
  tag: {
    type: String,
    default: "p",
  },
  ...isEditingProp,
};
const defaultProps = transformToComponentProps(
  componentsDefaultProps["m-text"].props,
  extraProps
);
export default defineComponent({
  name: "m-text",
  props: {
    ...defaultProps,
  },
  setup(props) {
    const styleProps = useStylePick(props);
    const handleClick = useComponentClick(props);
    return {
      styleProps,
      handleClick,
    };
  },
});
</script>

<style scoped>
h2.m-text-component,
p.m-text-component {
  margin-bottom: 0;
}
button.m-text-component {
  padding: 5px 10px;
  cursor: pointer;
}
.m-text-component {
  box-sizing: border-box;
  white-space: pre-wrap;
  position: relative !important;
}
</style>
