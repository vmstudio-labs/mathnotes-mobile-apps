import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { GrowthRadarScreen } from './GrowthRadarScreen';
import { CRMLeadDeskScreen } from './CRMLeadDeskScreen';

export const OperationsScreen: React.FC = () => {
  const [subTab, setSubTab] = useState<'growth' | 'leads'>('growth');

  return (
    <View style={styles.container}>
      <View style={styles.switcherWrap}>
        <TouchableOpacity
          style={[styles.switchBtn, subTab === 'growth' && styles.switchBtnActive]}
          onPress={() => setSubTab('growth')}
        >
          <Text style={[styles.switchText, subTab === 'growth' && styles.switchTextActive]}>
            🚀 SEO & Growth
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.switchBtn, subTab === 'leads' && styles.switchBtnActive]}
          onPress={() => setSubTab('leads')}
        >
          <Text style={[styles.switchText, subTab === 'leads' && styles.switchTextActive]}>
            👥 Student CRM & Leads
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contentWrap}>
        {subTab === 'growth' ? <GrowthRadarScreen /> : <CRMLeadDeskScreen />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#090D16',
  },
  switcherWrap: {
    flexDirection: 'row',
    backgroundColor: '#0f172a',
    marginHorizontal: 16,
    marginTop: 12,
    marginBottom: 8,
    borderRadius: 12,
    padding: 4,
    borderWidth: 1,
    borderColor: '#1e293b',
  },
  switchBtn: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  switchBtnActive: {
    backgroundColor: '#4f46e5',
  },
  switchText: {
    fontSize: 12.5,
    fontWeight: '600',
    color: '#94a3b8',
  },
  switchTextActive: {
    color: '#ffffff',
    fontWeight: '800',
  },
  contentWrap: {
    flex: 1,
  },
});
