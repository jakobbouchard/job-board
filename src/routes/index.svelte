<script>
  import Icon from 'fa-svelte';
  import { faClipboard, faSearchDollar, faShippingFast } from '@fortawesome/free-solid-svg-icons';
</script>

<style lang="postcss">
</style>

<svelte:head>
  <title>Babillard d'emploi</title>
</svelte:head>
<!-- About us -->
<div
  class="relative pt-16 pb-32 flex content-center items-center justify-center"
  style="min-height: 75vh;"
>
  <div
    class="absolute top-0 w-full h-full bg-center bg-cover"
    style='background-image: url("https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1267&amp;q=80");'
  >
    <span
      id="blackOverlay"
      class="w-full h-full absolute opacity-75 bg-black"
    ></span>
  </div>
  <div class="container relative mx-auto">
    <div class="items-center flex flex-wrap">
      <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
        <div class="pr-12">
          <h1 class="text-white font-semibold text-5xl">
            Job Board
          </h1>
          <p class="mt-4 text-lg text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div
    class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
    style="height: 70px; transform: translateZ(0px);"
  >
    <svg
      class="absolute bottom-0 overflow-hidden"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      version="1.1"
      viewBox="0 0 2560 100"
      x="0"
      y="0"
    >
      <polygon
        class="text-gray-200 fill-current"
        points="2560 0 2560 100 0 100"
      ></polygon>
    </svg>
  </div>
</div>

<section class="pb-20 bg-gray-200 -mt-24">
  <div class="container mx-auto px-4">
    <!-- Promotion cards -->
    <div class="flex flex-wrap">
      <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
        <div
          class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
        >
        <a href="/jobs">
          <div class="px-4 py-5 flex-auto">
            <div
              class="text-white p-3 text-center inline-flex items-center justify-center w-14 h-14 mb-5 shadow-lg rounded-full bg-red-400"
            >
              <Icon class="text-2xl" icon={ faClipboard } />
            </div>
            <h6 class="text-xl font-semibold">Publier un emploi</h6>
            <p class="mt-2 mb-4 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
             ut labore et dolore magna aliqua.
            </p>
            <p class="block relative text-right right-0 mt-0">
              <span class="inline-flex items-center justify-center">
                <div class="mr-1">
                  En savoir plus
                </div>
                <!-- Hero icon: arrow-narrow-right -->
                <svg class="inline w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </p>
          </div>
        </a>
        </div>
      </div>
      <div class="w-full md:w-4/12 px-4 text-center">
        <div
          class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
        >
        <a href="/jobs">
          <div class="px-4 py-5 flex-auto">
            <div
              class="text-white p-3 text-center inline-flex items-center justify-center w-14 h-14 mb-5 shadow-lg rounded-full bg-blue-400"
            >
              <Icon class="text-2xl" icon={ faSearchDollar } />
            </div>
            <h6 class="text-xl font-semibold">Chercher un emploi</h6>
            <p class="mt-2 mb-4 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
             ut labore et dolore magna aliqua.
            </p>
            <p class="block relative text-right right-0 mt-0">
              <span class="inline-flex items-center justify-center">
                <div class="mr-1">
                  En savoir plus
                </div>
                <!-- Hero icon: arrow-narrow-right -->
                <svg class="inline w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </p>
          </div>
        </a>
      </div>
      </div>
      <div class="pt-6 w-full md:w-4/12 px-4 text-center">
        <div
          class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
        >
        <a href="/jobs">
          <div class="px-4 py-5 flex-auto">
            <div
              class="text-white p-3 text-center inline-flex items-center justify-center w-14 h-14 mb-5 shadow-lg rounded-full bg-green-400"
            >
              <Icon class="text-2xl" icon={ faShippingFast } />
            </div>
            <h6 class="text-xl font-semibold">Contrats simples et faciles</h6>
            <p class="mt-2 mb-4 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
             ut labore et dolore magna aliqua.
            </p>
            <p class="block relative text-right right-0 mt-0">
              <span class="inline-flex items-center justify-center">
                <div class="mr-1">
                  En savoir plus
                </div>
                <!-- Hero icon: arrow-narrow-right -->
                <svg class="inline w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </p>
          </div>
        </a>
      </div>
      </div>
    </div>
    <!-- Promoted Posts -->
    <div class="flex flex-wrap items-center mt-32">
      <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
        <h3 class="text-3xl mb-2 font-semibold leading-normal">
          Lorem ipsum dolor sit amet
        </h3>
        <p
          class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus, quis vitae corporis sapiente magnam enim? Culpa iste
          in aut blanditiis, expedita quo velit quibusdam quasi voluptate.
          Dolorem porro odit perferendis?
        </p>
        <p
          class="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est fuga sunt
          voluptas delectus, facere distinctio mollitia perspiciatis. Obcaecati
          error, tenetur maiores temporibus numquam magnam unde odit quasi eos
          vero fugit.
        </p>
        <a
          href="/"
          class="font-bold text-gray-800 mt-8"
          >Voir la page !</a
        >
      </div>
      <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
        <div
          class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-indigo-600"
        >
          <img
            alt="..."
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80"
            class="w-full align-middle rounded-t-lg"
          />
          <blockquote class="relative p-8 mb-4">
            <svg
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 583 95"
              class="absolute left-0 w-full block"
              style="height: 95px; top: -94px;"
            >
              <polygon
                points="-30,95 583,95 583,65"
                class="text-indigo-600 fill-current"
              ></polygon>
            </svg>
            <h4 class="text-xl font-bold text-white">
              Lorem ipsum
            </h4>
            <p class="text-md font-light mt-2 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              numquam non est unde alias vel doloribus, cupiditate dolor quis
              praesentium enim eius nesciunt aspernatur deserunt nobis ipsum
              voluptas aperiam iusto?
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</section>
