<script>
  import { auth } from '../firebase';
  import { authState } from 'rxfire/auth';

  export let segment;

  let currentUser;
  const unsubscribe = authState(auth).subscribe(u => currentUser = u);

  let profileDropdownVisible = false;

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

  function dropdownEnter(node, { duration }) {
    return {
      duration,
      css: t => {
        const eased = elasticOut(t);

        return `
          transform: scale(${eased}) rotate(${eased * 1080}deg);
          color: hsl(
            ${~~(t * 360)},
            ${Math.min(100, 1000 - 1000 * t)}%,
            ${Math.min(50, 500 - 500 * t)}%
          );`
      }
    };
  }

  function dropdownLeave(node, { duration }) {
    return {
      duration,
      css: t => {
        const eased = elasticOut(t);

        return `
          transform: scale(${eased}) rotate(${eased * 1080}deg);
          color: hsl(
            ${~~(t * 360)},
            ${Math.min(100, 1000 - 1000 * t)}%,
            ${Math.min(50, 500 - 500 * t)}%
          );`
      }
    };
  }
</script>

<style>
  #user-menu:focus + #profile-dropdown {
    display: block;
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
            <a href="." class="nav-link" aria-current="{segment === undefined ? 'page' : undefined}">Home</a>
            <a href="/about" class="nav-link" aria-current="{segment === 'about' ? 'page' : undefined}">About</a>
            <a href="/dashboard" class="nav-link" aria-current="{segment === 'dashboard' ? 'page' : undefined}">Dashboard</a>
          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

        <!-- Profile dropdown -->
        {#if currentUser}
        <div class="ml-3 relative">
          <button class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out" id="user-menu" aria-label="User menu" aria-haspopup="true">
            <img class="h-8 w-8 rounded-full" src="{currentUser.photoURL}" alt="User profile">
          </button>
          <!--
            Profile dropdown panel, show/hide based on dropdown state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          -->
          <div id="profile-dropdown" class="hidden origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg z-50">
            <div class="py-1 rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
              <a href="#" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out" role="menuitem">Your Profile</a>
              <a href="#" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out" role="menuitem">Settings</a>
              <a href="." class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out" on:click={ () => auth.signOut() } role="menuitem">Sign out</a>
            </div>
          </div>
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
      <a href="." class="nav-link" aria-current="{segment === undefined ? 'page' : undefined}">Home</a>
      <a href="/about" class="nav-link" aria-current="{segment === 'about' ? 'page' : undefined}">About</a>
      <a href="/dashboard" class="nav-link" aria-current="{segment === 'dashboard' ? 'page' : undefined}">Dashboard</a>
    </div>
  </div>
</nav>
