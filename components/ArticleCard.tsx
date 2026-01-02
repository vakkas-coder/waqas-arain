
import React from 'react';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded uppercase tracking-wide">
            {article.category}
          </span>
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">
          {article.title}
        </h3>
        <p className="text-slate-600 text-sm mb-4 line-clamp-3">
          {article.excerpt}
        </p>
        <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
                {article.keywords.map(kw => (
                    <span key={kw} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-1 rounded">
                        #{kw.replace(/\s/g, '')}
                    </span>
                ))}
            </div>
            <button className="text-emerald-600 text-sm font-semibold hover:text-emerald-700">
                Read Full Article →
            </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
