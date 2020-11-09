<script>
  import Nav from '../components/Nav.svelte';
  import { onMount } from 'svelte';
  import { stores } from '@sapper/app';
  import { auth } from '../firebase';
  import { authState } from 'rxfire/auth';
  import Cookies from 'js-cookie';

  export let segment;

  const { session } = stores();

  onMount(async () => {
    auth.onIdTokenChanged(async (user) => {
      try {
        if (!user) {
          console.log(`User does not exist`);
          Cookies.set('token', false);
          $session.user = false;
          return;
        }
        const token = await user.getIdToken();
        Cookies.set('token', token);
        $session.user = token;
        console.log(`User found and session set!`);

        // refreshes token every 55 minutes to also sync with server-side.
        window.timeoutId = setTimeout(() => {
          const user = auth.currentUser;
          if (user) {
            return auth.currentUser.getIdToken(true);
          }
          console.log('No user! Timeout will be killed eventually.');
        }, 1000 * 60 * 55);
      } catch (e) {
        console.log(`Something went wrong`);
        Cookies.set('token', false);
        $session.user = false;
        return;
      }
    });
  });
</script>

<style>
  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<Nav {segment}/>

<main>
  <slot></slot>
</main>
