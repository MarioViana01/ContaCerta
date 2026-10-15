// src/components/themed-view.tsx
import { View, type ViewProps } from 'react-native';
import { useTheme } from '../context/ThemeContext'; // Ajustado para a pasta context que criamos

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  type?: string;
};

export function ThemedView({ style, lightColor, darkColor, type, ...otherProps }: ThemedViewProps) {
  const { theme } = useTheme();

  return (
    <View style={style} {...otherProps} />
  );
}