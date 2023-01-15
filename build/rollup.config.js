import vue from "rollup-plugin-vue";
import typescript from "rollup-plugin-typescript2";
import css from "rollup-plugin-css-only";
import json from "@rollup/plugin-json";
import { babel } from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { readFileSync } from "fs";
import { terser } from "rollup-plugin-terser";

const config = JSON.parse(
  readFileSync(new URL("./../package.json", import.meta.url), "utf8")
);
const { name } = config;
const file = (type) => `dist/${name}.${type}.js`;
export { name, file };
const overrides = {
  compilerOptions: { declaration: true },
  exclude: ["node_modules", "src/App.vue", "src/main.ts"],
};
export default {
  input: "src/index.ts",
  output: {
    name,
    file: file("esm"),
    format: "es",
  },
  external: ["vue", "lodash-es"],
  plugins: [
    nodeResolve({
      mainFields: ["module", "jsnext:main", "main", "browser"],
      extensions: [".vue", ".js"],
    }),
    terser(),
    vue({
      css: false,
    }),
    typescript({ tsconfigOverride: overrides }),
    json(),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
    }),
    css({ output: "monk-components.css" }),
  ],
};
