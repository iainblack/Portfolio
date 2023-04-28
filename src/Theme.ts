import { createTheme, Theme } from "@mui/material/styles";

export interface ThemeObject {
  name: string;
  theme: Theme;
}

const headerFont = [
  "Calibre",
  "Inter",
  "San Francisco",
  "SF Pro Text",
  "-apple-system,system-ui,sans-serif",
].join(",");

const technoFont = [
  "SF Mono",
  "Fira Code",
  "Fira Mono",
  "Roboto Mono",
  "monospace",
].join(",");

export const defaultTheme: ThemeObject = {
  name: "Default Theme",
  theme: createTheme({
    typography: {
      h1: {
        fontFamily: headerFont,
        fontSize: "4.5rem",
        "@media (max-width:600px)": {
          fontSize: "3rem",
        },
      },
      h4: {
        fontWeight: 800,
        fontFamily: technoFont,
        fontSize: "2.5rem",
        "@media (max-width:600px)": {
          fontSize: "1.5rem",
        },
      },
      h5: {
        fontSize: "2.25rem",
        "@media (max-width:600px)": {
          fontSize: "1.25rem",
        },
      },
      h6: {
        fontSize: "2.25rem",
        fontFamily: technoFont,
        "@media (max-width:600px)": {
          fontSize: "1rem",
        },
      },
      body1: {
        fontSize: "1.5rem",
        "@media (max-width:600px)": {
          fontSize: "1rem",
        },
      },
      body2: {
        fontSize: "1.5rem",
        fontFamily: technoFont,
        "@media (max-width:600px)": {
          fontSize: "1rem",
        },
      },
    },
    palette: {
      mode: "dark",
      primary: {
        main: "#006CE5",
        contrastText: "#BFC5CA",
      },
      secondary: {
        main: "#3293FF",
      },
      text: {
        primary: "#BFC5CA",
        secondary: "#697782",
      },
      background: {
        default: "#192734",
        paper: "#0F1A25",
      },
      info: {
        main: "#65AEFF",
      },
    },
  }),
};

export const LightTheme: ThemeObject = {
  name: "Light Theme",
  theme: createTheme({
    typography: {
      h1: {
        fontSize: "4.5rem",
        "@media (max-width:600px)": {
          fontSize: "3rem",
        },
      },
      h4: {
        fontWeight: 800,
        "@media (max-width:600px)": {
          fontSize: "1.5rem",
        },
      },
      h5: {
        "@media (max-width:600px)": {
          fontSize: "1.25rem",
        },
      },
      h6: {
        "@media (max-width:600px)": {
          fontSize: "1rem",
        },
      },
      body1: {
        "@media (max-width:600px)": {
          fontSize: "1rem",
        },
      },
      body2: {
        "@media (max-width:600px)": {
          fontSize: "1rem",
        },
      },
    },
  }),
};

export const DarkTheme: ThemeObject = {
  name: "Dark Theme",
  theme: createTheme({
    palette: { mode: "dark" },
    typography: {
      h1: {
        fontSize: "4.5rem",
        "@media (max-width:600px)": {
          fontSize: "3rem",
        },
      },
      h4: {
        fontWeight: 800,
        "@media (max-width:600px)": {
          fontSize: "1.5rem",
        },
      },
      h5: {
        "@media (max-width:600px)": {
          fontSize: "1.25rem",
        },
      },
      h6: {
        "@media (max-width:600px)": {
          fontSize: "1rem",
        },
      },
      body1: {
        "@media (max-width:600px)": {
          fontSize: "1rem",
        },
      },
      body2: {
        "@media (max-width:600px)": {
          fontSize: "1rem",
        },
      },
    },
  }),
};

const AllThemes = [defaultTheme, LightTheme, DarkTheme];
export default AllThemes;
