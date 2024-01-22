/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        light: {    
          "primary": "#C73E00",       
          "secondary": "#F9FAFB",     
          "accent": "#D64758",      
          "neutral": "#E4E4E5",      
          "base-100": "#2E2E2E",   
          "info": "#3abff8",     
          "success": "#3EA02D",      
          "warning": "#fbbd23",    
          "error": "#f87272",
          "inputBg": "#F9FAFB",
          "main": "#4A9F2E",
        },
      },
    ],
  },
  theme: {
    extend: {
      zIndex: {
        '60': 60,
      },
      colors: {
        "main": "#4A9F2E",
      },
      spacing: {
        '20p': '20%',
        '28p': '28%',
      },
      height: {
        '460': '460px',
        '471': '471px',
        '500': '500px',
        '590' : '590px',
        '720': '720px',
      },
      width: {
        '489': '489px',
        '680': '680px',
      },
      maxWidth: {
        '480': '480px',
        '680': '680px',
        '8xl': '1680px',
        'cover': '1800px',
        '1920': '1920px'
      },
      maxHeight: {
        '720': '720px',
      },
      minWidth: {
        '425': '425px',
      },
      backgroundColor: {
        'goldCard': '#FFDB65',
        'silverCard': '#EDEDED',
        'bronzeCard': '#F2C7B3',
        'disabled': '#F0F0F0',
        'pagBg': '#F2F2F2',
        'chatMsg': '#0067C7',
        "main": "#4A9F2E",
        "container": "#2E2E2E",
        "btnBg": 'linear-gradient(45deg, #328019 0%, #5EAC0C 100%)',
        'secBg': '#222',
        'thrBg': '#333',
      },
      borderColor: {
        'goldCard': '#FFDB65',
        'silverCard': '#EDEDED',
        'bronzeCard': '#F2C7B3',
        'pagBg': '#F2F2F2',
        'main': '#4A9F2E',
        'sec': '#222',
      },
      screens: {
        'mdMax': '970px',
        '3xl': '1680px',
        'full': '1920px'
      }
    },
  },
  plugins: [require("daisyui")],
}