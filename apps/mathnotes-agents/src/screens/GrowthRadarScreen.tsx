import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { api } from '../services/apiService';
import { SEOBrainMetrics } from '../types';
import { GlassCard } from '../components/GlassCard';
import { StatusPill } from '../components/StatusPill';

export const GrowthRadarScreen: React.FC = () => {
  const [metrics, setMetrics] = useState<SEOBrainMetrics | null>(null);

  useEffect(() => {
    loadSEO();
  }, []);

  const loadSEO = async () => {
    const data = await api.getSEOBrainMetrics();
    setMetrics(data);
  };

  const handleScanKeywords = () => {
    Alert.alert('VM SEO Brain', 'Scanning high-velocity math intent keywords for Calculus & JEE Advanced...', [
      { text: 'OK', onPress: () => Alert.alert('Scan Complete', '8 new striking-distance keywords identified.') }
    ]);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Growth & SEO Radar</Text>
          <Text style={styles.subtitle}>VM SEO Brain 50k Traffic Challenge & Link Graph</Text>
        </View>
        <StatusPill label="VP GROWTH" type="success" />
      </View>

      {/* 50K CHALLENGE COCKPIT */}
      <GlassCard variant="glow">
        <Text style={styles.cardHeader}>50,000 VISITOR AUTONOMOUS WINDOW</Text>
        <View style={styles.progressRow}>
          <View>
            <Text style={styles.bigNumber}>{metrics?.target.toLocaleString()}</Text>
            <Text style={styles.targetLabel}>Target Visitors</Text>
          </View>
          <View style={styles.divider} />
          <View>
            <Text style={[styles.bigNumber, { color: '#f59e0b' }]}>{metrics?.daysLeft} Days</Text>
            <Text style={styles.targetLabel}>Window Remaining</Text>
          </View>
          <View style={styles.divider} />
          <View>
            <Text style={[styles.bigNumber, { color: '#10b981' }]}>Day {metrics?.day}</Text>
            <Text style={styles.targetLabel}>Sprint Status</Text>
          </View>
        </View>

        <View style={styles.modeBox}>
          <StatusPill label="FRESH START MODE ACTIVE" type="warning" />
          <Text style={styles.modeText}>
            Targeting long-tail math problem keywords and conceptual derivation clusters to seed Google Search Console authority.
          </Text>
        </View>
      </GlassCard>

      {/* STRATEGIC LEVERS */}
      <Text style={styles.sectionTitle}>SEO GROWTH LEVERS & ACTIONS</Text>
      <GlassCard>
        <View style={styles.leverRow}>
          <View style={{ flex: 1 }}>
            <Text style={styles.leverTitle}>Striking-Distance Keywords</Text>
            <Text style={styles.leverDesc}>8 seed queries in Calculus, Algebra, and Geometry.</Text>
          </View>
          <StatusPill label="8 TRACKED" type="info" />
        </View>

        <View style={styles.leverRow}>
          <View style={{ flex: 1 }}>
            <Text style={styles.leverTitle}>Semantic Link Graph & Orphan Shield</Text>
            <Text style={styles.leverDesc}>16 tracked nodes across blog and Tutor LMS courseware.</Text>
          </View>
          <StatusPill label="GRAPH ACTIVE" type="success" />
        </View>

        <TouchableOpacity style={styles.actionBtn} onPress={handleScanKeywords}>
          <Text style={styles.btnText}>🔍 Trigger High-Velocity Keyword Discovery</Text>
        </TouchableOpacity>
      </GlassCard>

      {/* PILLAR CONTENT STATUS */}
      <Text style={styles.sectionTitle}>FOUNDATIONAL TOPIC CLUSTERS</Text>
      <GlassCard>
        <Text style={styles.pillarTitle}>1. The 4 Pillars of True Mathematical Mastery</Text>
        <Text style={styles.pillarMeta}>Live at /pillars-of-mathematical-mastery/ • Rank Math Score: 92/100</Text>
        <View style={{ marginTop: 8 }}>
          <StatusPill label="LEAD MAGNET FORM 3 EMBEDDED" type="success" />
        </View>
      </GlassCard>
      <View style={{ height: 40 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#090D16',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 36,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#ffffff',
  },
  subtitle: {
    fontSize: 13,
    color: '#94a3b8',
    marginTop: 2,
  },
  cardHeader: {
    fontSize: 11,
    fontWeight: '800',
    color: '#818cf8',
    letterSpacing: 0.8,
    marginBottom: 12,
  },
  progressRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
  },
  bigNumber: {
    fontSize: 22,
    fontWeight: '800',
    color: '#ffffff',
    textAlign: 'center',
  },
  targetLabel: {
    fontSize: 11,
    color: '#94a3b8',
    marginTop: 4,
    textAlign: 'center',
  },
  divider: {
    width: 1,
    height: 36,
    backgroundColor: '#334155',
  },
  modeBox: {
    marginTop: 16,
    paddingTop: 14,
    borderTopWidth: 1,
    borderTopColor: '#1e293b',
  },
  modeText: {
    fontSize: 12,
    color: '#cbd5e1',
    marginTop: 8,
    lineHeight: 18,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#cbd5e1',
    marginTop: 20,
    marginBottom: 6,
    letterSpacing: 0.8,
  },
  leverRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#1e293b',
  },
  leverTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
  },
  leverDesc: {
    fontSize: 12,
    color: '#94a3b8',
    marginTop: 2,
  },
  actionBtn: {
    backgroundColor: '#10b981',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 16,
  },
  btnText: {
    color: '#064e3b',
    fontWeight: '800',
    fontSize: 13,
  },
  pillarTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#f8fafc',
  },
  pillarMeta: {
    fontSize: 12,
    color: '#94a3b8',
    marginTop: 4,
  },
});
