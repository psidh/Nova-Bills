/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        'my-custom-img-silver': "url('/src/assets/Images/silver-img.jpg')",
        'image' : "url('/src/assets/Images/dark_blue_spotlight.jpg')",
      },
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
        spotlight: "spotlight 2s ease .75s 1 forwards",

      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
      colors : {
        'correct-black-dark' : 'rgb(26 34 44)',
        'correct-black-light' : 'rgb(36 48 63)',
        'txt-dark' : 'rgb(174 183 192)',
        'border-table-dark-light' : 'rgb(46 58 71)',
      },
    },
  },
  plugins: [],
}








