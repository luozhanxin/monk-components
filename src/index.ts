import type { App } from "vue";
import MText from "./components/MText";
import MImage from "./components/MImage";

const components = [MText, MImage];

const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

// single import
export { MText, MImage, install };
// global import
export default {
  install,
};
