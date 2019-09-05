import commonjs from "rollup-plugin-commonjs";
import livereload from "rollup-plugin-livereload";
import resolve from "rollup-plugin-node-resolve";
import svelte from "rollup-plugin-svelte";
import { terser } from "rollup-plugin-terser";
import copy from "rollup-plugin-copy";
import postcss from "rollup-plugin-postcss";

const production = !process.env.ROLLUP_WATCH;
export default [
  {
    input: "src/extension/js/popup.js",
    output: {
      format: "iife",
      sourcemap: true,
      name: "popup",
      file: "dist/js/popup.js"
    }
  },
  {
    input: "src/extension/js/options.js",
    output: {
      format: "iife",
      sourcemap: true,
      name: "options",
      file: "dist/js/options.js"
    }
  },
  {
    input: "src/extension/js/background.js",
    output: {
      format: "iife",
      sourcemap: true,
      name: "background",
      file: "dist/js/background.js"
    }
  },
  {
    input: "src/extension/js/content.js",
    output: {
      format: "iife",
      sourcemap: true,
      name: "content",
      file: "dist/js/content.js"
    },
    plugins: [
      postcss({
        plugins: []
      }),
      copy({
        targets: [
          { src: "src/extension/manifest.json", dest: "dist/" },
          { src: "src/extension/images", dest: "dist/" },
          { src: "src/extension/css", dest: "dist/" },
          { src: "src/extension/options.html", dest: "dist/" },
          { src: "src/extension/popup.html", dest: "dist/" },
          { src: "src/extension/js/jshint.js", dest: "dist/js/" },
          { src: "src/extension/js/jsonlint.js", dest: "dist/js/" },
          { src: "src/extension/js/csslint.js", dest: "dist/js/" }
        ]
      }),
      svelte({
        dev: !production,
        css: css => {
          css.write("dist/css/content.css");
        }
      }),
      resolve(),
      commonjs(),
      !production && livereload("dist"),
      production && terser()
    ]
  }
];
