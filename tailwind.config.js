/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // height: theme => ({
    //   auto: 'auto',
    //   ...theme('spacing'),
    //   full: '100%',
    //   screen: 'calc(var(--vh) * 100)',
    // }),
    // minHeight: theme => ({
    //   '0': '0',
    //   ...theme('spacing'),
    //   full: '100%',
    //   screen: 'calc(var(--vh) * 100)',
    // }),
    extend: {},
  },
  plugins: [],
}