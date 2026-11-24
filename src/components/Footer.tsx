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

        {/* About · Credits Section */}
        <section
          id="about-credits"
          aria-labelledby="about-credits-heading"
          className="scroll-mt-24 bg-[#10141A] border border-[rgba(255,255,255,0.14)] px-5 py-5 space-y-3.5 text-[12px] sm:text-[13px] leading-relaxed"
        >
          <div className="flex flex-wrap items-center gap-2.5 border-b border-[rgba(255,255,255,0.10)] pb-3">
            <span className="cdf-nowrap-token font-mono text-[12px] font-bold tracking-[0.08em] text-[#00FF66] bg-[#0B1510] border border-[rgba(0,255,102,0.55)] px-2 py-0.5 uppercase">
              ABOUT · CREDITS
            </span>
            <h2 id="about-credits-heading" className="text-[#FFFFFF] font-bold text-[14px]">
              About · Credits
            </h2>
          </div>

          <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2.5 text-[#D1D5DB]">
            <div className="min-w-0">
              <dt className="inline text-[#FFFFFF] font-semibold">내가 한 일 : </dt>
              <dd className="inline">기획, 정보 구성, 화면·수정 방향 결정, 프롬프트 작성</dd>
            </div>

            <div className="min-w-0">
              <dt className="inline text-[#FFFFFF] font-semibold">AI가 한 일 : </dt>
              <dd className="inline">Google AI Studio(Gemini) 기반 구조 및 코드 생성, 수정 보조</dd>
            </div>

            <div className="min-w-0 md:col-span-2">
              <dt className="inline text-[#FFFFFF] font-semibold">이미지·영상 : </dt>
              <dd className="inline">
                AI 생성 이미지·영상 활용 (Google AI Studio 이미지 생성으로 히어로·Contents 대표 이미지 5종 제작, FFmpeg로 히어로 루프 영상 및 첫 프레임 포스터 가공)
              </dd>
            </div>

            <div className="min-w-0 md:col-span-2">
              <dt className="inline text-[#FFFFFF] font-semibold">글꼴 : </dt>
              <dd className="inline">
                Plus Jakarta Sans, JetBrains Mono, Bebas Neue, Do Hyeon, Teko, Nanum Gothic Coding (Google Fonts · SIL Open Font License 1.1)
              </dd>
            </div>

            <div className="min-w-0 md:col-span-2">
              <dt className="inline text-[#FFFFFF] font-semibold">행사 정보·공지 출처 : </dt>
              <dd className="inline">COUNTDOWN FANTASY 2026-2027 공식 공지(민트페이퍼 / 공식 SNS)</dd>
            </div>

            <div className="min-w-0 md:col-span-2 pt-2 border-t border-[rgba(255,255,255,0.08)]">
              <dt className="inline text-[#FFFFFF] font-semibold">안내 : </dt>
              <dd className="inline">
                본 페이지는 웹 디자인 수업 과제로 제작한 프로토타입이며, 실제 예매 및 공식 운영은 각 공식 예매처와 주최 측 안내를 따릅니다.
              </dd>
            </div>
          </dl>
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
            <button
              type="button"
              onClick={() => {
                document.getElementById('about-credits')?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                });
              }}
              className="cdf-nowrap-token text-[#D1D5DB] hover:text-[#00FF66] cursor-pointer transition-colors"
            >
              Credits
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
