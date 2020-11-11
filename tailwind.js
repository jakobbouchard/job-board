module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.svelte", "./src/**/*.html"],
  theme: {
    fontFamily: {
      display: ['Raleway', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}
