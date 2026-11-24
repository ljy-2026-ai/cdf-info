import React from 'react';

export const TimetableSection: React.FC = () => {
  return (
    <section className="relative bg-[#080A0C] cdf-page-shell min-h-[calc(100vh-4rem)] overflow-x-clip">
      <div className="absolute inset-0 cdf-bg-grid pointer-events-none" />
      <div className="absolute inset-0 cdf-bg-overlay pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto cdf-page-container cdf-section-stack">
        <div className="border-b border-[rgba(255,255,255,0.12)] pb-5">
          <p className="font-mono text-[12px] font-bold tracking-[0.08em] text-[#00FF66] uppercase mb-2">
            FESTIVAL SCHEDULE
          </p>
          <h1 className="cdf-section-title font-extrabold text-[#FFFFFF]">
            TIME TABLE
          </h1>
        </div>

        {/* Single Dashed Placeholder Box */}
        <div className="cdf-dashed-slot cdf-timetable-slot px-6 text-center">
          TIME TABLE — 추후 공개 예정
        </div>

        <p className="cdf-body-text text-[#9CA3AF] text-center">
          * 최종 타임테이블은 3차(최종) 라인업 발표 이후 공식 SNS 및 본 페이지를 통해 공개될 예정입니다.
        </p>
      </div>
    </section>
  );
};
