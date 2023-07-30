export const theme = Object.freeze({
  colors: {
    golden: "#e0aa3e",
    lightGolden: "#f7ef8a",
    white: "#ffffff",
    yellow: "#ffff00",
    lightViolet: "#EBD8FF",
    lightGreen: "#5CD3A8",
    dark: "#373737",
    light: "#efe8ff",
  },

  fontSizes: {
    small: "18px",
    medium: "20px",
    large: "30px",
  },

  spacing: (value) => `${4 * value}px`,

  shadows: {
    normal:
      "0px 3.44px 2.58px 0px #FBF8FF inset, 0px 3.44px 3.44px 0px rgba(0, 0, 0, 0.06), 0px -1.72px 3.44px 0px #AE7BE3 inset",
    button: "0px 3.44px 3.44px 0px rgba(0, 0, 0, 0.25)",
    card: "#ffff00 0px 2px 4px 0px, #ffff00 0px 2px 16px 0px;",
  },

  transitions: {
    regular: "250ms cubic-bezier(0.4, 0, 0.2, 1)",
  },
});
