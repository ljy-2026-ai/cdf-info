import React from 'react';
import { FESTIVAL_INFO, PageView } from '../data/festivalData';

interface FooterProps {
  onNavigate: (page: PageView) => void;
}

const FOOTER_LINKS: { id: PageView; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'lineup', label: 'Lineup' },
  { id: 'timetable', label: 'Time Table' },
  { id: 'contents', label: 'Contents' },
  { id: 'info', label: 'Info' },
  { id: 'md', label: 'MD' },
];

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#080A0C] border-t border-[rgba(255,255,255,0.12)] cdf-footer">
      <div className="max-w-7xl mx-auto cdf-page-container space-y-8">
        {/* Future Site Map Dashed Placeholder Slot */}
        <div className="cdf-dashed-slot px-6 py-7 text-center">
          SITE MAP — 추후 공개 예정
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[13px] text-[#9CA3AF] leading-relaxed">
          <div className="space-y-1 min-w-0">
            <div className="text-[#FFFFFF] font-bold">주최 / 주관</div>
            <p className="text-[#D1D5DB]">주식회사 엠피엠지 (MPMG) / 민트페이퍼 (Mint Paper)</p>
            <p className="font-mono text-[12px] text-[#D1D5DB] cdf-break-anywhere">
              E-mail: {FESTIVAL_INFO.contactEmail}
            </p>
          </div>

          <div className="space-y-1 min-w-0">
            <div className="text-[#FFFFFF] font-bold">일시 및 장소</div>
            <p className="text-[#D1D5DB]">
              <span className="cdf-nowrap-token">2026. 12. 31 (THU)</span>{' '}
              <span className="cdf-nowrap-token">13:30 - 익일 05:00</span>
            </p>
            <a
              href={FESTIVAL_INFO.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[#D1D5DB] hover:text-[#00FF66] underline underline-offset-2 transition-colors cdf-break-anywhere"
            >
              일산 KINTEX 제1전시장 7, 8, 9홀 (네이버 지도 ↗)
            </a>
          </div>

          <div className="space-y-1 min-w-0">
            <div className="text-[#FFFFFF] font-bold">공식 채널</div>
            <a
              href={FESTIVAL_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[#D1D5DB] hover:text-[#00FF66] transition-colors cdf-break-anywhere"
            >
              Instagram @countdownfantasy ↗
            </a>
            <p>최신 라인업 및 현장 안내는 공식 SNS를 통해 순차 공개됩니다.</p>
          </div>
        </div>

        {/* Credits: Official Notice Attribution & Prototype AI Disclosure */}
        <section
          aria-label="Credits"
          className="bg-[#10141A] border border-[rgba(255,255,255,0.14)] px-5 py-4 space-y-2.5 text-[12px] sm:text-[13px] leading-relaxed"
        >
          <div className="flex flex-wrap items-center gap-2">
            <span className="cdf-nowrap-token font-mono text-[12px] font-bold tracking-[0.08em] text-[#00FF66] bg-[#0B1510] border border-[rgba(0,255,102,0.55)] px-2 py-0.5 uppercase">
              CREDITS
            </span>
            <h2 className="text-[#FFFFFF] font-bold text-[13px]">
              공식 공지 출처 및 프로토타입 제작 안내
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[#D1D5DB]">
            <p className="min-w-0">
              <span className="text-[#FFFFFF] font-semibold">공식 공지 출처:</span>{' '}
              COUNTDOWN FANTASY 2026-2027 공식 공지 및 공식 SNS(
              <span className="cdf-nowrap-token font-mono text-[#D1D5DB]">@countdownfantasy</span>
              ), 주식회사 엠피엠지(MPMG)·민트페이퍼(Mint Paper) 공식 안내 자료를 기반으로 정리되었습니다.
            </p>
            <p className="min-w-0">
              <span className="text-[#FFFFFF] font-semibold">AI 활용 내역:</span>{' '}
              본 웹 프로토타입은 공식 공지 데이터를 바탕으로 정보 구조화, 반응형 UI/UX 레이아웃 설계, 프로그램 대표 이미지·배경 영상 에셋 제작 및 프론트엔드 코드 구현 과정에 Gemini, Google AI Studio를 활용하여 제작되었습니다.
            </p>
          </div>
        </section>

        <div className="pt-6 border-t border-[rgba(255,255,255,0.08)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[12px] text-[#9CA3AF] font-mono cdf-footer-bottom-row">
          <p className="text-left">© 2026 COUNTDOWN FANTASY &amp; MINT PAPER. ALL RIGHTS RESERVED.</p>
          <div className="flex flex-wrap justify-start sm:justify-end gap-4">
            {FOOTER_LINKS.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => onNavigate(link.id)}
                className="cdf-nowrap-token text-[#D1D5DB] hover:text-[#00FF66] cursor-pointer transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
