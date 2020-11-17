<script>
  export let photoURL;
  export let displayName;
  export let email;
</script>

<div>
  <div class="md:grid md:grid-cols-3 md:gap-6">
    <div class="md:col-span-1">
      <div class="px-4 sm:px-0">
        {#if photoURL}
        <img class="my-4 w-20 h-20 rounded-full" referrerpolicy="no-referrer" src={ photoURL } width="100" alt={ displayName }>
        {/if}
        {#if displayName}
        <h4 class="my-4 text-xl font-medium text-gray-900">Bonjour { displayName } !</h4>
        {/if}
        <h4 class="mb-4 border-b border-gray-400 pb-4 text-gray-800" >{ email }</h4>

        <h3 class="text-lg font-medium leading-6 text-gray-900">Profil</h3>
        <p class="mt-1 text-sm leading-5 text-gray-600">
          Cette information sera disponible au public.
        </p>
      </div>
    </div>
    <div class="mt-5 md:mt-0 md:col-span-2">
      <form action="#" method="POST">
        <div class="shadow sm:rounded-md sm:overflow-hidden">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-3 gap-6">
              <div class="col-span-3 sm:col-span-2">
                <label for="website" class="block text-sm font-medium leading-5 text-gray-700">
                  Site Web
                </label>
                <div class="mt-1 flex rounded-md shadow-sm">
                  <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                    https://
                  </span>
                  <input id="website" class="form-input flex-1 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5" placeholder="www.example.com">
                </div>
              </div>
            </div>

            <div class="mt-6">
              <label for="bio" class="block text-sm leading-5 font-medium text-gray-700">
                À propos
              </label>
              <div class="rounded-md shadow-sm">
                <textarea id="bio" rows="3" class="form-textarea mt-1 block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" placeholder="you@example.com"></textarea>
              </div>
              <p class="mt-2 text-sm text-gray-500">
                Brève description pour votre profil.
              </p>
            </div>

            <div class="mt-6 grid grid-cols-6 gap-4">
              <div class="col-span-6 sm:col-span-2">
                <label for="campus" class="block text-sm font-medium leading-5 text-gray-700">Campus</label>
                <select id="campus" class="mt-1 block form-select w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                  <option value="Félix-Leclerc">Félix-Leclerc</option>
                  <option value="Gabrielle-Roy">Gabrielle-Roy</option>
                  <option value="Louis-Reboul">Louis-Reboul</option>
                </select>
              </div>

              <div class="col-span-6 sm:col-span-2">
                <label for="fieldOfStudy" class="block text-sm font-medium leading-5 text-gray-700">
                  Champ d'études
                </label>
                <div class="mt-1 flex rounded-md shadow-sm">
                  <input id="fieldOfStudy" class="form-input flex-1 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5" placeholder="Intégration multimédia">
                </div>
              </div>

              <div class="col-span-6 sm:col-span-2">
                <label for="graduationYear" class="block text-sm font-medium leading-5 text-gray-700">
                  Année de graduation
                </label>
                <div class="mt-1 flex rounded-md shadow-sm">
                  <input type="number" id="graduationYear" class="form-input flex-1 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5" placeholder="2021">
                </div>
              </div>
            </div>
          </div>

          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <span class="inline-flex rounded-md shadow-sm">
              <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                Save
              </button>
            </span>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
