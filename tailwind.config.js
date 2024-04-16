/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "neutrals-4": "#777e90",
        "primary-5": "#ff66a0",
        black: "#000",
        "neutrals-2": "#23262f",
        "neutrals-8": "#fcfcfd",
        "neutrals-7": "#f4f5f6",
        "secondary-3": "#e8faf4",
        gainsboro: {
          "100": "#e6e6e6",
          "200": "#e6d6db",
          "300": "#cfe0db",
        },
        "primary-1": "#00cc95",
        mediumseagreen: "#00b37a",
        ghostwhite: "#f8f9fd",
        "secondary-2": "#fff9ea",
        antiquewhite: "#e6e0d1",
        "primary-4": "#fec32e",
        "secondary-4": "#fff0f5",
        "secondary-1": "#eaf1ff",
        lavender: "#d1d9e6",
        "primary-2": "#2875ff",
        "neutrals-1": "#141416",
      },
      spacing: {},
      fontFamily: {
        "button-2": "Outfit",
      },
      borderRadius: {
        "3xl": "22px",
        "3xs": "10px",
        "11xl": "30px",
        xl: "20px",
      },
    },
    fontFamily: {
      'Outfit': ['Outfit',],
    },
    fontSize: {
      sm: "14px",
      "5xl": "24px",
      lgi: "19px",
      xs: "12px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      base: "16px",
      "77xl": "96px",
      inherit: "inherit",
    },
    screens: {
      mq1250: {
        raw: "screen and (max-width: 1250px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq650: {
        raw: "screen and (max-width: 650px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
      mq1250: {
        raw: "screen and (max-width: 1250px)",
      },
      mw1050: {
        raw: "screen and (min-width: 1050px)",
      },
      mw975: {
        raw: "screen and (min-width: 975px)",
      },
      mw750: {
        raw: "screen and (min-width: 750px)",
      },
      mw725: {
        raw: "screen and (min-width: 725px)",
      },
      mw650: {
        raw: "screen and (min-width: 650px)",
      },
      mw450: {
        raw: "screen and (min-width: 450px)",
      },

    },
  },
  plugins: [],

}

