'use client';

import React, { useState } from 'react';
import { MessageSquare, Volume2, Languages, Bookmark, Share2, ChevronRight, Sparkles } from 'lucide-react';
import { DEMO_AI_SUMMARY } from '@/lib/mockData';

export default function AISummaryCard() {
  const [expanded, setExpanded] = useState(false);
  const ai = DEMO_AI_SUMMARY;

  return (
    <div className="bg-card border border-border rounded-2xl p-5 shadow-card h-full flex flex-col">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-accent/10 flex items-center justify-center">
            <Sparkles size={16} className="text-accent" />
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">AkashVani AI Summary</p>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="ai-badge text-[10px] font-semibold px-1.5 py-0.5 rounded-full">AI INTERPRETATION</span>
              <span className="text-[10px] text-muted-foreground">Not an official alert</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-1 bg-success/10 text-success text-xs font-semibold px-2 py-0.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-success" />
            {ai?.confidence}% confidence
          </div>
        </div>
      </div>

      {/* AI text */}
      <p className={`text-sm text-foreground leading-relaxed flex-1 ${!expanded ? 'line-clamp-4' : ''}`}>
        {ai?.text}
      </p>
      {!expanded && (
        <button onClick={() => setExpanded(true)} className="text-xs text-primary font-semibold mt-1 hover:underline flex items-center gap-0.5">
          Read more <ChevronRight size={12} />
        </button>
      )}

      {/* Sources */}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {ai?.sources?.map((src) => (
          <span key={`src-${src}`} className="text-[10px] font-medium text-muted-foreground bg-secondary px-2 py-0.5 rounded-full border border-border">
            {src}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="mt-3 pt-3 border-t border-border/60 flex items-center gap-2 flex-wrap">
        <button className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground bg-secondary hover:bg-secondary/80 px-3 py-1.5 rounded-lg transition-colors">
          <Volume2 size={13} /> Read Aloud
        </button>
        <button className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground bg-secondary hover:bg-secondary/80 px-3 py-1.5 rounded-lg transition-colors">
          <Languages size={13} /> Translate
        </button>
        <button className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground bg-secondary hover:bg-secondary/80 px-3 py-1.5 rounded-lg transition-colors">
          <Bookmark size={13} /> Save
        </button>
        <button className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground bg-secondary hover:bg-secondary/80 px-3 py-1.5 rounded-lg transition-colors">
          <Share2 size={13} /> Share
        </button>
        <button className="flex items-center gap-1.5 text-xs font-semibold text-primary bg-primary/10 hover:bg-primary/15 px-3 py-1.5 rounded-lg transition-colors ml-auto">
          <MessageSquare size={13} /> Ask Follow-up
        </button>
      </div>

      <p className="text-[10px] text-muted-foreground mt-2">Generated 17:52 IST · Persona: {ai?.persona}</p>
    </div>
  );
}