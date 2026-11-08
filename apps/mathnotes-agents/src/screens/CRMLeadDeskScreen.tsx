import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { api } from '../services/apiService';
import { FluentCRMLead } from '../types';
import { GlassCard } from '../components/GlassCard';
import { StatusPill } from '../components/StatusPill';

export const CRMLeadDeskScreen: React.FC = () => {
  const [leads, setLeads] = useState<FluentCRMLead[]>([]);

  useEffect(() => {
    loadLeads();
  }, []);

  const loadLeads = async () => {
    const data = await api.getCRMLeads();
    setLeads(data);
  };

  const handleTestBroadcast = () => {
    Alert.alert('FluentCRM Sequence', 'Triggering test dispatch of Email 1: Formula Sheet PDF to webxprodigital@gmail.com...', [
      { text: 'OK', onPress: () => Alert.alert('Sent', 'Test email dispatched through Brevo SMTP relay.') }
    ]);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Student CRM & Funnels</Text>
          <Text style={styles.subtitle}>FluentCRM List 3 VIP Leads & 3-Touch Nurture Drip</Text>
        </View>
        <StatusPill label="LIVE FUNNEL" type="success" />
      </View>

      {/* AUTOMATION FUNNEL SUMMARY */}
      <GlassCard variant="glow">
        <Text style={styles.cardHeader}>ACTIVE AUTOMATION FUNNEL #1</Text>
        <Text style={styles.funnelName}>MathNotes VIP Lead Nurture Sequence</Text>
        <Text style={styles.funnelTrigger}>Trigger: Contact enters "Formula Sheet VIP Leads" (List 3)</Text>

        <View style={styles.stepsTimeline}>
          <View style={styles.stepItem}>
            <Text style={styles.stepNum}>1</Text>
            <View style={{ flex: 1 }}>
              <Text style={styles.stepTitle}>Immediate: Formula Guide PDF + 4 Pillars Link</Text>
              <Text style={styles.stepSub}>Delivered within 30s of Form 3 submission</Text>
            </View>
            <StatusPill label="ACTIVE" type="success" />
          </View>

          <View style={styles.stepItem}>
            <Text style={styles.stepNum}>2</Text>
            <View style={{ flex: 1 }}>
              <Text style={styles.stepTitle}>Day 1 (+24h): Conceptual Mastery over Memorization</Text>
              <Text style={styles.stepSub}>Tutor LMS courses introduction</Text>
            </View>
            <StatusPill label="ACTIVE" type="success" />
          </View>

          <View style={styles.stepItem}>
            <Text style={styles.stepNum}>3</Text>
            <View style={{ flex: 1 }}>
              <Text style={styles.stepTitle}>Day 3 (+48h): Meet MathNotes AI Socratic Mentor</Text>
              <Text style={styles.stepSub}>Interactive LaTeX derivation prompt demo</Text>
            </View>
            <StatusPill label="ACTIVE" type="success" />
          </View>
        </View>

        <TouchableOpacity style={styles.broadcastBtn} onPress={handleTestBroadcast}>
          <Text style={styles.btnText}>✉️ Send Test Sequence Email</Text>
        </TouchableOpacity>
      </GlassCard>

      {/* RECENT CAPTURED LEADS */}
      <Text style={styles.sectionTitle}>RECENT LEADS (LIST 3 & TAGGED)</Text>
      {leads.map(lead => (
        <GlassCard key={lead.id}>
          <View style={styles.leadHeader}>
            <View>
              <Text style={styles.leadName}>{lead.first_name}</Text>
              <Text style={styles.leadEmail}>{lead.email}</Text>
            </View>
            <StatusPill label={lead.status.toUpperCase()} type="info" />
          </View>

          <View style={styles.tagsRow}>
            {lead.tags.map((tag, idx) => (
              <StatusPill key={idx} label={tag} type={tag.includes('Teacher') ? 'warning' : 'success'} />
            ))}
          </View>
          <Text style={styles.leadTime}>Joined: {lead.created_at}</Text>
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
    marginBottom: 4,
  },
  funnelName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
  },
  funnelTrigger: {
    fontSize: 12,
    color: '#94a3b8',
    marginTop: 2,
    marginBottom: 14,
  },
  stepsTimeline: {
    gap: 12,
    marginVertical: 10,
  },
  stepItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: '#0f172a',
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#1e293b',
  },
  stepNum: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#4338ca',
    color: '#ffffff',
    textAlign: 'center',
    lineHeight: 24,
    fontWeight: '700',
    fontSize: 12,
  },
  stepTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#f8fafc',
  },
  stepSub: {
    fontSize: 11,
    color: '#64748b',
    marginTop: 2,
  },
  broadcastBtn: {
    backgroundColor: '#3b82f6',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 14,
  },
  btnText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 13,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#cbd5e1',
    marginTop: 20,
    marginBottom: 6,
    letterSpacing: 0.8,
  },
  leadHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  leadName: {
    fontSize: 15,
    fontWeight: '700',
    color: '#ffffff',
  },
  leadEmail: {
    fontSize: 12,
    color: '#94a3b8',
    marginTop: 2,
  },
  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginVertical: 10,
  },
  leadTime: {
    fontSize: 11,
    color: '#64748b',
  },
});
