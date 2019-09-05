/*             config.js
 * Exports a function that takes a CodeMirror instance
 * and returns an object with several config objects and a list of lintTypes
 *
 * @param: CodeMirror - A CodeMirror instance.
 * @returns { lintTypes: <string>, basic: {config}, vimproved: {config}}
 *  {
 *    lintTypes: An array of strings representing available linters
 *    basic: A config object with some basic settings
 *    vimproved: A config object with vim mode, javascript mode, and javascript linting
 *  }
 */
import CodeMirror from "./CodeMirror";

// available linters
export const linters = {
  javascript: CodeMirror.lint.javascript,
  css: CodeMirror.lint.css
};

// default setup
export const basic = {
  lineWrapping: true,
  scrollbarStyle: null,
  matchBrackets: true,
  showCursorWhenSelecting: true,
  inputStyle: "contenteditable"
};

const gutters = () => ({
  gutters: ["CodeMirror-lint-markers"]
});

const lineNumbers = isVisible => ({
  lineNumbers: isVisible
});

const lineWrapping = isLineWrapOn => ({
  lineWrapping: isLineWrapOn
});

// options for this are objects on CodeMirror itself
// @param linter {CodeMirror.lint.{javascript|css|json}}
// use: linter(CodeMirror.lint.[javascript|css|json])
const linter = linter => ({
  lint: [linter]
});

// km is the string name of the keymap to use
// @param km {string}
// currently must be: ("vim", "sublime", "emacs")
const keymap = km => ({
  keyMap: km
});

// the mode to use
// @param m {string}
// can be: ("javascript", "css", "htmlmixed")
const mode = m => ({
  mode: m
});

// the theme to use
// @param t {string}
const theme = t => ({
  theme: t
});

// setup a basic config with vim and a theme
export const vimproved = Object.assign(
  basic,
  gutters(),
  lineNumbers(true),
  lineWrapping(true),
  keymap("vim"),
  mode("htmlmixed"),
  theme("cobalt")
);
