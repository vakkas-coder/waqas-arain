
import React, { useState } from 'react';
import Layout from './components/Layout';
import ArticleCard from './components/ArticleCard';
import WebsiteMockup from './components/WebsiteMockup';
import SEOAdvisor from './components/SEOAdvisor';
import { Section } from './types';
import { KEYWORDS, PROJECT_STEPS, ARTICLES, RUBRIC } from './constants';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.OVERVIEW);

  const renderContent = () => {
    switch (activeSection) {
      case Section.OVERVIEW:
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <section className="bg-emerald-900 text-white p-8 rounded-3xl relative overflow-hidden">
                <div className="relative z-10">
                    <h2 className="text-3xl font-black mb-4">TechVision SEO Capstone</h2>
                    <p className="text-emerald-100 max-w-2xl leading-relaxed">
                        Establish the leading digital authority in the emerging technology niche. 
                        This project focuses on organic growth through technical excellence and semantic content mastery.
                    </p>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800/20 blur-3xl rounded-full -mr-20 -mt-20"></div>
            </section>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-2xl border border-slate-200">
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-800">
                        <span className="text-emerald-600">🎯</span> Project Goals
                    </h3>
                    <ul className="space-y-3 text-sm text-slate-600">
                        <li className="flex gap-2">✅ <span className="font-medium">Top 5 Ranking:</span> Rank for 3/5 core tech keywords within 180 days.</li>
                        <li className="flex gap-2">✅ <span className="font-medium">Organic Traffic:</span> Achieve 10,000+ monthly unique visitors.</li>
                        <li className="flex gap-2">✅ <span className="font-medium">E-E-A-T:</span> Build domain authority (DA) from 0 to 25+ using high-quality backlinks.</li>
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200">
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-800">
                        <span className="text-emerald-600">🔑</span> Target Keywords
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {KEYWORDS.map(kw => (
                            <span key={kw} className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-xs font-semibold border border-slate-200">
                                {kw}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
          </div>
        );

      case Section.INSTRUCTIONS:
        return (
          <div className="space-y-6 animate-in fade-in duration-500">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Execution Roadmap</h2>
            <div className="space-y-8">
              {PROJECT_STEPS.map((step, idx) => (
                <div key={idx} className="flex gap-6 relative">
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold z-10">
                    {idx + 1}
                  </div>
                  {idx !== PROJECT_STEPS.length - 1 && <div className="absolute top-10 left-5 w-0.5 h-[calc(100%-2.5rem)] bg-emerald-100 -translate-x-1/2"></div>}
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 flex-1 shadow-sm">
                    <h4 className="font-bold text-slate-800 mb-2">{step.title}</h4>
                    <p className="text-slate-600 text-sm mb-4 leading-relaxed">{step.description}</p>
                    <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                      <span className="text-[10px] font-bold text-emerald-700 uppercase block mb-1">Deliverable:</span>
                      <p className="text-xs text-emerald-800 font-medium">{step.deliverable}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case Section.ARTICLES:
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Pillar Content Hub</h2>
                <p className="text-slate-500 text-sm">3 SEO-optimized articles targeting search intent and semantic clusters.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {ARTICLES.map((article, idx) => (
                <ArticleCard key={idx} article={article} />
              ))}
            </div>
          </div>
        );

      case Section.MOCKUP:
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="text-center">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Visual Experience Prototype</h2>
                <p className="text-slate-500 text-sm mb-8">Desktop preview of the 'TechVision' SEO landing experience.</p>
            </div>
            <WebsiteMockup />
          </div>
        );

      case Section.CLIENT_STRATEGY:
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Strategic Ranking Insights</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {[
                    { title: "Topic Clusters", content: "Don't write isolated posts. Create internal linking webs around 'Quantum Computing' to establish topical authority.", icon: "🌐" },
                    { title: "Search Intent Alignment", content: "Ensure technical guides target 'Informational' intent while product comparisons target 'Commercial' intent.", icon: "🎯" },
                    { title: "Schema Deployment", content: "Implement Article, FAQ, and TechArticle schema to dominate Google's Knowledge Graph and rich results.", icon: "🧬" },
                    { title: "E-E-A-T Signaling", content: "Feature author bios with deep tech engineering backgrounds to signal credibility to search crawlers.", icon: "🛡️" }
                ].map((item, i) => (
                    <div key={i} className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-emerald-200 transition-colors">
                        <div className="text-3xl mb-4">{item.icon}</div>
                        <h4 className="font-bold text-slate-800 mb-2">{item.title}</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">{item.content}</p>
                    </div>
                ))}
            </div>
          </div>
        );

      case Section.DELIVERABLES:
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Portfolio Deliverables</h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-3xl border border-slate-200 text-center shadow-lg">
                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl">📝</div>
                    <h3 className="text-xl font-bold mb-3">Written SEO Audit</h3>
                    <p className="text-slate-500 text-sm mb-6">45-page comprehensive strategy document including technical audit and content calendar.</p>
                    <button className="w-full py-3 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-slate-800 transition-colors">Download PDF Template</button>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-slate-200 text-center shadow-lg">
                    <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl">📽️</div>
                    <h3 className="text-xl font-bold mb-3">Strategy Presentation</h3>
                    <p className="text-slate-500 text-sm mb-6">Stakeholder-facing slide deck showcasing KPIs, expected ROI, and implementation timelines.</p>
                    <button className="w-full py-3 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-slate-800 transition-colors">Download Slides Template</button>
                </div>
            </div>
          </div>
        );

      case Section.RUBRIC:
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Success Evaluation Rubric</h2>
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold">
                        <tr>
                            <th className="px-6 py-4">Criterion</th>
                            <th className="px-6 py-4">Developing (0-1)</th>
                            <th className="px-6 py-4">Excellent (2-3)</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {RUBRIC.map((item, idx) => (
                            <tr key={idx}>
                                <td className="px-6 py-4">
                                    <div className="font-bold text-slate-900">{item.criterion}</div>
                                    <div className="text-[10px] text-slate-400 font-medium">Weight: {item.weight}</div>
                                </td>
                                <td className="px-6 py-4 text-slate-500">{item.developing}</td>
                                <td className="px-6 py-4 text-emerald-700 font-medium">{item.excellent}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
          </div>
        );

      case Section.AI_ADVISOR:
        return <SEOAdvisor />;

      default:
        return <div>Section not found.</div>;
    }
  };

  return (
    <Layout activeSection={activeSection} setActiveSection={setActiveSection}>
      {renderContent()}
    </Layout>
  );
};

export default App;
