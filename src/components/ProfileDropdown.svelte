<script>
  /*
    Some of the buttons are commented out because we haven't had time to
    implement the functionality related to them. E.G. we don't have a settings
    page or a "liked/saved" jobs page (or even a way to save them for that
    matter).
  */

  import { onMount } from 'svelte';
  import { scale } from 'svelte/transition';
  import { auth } from '../firebase';
  import Icon from 'fa-svelte';
  import { faUser, faSuitcase, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

  // Parameters, passed from Firebase Auth
  export let displayName;
  export let photoURL;
  export let email;

  // Inspired by https://codechips.me/tailwind-ui-react-vs-svelte/
  let show = false; // menu state
  let menu = null; // menu wrapper DOM reference

  // When the component is created
  onMount(() => {
    const handleOutsideClick = (event) => {
      if (show && !menu.contains(event.target)) {
        show = false;
      }
    };

    const handleEscape = (event) => {
      if (show && event.key === 'Escape') {
        show = false;
      }
    };

    // add events when element is added to the DOM
    document.addEventListener('click', handleOutsideClick, false);
    document.addEventListener('keyup', handleEscape, false);

    // remove events when element is removed from the DOM
    return () => {
      document.removeEventListener('click', handleOutsideClick, false);
      document.removeEventListener('keyup', handleEscape, false);
    };
  });
</script>

<style lang="postcss">
  @layer components {
    .profile-icon {
      @apply flex text-sm border-2 border-transparent rounded-full transition
        duration-150 ease-in-out;
    }
    .profile-icon:focus {
      @apply outline-none border-white;
    }

    .profile-icon > img,
    .profile-icon > svg {
      @apply h-8 w-8 rounded-full;
    }

    .dropdown {
      @apply z-50 origin-top-right absolute right-0 w-56 mt-1 bg-white
        rounded shadow-md;
    }

    .user-info {
      @apply flex flex-col items-center justify-center py-4 border-b
        border-gray-400;
    }
    .user-image {
      @apply h-20 w-20 mb-2 p-1 border-2 border-indigo-600 rounded-full text-sm
        transition duration-150 ease-in-out;
    }
    .user-name {
      @apply block px-4 font-medium text-sm leading-5
        text-gray-800 transition duration-150 ease-in-out;
    }
    .user-email {
      @apply block px-4 text-xs leading-5 text-gray-700
        transition duration-150 ease-in-out;
    }

    .dropdown-links {
      @apply py-2;
    }
    .link {
      @apply flex justify-start items-center px-4 py-2 text-sm leading-5 text-gray-700 transition
        duration-150 ease-in-out;
    }
    .link:hover {
      @apply bg-gray-100;
    }
    .link:focus {
      @apply outline-none bg-gray-100 ;
    }
    .link-icon {
      @apply mr-2 w-5 flex justify-center items-center;
    }
  }
</style>

<div class="relative" bind:this={ menu }>
  <div>
    <button
      on:click={() => (show = !show)}
      class="profile-icon"
    >
      <!-- If the user has no profile picture (which is the case when the user
        has a email/password account), show the default SVG -->
      {#if photoURL}
      <img referrerpolicy="no-referrer" src={ photoURL } alt={ displayName }/>
      {:else}
      <svg enable-background="new 312.809 0 401 401" version="1.1" viewBox="312.809 0 401 401" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
        <g transform="matrix(1.223 0 0 1.223 -467.5 -843.44)">
          <rect x="601.45" y="653.07" width="401" height="401" fill="#E4E6E7"/>
          <path d="m802.38 908.08c-84.515 0-153.52 48.185-157.38 108.62h314.79c-3.87-60.44-72.9-108.62-157.41-108.62z" fill="#AEB4B7"/>
          <path d="m881.37 818.86c0 46.746-35.106 84.641-78.41 84.641s-78.41-37.895-78.41-84.641 35.106-84.641 78.41-84.641c43.31 0 78.41 37.9 78.41 84.64z" fill="#AEB4B7"/>
        </g>
      </svg>
      {/if}
    </button>

    {#if show}
      <div
        in:scale={{ duration: 100, start: 0.95 }}
        out:scale={{ duration: 75, start: 0.95 }}
        class="dropdown"
      >
        <!-- If the user has no profile picture (which is the case when the user
          has a email/password account), show the default SVG -->
        <div class="user-info">
          {#if photoURL}
          <img class="user-image" referrerpolicy="no-referrer" src={ photoURL } alt={ displayName }/>
          {:else}
          <svg class="user-image" enable-background="new 312.809 0 401 401" version="1.1" viewBox="312.809 0 401 401" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
            <g transform="matrix(1.223 0 0 1.223 -467.5 -843.44)">
              <rect x="601.45" y="653.07" width="401" height="401" fill="#E4E6E7"/>
              <path d="m802.38 908.08c-84.515 0-153.52 48.185-157.38 108.62h314.79c-3.87-60.44-72.9-108.62-157.41-108.62z" fill="#AEB4B7"/>
              <path d="m881.37 818.86c0 46.746-35.106 84.641-78.41 84.641s-78.41-37.895-78.41-84.641 35.106-84.641 78.41-84.641c43.31 0 78.41 37.9 78.41 84.64z" fill="#AEB4B7"/>
            </g>
          </svg>
          {/if}
          <!-- Show the display name if the user has one -->
          <div class="user-name" disabled>
            { displayName || 'Utilisateur' }
          </div>
          <div class="user-email" disabled>
            { email }
          </div>
        </div>

        <div class="dropdown-links">
          <a href="/profile" class="link">
            <div class="link-icon">
              <Icon icon={ faUser } />
            </div>
            Profil
          </a>
          <!-- This was put there so that students could "save" job offers and
               be able to get to them later on.
          <a href="#" class="link">
            <div class="link-icon">
              <Icon icon={ faSuitcase } />
            </div>
            Mes emplois
          </a>
          -->
          <!-- This was put there for a settings page, we weren't sure what was
               going to be in it, so we didn't create one yet.
          <a href="#" class="link">
            <div class="link-icon">
              <Icon icon={ faCog } />
            </div>
            Paramètres
          </a>
          -->
          <a href="." class="link" on:click={ () => auth.signOut() }>
            <div class="link-icon">
              <Icon icon={ faSignOutAlt } />
            </div>
            Déconnexion
          </a>
        </div>
      </div>
    {/if}
  </div>
</div>
