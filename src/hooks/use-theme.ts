import { useTheme as useAppTheme } from '../context/ThemeContext';

// Mantém a compatibilidade com telas antigas do template Expo.
// As telas novas devem continuar usando ThemeContext diretamente.
export function useTheme() {
  const { theme } = useAppTheme();

  return {
    ...theme,
    text: theme.textPrimary,
  };
}
