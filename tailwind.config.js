/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend:{
          colors: {
              primary: '#A42828',
              white: '#FFFFFF',
              grey: {
                  100: '#F2F2F2',
                  200: '#D9D9D9',
                  300: '#CACACA'
              },
              black: {
                  100: '#434343',
              },
          },
          fontFamily: {
              sans: ['Roboto', 'sans-serif']
          }
      }
    },
    plugins: [],
}
