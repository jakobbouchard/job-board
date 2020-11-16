<script>
  export let displayName;
  export let photoURL;
  export let uid;
</script>


<h3>Bonjour { displayName }!</h3>

<img referrerpolicy="no-referrer" src={ photoURL } width="100" alt={ displayName }>
<p>Votre UID est { uid }</p>
