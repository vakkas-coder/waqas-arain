
import React, { useState } from 'react';
import { getSEOAdvice } from '../services/geminiService';

const SEOAdvisor: React.FC = () => {
  const [query, setQuery] = useState('');
  const [advice, setAdvice] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleConsult = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    const result = await getSEOAdvice(query);
    setAdvice(result);
    setLoading(false);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-6 bg-slate-900 text-white">
        <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
            <span className="text-emerald-400">AI</span> SEO Strategy Consultant
        </h2>
        <p className="text-slate-400 text-sm">Ask specialized questions about tech niche ranking, backlink strategies, or content optimization.</p>
      </div>
      
      <div className="p-6">
        <form onSubmit={handleConsult} className="space-y-4">
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g., 'How can I outrank competitors for the keyword Quantum Computing Enterprise solutions?'"
            className="w-full p-4 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all h-32 resize-none"
          />
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 px-6 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
              loading 
                ? 'bg-slate-200 text-slate-500 cursor-not-allowed' 
                : 'bg-emerald-600 text-white hover:bg-emerald-700 active:scale-95'
            }`}
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-slate-400 border-t-transparent rounded-full animate-spin"></div>
                Analyzing Market Data...
              </>
            ) : (
              'Generate Professional Advice'
            )}
          </button>
        </form>

        {advice && (
          <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
              <div className="flex items-center gap-2 text-emerald-800 font-bold mb-3">
                <span className="bg-emerald-200 p-1.5 rounded">💎</span>
                AI Strategic Insight
              </div>
              <div className="prose prose-sm prose-emerald text-emerald-900 max-w-none whitespace-pre-line text-sm leading-relaxed">
                {advice}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SEOAdvisor;
