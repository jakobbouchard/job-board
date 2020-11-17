<script context="module">
  export async function preload(page, session) {
    let { user } = session;
    if (!user) {
      return this.redirect(302, '/signin');
    }
  }
</script>

<script>
  import { auth } from '../firebase';
  import { authState } from 'rxfire/auth';

  // Inspired by https://fireship.io/lessons/svelte-v3-overview-firebase/
  let currentUser;
  const unsubscribe = authState(auth).subscribe(u => currentUser = u);
</script>

<svelte:head>
  <title>Profil</title>
</svelte:head>

<h3>Bonjour { currentUser.displayName }!</h3>

<img referrerpolicy="no-referrer" src={ currentUser.photoURL } width="100" alt={ currentUser.displayName }>
<p>Votre UID est { currentUser.uid }</p>

<h1>Ceci est notre profil protégé ! Uniquement visible lorsque vous êtes connecté avec Firebase</h1>
