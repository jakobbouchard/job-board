<script>
  export let displayName;
  export let photoURL;
  export let uid;
</script>


<h3>Hi { displayName }!</h3>

<img referrerpolicy="no-referrer" src={ photoURL } width="100" alt={ displayName }>
<p>Your userID is { uid }</p>
