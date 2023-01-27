import type { App } from "vue";
import MImage from "./MImage.vue";
MImage.install = (app: App) => {
  app.component(MImage.name, MImage);
};

export default MImage;
