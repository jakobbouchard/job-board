<script>
  import ProfileDropdown from '../components/ProfileDropdown.svelte';
  import NavLinks from '../components/NavLinks.svelte';
  import { auth } from '../firebase';
  import { authState } from 'rxfire/auth';

  export let segment;

  let currentUser;
  const unsubscribe = authState(auth).subscribe(u => currentUser = u);

  async function toggleMobileNav() {
    const menu = document.querySelector('#mobile-nav');
    const openBtn = document.querySelector('#open-nav-icon');
    const closeBtn = document.querySelector('#close-nav-icon');

    if (menu.classList.contains('hidden')) {
      menu.classList.replace('hidden', 'block');
      openBtn.classList.replace('block', 'hidden');
      closeBtn.classList.replace('hidden', 'block');
    } else {
      menu.classList.replace('block', 'hidden');
      openBtn.classList.replace('hidden', 'block');
      closeBtn.classList.replace('block', 'hidden');
    }
  }
</script>

<style>
  @layer components {
    .nav-link {
      @apply ml-2 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 transition duration-150 ease-in-out font-display;
    }
    .nav-link:hover {
      @apply text-white bg-gray-700;
    }
    .nav-link:focus {
      @apply outline-none text-white bg-gray-700;
    }

    .nav-link[aria-current] {
      @apply text-white bg-gray-900;
    }
    .nav-link[aria-current]:hover {
      @apply bg-gray-900;
    }

    @media (max-width: 640px) {
      .nav-link {
        @apply block ml-0 mt-1 text-base leading-none;
      }
    }
  }
</style>

<nav class="bg-gray-800">
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <!-- Mobile menu button -->
        <button on:click={toggleMobileNav} class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out" aria-label="Main menu" aria-expanded="false">
          <!-- Heroicon name: menu -->
          <svg id="open-nav-icon" class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <!-- Heroicon name: x -->
          <svg id="close-nav-icon" class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex-shrink-0">
          <img class="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/v1/workflow-mark-on-dark.svg" alt="Workflow logo">
          <img class="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/v1/workflow-logo-on-dark.svg" alt="Workflow logo">
        </div>
        <div class="hidden sm:block sm:ml-6">
          <div class="flex">
            <NavLinks {segment}/>
          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <!-- Profile dropdown -->
        {#if currentUser}
        <div class="ml-3 relative">
          <ProfileDropdown {...currentUser} />
        </div>
        {:else}
        <div class="ml-3 relative">
          <a href="/login" class="btn btn-blue">
            Login
          </a>
        </div>
        {/if}
      </div>
    </div>
  </div>

  <!--
    Mobile menu, toggle classes based on menu state.
  -->
  <div id="mobile-nav" class="hidden sm:hidden">
    <div class="px-2 pt-2 pb-3">
      <NavLinks {segment}/>
    </div>
  </div>
</nav>
