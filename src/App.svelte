<script>
  import ToDoInputForm from "./ToDoInputForm.svelte"
  import ToDoList from "./ToDoList.svelte"
  let nameEntered = false

  let firstName = ""
  let lastName = ""

  $: fullName = firstName  + " " + lastName

  function handleSubmit() {
    if (firstName && lastName) {
      nameEntered = true
    }
  }
</script>

<main>
{#if nameEntered}
  <h1>Welcome to task manager, {fullName}!</h1>
  <ToDoInputForm userName={fullName} />
  <ToDoList />
{:else}
  <h1>Welcome to task manager!</h1>
  <h3>Please enter your name:</h3>
  <form on:submit|preventDefault={handleSubmit}>
    <div>
      <input bind:value={firstName} type="text" placeholder="First name" required>
    </div>
    <div>
      <input bind:value={lastName} type="text" placeholder="Last name" required>
    </div>
    <button on:click={handleSubmit}>Start managing tasks</button>
  </form>
{/if}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 450px;
    margin: 0 auto;
  }
</style>