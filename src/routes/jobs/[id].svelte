<script context="module">
  export async function preload({ params }) {
    // the `id` parameter is available because
    // this file is called [id].svelte
    const res = await this.fetch(`jobs/${params.id}.json`);
    const data = await res.json();
    if (res.status === 200) {
      return { job: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import Icon from 'fa-svelte';
  import { faSuitcase, faLocationArrow, faCalendar, faBuilding, faPaperclip } from '@fortawesome/free-solid-svg-icons';

  export let job;
</script>

<style lang="postcss">
  @layer components {
    .info-container {
      @apply mt-1 flex flex-col;
    }

    .info {
      @apply mt-2 flex items-center text-sm leading-5 text-gray-500;
    }
    .info > .icon {
      @apply mr-1 w-5 flex justify-center items-center text-gray-400;
    }

    .button {
      @apply inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 transition duration-150 ease-in-out;
    }
    .button:hover {
      @apply bg-indigo-500;
    }
    .button:focus {
      @apply outline-none shadow-outline-indigo border-indigo-700;
    }
    .button:active {
      @apply bg-indigo-700;
    }
    .button > .icon {
      @apply -ml-1 mr-2 h-5 w-5;
    }

    @screen sm {
      .info-container {
        @apply mt-0 flex-row flex-wrap;
      }

      .info {
        @apply mr-6;
      }
    }
  }
</style>

<svelte:head>
  <title>{job.data.name}</title>
</svelte:head>

<div class="md:flex md:items-center md:justify-between">
  <div class="flex-1 min-w-0">
    <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
      {job.data.name}
    </h2>
    <div class="info-container">
      <div class="info">
        <div class="icon">
          <Icon icon={ faSuitcase } />
        </div>
        {job.data.type}
      </div>
      <div class="info">
        <div class="icon">
          <Icon icon={ faBuilding } />
        </div>
        {job.data.company}
      </div>
      <div class="info">
        <div class="icon">
          <Icon icon={ faLocationArrow } />
        </div>
        {job.data.location}
      </div>
      <div class="info">
        <div class="icon">
          <Icon icon={ faCalendar } />
        </div>
        Closing on January 9, 2020
      </div>
    </div>
  </div>
  <div class="mt-5 flex">
    <span class="shadow-sm rounded-md">
      <button type="button" class="button">
        <div class="icon">
          <Icon icon={ faPaperclip } />
        </div>
        Appliquer
      </button>
    </span>
  </div>
</div>

