<script>
  import { toDoItems } from "./store.js"
  import { onMount } from "svelte"
  // Export name to App.svelte
  export let userName
  let newItem = ""
  let newItemInputForm = null

  onMount(() => {
    newItemInputForm.focus()
  })
  
  function addToList() {
    $toDoItems = [...$toDoItems, {text: newItem, status: false}]
    newItem = ""
  }
</script>
  
<input bind:value={newItem} bind:this={newItemInputForm} type="text" placeholder="Add a new task">
<button on:click={addToList}>Add</button>

<h3>{userName}'s task list:</h3>