export interface PersonalInfo {
  name: string;
  brand: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  leetcode?: string;
  geeksforgeeks?: string;
  avatarUrl?: string;
  resumeUrl: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
  scoreType: 'CGPA' | 'Percentage';
  location: string;
  highlights?: string[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
  iconName: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI / ML' | 'Research' | 'Full Stack' | 'Java / Systems';
  tags: string[];
  description: string;
  longDescription: string;
  highlights: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
  architectureDetails?: {
    overview: string;
    keyModules: { title: string; detail: string }[];
    algorithmsOrStack: string[];
  };
}

export interface AchievementItem {
  platform: string;
  metric: string;
  description: string;
  linkText?: string;
  url?: string;
  badge?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
  skillsCovered: string[];
}
