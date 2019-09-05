<script>
  export let id;
  export let target;
  import { onMount } from "svelte";
  import { vimproved, basic } from "../config";
  import CodeMirror from "../CodeMirror";
  import ControlButton from "./ControlButton.svelte";
  import Settings from "../settings";

  let cm;
  let active = false;
  let settings = Settings(id, (key, value) => {
    console.log("Setting key: ", key, " to value: ", value);
    cm.setOption(key, value);
  });

  function toggleActive() {
    active = !active;
  }

  function getThisCodeMirrorEl() {
    return document.querySelector(".CodeMirror.bta_" + id);
  }

  $: if (active) {
    if (!cm) {
      cm = CodeMirror.fromTextArea(target, basic);
      const codeMirror = document.querySelector(".CodeMirror");
      codeMirror.classList.add("bta_" + id);
      // apply current settings
      Object.keys($settings).forEach(k => {
        cm.setOption(k, $settings[k]);
      });
    }
  } else {
    if (cm) {
      try {
        cm.toTextArea();
      } catch (e) {
        console.log("--> ", e);
      }
      cm = null;
    }
  }
  function updateSetting(key, value) {
    $settings[key] = value;
    cm.setOption(key, value);
  }
</script>

<ControlButton {updateSetting} {target} {id} {toggleActive} {active} />
