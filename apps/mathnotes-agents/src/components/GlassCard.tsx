import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface GlassCardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  variant?: 'default' | 'glow' | 'accent' | 'warning';
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, style, variant = 'default' }) => {
  let borderColor = '#1e293b';
  let backgroundColor = 'rgba(15, 23, 42, 0.82)';

  if (variant === 'glow') {
    borderColor = '#6366f1';
    backgroundColor = 'rgba(30, 27, 75, 0.65)';
  } else if (variant === 'accent') {
    borderColor = '#10b981';
    backgroundColor = 'rgba(6, 78, 59, 0.45)';
  } else if (variant === 'warning') {
    borderColor = '#f59e0b';
    backgroundColor = 'rgba(69, 26, 3, 0.45)';
  }

  return (
    <View style={[styles.card, { borderColor, backgroundColor }, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 18,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 16,
    elevation: 6,
  },
});
