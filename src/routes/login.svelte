<script>
  import { goto } from '@sapper/app';
  import { auth, googleProvider } from '../firebase';
  import { authState } from 'rxfire/auth';

  let currentUser;
  const unsubscribe = authState(auth).subscribe(u => currentUser = u);

  async function login() {
    try {
      auth.signInWithPopup(googleProvider).then((res) => {
        goto('/dashboard');
      });
    } catch(e) {
      let message = e.message || e;
      console.log("Something went wrong:", message);
    }
  }
</script>

<svelte:head>
  <title>Login</title>
</svelte:head>

<section>
  {#if currentUser}
    <a class="btn btn-blue" href="dashboard">Go to dashboard</a>
  {:else}
    <button class="btn btn-blue" on:click={login}>
      Signin with Google
    </button>
  {/if}
</section>
