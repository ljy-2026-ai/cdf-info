import React, { useState } from 'react';
import { FESTIVAL_CONTENTS } from '../data/festivalData';
import trampolineImg from '../assets/images/content_trampoline_1795446581607.jpg';
import pillowfightImg from '../assets/images/content_pillowfight_1795446581740.jpg';
import shoethrowImg from '../assets/images/content_shoethrow_1795446581127.jpg';
import diyFlagImg from '../assets/images/content_diy_flag_1795446581970.jpg';

const CONTENT_IMAGE_MAP: Record<string, string> = {
  trampoline: trampolineImg,
  pillowfight: pillowfightImg,
  shoethrow: shoethrowImg,
  diy_flag: diyFlagImg,
};

type FilterTab = 'all' | 'activity' | 'diy';

export const ContentsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterTab>('all');

  const filteredContents = FESTIVAL_CONTENTS.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.filterCategory === activeFilter;
  });

  return (
    <section className="relative bg-[#080A0C] cdf-page-shell min-h-[calc(100vh-4rem)] overflow-x-clip">
      <div className="absolute inset-0 cdf-bg-grid pointer-events-none" />
      <div className="absolute inset-0 cdf-bg-overlay pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto cdf-page-container cdf-section-stack cdf-contents-wrap">
        {/* Header & Instant Category Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[rgba(255,255,255,0.12)] pb-5">
          <div className="min-w-0">
            <p className="font-mono text-[12px] font-bold tracking-[0.08em] text-[#00FF66] uppercase mb-2">
              ON-SITE PROGRAMS
            </p>
            <h1 className="cdf-section-title font-extrabold text-[#FFFFFF]">
              CONTENTS
            </h1>
          </div>

          <div className="cdf-contents-tabs" role="tablist" aria-label="콘텐츠 카테고리 필터">
            {(
              [
                { id: 'all', label: '전체' },
                { id: 'activity', label: '액티비티' },
                { id: 'diy', label: 'DIY 체험' },
              ] as { id: FilterTab; label: string }[]
            ).map((tab) => {
              const isSelected = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`cdf-tab-btn ${isSelected ? 'is-selected' : ''}`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Visual + Typographic Program Cards Grid + Full-Span More Contents Slot */}
        <div className="cdf-contents-grid">
          {filteredContents.map((item) => (
            <article
              key={item.id}
              className="group relative overflow-hidden cdf-card cdf-content-card flex flex-col justify-between gap-5"
            >
              {/* Representative Background Photo with Required Alt Text */}
              <img
                src={CONTENT_IMAGE_MAP[item.id]}
                alt={item.imageAlt}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />

              {/* Dark Semi-Transparent Overlay rgba(16, 20, 26, 0.85) for Text Readability */}
              <div className="cdf-content-card-overlay pointer-events-none" />

              <div className="relative z-10 space-y-3 min-w-0">
                <span className="cdf-nowrap-token inline-block bg-[#0B1510] border border-[rgba(0,255,102,0.55)] text-[#00FF66] font-mono text-[11px] font-bold tracking-[0.06em] px-2.5 py-1 uppercase">
                  {item.badge}
                </span>

                <h2 className="cdf-card-title font-bold text-[#FFFFFF]">
                  {item.title}
                </h2>

                <p className="cdf-body-text text-[#D1D5DB]">
                  {item.summary}
                </p>
              </div>

              <div className="relative z-10 pt-3 border-t border-[rgba(255,255,255,0.12)] font-mono text-[11px] text-[#D1D5DB]">
                상세 운영 안내 추후 공식 SNS 공개
              </div>
            </article>
          ))}

          {/* Expansion Slot spanning full width across both columns */}
          <div className="cdf-dashed-slot cdf-contents-more-slot px-6 py-8 text-center">
            MORE CONTENTS — 추후 공개 예정
          </div>
        </div>
      </div>
    </section>
  );
};
