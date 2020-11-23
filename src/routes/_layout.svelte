<script>
  import Nav from '../components/Nav.svelte';
  import { onMount } from 'svelte';
  import { stores } from '@sapper/app';
  import { auth } from '../firebase';
  import Cookies from 'js-cookie';

  // Current page
  export let segment;

  /*
    This whole big code block puts the user token in a cookie so that Sapper can
    find it during the preload functions of other pages to prevent them from
    being accessed if the user isn't authenticated. It also refreshes it
    every 55 minutes to prevent it from being out of date.
  */

  // Based on https://medium.com/swlh/authentication-with-sapper-firebase-d3b060ad30e5
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
        console.log(user)

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

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>

<!-- If the page is signin or signup, don't show the Navbar -->
{#if (segment !== 'signin' && segment !== 'signup')}
  <Nav { segment } />

  <main class="relative">
    <slot></slot>
  </main>
{:else}
  <main class="relative">
    <slot></slot>
  </main>
{/if}
