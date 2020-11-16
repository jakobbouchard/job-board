<div class="grid grid-cols-6 mb-6 gap-4">
  <div class="col-span-6 sm:col-span-3">
    <label for="search" class="sr-only">Rechercher</label>
    <input id="search" class="mt-1 form-input block w-full border-gray-400 transition duration-150 ease-in-out text-lg sm:leading-5" placeholder="Rechercher">
  </div>

  <div class="col-span-6 sm:col-span-2">
    <label for="type" class="sr-only">Type d'emploi</label>
    <select id="type" class="mt-1 block form-select w-full py-2 px-3 border border-gray-400 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out text-lg sm:leading-5">
      <option selected>Temps plein</option>
      <option>Temps partiel</option>
      <option>Contrat</option>
    </select>
  </div>
  <div class="col-span-6 sm:col-span-1">
    <button class="inline-flex justify-center mt-1 py-2 px-4 w-full border border-transparent text-base leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
      Rechercher
    </button>
  </div>
</div>
