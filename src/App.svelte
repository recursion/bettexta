<script>
  import { onDestroy } from "svelte";
  import Editor from "./components/Editor.svelte";
  import { textareas } from "./stores.js";

  console.log("App started.");

  const WATCH_INTERVAL = 1000;

  const watcher = setInterval(() => {
    const found = [...document.querySelectorAll("textarea")];
    found &&
      found.forEach(ta => {
        if (!$textareas.includes(ta)) {
          $textareas = [...$textareas, ta];
        }
      });
  }, WATCH_INTERVAL);

  onDestroy(() => {
    clearInterval(watcher);
  });
</script>

{#if $textareas.length > 0}
  {#each $textareas as ta, id}
    <Editor target={ta} {id} />
  {/each}
{/if}
