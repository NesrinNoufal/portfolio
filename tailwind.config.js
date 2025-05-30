/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",  // adjust if your app dir is 'app/'
      "./app/**/*.{js,jsx,ts,tsx}",
      "./components/**/*.{js,jsx,ts,tsx}"  // include app dir if using app router
    ],
    theme: {
      extend: {
        colors:{
            lightHover:"#fcf4ff",
            darkHover:"#2a004a",
            darkTheme:"#11001F"
        },
        fontFamily:{
            Outfit:["Outfit","sans-serif"],
            Ovo:["Ovo","serif"]
        },
        boxShadow:{
            'black': '4px 4px 0 #000',
            'white': '4px 4px 0 #fff',
        },
        gridTemplateColumns:{
            'auto': 'repeat(auto-fit,minmax(200px,1fr))'
        }
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
    ],
    darkMode:'selector'
  };
  