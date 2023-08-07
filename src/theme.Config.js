import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";



//colores //
export const tokens = (mode) => ({
    ...(mode === "dark"
        ? {
            black: {
                100: "#cfd2d6",
                200: "#9fa4ac",
                300: "#6e7783",
                400: "#3e4959",
                500: "#0e1c30",
                600: "#0b1626",
                700: "#08111d",
                800: "#060b13",
                900: "#03060a"
            },
            pink: {
                100: "#cfd2d6",
                200: "#9fa4ac",
                300: "#6e7783",
                400: "#3e4959",
                500: "#0e1c30",
                600: "#0b1626",
                700: "#08111d",
                800: "#060b13",
                900: "#03060a"
            },
        }
        : {
            black: {
                100: "#03060a",
                200: "#060b13",
                300: "#08111d",
                400: "#0b1626",
                500: "#0e1c30",
                600: "#3e4959",
                700: "#6e7783",
                800: "#9fa4ac",
                900: "#cfd2d6",
            },
            pink: {
                100: "#03060a",
                200: "#060b13",
                300: "#08111d",
                400: "#0b1626",
                500: "#0e1c30",
                600: "#3e4959",
                700: "#6e7783",
                800: "#9fa4ac",
                900: "#cfd2d6",
            },
        }),
});
//mui
export const themeSettings = (mode) => {
    const colors = tokens(mode);
    return {
        palette {
        mode: mode,
           ...(mode === 'dark'
    ? {
        primary: {
            main: colors.black[500],
            },
            secondary: {
              main: colors.pink[500],
            },
            neutral: {
              dark: colors.pink[700],
              main: colors.pink[500],
              light: colors.pink[100],
            },
            background: {
              default: colors.black[500],
            },
          }
        : {
            primary: {
              main: colors.black[100],
            },
            secondary: {
              main: colors.pink[500],
            },
            neutral: {
              dark: colors.pink[700],
              main: colors.pink[500],
              light: colors.pink[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};












