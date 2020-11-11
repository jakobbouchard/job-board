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

<div class="relative" bind:this={menu}>
  <div>
    <button
      on:click={() => (show = !show)}
      class="flex text-sm border-2 border-transparent rounded-full
        focus:outline-none focus:border-white transition duration-150
        ease-in-out"
    >
      <img class="h-10 w-10 rounded-full" src={photoURL} alt={displayName}/>
    </button>

    {#if show}
      <div
        in:scale={{ duration: 100, start: 0.95 }}
        out:scale={{ duration: 75, start: 0.95 }}
        class="z-50 origin-top-right absolute right-0 w-48 py-2 mt-1 bg-white
          rounded shadow-md"
      >
        <a
          href="/profile"
          class="block px-4 py-2 text-sm leading-5 text-gray-700
            hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition
            duration-150 ease-in-out"
        >Profile</a>
        <a
          href="."
          class="block px-4 py-2 text-sm leading-5 text-gray-700
            hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition
            duration-150 ease-in-out"
          on:click={ () => auth.signOut() }
        >Sign out</a>
      </div>
    {/if}
  </div>
</div>
