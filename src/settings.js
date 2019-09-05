export let onUpdate;
import { writable } from "svelte/store";
export const keyMaps = ["vim", "emacs", "sublime"];
export const modes = ["javascript", "htmlmixed", "css"];
export const linters = ["javascript", "css", "json"];
export const themes = ["cobalt"];

const defaults = {
  keyMap: "sublime",
  theme: "cobalt",
  mode: "htmlmixed"
};

// create a settings store
export default function init(id, onUpdate) {
  let url = window.location.href;
  let fullKey = `${url}::${id}::settings`;
  let initialValue = JSON.parse(localStorage.getItem(fullKey));
  const { subscribe, set } = writable(initialValue || defaults);

  return {
    subscribe,
    set: settings => {
      localStorage.setItem(fullKey, JSON.stringify(settings));
      // pass key, value pairs back to the callback
      // so that settings can be applied to the editor instance
      Object.keys(settings, k => {
        onUpdate(k, settings[k]);
      });
      return set(settings);
    }
  };
}
