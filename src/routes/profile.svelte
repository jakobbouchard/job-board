<!-- Using context="module" enables us to use the preload function -->
<script context="module">
  import Profile from '../components/Profile.svelte';
  import { auth } from '../firebase';
  import { authState } from 'rxfire/auth';

  // If the user doesn't exist, go to sign in page
  export async function preload(page, session) {
    let { user } = session;
    if (!user) {
      return this.redirect(302, '/signin');
    }
  }
</script>

<!-- However regular code needs to be in a regular script tag, causes errors if it isn't -->
<script>
  // Inspired by https://fireship.io/lessons/svelte-v3-overview-firebase/
  // Gets the current user from Firebase using an observable from rxfire. Makes
  // it super easy to get the authentication state in real time.
  let currentUser;
  const unsubscribe = authState(auth).subscribe(u => currentUser = u);
</script>

<svelte:head>
  <title>Profil</title>
</svelte:head>

<div class="max-w-5xl mx-auto p-8">
  {#if currentUser}
    <!-- The profile NEEDS to be in a separate file. If it's in the same file,
         it creates an error code on load. Kinda weird. -->
    <Profile {...currentUser} />
  {/if}
</div>

