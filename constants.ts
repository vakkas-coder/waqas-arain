
import { Article, ProjectStep, RubricItem } from './types';

export const KEYWORDS = [
  "Quantum Computing for Enterprise",
  "Edge AI Security Protocols",
  "Sustainable Data Center Cooling",
  "Cloud Native Microservices Trends",
  "Decentralized Web 3.0 Infrastructure"
];

export const PROJECT_STEPS: ProjectStep[] = [
  {
    title: "Phase 1: Market & Keyword Research",
    description: "Identify high-intent keywords in the technology niche and perform a competitor gap analysis.",
    deliverable: "Keyword Research Spreadsheet & Competitive Audit Report."
  },
  {
    title: "Phase 2: Technical SEO Audit",
    description: "Analyze site speed, mobile responsiveness, and crawlability for a hypothetical tech platform.",
    deliverable: "Technical SEO Checklist & Audit Findings."
  },
  {
    title: "Phase 3: On-Page Optimization",
    description: "Implement semantic HTML, metadata, and internal linking strategies for core content pages.",
    deliverable: "On-Page Optimization Map (Target URL vs Target Keyword)."
  },
  {
    title: "Phase 4: Content Strategy & Creation",
    description: "Draft 3 pillar articles that address the 'Search Intent' of the technology audience.",
    deliverable: "3 Optimized Articles (800+ words each)."
  },
  {
    title: "Phase 5: Off-Page & Authority Building",
    description: "Develop a guest posting and digital PR strategy to earn high-authority backlinks.",
    deliverable: "Backlink Outreach Plan & List of Potential Tech Publishers."
  }
];

export const RUBRIC: RubricItem[] = [
  {
    criterion: "Keyword Integration",
    weight: "20%",
    excellent: "Keywords flow naturally and match search intent perfectly.",
    developing: "Keywords are present but feel forced or 'stuffed'."
  },
  {
    criterion: "Technical Proficiency",
    weight: "30%",
    excellent: "Comprehensive audit covering Core Web Vitals and schema markup.",
    developing: "Basic audit missing crucial speed or mobile components."
  },
  {
    criterion: "Content Quality",
    weight: "25%",
    excellent: "Original insights that provide unique value to the tech community.",
    developing: "Rehashed information with low reader engagement potential."
  },
  {
    criterion: "Strategic Planning",
    weight: "25%",
    excellent: "Data-driven roadmap with clear KPIs and realistic timelines.",
    developing: "Generic strategy without specific actionable metrics."
  }
];

export const ARTICLES: Article[] = [
  {
    title: "The Future of Quantum Computing in Enterprise Finance",
    category: "Emerging Tech",
    excerpt: "How quantum supremacy is set to redefine risk assessment and algorithmic trading in the next decade.",
    keywords: ["Quantum Computing", "Enterprise Tech", "Financial Modeling"],
    content: "Quantum computing is no longer just a theoretical concept in physics labs. Today, major financial institutions are exploring how qubits can process complex risk simulations 10,000 times faster than classical supercomputers..."
  },
  {
    title: "Securing the Edge: AI Protocols for Distributed Networks",
    category: "Cybersecurity",
    excerpt: "Exploring the intersection of artificial intelligence and edge computing for a more secure IoT ecosystem.",
    keywords: ["Edge AI", "IoT Security", "Cyber Protocols"],
    content: "As IoT devices proliferate, the need for processing data at the 'edge' becomes critical. This article breaks down how local AI models can detect intrusions in real-time without cloud latency..."
  },
  {
    title: "Green Tech: The Shift Toward Sustainable Data Centers",
    category: "Infrastructure",
    excerpt: "Analyzing the innovative cooling technologies and renewable energy transitions driving the tech industry's ESG goals.",
    keywords: ["Sustainable Tech", "Data Centers", "ESG in Technology"],
    content: "The massive energy consumption of data centers is a growing concern. We examine how liquid immersion cooling and geothermal energy sources are becoming the new standard for hyperscalers..."
  }
];
