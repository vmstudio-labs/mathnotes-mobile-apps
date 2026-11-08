export interface ExecutiveHUD {
  totalStudents: number;
  activeCourses: number;
  draftCourses: number;
  totalEarnings: number;
  monthlyRevenue: number;
  averageRating: number;
  unansweredQuestionsCount: number;
  pendingReviewsCount: number;
}

export interface TutorCourse {
  id: number;
  title: string;
  slug: string;
  subject: string;
  examTrack: string;
  totalLessons: number;
  enrolledCount: number;
  rating: number;
  isPublished: boolean;
}

export interface FluentCRMLead {
  id: number;
  email: string;
  first_name: string;
  math_focus?: string;
  status: string;
  tags: string[];
  created_at: string;
}

export interface SEOBrainMetrics {
  target: number;
  daysLeft: number;
  day: number;
  achieved: number;
  onTrack: boolean;
  requiredDaily: number;
  issuesCount: number;
  keywordsTotal: number;
  circuitBreakerOk: boolean;
}

export interface AIPKitBot {
  id: number;
  name: string;
  role: string;
  model: string;
  provider: string;
  tokensIn: number;
  tokensOut: number;
  starters: string[];
}

export interface PaperclipAgent {
  id: string;
  name: string;
  role: string;
  avatar: string;
  status: 'idle' | 'running' | 'completed' | 'paused';
  currentTask: string;
  lastActive: string;
}

export interface DPPQuestion {
  id: string;
  question: string;
  track: 'IIT_JEE_MAIN' | 'IIT_JEE_ADVANCED' | 'UPSC_CSAT';
  difficulty: string;
  formulaLatex: string;
  options: string[];
  correctIndex: number;
}
