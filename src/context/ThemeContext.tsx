// src/context/ThemeContext.tsx
import React, { createContext, ReactNode, useContext, useState } from 'react';
// No arquivo src/context/ThemeContext.tsx, verifique se está assim:
import { darkTheme, lightTheme, ThemeColors } from '../Styles/theme';
// (Note o 'S' maiúsculo correspondente ao nome da sua pasta)

interface ThemeContextData {
  theme: ThemeColors;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);