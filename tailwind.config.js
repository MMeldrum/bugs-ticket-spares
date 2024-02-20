/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite-react/lib/**/*.js",
    './node_modules/flowbite-react/lib/esm/**/*.js',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    "./public/**/*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin")
  ],
}

