module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screen:{
     
     sm:"480px",
     md:"768px",
     lg:"991px",
     xl:"1440px"
    
    },
    extend: {
      colors:{
          lmBg: "#F6F8FF",
          lmBgCntent: "#FEFEFE",
           lmText: "#4B6A9B",
           lmTextalt:" #2B3442",
           lmShadowactive: "0px 4px 4px 0px rgba(0,0,0,0.25)",
           lmShadowinactive: "0px 16px 30px -10px rgba(0,0,0,0.2)",
           lmIconbg: "brightness(100%)",
        /* Btn */
           btn: "#0079FF",
           btnhover: "#60ABFF"
      }
    },
  },
  plugins: [],
}