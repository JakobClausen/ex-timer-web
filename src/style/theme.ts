import { theme as defaultTheme } from "@chakra-ui/core";

export default {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    darkBlue: "#2a363b",
    readyGreen: "#549D58",
    darkGray: "#222629",
    buttonGreen: "#00a5a5",
    buttonBlue: "#1e8dd6",
  },
  fonts: {
    ...defaultTheme.fonts,
    logo: "Permanent Marker, cursive",
    heading: "Roboto, sans-serif",
    body: "Roboto, sans-serif",
  },
};
