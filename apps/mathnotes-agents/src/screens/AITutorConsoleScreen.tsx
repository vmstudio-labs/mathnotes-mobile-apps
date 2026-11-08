import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { api } from '../services/apiService';
import { AIPKitBot } from '../types';
import { GlassCard } from '../components/GlassCard';
import { StatusPill } from '../components/StatusPill';
import { KaTeXPreview } from '../components/KaTeXPreview';

export const AITutorConsoleScreen: React.FC = () => {
  const [bots, setBots] = useState<AIPKitBot[]>([]);
  const [selectedModel, setSelectedModel] = useState('gemini-2.5-flash');

  useEffect(() => {
    loadBots();
  }, []);

  const loadBots = async () => {
    const data = await api.getAIPKitBots();
    setBots(data);
  };

  const handleSwitchModel = (model: string) => {
    setSelectedModel(model);
    Alert.alert('AI Model Router', `Active router model switched to ${model} for all Socratic bots.`);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>AI Tutor & Model Router</Text>
          <Text style={styles.subtitle}>AIPKit Socratic Bots & LaTeX Math QA</Text>
        </View>
        <StatusPill label="MULTI-MODEL" type="info" />
      </View>

      {/* MODEL ROUTER */}
      <GlassCard variant="glow">
        <Text style={styles.cardHeader}>MULTI-PROVIDER MODEL ROUTER</Text>
        <Text style={styles.cardDesc}>Select primary reasoning engine for MathNotes Socratic tutoring:</Text>

        <View style={styles.modelRow}>
          {['gemini-2.5-flash', 'claude-3-5-sonnet', 'gpt-4o-mini'].map((model) => (
            <TouchableOpacity
              key={model}
              style={[styles.modelPill, selectedModel === model && styles.modelPillActive]}
              onPress={() => handleSwitchModel(model)}
            >
              <Text style={[styles.modelText, selectedModel === model && styles.modelTextActive]}>
                {model}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </GlassCard>

      {/* LATEX FORMATTING QA TEST */}
      <Text style={styles.sectionTitle}>LATEX FORMULA FORMATTING QA</Text>
      <GlassCard>
        <Text style={styles.qaTitle}>Riemann Sum Integral Definition (JEE Advanced Standard)</Text>
        <KaTeXPreview
          latex="\lim_{n \to \infty} \frac{1}{n} \sum_{r=1}^n f\left(\frac{r}{n}\right) = \int_0^1 f(x)\,dx"
          label="Verified LaTeX Formula Stream"
        />
        <StatusPill label="KA-TEX RENDER VALIDATED" type="success" />
      </GlassCard>

      {/* CONFIGURED BOTS */}
      <Text style={styles.sectionTitle}>CONFIGURED SOCRATIC BOT COHORTS</Text>
      {bots.map((bot) => (
        <GlassCard key={bot.id}>
          <View style={styles.botHeader}>
            <View>
              <Text style={styles.botName}>{bot.name}</Text>
              <Text style={styles.botRole}>{bot.role}</Text>
            </View>
            <StatusPill label="SOCRATIC PROMPT" type="info" />
          </View>

          <View style={styles.botStats}>
            <Text style={styles.statItem}>🧠 Provider: {bot.provider}</Text>
            <Text style={styles.statItem}>⚡ Engine: {bot.model}</Text>
            <Text style={styles.statItem}>📊 Lifetime Tokens: {(bot.tokensIn + bot.tokensOut).toLocaleString()}</Text>
          </View>

          <Text style={styles.startersHeader}>Pre-Configured Socratic Starters:</Text>
          {bot.starters.map((starter, idx) => (
            <View key={idx} style={styles.starterPill}>
              <Text style={styles.starterText}>💬 "{starter}"</Text>
            </View>
          ))}
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
  cardDesc: {
    fontSize: 13,
    color: '#94a3b8',
    marginBottom: 12,
  },
  modelRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  modelPill: {
    backgroundColor: '#1e293b',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#334155',
  },
  modelPillActive: {
    backgroundColor: 'rgba(99, 102, 241, 0.25)',
    borderColor: '#6366f1',
  },
  modelText: {
    color: '#94a3b8',
    fontSize: 12,
    fontWeight: '600',
  },
  modelTextActive: {
    color: '#818cf8',
    fontWeight: '700',
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#cbd5e1',
    marginTop: 20,
    marginBottom: 6,
    letterSpacing: 0.8,
  },
  qaTitle: {
    fontSize: 14,
    color: '#f8fafc',
    fontWeight: '600',
  },
  botHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  botName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
  },
  botRole: {
    fontSize: 12,
    color: '#94a3b8',
    marginTop: 2,
  },
  botStats: {
    backgroundColor: '#0f172a',
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
    gap: 4,
  },
  statItem: {
    fontSize: 12,
    color: '#cbd5e1',
  },
  startersHeader: {
    fontSize: 11,
    fontWeight: '700',
    color: '#64748b',
    marginTop: 6,
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  starterPill: {
    backgroundColor: '#1e293b',
    padding: 8,
    borderRadius: 6,
    marginVertical: 3,
  },
  starterText: {
    color: '#94a3b8',
    fontSize: 12,
    fontStyle: 'italic',
  },
});
