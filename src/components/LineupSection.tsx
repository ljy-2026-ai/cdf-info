import React, { useState } from 'react';
import { ARTISTS_LINEUP } from '../data/festivalData';

export const LineupSection: React.FC = () => {
  const [waveFilter, setWaveFilter] = useState<'all' | '2nd' | '1st'>('all');

  const displayedArtists = ARTISTS_LINEUP.filter((artist) => {
    if (waveFilter === 'all') return true;
    return artist.lineupWave === waveFilter;
  });

  return (
    <section className="relative bg-[#080A0C] cdf-page-shell min-h-[calc(100vh-4rem)] overflow-x-clip">
      <div className="absolute inset-0 cdf-bg-grid pointer-events-none" />
      <div className="absolute inset-0 cdf-bg-overlay pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto cdf-page-container cdf-section-stack">
        {/* Heading & Wave Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[rgba(255,255,255,0.12)] pb-5">
          <div className="min-w-0">
            <p className="font-mono text-[12px] font-bold tracking-[0.08em] text-[#00FF66] uppercase mb-2">
              LINE-UP // 1ST &amp; 2ND REVEAL
            </p>
            <h1 className="cdf-section-title font-extrabold text-[#FFFFFF]">
              LINEUP
            </h1>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setWaveFilter('all')}
              className={`cdf-tab-btn ${waveFilter === 'all' ? 'is-selected' : ''}`}
            >
              전체 공개 (20팀)
            </button>
            <button
              type="button"
              onClick={() => setWaveFilter('2nd')}
              className={`cdf-tab-btn ${waveFilter === '2nd' ? 'is-selected' : ''}`}
            >
              2차 라인업 (8팀)
            </button>
            <button
              type="button"
              onClick={() => setWaveFilter('1st')}
              className={`cdf-tab-btn ${waveFilter === '1st' ? 'is-selected' : ''}`}
            >
              1차 라인업 (12팀)
            </button>
          </div>
        </div>

        {/* Clean Non-Clickable Artist Grid (2 cols portrait / 4 cols landscape & desktop) */}
        <div className="cdf-lineup-grid">
          {displayedArtists.map((artist) => (
            <article
              key={artist.id}
              className="cdf-card cdf-artist-card flex flex-col justify-between gap-3 cursor-default hover:border-[#00FF66] transition-[border-color] duration-200 ease-in-out"
            >
              <div>
                {artist.lineupWave === '2nd' ? (
                  <span className="cdf-nowrap-token inline-block font-mono text-[11px] font-bold tracking-[0.06em] text-[#00FF66] bg-[#0B1510] border border-[rgba(0,255,102,0.55)] px-2 py-0.5 uppercase">
                    2ND LINE-UP
                  </span>
                ) : (
                  <span className="cdf-nowrap-token inline-block font-mono text-[11px] font-bold tracking-[0.06em] text-[#9CA3AF] uppercase">
                    1ST LINE-UP
                  </span>
                )}
              </div>

              <h2 className="cdf-artist-name font-bold text-[#FFFFFF]">
                {artist.name}
              </h2>
            </article>
          ))}

          {/* 3rd Final Line-up Dashed Expansion Slot (Full Grid Span) */}
          <div className="cdf-dashed-slot cdf-lineup-slot px-6 py-8 text-center">
            3RD (FINAL) LINE-UP — <span className="cdf-nowrap-token">12.01 (TUE)</span> UPDATE 예정
          </div>
        </div>
      </div>
    </section>
  );
};
