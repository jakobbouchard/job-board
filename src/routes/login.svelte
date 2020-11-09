<script>
  import Profile from '../components/Profile.svelte';

  import { auth, googleProvider } from '../firebase';
  import { authState } from 'rxfire/auth';

  let user;

  const unsubscribe = authState(auth).subscribe(u => user = u);

  function login() {
    auth.signInWithPopup(googleProvider);
  }
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<section>
  {#if user}
    <Profile {...user} />
    <button class="btn btn-red" on:click={ () => auth.signOut() }>Logout</button>
  {:else}
  <button class="btn btn-blue" on:click={login}>
    Signin with Google
  </button>
  {/if}
</section>