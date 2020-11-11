<script>
  import Icon from 'fa-svelte';
  import { faSuitcase, faLocationArrow } from '@fortawesome/free-solid-svg-icons';

  export let name;
  export let type;
  export let company;
  export let location;
</script>

<style>
  @layer components {
    li {
      @apply mb-4 border border-gray-400 bg-white relative z-10;
    }

    a {
      @apply block transition duration-150 ease-in-out;
    }
    a:hover {
      @apply shadow;
    }
    a:focus {
      @apply outline-none bg-gray-100;
    }

    .top-info {
      @apply flex items-center justify-between;
    }

    .bottom-info {
      @apply mt-2 flex justify-between;
    }
    .job-name {
      @apply text-sm leading-5 font-medium text-indigo-600 truncate;
    }

    .job-type {
      @apply px-2 inline-flex text-xs leading-5 font-semibold rounded-full;
    }

    .company {
      @apply mr-6 flex items-center text-sm leading-5 text-gray-500;
    }
    .company > .icon {
      @apply mr-1 w-5 flex justify-center items-center text-gray-400;
    }

    .location {
      @apply flex items-center text-sm leading-5 text-gray-500;
    }
    .location > .icon {
      @apply mr-1 w-5 flex justify-center items-center text-gray-400;
    }

    @screen sm {
      li {
        @apply rounded;
      }
    }
  }
</style>

<li>
  <a href="#">
    <div class="px-4 py-4 sm:px-6">
      <div class="top-info">
        <div class="job-name">
          { name }
        </div>
        <div class="flex">
          <span class="job-type {type === "Full-time" ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}">
            { type }
          </span>
        </div>
      </div>
      <div class="bottom-info">
        <div class="sm:flex">
          <div class="company">
            <div class="icon">
              <Icon icon={ faSuitcase } />
            </div>
            { company }
          </div>
        </div>
        <div class="location">
          <div class="icon">
            <Icon icon={ faLocationArrow } />
          </div>
          { location }
        </div>
      </div>
    </div>
  </a>
</li>
