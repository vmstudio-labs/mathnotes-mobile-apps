import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ExecutiveCockpitScreen } from '../screens/ExecutiveCockpitScreen';
import { AcademicStudioScreen } from '../screens/AcademicStudioScreen';
import { GrowthRadarScreen } from '../screens/GrowthRadarScreen';
import { CRMLeadDeskScreen } from '../screens/CRMLeadDeskScreen';
import { AITutorConsoleScreen } from '../screens/AITutorConsoleScreen';
import { PaperclipCommanderScreen } from '../screens/PaperclipCommanderScreen';

export type ScreenTab = 'cockpit' | 'academic' | 'growth' | 'leads' | 'ai' | 'paperclip';

export const AgentsNavigator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ScreenTab>('cockpit');

  const renderScreen = () => {
    switch (activeTab) {
      case 'cockpit':
        return <ExecutiveCockpitScreen />;
      case 'academic':
        return <AcademicStudioScreen />;
      case 'growth':
        return <GrowthRadarScreen />;
      case 'leads':
        return <CRMLeadDeskScreen />;
      case 'ai':
        return <AITutorConsoleScreen />;
      case 'paperclip':
        return <PaperclipCommanderScreen />;
      default:
        return <ExecutiveCockpitScreen />;
    }
  };

  const tabs: { key: ScreenTab; label: string; icon: string }[] = [
    { key: 'cockpit', label: 'Cockpit', icon: '⚡' },
    { key: 'academic', label: 'Academic', icon: '📐' },
    { key: 'growth', label: 'Growth', icon: '🚀' },
    { key: 'leads', label: 'Leads', icon: '👥' },
    { key: 'ai', label: 'AI Tutor', icon: '🧠' },
    { key: 'paperclip', label: 'Paperclip', icon: '📎' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.screenContainer}>{renderScreen()}</View>

      <View style={styles.tabBar}>
        {tabs.map((t) => (
          <TouchableOpacity
            key={t.key}
            style={[styles.tabItem, activeTab === t.key && styles.tabItemActive]}
            onPress={() => setActiveTab(t.key)}
          >
            <Text style={styles.tabIcon}>{t.icon}</Text>
            <Text style={[styles.tabLabel, activeTab === t.key && styles.tabLabelActive]}>
              {t.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#090D16',
  },
  screenContainer: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#030712',
    borderTopWidth: 1,
    borderTopColor: '#1e293b',
    paddingVertical: 10,
    paddingBottom: 24,
  },
  tabItem: {
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  tabItemActive: {
    transform: [{ scale: 1.05 }],
  },
  tabIcon: {
    fontSize: 20,
    marginBottom: 4,
  },
  tabLabel: {
    fontSize: 10,
    color: '#64748b',
    fontWeight: '600',
  },
  tabLabelActive: {
    color: '#818cf8',
    fontWeight: '800',
  },
});
