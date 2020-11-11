<script>
  export let segment;
</script>

<style>
  @layer components {
    .nav-link {
      @apply ml-2 px-3 py-2 rounded-md text-sm font-normal leading-5 text-gray-300 transition duration-150 ease-in-out;
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

<a href="." class="nav-link" aria-current="{segment === undefined ? 'page' : undefined}">Home</a>
<a href="/jobs" class="nav-link" aria-current="{segment === 'jobs' ? 'page' : undefined}">Jobs</a>
<a href="/about" class="nav-link" aria-current="{segment === 'about' ? 'page' : undefined}">About</a>
