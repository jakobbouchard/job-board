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
  // Inspired by https://fireship.io/lessons/svelte-v3-overview-firebase/
  let currentUser;
  const unsubscribe = authState(auth).subscribe(u => currentUser = u);
</script>

<svelte:head>
  <title>Profil</title>
</svelte:head>

<div class="max-w-5xl mx-auto p-8">
  {#if currentUser}
    <Profile {...currentUser} />
  {/if}
</div>

