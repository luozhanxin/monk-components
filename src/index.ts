import type { App } from "vue";
import MText from "./components/MText";

const components = [MText];

const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

// single import
export { MText, install };
// global import
export default {
  install,
};
