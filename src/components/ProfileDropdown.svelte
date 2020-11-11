<script>
  import { onMount } from 'svelte';
  import { scale } from 'svelte/transition';
  import { auth } from '../firebase';

  export let displayName;
  export let photoURL;

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

<style>
  @layer components {
    .profile-icon {
      @apply flex text-sm border-2 border-transparent rounded-full
        transition duration-150 ease-in-out;
    }
    .profile-icon:focus {
      @apply outline-none border-white;
    }

    .profile-icon > img {
      @apply h-10 w-10 rounded-full;
    }

    .dropdown {
      @apply z-50 origin-top-right absolute right-0 w-48 py-2 mt-1 bg-white
        rounded shadow-md;
    }

    .dropdown-item {
      @apply block px-4 py-2 text-sm leading-5 text-gray-700
        transition duration-150 ease-in-out;
    }
    .dropdown-item:hover {
      @apply bg-gray-100;
    }
    .dropdown-item:focus {
      @apply outline-none bg-gray-100 ;
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
        <a href="/profile" class="dropdown-item">
          Profile
        </a>
        <a href="." class="dropdown-item" on:click={ () => auth.signOut() }>
          Sign out
        </a>
      </div>
    {/if}
  </div>
</div>
