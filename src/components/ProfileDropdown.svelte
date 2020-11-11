<script>
  import { onMount } from 'svelte';
  import { scale } from 'svelte/transition';
  import { auth } from '../firebase';
  import Icon from 'fa-svelte';
  import { faUser, faSuitcase, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

  export let displayName;
  export let photoURL;
  export let email;

  let show = false; // menu state
  let menu = null; // menu wrapper DOM reference

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

    .profile-icon > img {
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
      <img referrerpolicy="no-referrer" src={ photoURL } alt={ displayName }/>
    </button>

    {#if show}
      <div
        in:scale={{ duration: 100, start: 0.95 }}
        out:scale={{ duration: 75, start: 0.95 }}
        class="dropdown"
      >
        <div class="user-info">
          <img class="user-image" referrerpolicy="no-referrer" src={ photoURL } alt={ displayName }/>
          <div class="user-name" disabled>
            { displayName }
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
            Profile
          </a>
          <a href="#" class="link">
            <div class="link-icon">
              <Icon icon={ faSuitcase } />
            </div>
            My jobs
          </a>
          <a href="#" class="link">
            <div class="link-icon">
              <Icon icon={ faCog } />
            </div>
            Settings
          </a>
          <a href="." class="link" on:click={ () => auth.signOut() }>
            <div class="link-icon">
              <Icon icon={ faSignOutAlt } />
            </div>
            Sign out
          </a>
        </div>
      </div>
    {/if}
  </div>
</div>
