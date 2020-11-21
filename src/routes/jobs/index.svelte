<script>
  import Search from '../../components/jobs/Search.svelte';
  import Job from '../../components/jobs/Job.svelte';
  import { firestore } from '../../firebase';
  import { collectionData } from 'rxfire/firestore';
  import { startWith } from 'rxjs/operators';

  // Based on https://fireship.io/lessons/svelte-v3-overview-firebase/
  let query = firestore.collection('jobs').orderBy('createdAt');
  let jobs = collectionData(query, 'id').pipe(startWith([]));

  function handleSearch(event) {
    query = firestore.collection('jobs').where('type', '==', event.detail.jobType).orderBy('createdAt');
    jobs = collectionData(query, 'id').pipe(startWith([]));
  }
</script>

<style lang="postcss">
  @layer components {
    /* .date {
      @apply inline-block border border-gray-400 bg-white relative z-10 rounded-full py-2 px-4 mb-4;
    } */
    #timeline::after{
      content: '';
      width: 1px;
      height: 90%;
      top: 3em;
      left: 2.5em;
      @apply absolute bg-gray-500;
    }

  }
</style>

<svelte:head>
  <title>Emplois</title>
</svelte:head>

<div class="max-w-5xl mx-auto p-8">
  <Search on:search={handleSearch} />

  <div class="p-4 bg-white overflow-hidden sm:rounded-lg">
    <ul id="timeline" class="relative">
      {#each $jobs as job}
        <Job { ...job } />
      {/each}

      <!-- <li class="date">1er janvier</li> -->
    </ul>

    <!-- Pagination is possible using https://firebase.google.com/docs/firestore/query-data/query-cursors
    <div
      class="relative px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div class="flex-1 flex justify-between sm:hidden">
        <a
          href="#"
          class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
          Précédent
        </a>
        <a
          href="#"
          class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
          Prochain
        </a>
      </div>
      <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p class="text-sm leading-5 text-gray-700">
            Affiche
            <span class="font-medium">1</span>
            à
            <span class="font-medium">10</span>
            de
            <span class="font-medium">97</span>
            résultats
          </p>
        </div>
        <div>
          <nav class="inline-flex shadow-sm">
            <a
              href="#"
              class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
              aria-label="Précédent">
              <svg
                class="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd" />
              </svg>
              Précédent
            </a>
            <a
              href="#"
              class="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
              aria-label="Prochain">
              Prochain
              <svg
                class="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd" />
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </div>
    -->
  </div>
</div>
