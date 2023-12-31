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
        },
      },
    ],
  },
  theme: {
    extend: {
      height: {
        '471': '471px'
      },
      width: {
        '489': '489px',
        '680': '680px'
      },
      backgroundColor: {
        'goldCard': '#FFDB65',
        'silverCard': '#EDEDED',
        'bronzeCard': '#F2C7B3',
        'disabled': '#F0F0F0',
        'pagBg': '#F2F2F2',
        'chatMsg': '#0067C7',
      },
      borderColor: {
        'goldCard': '#FFDB65',
        'silverCard': '#EDEDED',
        'bronzeCard': '#F2C7B3',
        'pagBg': '#F2F2F2',
      }
    },
  },
  plugins: [require("daisyui")],
}