// src/constants/theme.ts
export interface ThemeColors {
  background: string;
  cardBackground: string;
  textPrimary: string;
  textSecondary: string;
  primary: string;
  success: string;
  border: string;
  inputBackground: string;
  inputPlaceholder: string;
}

export const lightTheme: ThemeColors = {
  background: '#F5F6FA',
  cardBackground: '#FFFFFF',
  textPrimary: '#1F2937',
  textSecondary: '#6B7280',
  primary: '#FF6600',
  success: '#10B981',
  border: '#E5E7EB',
  inputBackground: '#F3F4F6',
  inputPlaceholder: '#9CA3AF',
};

export const darkTheme: ThemeColors = {
  background: '#121214',
  cardBackground: '#1E1E24',
  textPrimary: '#FFFFFF',
  textSecondary: '#9CA3AF',
  primary: '#FF6600',
  success: '#10B981',
  border: '#2D2D38',
  inputBackground: '#2A2A36',
  inputPlaceholder: '#6B7280',
};

// Adicionado para satisfazer os componentes auxiliares do template do Expo (como web-badge.tsx)
export const Spacing = {
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const BottomTabInset = 60;

export const MaxContentWidth = 960;
