import CodeMirror from "codemirror";

import "codemirror/addon/dialog/dialog";

import "codemirror/addon/display/fullscreen";
import "codemirror/addon/display/panel";

import "codemirror/addon/lint/lint";
import "codemirror/addon/lint/css-lint";
import "codemirror/addon/lint/javascript-lint";
import "codemirror/addon/lint/json-lint";

import "codemirror/addon/hint/css-hint";
import "codemirror/addon/hint/javascript-hint";
import "codemirror/addon/hint/show-hint";

// THESE HAVE PROBLEMS
// import "codemirror/addon/lint/html-lint";
// import "codemirror/addon/hint/html-hint";

import "codemirror/keymap/vim";
import "codemirror/keymap/emacs";
import "codemirror/keymap/sublime";

import "codemirror/mode/css/css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/htmlmixed/htmlmixed";

import "codemirror/addon/dialog/dialog.css";
import "codemirror/addon/display/fullscreen.css";
import "codemirror/addon/hint/show-hint.css";
import "codemirror/addon/lint/lint.css";
import "codemirror/lib/codemirror.css";

import "codemirror/theme/the-matrix.css";
import "codemirror/theme/night.css";
import "codemirror/theme/cobalt.css";
import "codemirror/theme/ambiance.css";
import "codemirror/theme/darcula.css";
import "codemirror/theme/material.css";
export default CodeMirror;
