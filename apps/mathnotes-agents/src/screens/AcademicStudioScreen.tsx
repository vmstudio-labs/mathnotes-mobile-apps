import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, ActivityIndicator, SafeAreaView, StatusBar, Platform } from 'react-native';
import { api } from '../services/apiService';
import { TutorCourse, DPPQuestion } from '../types';
import { GlassCard } from '../components/GlassCard';
import { StatusPill } from '../components/StatusPill';
import { KaTeXPreview } from '../components/KaTeXPreview';

export const AcademicStudioScreen: React.FC = () => {
  const [courses, setCourses] = useState<TutorCourse[]>([]);
  const [loading, setLoading] = useState(true);
  const [dpp, setDpp] = useState<DPPQuestion | null>(null);
  const [generating, setGenerating] = useState(false);

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    setLoading(true);
    const data = await api.getCourses();
    setCourses(data);
    setLoading(false);
  };

  const handleGenerateDPP = async () => {
    setGenerating(true);
    const question = await api.triggerAutonomousDPP();
    setDpp(question);
    setGenerating(false);
    Alert.alert('DPP Synthesized', 'New high-yield Riemann integral question generated with NTA CBT +4/-1 marking scheme.');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#090D16" translucent />
      <ScrollView style={styles.container} contentContainerStyle={styles.contentWrap}>
        <View style={styles.header}>
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>Academic Studio</Text>
            <Text style={styles.subtitle}>Tutor LMS Curriculum & High-Yield DPP Engine</Text>
          </View>
          <StatusPill label="CAO DESK" type="info" />
        </View>

        {/* AUTONOMOUS DPP SYNTHESIS */}
        <GlassCard variant="glow">
          <Text style={styles.cardHeader}>AUTONOMOUS JEE & UPSC DPP ENGINE</Text>
          <Text style={styles.cardDesc}>
            Synthesize daily practice problem sets using first-principles Socratic reasoning:
          </Text>

          <TouchableOpacity style={styles.generateBtn} onPress={handleGenerateDPP} disabled={generating}>
            {generating ? (
              <ActivityIndicator color="#ffffff" />
            ) : (
              <Text style={styles.btnText}>âš¡ Synthesize Daily Practice Problem (DPP)</Text>
            )}
          </TouchableOpacity>

          {dpp && (
            <View style={styles.dppBox}>
              <View style={styles.dppHeader}>
                <StatusPill label={dpp.track} type="warning" />
                <Text style={styles.dppDifficulty}>{dpp.difficulty}</Text>
              </View>
              <Text style={styles.dppQuestion}>{dpp.question}</Text>
              <KaTeXPreview latex={dpp.formulaLatex} label="Analytical Derivation" />
              
              <View style={styles.optionsWrap}>
                {dpp.options.map((opt, idx) => (
                  <View key={idx} style={[styles.optPill, idx === dpp.correctIndex && styles.optCorrect]}>
                    <Text style={[styles.optText, idx === dpp.correctIndex && styles.optCorrectText]}>
                      {String.fromCharCode(65 + idx)}. {opt}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          )}
        </GlassCard>

        {/* COURSEWARE HIERARCHY */}
        <Text style={styles.sectionTitle}>TUTOR LMS ACTIVE COURSES</Text>
        {loading ? (
          <ActivityIndicator color="#6366f1" style={{ marginTop: 20 }} />
        ) : (
          courses.map(course => (
            <GlassCard key={course.id}>
              <View style={styles.courseHeader}>
                <Text style={styles.courseTitle}>{course.title}</Text>
                <StatusPill label={course.isPublished ? 'PUBLISHED' : 'DRAFT'} type="success" />
              </View>
              <Text style={styles.courseMeta}>
                {course.subject} â€¢ {course.examTrack} â€¢ {course.totalLessons} Lessons
              </Text>
              <View style={styles.courseFooter}>
                <Text style={styles.enrolledText}>ðŸ‘¥ {course.enrolledCount} Students Enrolled</Text>
                <Text style={styles.ratingText}>â˜… {course.rating.toFixed(2)}</Text>
              </View>
            </GlassCard>
          ))
        )}
        <View style={{ height: 48 }} />
      </ScrollView>
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
  contentWrap: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 20,
    gap: 8,
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
    fontSize: 12,
    fontWeight: '800',
    color: '#818cf8',
    letterSpacing: 0.8,
    marginBottom: 4,
  },
  cardDesc: {
    fontSize: 13,
    color: '#94a3b8',
    marginBottom: 14,
  },
  generateBtn: {
    backgroundColor: '#4f46e5',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  btnText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 13,
  },
  dppBox: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#312e81',
  },
  dppHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  dppDifficulty: {
    fontSize: 11,
    color: '#f59e0b',
    fontWeight: '600',
  },
  dppQuestion: {
    fontSize: 14,
    color: '#f8fafc',
    lineHeight: 22,
    fontWeight: '500',
  },
  optionsWrap: {
    marginTop: 10,
    gap: 8,
  },
  optPill: {
    backgroundColor: '#1e293b',
    padding: 10,
    borderRadius: 8,
  },
  optCorrect: {
    backgroundColor: 'rgba(16, 185, 129, 0.2)',
    borderWidth: 1,
    borderColor: '#10b981',
  },
  optText: {
    color: '#cbd5e1',
    fontSize: 13,
  },
  optCorrectText: {
    color: '#34d399',
    fontWeight: '700',
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#cbd5e1',
    marginTop: 20,
    marginBottom: 8,
    letterSpacing: 0.8,
  },
  courseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 12,
    paddingRight: 2,
  },
  courseTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#ffffff',
    flex: 1,
    lineHeight: 22,
  },
  courseMeta: {
    fontSize: 12,
    color: '#94a3b8',
    marginTop: 6,
  },
  courseFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#1e293b',
  },
  enrolledText: {
    fontSize: 12,
    color: '#cbd5e1',
    fontWeight: '600',
  },
  ratingText: {
    fontSize: 12,
    color: '#fbbf24',
    fontWeight: '700',
    minWidth: 48,
    textAlign: 'right',
  },
});