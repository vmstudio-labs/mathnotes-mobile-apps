import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface StatusPillProps {
  label: string;
  type?: 'success' | 'warning' | 'info' | 'danger';
}

export const StatusPill: React.FC<StatusPillProps> = ({ label, type = 'info' }) => {
  let bg = '#1e293b';
  let text = '#94a3b8';

  if (type === 'success') {
    bg = 'rgba(16, 185, 129, 0.2)';
    text = '#34d399';
  } else if (type === 'warning') {
    bg = 'rgba(245, 158, 11, 0.2)';
    text = '#fbbf24';
  } else if (type === 'danger') {
    bg = 'rgba(239, 68, 68, 0.2)';
    text = '#f87171';
  } else if (type === 'info') {
    bg = 'rgba(99, 102, 241, 0.2)';
    text = '#818cf8';
  }

  return (
    <View style={[styles.pill, { backgroundColor: bg }]}>
      <Text style={[styles.text, { color: text }]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pill: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
});
