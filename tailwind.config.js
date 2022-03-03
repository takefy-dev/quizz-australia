const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#6116ff",
        bg: "#161827",
        btnColor: "#24008c",
        resultColor: "#24CC40",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".form-label": {
          position: "absolute",
          top: "calc(50% - 7.5px)",
          transition: "all 0.15s ease-in",
          "pointer-events": "none",
          "font-size": "15px",
          color: "#a7a3c2",
        },
        ".form-field": {
          background: "transparent",
          display: "block",
          width: "100%",
          border: "0",
          "border-bottom": "1px solid #d5ceea",
          "font-size": "15px",
          height: "40px",
          outline: "0",
          color: "white",

          transition: "color 250ms",
          "&:hover": {
            "border-color": "#6116ff",
          },
          "&:hover + .form-label, &:active + .form-label": {
            "font-size": "11px",
            "font-weight": "600",
            color: "#6116ff",
          },
        },
      });
    }),
  ],
};
