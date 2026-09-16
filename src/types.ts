export type ActiveTab = 
  | 'home' 
  | 'dashboard' 
  | 'map' 
  | 'learn' 
  | 'action' 
  | 'calculator' 
  | 'quiz' 
  | 'about';

export interface DataFilter {
  location: string;
  year: string;
  indicator: string;
}

export interface ClimateMetric {
  id: string;
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  status: 'danger' | 'warning' | 'success';
}

export interface ActionItem {
  id: string;
  title: string;
  category: string;
  impact: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  completed: boolean;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface TeamMember {
  name: string;
  role: string;
  college: string;
  tasks: string[];
}

export interface CarbonInputs {
  commuteKm: number;
  electricityKwh: number;
  dietType: 'veg' | 'non-veg' | 'vegan';
}