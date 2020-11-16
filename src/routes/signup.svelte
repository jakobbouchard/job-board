<script>
  import { goto } from '@sapper/app';
  import { auth, googleProvider, twitterProvider } from '../firebase';
  import Icon from 'fa-svelte'
  import { faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons'

  async function login(button) {
    let provider;
    switch (button) {
      case 'google':
        provider = googleProvider;
        break;
      case 'twitter':
        provider = twitterProvider;
        break;
    }

    try {
      auth.signInWithPopup(provider).then((res) => {
        goto('/profile');
      });
    } catch(e) {
      let message = e.message || e;
      console.log("Something went wrong:", message);
    }
  }
</script>

<style lang="postcss">
  @layer components {
    input {
      @apply appearance-none relative block w-full px-3 py-2 border border-gray-300 text-gray-900 transition duration-150 ease-in-out;
    }
    input::placeholder {
      @apply text-gray-500;
    }
    input:focus {
      @apply outline-none shadow-outline border-blue-300 z-10;
    }

    .separator {
      @apply my-6 flex items-center text-center;
    }
    .separator::before, .separator::after {
      content: '';
      @apply flex-1 border-b border-gray-400;
    }
    .separator::before {
      @apply mr-2;
    }
    .separator::after {
      @apply ml-2;
    }

    .icon-container {
      @apply flex items-center justify-items-center;
    }

    .google-button {
      @apply relative w-5/6 flex justify-center py-2 px-4 text-sm text-white leading-5 font-medium rounded-md bg-googleBlue transition duration-150 ease-in-out;
    }
    .google-button:hover,
    .google-button:active {
      @apply bg-googleBlueHover;
    }
    .google-button:focus {
      @apply outline-none;
    }

    @screen sm {
      input {
        @apply text-sm leading-5;
      }
    }
  }
</style>

<svelte:head>
  <title>Inscription</title>
</svelte:head>

<div class="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-md w-full">
    <div>
      <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/v1/workflow-mark-on-white.svg" alt="Workflow">
      <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
        Créez-vous un compte
      </h2>
    </div>

    <div class="mt-8 bg-white p-6 md:p-8 shadow rounded-lg">
      <div class="flex">
        <button on:click={() => login('google')} type="submit" class="group google-button">
          <span class="mr-2 icon-container">
            <Icon class="text-white transition ease-in-out duration-150" icon={faGoogle} />
          </span>
          Continuer avec Google
        </button>

        <button on:click={() => login('twitter')} type="submit" class="group relative w-1/6 flex justify-center ml-3 md:ml-4 py-2 px-4 border border-transparent border-gray-400 text-sm leading-5 font-medium rounded-md bg-white hover:border-gray-600 focus:outline-none focus:border-gray-800 focus:shadow-outline-gray active:bg-gray-800 transition duration-150 ease-in-out">
          <span class="icon-container">
            <Icon class="text-gray-600 group-hover:text-gray-800 transition ease-in-out duration-150" icon={faTwitter} />
          </span>
        </button>
      </div>

      <div class="separator text-gray-700 text-sm">Ou</div>

      <form action="#" method="POST">
        <input type="hidden" name="remember" value="true">
        <div class="rounded-md shadow-sm">
          <div>
            <input aria-label="Adresse courriel" name="email" type="email" required class="rounded-t-md" placeholder="Adresse courriel">
          </div>
          <div class="-mt-px">
            <input aria-label="Mot de passe" name="password" type="password" required class="rounded-b-md" placeholder="Mot de passe">
          </div>
        </div>

        <div class="mt-6 flex items-center justify-end">
          <div class="text-sm leading-5">
            <a href="/signin" class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
              J'ai déjà un compte
            </a>
          </div>
        </div>

        <div class="mt-6">
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
            Créer le compte
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
