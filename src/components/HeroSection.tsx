import React, { useState, useEffect, useRef } from 'react';
import { FESTIVAL_INFO, STAGES_DATA, PageView, Stage } from '../data/festivalData';

interface HeroSectionProps {
  onOpenTicketModal: () => void;
  onNavigate: (page: PageView) => void;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const StageSchematicSvg: React.FC<{ stageId: Stage['id'] }> = ({ stageId }) => {
  if (stageId === 'station_stardust') {
    return (
      <svg
        viewBox="0 0 320 150"
        role="img"
        aria-label="STATION STARDUST 삼각형 구조 스테이지 모식도"
        className="w-full h-32 sm:h-36 bg-[#080A0C] border border-[rgba(255,255,255,0.10)]"
      >
        <title>STATION STARDUST 스테이지 구조</title>
        <defs>
          <radialGradient id="stardustGlow" cx="50%" cy="62%" r="55%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#080A0C" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="320" height="150" fill="url(#stardustGlow)" />
        {/* Triangular truss structure inspired by STATION STARDUST */}
        <polygon points="160,18 68,128 252,128" fill="none" stroke="#38BDF8" strokeWidth="2.5" />
        <polygon points="160,34 86,122 234,122" fill="none" stroke="#38BDF8" strokeOpacity="0.45" strokeWidth="1" />
        <line x1="160" y1="18" x2="112" y2="128" stroke="#38BDF8" strokeOpacity="0.35" strokeWidth="1" />
        <line x1="160" y1="18" x2="208" y2="128" stroke="#38BDF8" strokeOpacity="0.35" strokeWidth="1" />
        <rect x="60" y="128" width="200" height="8" fill="#10141A" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <text x="160" y="95" textAnchor="middle" fill="#D1D5DB" fontSize="9" fontFamily="monospace" letterSpacing="2">
          STATION STARDUST
        </text>
      </svg>
    );
  }

  if (stageId === 'vivid_planet') {
    return (
      <svg
        viewBox="0 0 320 150"
        role="img"
        aria-label="VIVID PLANET 27 LED 프로시니엄 및 조명 연출 스테이지 모식도"
        className="w-full h-32 sm:h-36 bg-[#080A0C] border border-[rgba(255,255,255,0.10)]"
      >
        <title>VIVID PLANET 27 스테이지 구조</title>
        <defs>
          <linearGradient id="vividGlow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FF4D00" stopOpacity="0.38" />
            <stop offset="100%" stopColor="#080A0C" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="320" height="150" fill="url(#vividGlow)" />
        {/* Dynamic LED proscenium & light beams inspired by VIVID PLANET 27 */}
        <rect x="44" y="22" width="232" height="104" fill="none" stroke="#FF4D00" strokeWidth="2" />
        <rect x="76" y="34" width="52" height="62" fill="rgba(255,77,0,0.14)" stroke="rgba(255,255,255,0.28)" strokeWidth="1" />
        <rect x="134" y="30" width="52" height="70" fill="rgba(0,255,102,0.10)" stroke="#FF4D00" strokeWidth="1.2" />
        <rect x="192" y="34" width="52" height="62" fill="rgba(255,77,0,0.14)" stroke="rgba(255,255,255,0.28)" strokeWidth="1" />
        <line x1="44" y1="22" x2="110" y2="126" stroke="#FF4D00" strokeOpacity="0.35" strokeWidth="1.5" />
        <line x1="276" y1="22" x2="210" y2="126" stroke="#FF4D00" strokeOpacity="0.35" strokeWidth="1.5" />
        <rect x="40" y="126" width="240" height="8" fill="#10141A" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <text x="160" y="114" textAnchor="middle" fill="#D1D5DB" fontSize="9" fontFamily="monospace" letterSpacing="2">
          VIVID PLANET 27
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 320 150"
      role="img"
      aria-label="WHITEMOON LOUNGE 달을 형상화한 와이드 프레임 스테이지 모식도"
      className="w-full h-32 sm:h-36 bg-[#080A0C] border border-[rgba(255,255,255,0.10)]"
    >
      <title>WHITEMOON LOUNGE 스테이지 구조</title>
      <defs>
        <radialGradient id="moonGlow" cx="50%" cy="48%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#080A0C" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="320" height="150" fill="url(#moonGlow)" />
      {/* Wide frame + crescent moon motif inspired by WHITEMOON LOUNGE */}
      <rect x="40" y="20" width="240" height="106" fill="none" stroke="rgba(255,255,255,0.75)" strokeWidth="1.8" />
      <rect x="52" y="28" width="216" height="90" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
      <circle cx="160" cy="68" r="24" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.85" />
      <path d="M 80 100 Q 160 56 240 100" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" />
      <rect x="36" y="126" width="248" height="8" fill="#10141A" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      <text x="160" y="112" textAnchor="middle" fill="#D1D5DB" fontSize="9" fontFamily="monospace" letterSpacing="2">
        WHITEMOON LOUNGE
      </text>
    </svg>
  );
};

const formatScheduleParts = (approxTime: string) => {
  const match = approxTime.match(/^([^(]+)(\(.+\))$/);
  if (!match) return <span className="cdf-nowrap-token">{approxTime}</span>;
  return (
    <>
      <span className="cdf-nowrap-token">{match[1].trim()}</span>{' '}
      <span className="cdf-nowrap-token text-[#9CA3AF]">{match[2]}</span>
    </>
  );
};

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenTicketModal,
  onNavigate,
}) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [videoFailed, setVideoFailed] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const target = new Date(FESTIVAL_INFO.targetDateTime).getTime();
    const update = () => {
      const diff = Math.max(0, target - Date.now());
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl || videoFailed) return;

    videoEl.muted = true;
    videoEl.defaultMuted = true;
    videoEl.playsInline = true;
    videoEl.setAttribute('playsinline', 'true');
    videoEl.setAttribute('webkit-playsinline', 'true');

    const playPromise = videoEl.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        setVideoFailed(true);
      });
    }
  }, [videoFailed]);

  return (
    <section className="relative bg-[#080A0C] cdf-hero-shell overflow-x-clip">
      {/* Hero Top Band with Full-Bleed Live Rock Festival Loop Video */}
      <div className="relative cdf-hero-band overflow-hidden">
        {/* Layer 1: Immediate First-Frame Poster / Silent Fallback Background Image */}
        <img
          src={`${import.meta.env.BASE_URL}assets/hero-festival-poster.jpg`}
          alt="조명이 쏟아지는 어두운 실내 공연장에서 관객들이 함께 뛰며 열기를 끌어올리는 모습"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />

        {/* Layer 2: Auto-playing Muted Looping Rock Festival Crowd Video (Unmounted cleanly if autoplay/load fails) */}
        {!videoFailed && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            disablePictureInPicture
            disableRemotePlayback
            preload="auto"
            poster={`${import.meta.env.BASE_URL}assets/hero-festival-poster.jpg`}
            aria-hidden="true"
            onError={() => setVideoFailed(true)}
            {...({ 'webkit-playsinline': 'true' } as Record<string, string>)}
            className="cdf-hero-bg-video absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
          >
            <source
              src={`${import.meta.env.BASE_URL}assets/hero-festival-loop.mp4`}
              type="video/mp4"
              onError={() => setVideoFailed(true)}
            />
          </video>
        )}

        {/* Layer 3: Dark Readability Overlay (>= rgba(8, 10, 12, 0.6)) */}
        <div className="cdf-hero-video-overlay pointer-events-none" />

        {/* Layer 4: Subtle Grid & Noise Pattern (<= 18% opacity) */}
        <div className="absolute inset-0 cdf-bg-grid pointer-events-none" />
        <div className="absolute inset-0 cdf-bg-noise pointer-events-none" />

        {/* Layer 5: Hero Core Info Foreground */}
        <div className="relative z-10 max-w-7xl mx-auto cdf-page-container">
          <div className="cdf-hero-top space-y-6">
            <div className="space-y-3">
              <p className="font-mono text-[12px] sm:text-[13px] tracking-[0.08em] text-[#D1D5DB] uppercase">
                MINT PAPER / MPMG PRESENTS · PLAY! BETTER HARDER
              </p>
              <h1 className="cdf-hero-title font-extrabold text-[#FFFFFF] tracking-tight">
                &lt;COUNTDOWN <span className="cdf-nowrap-token">2026-2027</span> FANTASY&gt;
              </h1>
              <p className="cdf-hero-schedule font-bold text-[#00FF66]">
                <span className="cdf-nowrap-token">2026. 12. 31 (THU)</span>{' '}
                <span className="cdf-nowrap-token">13:30 - 익일 05:00</span>
                <span className="hidden sm:inline"> | </span>
                <br className="sm:hidden" />
                <span className="cdf-nowrap-token">KINTEX HALL 7, 8, 9</span>
              </p>
            </div>

            {/* Primary Actions + Real-Time Countdown Strip */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 pt-2">
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  data-ticket-trigger="true"
                  onClick={onOpenTicketModal}
                  className="cdf-nowrap-token bg-[#00FF66] text-[#080A0C] font-bold text-[14px] sm:text-[15px] px-5 sm:px-7 py-3 sm:py-3.5 cursor-pointer hover:brightness-110 transition-all active:scale-95"
                >
                  공식 티켓 예매하기 →
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('lineup')}
                  className="cdf-nowrap-token cdf-card text-[#FFFFFF] font-semibold text-[14px] sm:text-[15px] px-5 sm:px-6 py-3 sm:py-3.5 cursor-pointer hover:border-[#00FF66] hover:text-[#00FF66] transition-colors"
                >
                  라인업 보러가기
                </button>
              </div>

              <div className="cdf-card px-4 sm:px-5 py-3.5 inline-flex items-center justify-between sm:justify-start gap-3.5 sm:gap-7 w-full sm:w-fit font-mono tabular-nums">
                <div>
                  <div className="text-[20px] sm:text-[26px] font-bold text-[#FFFFFF] leading-none">
                    {String(timeLeft.days).padStart(2, '0')}
                  </div>
                  <div className="text-[11px] font-semibold text-[#9CA3AF] mt-1">DAYS</div>
                </div>
                <span className="text-[#9CA3AF]">:</span>
                <div>
                  <div className="text-[20px] sm:text-[26px] font-bold text-[#FFFFFF] leading-none">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </div>
                  <div className="text-[11px] font-semibold text-[#9CA3AF] mt-1">HRS</div>
                </div>
                <span className="text-[#9CA3AF]">:</span>
                <div>
                  <div className="text-[20px] sm:text-[26px] font-bold text-[#FFFFFF] leading-none">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </div>
                  <div className="text-[11px] font-semibold text-[#9CA3AF] mt-1">MIN</div>
                </div>
                <span className="text-[#9CA3AF]">:</span>
                <div>
                  <div className="text-[20px] sm:text-[26px] font-bold text-[#00FF66] leading-none">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </div>
                  <div className="text-[11px] font-bold text-[#00FF66] mt-1">SEC</div>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-1">
              <span className="cdf-nowrap-token font-mono text-[11px] text-[#D1D5DB] bg-[rgba(8,10,12,0.86)] border border-[rgba(255,255,255,0.16)] px-2 py-0.5">
                {videoFailed ? 'AI 생성 이미지' : 'AI 생성 영상'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Background Grid & Scrim for Lower Showcase Sections */}
      <div className="relative pt-4 sm:pt-6">
        <div className="absolute inset-0 cdf-bg-grid pointer-events-none" />
        <div className="absolute inset-0 cdf-bg-overlay pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto cdf-page-container cdf-section-stack">

        {/* 3 Stages Showcase */}
        <div className="space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[rgba(255,255,255,0.12)] pb-3">
            <div className="min-w-0">
              <h2 className="cdf-section-title font-extrabold text-[#FFFFFF] tracking-tight">
                단 하루, 세 개의 스테이지
              </h2>
              <p className="cdf-body-text text-[#D1D5DB] mt-1">
                서로 다른 매력을 가진 세 개의 스테이지에서 펼쳐지는 올나잇 페스티벌
              </p>
            </div>
            <span className="cdf-nowrap-token font-mono text-[12px] font-bold tracking-[0.08em] text-[#00FF66] shrink-0">
              3 STAGES // KINTEX HALL 7, 8, 9
            </span>
          </div>

          <div className="cdf-stages-grid">
            {STAGES_DATA.map((stage) => (
              <article
                key={stage.id}
                className="cdf-card cdf-stage-card flex flex-col justify-between gap-4"
              >
                <div className="space-y-3.5 min-w-0">
                  <div className="space-y-1 min-w-0">
                    <p className="text-[12px] sm:text-[13px] text-[#00FF66] font-bold">
                      {stage.tagline}
                    </p>
                    <h3 className="cdf-stage-name font-extrabold text-[#FFFFFF] tracking-wide">
                      {stage.name}
                    </h3>
                  </div>

                  <StageSchematicSvg stageId={stage.id} />

                  <div className="space-y-2 cdf-body-text text-[#D1D5DB]">
                    <p>{stage.description}</p>
                    <p>{stage.subDescription}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-[rgba(255,255,255,0.10)] flex items-center justify-between text-[12px] sm:text-[13px] text-[#9CA3AF]">
                  <span>{stage.note}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Approximate Stage Operating Hours & Performing Teams */}
        <div className="cdf-card cdf-schedule-box space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[rgba(255,255,255,0.12)] pb-4">
            <h2 className="cdf-section-title font-extrabold text-[#FFFFFF]">
              스테이지별 운영 안내 (예정)
            </h2>
            <span className="cdf-nowrap-token font-mono text-[12px] font-bold tracking-[0.08em] text-[#00FF66]">
              APPROXIMATE SCHEDULE &amp; TEAMS
            </span>
          </div>

          {/* Mobile Portrait: 1-Column Stacked Summary Cards (Zero Horizontal Scroll) */}
          <div className="cdf-schedule-cards-portrait">
            {STAGES_DATA.map((stage) => (
              <div
                key={stage.id}
                className="bg-[#080A0C] border border-[rgba(255,255,255,0.12)] p-4 space-y-2 min-w-0"
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className="cdf-card-title font-extrabold text-[#FFFFFF] cdf-break-anywhere">
                    {stage.name}
                  </h3>
                  <span className="cdf-nowrap-token text-[12px] font-mono font-bold text-[#00FF66] shrink-0">
                    {stage.approxTeams}
                  </span>
                </div>
                <p className="cdf-body-text font-mono tabular-nums text-[#D1D5DB]">
                  {formatScheduleParts(stage.approxTime)}
                </p>
                <p className="text-[13px] text-[#9CA3AF]">
                  {stage.tagline}
                </p>
              </div>
            ))}
          </div>

          {/* Desktop & Mobile Landscape: Full-Width Table */}
          <div className="cdf-schedule-table-desktop">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[rgba(255,255,255,0.12)] text-[12px] sm:text-[13px] text-[#9CA3AF] font-mono">
                  <th className="py-3 pr-3 font-semibold">스테이지</th>
                  <th className="py-3 px-3 font-semibold">대략적 공연 시간</th>
                  <th className="py-3 px-3 font-semibold">예상 출연 팀 수</th>
                  <th className="py-3 pl-3 font-semibold">스테이지 특징</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[rgba(255,255,255,0.08)] cdf-body-text text-[#D1D5DB]">
                {STAGES_DATA.map((stage) => (
                  <tr key={stage.id}>
                    <td className="py-3.5 pr-3 font-bold text-[#FFFFFF] cdf-break-anywhere">
                      {stage.name}
                    </td>
                    <td className="py-3.5 px-3 font-mono tabular-nums">
                      {formatScheduleParts(stage.approxTime)}
                    </td>
                    <td className="py-3.5 px-3 cdf-nowrap-token">
                      {stage.approxTeams}
                    </td>
                    <td className="py-3.5 pl-3 text-[#D1D5DB]">
                      {stage.tagline}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-[13px] text-[#9CA3AF] leading-relaxed pt-1">
            * 상기 스테이지별 대략적 공연 시간 및 출연 팀 수는 현장 및 제작 여건에 따라 변동될 수 있으며, 최종 시간표 및 출연진은 추후 공식 안내를 통해 확정됩니다. (<span className="cdf-nowrap-token">12.01 (TUE)</span> 최종 라인업 발표 예정)
          </p>
          </div>
        </div>
      </div>
    </section>
  );
};
