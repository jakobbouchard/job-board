<script>
  // Importe la composante d'icônes de fa-svelte, ainsi que les icônes SVG nécessaires
  import Icon from 'fa-svelte';
  import { faUser, faLocationArrow } from '@fortawesome/free-solid-svg-icons';

  // Parameters
  export let id;
  export let name;
  export let type;
  export let company;
  export let location;
</script>

<style lang="postcss">
  @layer components {
    li {
      @apply mb-4 border border-gray-400 bg-white relative z-10;
    }

    a {
      @apply block px-4 py-4 transition duration-150 ease-in-out;
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
      a {
        @apply px-6;
      }
    }
  }
</style>

<li>
  <a href="/jobs/{ id }">
    <div class="top-info">
      <div class="job-name">
        { name }
      </div>
      <!-- If the type of job is "Temps plein", make the button green, if it's "temps partiel", yellow, else red -->
      <span class="job-type { type === "Temps plein" ? 'bg-green-100 text-green-800' : type === "Temps partiel" ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800' }">
        { type }
      </span>
    </div>
    <div class="bottom-info">
      <div class="company">
        <div class="icon">
          <Icon icon={ faUser } />
        </div>
        { company }
      </div>
      <div class="location">
        <div class="icon">
          <Icon icon={ faLocationArrow } />
        </div>
        { location }
      </div>
    </div>
  </a>
</li>
