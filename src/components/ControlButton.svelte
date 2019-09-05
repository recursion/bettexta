<script>
  export let id;
  export let target;
  export let active;
  export let toggleActive;
  export let updateSetting;
  import { onMount } from "svelte";
  import CodeMirror from "../CodeMirror";
  import Power from "./Icons/Power.svelte";
  import Settings from "./Icons/Settings.svelte";
  import ControlMenu from "./ControlMenu.svelte";

  let button;
  let showSettings = false;
  let position = {
    top: 0,
    left: 0
  };

  onMount(() => {
    target.parentElement.insertBefore(button, target);
    positionForDefaultTextArea();
  });

  function handleclick() {
    if (active) {
      showSettings = !showSettings;
    } else {
      toggleActive();
    }
  }
  function getThisCodeMirrorEl() {
    return document.querySelector(".CodeMirror.bta_" + id);
  }

  function positionForDefaultTextArea() {
    const rect = target.getBoundingClientRect();
    position.top = rect.bottom - button.clientHeight;
    position.left = rect.left;
  }

  function positionForCodeMirror() {
    const codeMirror = getThisCodeMirrorEl();
    if (!codeMirror) return;
    const rect = codeMirror.getBoundingClientRect();
    position.top = rect.bottom - button.clientHeight;
    position.left = rect.left;
  }
  $: if (button && active) {
    positionForCodeMirror();
  } else if (button) {
    positionForDefaultTextArea();
  }
</script>

<style>
  .cm_btn {
    position: absolute;
    background-color: rgba(155, 155, 155, 0);
    color: rgba(0, 0, 0, 0.1);
    border: none;
    z-index: 500000;
    padding: 2px;
    width: 16px;
    height: 16px;
  }
  .cm_btn:hover {
    background-color: rgba(155, 155, 155, 0);
    color: rgba(0, 200, 0, 0.8);
  }
  .cm_btn__active:hover {
    color: rgba(255, 255, 255, 1);
    background-color: rgba(0, 0, 0, 0);
  }
  .cm_btn__active {
    color: rgba(255, 255, 255, 0.2);
    background-color: rgba(0, 0, 0, 0);
  }
  :global(.cm_btn .feather) {
    width: 16px;
    height: 16px;
    vertical-align: top;
  }
</style>

<div
  id="cm_btn_{id}"
  bind:this={button}
  on:click={handleclick}
  class="cm_btn btn_{id}
  {active ? 'cm_btn__active' : ''}"
  style="top: {position.top}px;">
  {#if active}
    <Settings />
    {#if showSettings}
      <ControlMenu
        container={button}
        {id}
        {toggleActive}
        {updateSetting}
        toggleVisible={() => (showSettings = !showSettings)} />
    {/if}
  {:else}
    <Power />
  {/if}
</div>
