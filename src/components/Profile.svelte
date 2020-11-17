<script>
  export let displayName;
  export let photoURL;
  export let uid;
</script>

{#if displayName}
<h3>Bonjour { displayName } !</h3>
{/if}
{#if photoURL}
<img referrerpolicy="no-referrer" src={ photoURL } width="100" alt={ displayName }>
{/if}
<p>Votre UID est { uid }</p>
