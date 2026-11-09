import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar, Platform } from 'react-native';
import { ExecutiveCockpitScreen } from '../screens/ExecutiveCockpitScreen';
import { AcademicStudioScreen } from '../screens/AcademicStudioScreen';
import { OperationsScreen } from '../screens/OperationsScreen';
import { AITutorConsoleScreen } from '../screens/AITutorConsoleScreen';
import { PaperclipCommanderScreen } from '../screens/PaperclipCommanderScreen';

export type ScreenTab = 'cockpit' | 'academic' | 'ai' | 'operations' | 'paperclip';

export const AgentsNavigator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ScreenTab>('cockpit');

  const renderScreen = () => {
    switch (activeTab) {
      case 'cockpit':
        return <ExecutiveCockpitScreen />;
      case 'academic':
        return <AcademicStudioScreen />;
      case 'ai':
        return <AITutorConsoleScreen />;
      case 'operations':
        return <OperationsScreen />;
      case 'paperclip':
        return <PaperclipCommanderScreen />;
      default:
        return <ExecutiveCockpitScreen />;
    }
  };

  const tabs: { key: ScreenTab; label: string; icon: string }[] = [
    { key: 'cockpit', label: 'Cockpit', icon: '⚡' },
    { key: 'academic', label: 'Academic', icon: '📐' },
    { key: 'ai', label: 'AI Tutor', icon: '🧠' },
    { key: 'operations', label: 'Operations', icon: '🚀' },
    { key: 'paperclip', label: 'Fleet', icon: '📎' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#090D16" translucent />
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#090D16',
    paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 24) : 0,
  },
  container: {
    flex: 1,
    backgroundColor: '#090D16',
  },
  screenContainer: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#030712',
    borderTopWidth: 1,
    borderTopColor: '#1e293b',
    paddingVertical: 8,
    paddingBottom: Platform.OS === 'android' ? 12 : 24,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
  },
  tabItemActive: {
    transform: [{ scale: 1.05 }],
  },
  tabIcon: {
    fontSize: 20,
    marginBottom: 3,
  },
  tabLabel: {
    fontSize: 11,
    color: '#64748b',
    fontWeight: '600',
  },
  tabLabelActive: {
    color: '#818cf8',
    fontWeight: '800',
  },
});
