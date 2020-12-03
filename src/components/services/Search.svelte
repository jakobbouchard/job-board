<script>
  // Crée un événement personnalisé pour la recherche
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  /* It is possible to integrate full-text search using Algolia or ElasticSearch
     See https://firebase.google.com/docs/firestore/solutions/search
     However, it isn't easy or quick to do, so we aren't going to integrate it.
  */

  // let searchText;
  let searchType;

  // Dispatches a custom event called search
  function search() {
    dispatch('search', {
      // text: searchText,
      jobType: searchType
    });
  }
</script>

<div class="grid grid-cols-6 mb-6 gap-4">
  <!-- Search text bar -->
  <!-- <div class="col-span-6 sm:col-span-3">
    <label for="search" class="sr-only">Rechercher</label>
    <input bind:value={ searchText } id="search" class="mt-1 form-input block w-full border-gray-400 transition duration-150 ease-in-out text-lg sm:leading-5" placeholder="Rechercher">
  </div> -->

  <!-- Job type dropdown -->
  <div class="col-span-6 sm:col-span-5">
    <label for="type" class="sr-only">Type d'emploi</label>
    <select bind:value={ searchType } id="type" class="mt-1 block form-select w-full py-2 px-3 border border-gray-400 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out text-lg sm:leading-5">
      <option selected>Temps plein</option>
      <option>Temps partiel</option>
      <option>Contrat</option>
    </select>
  </div>

  <!-- Search button, on click, dispatches search event -->
  <div class="col-span-6 sm:col-span-1">
    <button on:click={ search } class="inline-flex justify-center mt-1 py-2 px-4 w-full border border-transparent text-base leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
      Rechercher
    </button>
  </div>
</div>

