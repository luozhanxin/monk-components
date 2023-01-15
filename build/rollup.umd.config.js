import basicConfig, { file } from "./rollup.config.js";
export default {
  ...basicConfig,
  output: {
    name: "MonkComponents",
    file: file("umd"),
    format: "umd",
    globals: {
      vue: "Vue",
      "lodash-es": "_",
    },
    exports: "named",
  },
};
