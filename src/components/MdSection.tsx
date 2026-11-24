import React from 'react';
import { MD_FAQ_ITEMS } from '../data/festivalData';

export const MdSection: React.FC = () => {
  return (
    <section className="relative bg-[#080A0C] cdf-page-shell min-h-[calc(100vh-4rem)] overflow-x-clip">
      <div className="absolute inset-0 cdf-bg-grid pointer-events-none" />
      <div className="absolute inset-0 cdf-bg-overlay pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto cdf-page-container cdf-section-stack cdf-md-wrap">
        <div className="border-b border-[rgba(255,255,255,0.12)] pb-5">
          <p className="font-mono text-[12px] font-bold tracking-[0.08em] text-[#00FF66] uppercase mb-2">
            OFFICIAL &amp; ARTIST MERCHANDISE FAQ
          </p>
          <h1 className="cdf-section-title font-extrabold text-[#FFFFFF]">
            MD
          </h1>
        </div>

        {/* MD FAQ Cards (1-col portrait / 2-col landscape) */}
        <div className="cdf-md-grid">
          {MD_FAQ_ITEMS.map((faq) => (
            <article key={faq.id} className="cdf-card cdf-md-card space-y-4">
              <h2 className="flex items-start gap-2.5 cdf-card-title font-extrabold text-[#FFFFFF]">
                <span className="text-[#FF4D00] shrink-0">Q.</span>
                <span>{faq.question}</span>
              </h2>
              <div className="flex items-start gap-2.5 cdf-body-text text-[#D1D5DB] pl-0.5">
                <span className="text-[#FFFFFF] font-extrabold shrink-0">A.</span>
                <p>{faq.answer}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Upcoming MD Details Dashed Placeholder */}
        <div className="cdf-dashed-slot px-6 py-10 text-center">
          OFFICIAL &amp; ARTIST MD — 품목 및 상세 안내 추후 공개 예정
        </div>
      </div>
    </section>
  );
};
