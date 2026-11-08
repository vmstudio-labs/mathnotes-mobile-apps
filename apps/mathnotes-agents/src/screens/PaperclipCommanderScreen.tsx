import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { api, PAPERCLIP_HOST, PAPERCLIP_COMPANY } from '../services/apiService';
import { PaperclipAgent } from '../types';
import { GlassCard } from '../components/GlassCard';
import { StatusPill } from '../components/StatusPill';

export const PaperclipCommanderScreen: React.FC = () => {
  const [agents, setAgents] = useState<PaperclipAgent[]>([]);

  useEffect(() => {
    loadAgents();
  }, []);

  const loadAgents = async () => {
    const data = await api.getPaperclipAgents();
    setAgents(data);
  };

  const handleTriggerAgent = (agentName: string, task: string) => {
    Alert.alert(
      `Trigger ${agentName}`,
      `Dispatching Paperclip autonomous routine: "${task}" for company MAT...`,
      [
        {
          text: 'Dispatch',
          onPress: () => {
            Alert.alert('Routine Enqueued', `${agentName} has received the high-priority execution directive on Paperclip.`);
          }
        },
        { text: 'Cancel', style: 'cancel' }
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Paperclip Governance</Text>
          <Text style={styles.subtitle}>Company MAT Sovereign AI Executive Board</Text>
        </View>
        <StatusPill label="DAEMONS SYNCED" type="success" />
      </View>

      {/* PAPERCLIP ENVIRONMENT CARD */}
      <GlassCard variant="glow">
        <Text style={styles.cardHeader}>PAPERCLIP AUTONOMOUS CLUSTER</Text>
        <Text style={styles.hostText}>Host: {PAPERCLIP_HOST}</Text>
        <Text style={styles.companyText}>Company Prefix: {PAPERCLIP_COMPANY} • Company ID: 6fb47da6...d2f7</Text>

        <View style={styles.goalRow}>
          <StatusPill label="GOAL MAT-G1" type="info" />
          <Text style={styles.goalText}>10k Monthly Organic Math Learners</Text>
        </View>
        <View style={styles.goalRow}>
          <StatusPill label="GOAL MAT-G2" type="warning" />
          <Text style={styles.goalText}>1,000 Verified Student & Teacher App Installs</Text>
        </View>
        <View style={styles.goalRow}>
          <StatusPill label="GOAL MAT-G3" type="success" />
          <Text style={styles.goalText}>250 Premium Cohort Course Enrollments</Text>
        </View>
      </GlassCard>

      {/* EXECUTIVE AGENT COHORTS */}
      <Text style={styles.sectionTitle}>EXECUTIVE AGENT CORPS</Text>
      {agents.map((ag) => (
        <GlassCard key={ag.id}>
          <View style={styles.agHeader}>
            <View style={styles.agInfo}>
              <Text style={styles.agAvatar}>{ag.avatar}</Text>
              <View>
                <Text style={styles.agName}>{ag.name}</Text>
                <Text style={styles.agRole}>{ag.role}</Text>
              </View>
            </View>
            <StatusPill
              label={ag.status.toUpperCase()}
              type={ag.status === 'running' ? 'warning' : ag.status === 'completed' ? 'success' : 'info'}
            />
          </View>

          <View style={styles.taskBox}>
            <Text style={styles.taskLabel}>CURRENT DIRECTIVE:</Text>
            <Text style={styles.taskText}>{ag.currentTask}</Text>
            <Text style={styles.activeTime}>Last heartbeat: {ag.lastActive}</Text>
          </View>

          <TouchableOpacity
            style={styles.triggerBtn}
            onPress={() => handleTriggerAgent(ag.name, ag.currentTask)}
          >
            <Text style={styles.btnText}>⚡ Dispatch Autonomous Routine</Text>
          </TouchableOpacity>
        </GlassCard>
      ))}
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
    marginBottom: 6,
  },
  hostText: {
    fontSize: 13,
    color: '#ffffff',
    fontWeight: '600',
  },
  companyText: {
    fontSize: 12,
    color: '#94a3b8',
    marginTop: 2,
    marginBottom: 12,
  },
  goalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginVertical: 4,
  },
  goalText: {
    fontSize: 12,
    color: '#cbd5e1',
    fontWeight: '500',
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#cbd5e1',
    marginTop: 20,
    marginBottom: 6,
    letterSpacing: 0.8,
  },
  agHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  agInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  agAvatar: {
    fontSize: 28,
  },
  agName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
  },
  agRole: {
    fontSize: 12,
    color: '#94a3b8',
  },
  taskBox: {
    backgroundColor: '#0f172a',
    padding: 12,
    borderRadius: 8,
    marginVertical: 12,
  },
  taskLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: '#64748b',
    letterSpacing: 0.8,
  },
  taskText: {
    fontSize: 13,
    color: '#f8fafc',
    marginTop: 3,
    lineHeight: 18,
    fontWeight: '500',
  },
  activeTime: {
    fontSize: 11,
    color: '#64748b',
    marginTop: 6,
  },
  triggerBtn: {
    backgroundColor: '#3730a3',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  btnText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 13,
  },
});
