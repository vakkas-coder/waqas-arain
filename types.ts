
export interface Article {
  title: string;
  excerpt: string;
  keywords: string[];
  content: string;
  category: string;
}

export interface ProjectStep {
  title: string;
  description: string;
  deliverable: string;
}

export interface RubricItem {
  criterion: string;
  weight: string;
  excellent: string;
  developing: string;
}

export enum Section {
  OVERVIEW = 'overview',
  INSTRUCTIONS = 'instructions',
  ARTICLES = 'articles',
  MOCKUP = 'mockup',
  CLIENT_STRATEGY = 'strategy',
  DELIVERABLES = 'deliverables',
  RUBRIC = 'rubric',
  AI_ADVISOR = 'advisor'
}
