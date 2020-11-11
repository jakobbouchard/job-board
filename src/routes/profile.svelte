<script context="module">
  import Profile from '../components/Profile.svelte';
  import { auth } from '../firebase';
  import { authState } from 'rxfire/auth';

  export async function preload(page, session) {
    let { user } = session;
    if (!user) {
      return this.redirect(302, '/signin');
    }
  }
</script>
<script>
  let currentUser;
  const unsubscribe = authState(auth).subscribe(u => currentUser = u);
</script>

<svelte:head>
  <title>Profile</title>
</svelte:head>

{#if currentUser}
  <Profile {...currentUser} />
{/if}

<h1>This is our protected profile! Only visible when you are logged in with Firebase</h1>
