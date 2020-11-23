# Job Board for Cégep de l'Outaouais

![GitHub](https://img.shields.io/github/license/jakobbouchard/job-board)

![Svelte](https://img.shields.io/badge/Framework-Svelte-df420f?logo=svelte)
![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-38b2ac?logo=tailwind-css)
![Firebase](https://img.shields.io/badge/Cloud-Firebase-f5ba23?logo=Firebase)

This website will enable companies to put up job offers as well as contracts for
students of the Cégep de l'Outaouais. Students will also be able to create
profiles to show off their abilities and will be able to post service offers.

## Tech stuff

The website will be built using Svelte for its simplicity and ease of use. It is
also much easier to learn quickly, from my experience than bigger frameworks
like React or Angular. This will be necessary since I don't have much time or
experience with such frameworks. As for the CSS framework, we started out using
Bootstrap, but finally went with Tailwind since it's much more flexible.

For the backend, we will be using Firebase since it's pretty much an all-in-one
solution for a backend. It will enable user authentication, storage of
preferences, job postings as well as document storage (eg. Resumes).

## Tools/inspirations used

- The [Sapper template](https://github.com/sveltejs/sapper-template), for a lot of the dynamic code for job offers.
- The [Firebase Docs](https://firebase.google.com/docs), for all things Firebase, obviously.
- [Tailwind UI](https://tailwindui.com/) for a lot of the UI templates.
- @fireship-io, [Fireship's Svelte Realtime Todo](https://fireship.io/lessons/svelte-v3-overview-firebase/) for the realtime code for Auth and Firestore.
- CodeChips, for the [profile dropdown](https://codechips.me/tailwind-ui-react-vs-svelte/).
- Marek van der Hoeven on Medium, for how to [implement auth-protected pages](https://medium.com/swlh/authentication-with-sapper-firebase-d3b060ad30e5).

## Tested platforms

- Windows
  - Chrome
  - Firefox
  - Microsoft Edge
- iOS
- Android
  - Chrome

## Known bugs

- The timeline's line continues down, it's supposed to stop "inside" the last
  offer.
- When logged in using Twitter, the mail shows as null.
- When logging out, the profile image stays there a fraction of a second.

## Missing features

- Loading screens for page changes and data fetching, instead of flashes
- An actual home page
- Full-text search for job offers
- Pagination for job offers, or at least lazy-loading
- Saving the user profile
- Creating a business profile
- Creating job and service offers
- Method for applying on jobs
- Method for contacting services
- Payment gateways for business payments (needed to post jobs and stuff)
- Promoting offers
- Archiving offers older than a year
- Archiving student profiles after graduation
- Settings page (not sure what'll be in there anyways)
- Saving offers
- Maybe more, probably forgot some.
