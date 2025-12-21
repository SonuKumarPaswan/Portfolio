"use client";

import { createContext, useState, useEffect } from "react";
import { ConfigProvider, theme as antdTheme } from "antd";
import { lightColors, darkColors } from "../theme/colors";
import { tr } from "framer-motion/client";

export const ThemeContext = createContext<any>(null);

const { darkAlgorithm, defaultAlgorithm } = antdTheme;

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => setIsDark(!isDark);

  const colors = isDark ? darkColors : lightColors;

  const themeTokens = {
    algorithm: isDark ? darkAlgorithm : defaultAlgorithm,
    token: {
      colorPrimary: colors.primary,
      colorTextBase: colors.text,
      colorBgBase: colors.background,
      colorBorder: colors.border,
      fontFamily: "Inter, sans-serif",
      borderRadius: 5,
    },
    components: {
      Layout: {
        colorBgHeader: colors.container,
        colorBgBody: colors.background,
      },
      Card: {
        colorBgContainer: colors.container,
      },
      Button: {
        colorPrimary: colors.primary,
        borderRadius: 5,
      },
      Input: {
        colorBgContainer: isDark ? "#1d1d1d" : "#fafafa",
      },
    },
  };

  // Update CSS variables
  useEffect(() => {
    const root = document.documentElement;

    root.style.setProperty("--bg", colors.background);
    root.style.setProperty("--text", colors.text);
    root.style.setProperty("--container", colors.container);
    root.style.setProperty("--primary", colors.primary);
    root.style.setProperty("--border", colors.border);
    root.style.setProperty("--shadow", colors.shadow);
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <ConfigProvider theme={themeTokens}>
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  );
}
