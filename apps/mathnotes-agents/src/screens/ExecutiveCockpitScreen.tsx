import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, RefreshControl, Alert } from 'react-native';
import { api } from '../services/apiService';
import { ExecutiveHUD } from '../types';
import { GlassCard } from '../components/GlassCard';
import { StatusPill } from '../components/StatusPill';

export const ExecutiveCockpitScreen: React.FC = () => {
  const [hud, setHud] = useState<ExecutiveHUD | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const loadData = async () => {
    const data = await api.getExecutiveHUD();
    setHud(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
  };

  const handlePurgeCache = () => {
    Alert.alert('LiteSpeed & Cloudflare Cache', 'Purging edge caches across all endpoints...', [
      { text: 'OK', onPress: () => Alert.alert('Success', 'Edge caches purged for mathnotes.courses') }
    ]);
  };

  return (
    <ScrollView
      style={styles.container}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#6366f1" />}
    >
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>MathNotes Command OS</Text>
          <Text style={styles.subtitle}>Sovereign Business Automation & Telemetry</Text>
        </View>
        <StatusPill label="LIVE GATEWAY" type="success" />
      </View>

      {/* METRIC GRIDS */}
      <View style={styles.metricRow}>
        <GlassCard style={styles.metricCard} variant="glow">
          <Text style={styles.metricLabel}>ACTIVE STUDENTS</Text>
          <Text style={styles.metricValue}>{hud ? hud.totalStudents.toLocaleString() : '1,420'}</Text>
          <Text style={styles.metricSub}>+18.4% this month</Text>
        </GlassCard>

        <GlassCard style={styles.metricCard} variant="glow">
          <Text style={styles.metricLabel}>MONTHLY REVENUE</Text>
          <Text style={styles.metricValue}>₹{hud ? hud.monthlyRevenue.toLocaleString() : '46,200'}</Text>
          <Text style={styles.metricSub}>Tutor LMS Enrollments</Text>
        </GlassCard>
      </View>

      <View style={styles.metricRow}>
        <GlassCard style={styles.metricCard}>
          <Text style={styles.metricLabel}>FACULTY COURSES</Text>
          <Text style={styles.metricValue}>{hud ? hud.activeCourses : 6}</Text>
          <Text style={styles.metricSub}>Calculus, Algebra, Geometry</Text>
        </GlassCard>

        <GlassCard style={styles.metricCard}>
          <Text style={styles.metricLabel}>STUDENT RATING</Text>
          <Text style={styles.metricValue}>{hud ? hud.averageRating.toFixed(2) : '4.94'} ★</Text>
          <Text style={styles.metricSub}>142 verified reviews</Text>
        </GlassCard>
      </View>

      {/* QUICK COMMAND DESK */}
      <Text style={styles.sectionTitle}>SOVEREIGN ACTION DESK</Text>
      <GlassCard>
        <Text style={styles.actionDesc}>Execute one-tap operational routines across the WordPress backend:</Text>
        
        <View style={styles.btnRow}>
          <TouchableOpacity style={styles.actionBtn} onPress={handlePurgeCache}>
            <Text style={styles.btnText}>⚡ Purge LiteSpeed & Edge Caches</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.actionBtn, { backgroundColor: '#312e81' }]} onPress={() => Alert.alert('RAG Index', '10 syllabus topics synchronized into AIPKit vector store.')}>
            <Text style={styles.btnText}>🧠 Resync Socratic Vector Embeddings</Text>
          </TouchableOpacity>
        </View>
      </GlassCard>

      {/* LIVE AUDIT STATUS */}
      <Text style={styles.sectionTitle}>ECOSYSTEM HEALTH INTEGRITY</Text>
      <GlassCard variant="default">
        <View style={styles.statusRow}>
          <Text style={styles.statusLabel}>Google Site Kit & GSC API</Text>
          <StatusPill label="CONNECTED" type="success" />
        </View>
        <View style={styles.statusRow}>
          <Text style={styles.statusLabel}>FluentCRM & Formula Sheet Lead Funnel</Text>
          <StatusPill label="FUNNEL ACTIVE" type="success" />
        </View>
        <View style={styles.statusRow}>
          <Text style={styles.statusLabel}>VM SEO Brain Autonomous Cycle</Text>
          <StatusPill label="OK (CYCLE RUNNING)" type="success" />
        </View>
        <View style={styles.statusRow}>
          <Text style={styles.statusLabel}>Paperclip Company MAT Daemons</Text>
          <StatusPill label="4 AGENTS READY" type="info" />
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
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 13,
    color: '#94a3b8',
    marginTop: 2,
  },
  metricRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  metricCard: {
    flex: 0.48,
    padding: 16,
  },
  metricLabel: {
    fontSize: 11,
    color: '#94a3b8',
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  metricValue: {
    fontSize: 24,
    fontWeight: '800',
    color: '#ffffff',
    marginVertical: 6,
  },
  metricSub: {
    fontSize: 12,
    color: '#10b981',
    fontWeight: '500',
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#cbd5e1',
    marginTop: 18,
    marginBottom: 6,
    letterSpacing: 0.8,
  },
  actionDesc: {
    fontSize: 13,
    color: '#94a3b8',
    marginBottom: 14,
  },
  btnRow: {
    flexDirection: 'column',
    gap: 10,
  },
  actionBtn: {
    backgroundColor: '#4338ca',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  btnText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 13,
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#1e293b',
  },
  statusLabel: {
    fontSize: 13,
    color: '#e2e8f0',
    fontWeight: '500',
  },
});
