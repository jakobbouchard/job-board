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
  <title>Profil</title>
</svelte:head>

{#if currentUser}
  <Profile {...currentUser} />
{/if}

<h1>Ceci est notre profil protégé ! Uniquement visible lorsque vous êtes connecté avec Firebase</h1>
