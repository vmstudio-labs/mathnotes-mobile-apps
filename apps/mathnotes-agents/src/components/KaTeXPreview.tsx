import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface KaTeXPreviewProps {
  latex: string;
  label?: string;
}

export const KaTeXPreview: React.FC<KaTeXPreviewProps> = ({ latex, label = 'Formula Notation' }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label.toUpperCase()}</Text>
      <View style={styles.formulaBox}>
        <Text style={styles.formulaText}>$${latex}$$</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 11,
    color: '#64748b',
    fontWeight: '700',
    marginBottom: 6,
    letterSpacing: 0.8,
  },
  formulaBox: {
    backgroundColor: '#030712',
    borderWidth: 1,
    borderColor: '#374151',
    borderRadius: 10,
    padding: 14,
  },
  formulaText: {
    fontFamily: 'monospace',
    color: '#38bdf8',
    fontSize: 14,
    lineHeight: 22,
  },
});
