<script>
  // This is honestly the default Sapper error page.

  export let status;
  export let error;

  // To see if we are running in a dev server
  const dev = process.env.NODE_ENV === 'development';
</script>

<style>
  h1, p {
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>{ status }</title>
</svelte:head>

<div class="max-w-5xl mx-auto p-8">
  <h1>{ status }</h1>

  <p>{ error.message }</p>

  <!-- Error stack shows, only in dev mode -->
  {#if dev && error.stack}
    <pre>{ error.stack }</pre>
  {/if}
</div>
