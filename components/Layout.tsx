
import React from 'react';
import { Section } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeSection, setActiveSection }) => {
  const menuItems = [
    { id: Section.OVERVIEW, label: 'Project Overview', icon: '📋' },
    { id: Section.INSTRUCTIONS, label: 'Step-by-Step Guide', icon: '🛣️' },
    { id: Section.ARTICLES, label: 'SEO Articles', icon: '✍️' },
    { id: Section.MOCKUP, label: 'Website Mockup', icon: '🖥️' },
    { id: Section.CLIENT_STRATEGY, label: 'Client Strategy', icon: '📈' },
    { id: Section.DELIVERABLES, label: 'Deliverables', icon: '📁' },
    { id: Section.RUBRIC, label: 'Evaluation Rubric', icon: '⭐' },
    { id: Section.AI_ADVISOR, label: 'AI SEO Advisor', icon: '🤖' },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-slate-900 text-white flex-shrink-0">
        <div className="p-6">
          <h1 className="text-xl font-bold flex items-center gap-2">
            <span className="text-emerald-400">Tech</span>SEO Capstone
          </h1>
        </div>
        <nav className="mt-4 px-2 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                activeSection === item.id 
                  ? 'bg-emerald-600 text-white' 
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <span>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
        <div className="mt-auto p-4 border-t border-slate-800">
            <div className="text-xs text-slate-400 uppercase tracking-wider mb-2">Lead Consultant</div>
            <a 
                href="https://www.linkedin.com/in/engineer-waqas-riaz-arain-83375b63/" 
                target="_blank" 
                className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
            >
                <img src="https://picsum.photos/seed/waqas/32/32" className="w-8 h-8 rounded-full border border-emerald-500/30" />
                <span className="text-xs truncate">Waqas Riaz Arain</span>
            </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-slate-50">
        <div className="max-w-5xl mx-auto p-4 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
