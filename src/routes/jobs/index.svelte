<script>
  import Job from '../../components/jobs/Job.svelte';
</script>

<style lang="postcss">
  @layer components {
    .date {
      @apply inline-block border border-gray-400 bg-white relative z-10 rounded-full py-2 px-4 mb-4;
    }
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
  <title>Jobs</title>
</svelte:head>

<div>
  <label for="Search" class="block text-xl leading-5 text-gray-700">Search</label>

  <div class="mt-1 relative ">
    <div class="border border-gray-600 border-rounded-md shadow-lg">
    <input id="Search" class="form-input block w-full p-4 pl-7 pr-12 sm:text-xl sm:leading-5" placeholder="Search...">
    </div>
    <div class="absolute inset-y-0 right-0 flex items-center border border-gray-600 border-rounded-md shadow-lg">
      <select aria-label="Statuts" class="form-select h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-600 sm:text-sm sm:leading-5">
        <option>Contrat</option>
        <option>Temps plein</option>
        <option>Temps partiel</option>
      </select>
    </div>
  </div>
</div>

<div class="p-4 bg-white overflow-hidden sm:rounded-lg">
  <ul id="timeline" class="relative">
    <Job name="Cashier" type="Part-time" company="McDonald's" location="Gatineau" />
    <Job name="Geek Squad" type="Part-time" company="Best Buy" location="Ottawa" />
    <Job name="Front End Developer" type="Full-time" company="Distantia" location="Gatineau" />

    <li class="date">Jan 1st</li>

    <Job name="Back End Developer" type="Full-time" company="Spiria" location="Ottawa" />
    <Job name="Front End Developer" type="Part-time" company="Justice Canada" location="Ottawa" />
    <Job name="Designer" type="Full-time" company="Trinergie" location="Gatineau" />
  </ul>

  <div
    class="relative px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
    <div class="flex-1 flex justify-between sm:hidden">
      <a
        href="#"
        class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
        Previous
      </a>
      <a
        href="#"
        class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
        Next
      </a>
    </div>
    <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
      <div>
        <p class="text-sm leading-5 text-gray-700">
          Showing
          <span class="font-medium">1</span>
          to
          <span class="font-medium">10</span>
          of
          <span class="font-medium">97</span>
          results
        </p>
      </div>
      <div>
        <nav class="inline-flex shadow-sm">
          <a
            href="#"
            class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
            aria-label="Previous">
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
            Previous
          </a>
          <a
            href="#"
            class="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
            aria-label="Next">
            Next
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
</div>
