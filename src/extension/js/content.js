import App from "../../App.svelte";
import JSHINT from "./jshint";
window.JSHINT = JSHINT;

const app = new App({
  target: document.body
});
