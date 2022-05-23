const plugin = require("tailwindcss/plugin")

module.exports = {
  content: ["./index.html", "./src/**/*.vue", "./src/**/*.ts"],
  theme: {
    extend: {
      colors: {
        primary: "#00B2FF",
        secondary: "#FFC700",
        "primary-body": "#F7F9FF",
        "primary-text": "#28293D",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: {
          fontSize: theme("fontSize.2xl"),
          fontWeight: theme("fontWeight.bold"),
        },
        h2: {
          fontSize: theme("fontSize.xl"),
          fontWeight: theme("fontWeight.bold"),
        },
        h3: {
          fontSize: theme("fontSize.lg"),
          fontWeight: theme("fontWeight.bold"),
        },
        h4: {
          fontSize: theme("fontSize.md"),
          fontWeight: theme("fontWeight.bold"),
        },
        h5: {
          fontSize: theme("fontSize.sm"),
          fontWeight: theme("fontWeight.bold"),
        },
        h6: {
          fontSize: theme("fontSize.lg"),
          fontWeight: theme("fontWeight.bold"),
        },
      })
    }),
  ],
  mode: "jit",
}
