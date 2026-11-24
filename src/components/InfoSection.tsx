import React, { useState } from 'react';
import { INFO_GUIDELINES } from '../data/festivalData';
import { ChevronDown, Check, AlertTriangle } from 'lucide-react';

export const InfoSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['baggage', 'slam', 'flag']);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const expandAll = () => {
    setOpenIds(INFO_GUIDELINES.map((item) => item.id));
  };

  const collapseAll = () => {
    setOpenIds([]);
  };

  return (
    <section className="relative bg-[#080A0C] cdf-page-shell min-h-[calc(100vh-4rem)] overflow-x-clip">
      <div className="absolute inset-0 cdf-bg-grid pointer-events-none" />
      <div className="absolute inset-0 cdf-bg-overlay pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto cdf-page-container cdf-section-stack">
        {/* Page Header */}
        <div className="border-b border-[rgba(255,255,255,0.12)] pb-5 space-y-2">
          <p className="font-mono text-[12px] font-bold tracking-[0.08em] text-[#00FF66] uppercase">
            FESTIVAL GUIDELINES &amp; FAQ
          </p>
          <div className="flex items-center justify-between gap-3">
            <h1 className="cdf-section-title font-extrabold text-[#FFFFFF]">
              INFO
            </h1>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={expandAll}
                aria-pressed={openIds.length === INFO_GUIDELINES.length}
                className={`cdf-tab-btn ${
                  openIds.length === INFO_GUIDELINES.length ? 'is-active' : ''
                }`}
              >
                전체 펼치기
              </button>
              <button
                type="button"
                onClick={collapseAll}
                aria-pressed={openIds.length === 0}
                className={`cdf-tab-btn ${
                  openIds.length === 0 ? 'is-active' : ''
                }`}
              >
                전체 접기
              </button>
            </div>
          </div>
        </div>

        {/* 8-Item Accordion List (1-col portrait / centered max-w-720px landscape) */}
        <div className="cdf-info-wrap">
          <div className="cdf-info-list">
            {INFO_GUIDELINES.map((item, idx) => {
              const isOpen = openIds.includes(item.id);
              return (
                <div
                  key={item.id}
                  className={`cdf-card transition-colors ${
                    isOpen ? '!border-[rgba(0,255,102,0.45)]' : ''
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    className="cdf-info-header-btn w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-left cursor-pointer"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="cdf-nowrap-token font-mono text-[12px] font-bold text-[#00FF66] shrink-0">
                        0{idx + 1}
                      </span>
                      <span className="cdf-card-title font-extrabold text-[#FFFFFF]">
                        {item.title}
                      </span>
                      {item.category === 'BAGGAGE' && (
                        <span className="cdf-nowrap-token text-[11px] font-mono font-bold px-2 py-0.5 bg-[rgba(255,77,0,0.14)] text-[#FF783D] border border-[rgba(255,120,61,0.55)] shrink-0">
                          주의
                        </span>
                      )}
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-[#D1D5DB] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#00FF66]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="cdf-info-body px-5 sm:px-6 pb-6 pt-2 border-t border-[rgba(255,255,255,0.08)] space-y-4">
                      {/* FAQ Q. Label */}
                      {item.question && (
                        <div className="flex items-start gap-2.5 cdf-card-title font-bold text-[#FFFFFF]">
                          <span className="text-[#FF4D00] font-extrabold shrink-0">Q.</span>
                          <span>{item.question}</span>
                        </div>
                      )}

                      {/* Main Summary / Answer */}
                      <div className="flex items-start gap-2.5 cdf-body-text text-[#D1D5DB]">
                        {item.question && (
                          <span className="text-[#FFFFFF] font-extrabold shrink-0">A.</span>
                        )}
                        <p>{item.summary}</p>
                      </div>

                      {/* Bullet Details */}
                      {item.bullets && item.bullets.length > 0 && (
                        <ul className="space-y-2 cdf-body-text text-[#D1D5DB] pl-1">
                          {item.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2.5">
                              <span className="text-[#FF4D00] font-bold shrink-0">※</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Baggage Allowed / Prohibited Badges (1-col portrait / 2-col landscape & desktop) */}
                      {(item.allowedItems || item.prohibitedItems) && (
                        <div className="cdf-baggage-grid pt-2">
                          {item.allowedItems && (
                            <div className="p-4 bg-[rgba(0,255,102,0.04)] border border-[rgba(0,255,102,0.35)] space-y-3">
                              <div className="cdf-nowrap-token inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#00FF66] text-[#080A0C] text-[12px] font-bold">
                                <Check className="w-3.5 h-3.5 stroke-[3]" />
                                <span>반입 가능 물품/음식물</span>
                              </div>
                              <ul className="space-y-2 cdf-body-text text-[#D1D5DB]">
                                {item.allowedItems.map((allowed, aIdx) => (
                                  <li key={aIdx} className="flex items-start gap-2">
                                    <span className="text-[#00FF66] font-bold shrink-0">-</span>
                                    <span>{allowed}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {item.prohibitedItems && (
                            <div className="p-4 bg-[rgba(255,77,0,0.06)] border border-[rgba(255,77,0,0.40)] space-y-3">
                              <div className="cdf-nowrap-token inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#FF4D00] text-[#080A0C] text-[12px] font-bold">
                                <AlertTriangle className="w-3.5 h-3.5" />
                                <span>반입 불가 물품/음식물</span>
                              </div>
                              <ul className="space-y-2 cdf-body-text text-[#D1D5DB]">
                                {item.prohibitedItems.map((prohibited, pIdx) => (
                                  <li key={pIdx} className="flex items-start gap-2">
                                    <span className="text-[#FF4D00] font-bold shrink-0">-</span>
                                    <span>{prohibited}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Secondary Note */}
                      {item.note && (
                        <p className="text-[13px] text-[#9CA3AF] pt-1">
                          * {item.note}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
