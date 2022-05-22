module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        toolsterminaltheme: {
          primary: "#FFB700",
          secondary: "#101010",
          accent: "#1C1C1E",
          neutral: "#F25C05",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
