import type { App } from "vue";
import MText from "./MText.vue";
MText.install = (app: App) => {
  app.component(MText.name, MText);
};

export default MText;
