<script>
  import { onMount } from "svelte";
  import Power from "./Icons/Power.svelte";
  import Edit from "./Icons/Edit.svelte";
  import SubMenu from "./SubMenu.svelte";
  import { keyMaps } from "../settings";

  export let id;
  export let container;
  export let toggleActive;
  export let toggleVisible;
  export let updateSetting;

  let showEditorMenu = false;
  let left, height;
  let menu;

  $: top = -Math.abs(height + 15) || 0;

  onMount(() => {
    const parentSize = container.getBoundingClientRect();
    left = parentSize.left;
    height = menu.getBoundingClientRect().height;
  });

  function closeAll() {
    showEditorMenu = false;
    toggleVisible();
  }
</script>

<style>
  .settings-menu {
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 10;
    width: 110px;
  }
  .settings-menu {
    border: 2px solid grey;
    border-radius: 5px;
    background-color: rgba(155, 155, 255, 0.8);
    color: white;
  }
  .settings-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3px;
  }
  .settings-item:hover {
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    background-color: rgba(155, 155, 255, 0.8);
  }
  :global(.settings-item .feather-power) {
    color: red;
  }

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0);
    z-index: 5;
  }
</style>

<div class="modal" on:click|stopPropagation={toggleVisible} />
<div
  on:mouseleave={closeAll}
  bind:this={menu}
  class="settings-menu"
  style="top: {top}px;left: {left}px">
  <div
    class="settings-item"
    on:mouseover={() => (showEditorMenu = false)}
    on:click|preventDefault|stopPropagation={() => {
      toggleActive();
      toggleVisible();
    }}>
    <Power />
    <span>Disable</span>
  </div>
  <div
    class="settings-item"
    on:click|stopPropagation={() => {
      showEditorMenu = !showEditorMenu;
    }}>
    <Edit />
    <span>
      KeyMap
      <span on:mouseover={() => (showEditorMenu = true)}>></span>
    </span>
    {#if showEditorMenu}
      <SubMenu
        items={keyMaps}
        {id}
        title="keyMap"
        close={() => {
          showEditorMenu = false;
        }}
        {closeAll}
        update={updateSetting} />
    {/if}
  </div>
</div>
