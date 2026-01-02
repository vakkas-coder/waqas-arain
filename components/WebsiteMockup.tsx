
import React from 'react';

const WebsiteMockup: React.FC = () => {
  return (
    <div className="border-[8px] border-slate-800 rounded-2xl overflow-hidden shadow-2xl bg-white aspect-video max-w-4xl mx-auto">
      {/* Browser Header */}
      <div className="bg-slate-100 border-b border-slate-200 p-2 flex items-center gap-2">
        <div className="flex gap-1.5 ml-2">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <div className="mx-auto bg-white border border-slate-200 rounded px-4 py-0.5 text-[10px] text-slate-400 w-1/2 text-center">
          https://techvision-hub.com
        </div>
      </div>

      {/* Web Content Mock */}
      <div className="overflow-y-auto h-full pb-12">
        {/* Navigation */}
        <nav className="p-4 flex justify-between items-center border-b border-slate-50">
          <div className="font-bold text-slate-900 flex items-center gap-2">
            <div className="w-6 h-6 bg-emerald-600 rounded"></div>
            TechVision
          </div>
          <div className="flex gap-6 text-[10px] font-medium text-slate-500">
            <span className="text-emerald-600">Home</span>
            <span>Insights</span>
            <span>Protocols</span>
            <span>Case Studies</span>
          </div>
          <button className="bg-emerald-600 text-white px-3 py-1 rounded-full text-[10px] font-bold">
            Subscribe
          </button>
        </nav>

        {/* Hero */}
        <header className="p-10 text-center bg-slate-50">
          <h2 className="text-2xl font-black text-slate-900 mb-2">Pioneering the Future of <span className="text-emerald-600 underline">Technology</span></h2>
          <p className="text-slate-500 text-xs max-w-md mx-auto mb-4">Deep dives into Quantum Computing, Edge AI, and Sustainable Infrastructure.</p>
          <div className="flex justify-center gap-2">
             <div className="px-4 py-2 bg-slate-900 text-white rounded text-[10px] font-bold">Get Started</div>
             <div className="px-4 py-2 border border-slate-200 rounded text-[10px] font-bold">Latest Trends</div>
          </div>
        </header>

        {/* Features Grid */}
        <section className="p-6 grid grid-cols-3 gap-4">
            {[1,2,3].map(i => (
                <div key={i} className="p-4 bg-white border border-slate-100 rounded-lg shadow-sm">
                    <div className="w-8 h-8 bg-emerald-100 rounded mb-2"></div>
                    <div className="h-2 w-12 bg-slate-200 rounded mb-2"></div>
                    <div className="h-1 w-full bg-slate-100 rounded mb-1"></div>
                    <div className="h-1 w-2/3 bg-slate-100 rounded"></div>
                </div>
            ))}
        </section>

        {/* Bottom Banner */}
        <footer className="mt-4 p-8 bg-slate-900 text-white/50 text-center text-[8px]">
            &copy; 2024 TechVision Hub. All Rights Reserved.
        </footer>
      </div>
    </div>
  );
};

export default WebsiteMockup;
