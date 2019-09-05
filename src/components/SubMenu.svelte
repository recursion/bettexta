<script>
  import Settings from "../settings";
  export let id;
  export let title;
  export let items;
  export let update;
  export let close;
  export let closeAll;

  let settings = Settings(id);
</script>

<style>
  .menu {
    background-color: rgba(155, 155, 255, 0.8);
    color: white;
    border: 2px solid grey;
    border-radius: 5px;
    list-style: none;
  }
  .menu {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 110px;
    top: -85px;
    left: 110px;
    z-index: 10;
    padding: 5px;
  }
  .menu-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3px;
  }
  .menu-item:hover {
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    background-color: rgba(155, 155, 255, 0.8);
  }
  .title {
    margin: 0;
    background-color: darkblue;
    padding: 2px;
    text-align: center;
    border-radius: 5px;
  }
  .selected {
    border-radius: 5px;
    text-transform: capitalize;
    background-color: rgba(200, 200, 255, 0.8);
  }
</style>

<ul class="menu" on:mouseleave={close}>
  <h5 class="title">
    {title.slice(0, 1).toUpperCase() + title.slice(1).toLowerCase()}
  </h5>
  {#each items as item}
    <li
      on:click|stopPropagation={() => {
        update(title, item);
        closeAll();
      }}
      class="menu-item {$settings[title] === item ? 'selected' : ''}">
      {item}
    </li>
  {/each}
</ul>
