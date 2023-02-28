/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'micro': '0px',
      'mobile': '384px',
      'tablet': '600px',
      // => @media (min-width: 640px) { ... }

      'ipad': '768px',
      // => @media (min-width: 1024px) { ... }

      'notebook': '992px',
      // => @media (min-width: 1280px) { ... }
      'pc': '1280px',
      'xl':"1400px"

    },
    plugins: [],
  }
}