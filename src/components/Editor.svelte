<script>
  export let id;
  export let target;
  import { onMount } from "svelte";
  import { vimproved, basic } from "../config";
  import CodeMirror from "../CodeMirror";
  import ControlButton from "./ControlButton.svelte";
  import Settings from "../settings";
  const observerConfig = { attributes: true, childList: true, subtree: true };

  let cm;
  let bottom;
  let active = false;
  let settings = Settings(id, (key, value) => {
    console.log("Setting key: ", key, " to value: ", value);
    cm.setOption(key, value);
  });

  // setup a mutation observer to track element size changes
  function handleTAMutation(changes, observer) {
    const size = target.getBoundingClientRect();
    bottom = size.bottom;
  }

  // Create an observer instance linked to the callback function
  const observer = new MutationObserver(handleTAMutation);

  // Start observing the target node for configured mutations
  observer.observe(target, observerConfig);

  const size = target.getBoundingClientRect();
  bottom = size.bottom;

  function toggleActive() {
    active = !active;
  }

  function getThisCodeMirrorEl() {
    return document.querySelector(".CodeMirror.bta_" + id);
  }

  $: if (active) {
    if (!cm) {
      const og_size = target.getBoundingClientRect();
      cm = CodeMirror.fromTextArea(target, basic);

      const codeMirror = document.querySelector(".CodeMirror");
      const uid = "bta_" + id;

      codeMirror.classList.add(uid);
      codeMirror.style.height = og_size.height;
      codeMirror.style.width = og_size.width;

      const size = codeMirror.getBoundingClientRect();
      bottom = size.bottom;

      // setup a mutation observer to track element size changes
      function handleMutation(changes, observer) {
        const target = getThisCodeMirrorEl();
        const size = target.getBoundingClientRect();
        bottom = size.bottom;
      }

      // Create an observer instance linked to the callback function
      const observer = new MutationObserver(handleMutation);

      // Start observing the target node for configured mutations
      observer.observe(codeMirror, observerConfig);

      // apply current settings
      Object.keys($settings).forEach(k => {
        cm.setOption(k, $settings[k]);
      });
    }
  } else {
    if (cm) {
      try {
        cm.toTextArea();
        const size = target.getBoundingClientRect();
        bottom = size.bottom;
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

<style>
  :global(.CodeMirror) {
    resize: both;
    overflow: auto !important;
    scrollbar-width: 0;
  }
  :global(.CodeMirror::-webkit-scrollbar) {
    width: 0;
  }
</style>

<ControlButton {updateSetting} {target} {id} {toggleActive} {active} {bottom} />
