/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {                          //
      signature: ['Playfair Display'],     // *New* It's for my name (top left)
    }                                      //
  },
  plugins: [],
}
