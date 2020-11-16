const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './src/**/*.svelte',
    './src/**/*.html'
  ],

  whitelistPatterns: [/svelte-/],

  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

const production = process.env.NODE_ENV !== 'development';

module.exports = {
  plugins: [
    require('tailwindcss'),
    ...[purgecss]
  ]
};
