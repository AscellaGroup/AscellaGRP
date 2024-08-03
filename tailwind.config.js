/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      inter: ['Inter', 'sans-serif'],
      montserrat: ['montserrat', 'sans-serif'],
      cambria: ['Cambria', 'serif'],
    },
      colors: {
        bl: {
          10: '#040811'
        },
        screens: {
          xs: '400px',
          '3xl': '2200px',
          '4xl': '2500px',
        },
        maxWidth: {
          '10xl': '1512px',
        },
        borderRadius: {
          0: '0px',
          '1xl': '4px',
          '2xl': '22px',
        },
      },
    },
    plugins: [],
  }
}