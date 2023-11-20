/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        light: {    
          "primary": "#4A9F2E",       
          "secondary": "#F9FAFB",     
          "accent": "#D64758",      
          "neutral": "#404040",      
          "base-100": "#2E2E2E",   
          "info": "#3abff8",     
          "success": "#3EA02D",      
          "warning": "#fbbd23",    
          "error": "#f87272",
          "input": "#9B9B9B",
          'divider': '#3A3A3A'
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
      colors:{
        "white-90": "#FFFFFFE6",
        "white-70": "#FFFFFFB3",
        "white-50": "#FFFFFF8A",
        "placeholder": "#9B9B9B",
      },
      backgroundColor: {
        'mainCard': '#FFFFFF0A',
        'goldCard': '#FFDB65',
        'silverCard': '#EDEDED',
        'bronzeCard': '#F2C7B3',
        'disabled': '#F0F0F0',
        'pagBg': '#F2F2F2',
        'chatMsgOwner': '#0067C7',
        'chatMsg': '#3D3D3D',
        'navigate': '#FFFFFF08',
        'input': '#404040',
        'dialog': '#2E2E2E',
      },
      borderColor: {
        'mainCard': '#FFFFFF05',
        'goldCard': '#FFDB65',
        'silverCard': '#EDEDED',
        'bronzeCard': '#F2C7B3',
        'pagBg': '#F2F2F2',
        'divider': '#3A3A3A',
        'button': '#DFDFDF'
      }
    },
  },
  plugins: [require("daisyui")],
}