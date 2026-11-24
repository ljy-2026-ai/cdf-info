import React, { useState, useEffect, useRef } from 'react';
import { X, ExternalLink, Copy, Check } from 'lucide-react';
import { TICKET_PLATFORMS, FESTIVAL_INFO } from '../data/festivalData';

interface TicketPopoverProps {
  isOpen: boolean;
  onClose: () => void;
}

type PopoverTab = 'general' | 'group';
type CopyKey = 'subject' | 'fields' | 'email';

export const TicketPopover: React.FC<TicketPopoverProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<PopoverTab>('general');
  const [copiedKey, setCopiedKey] = useState<CopyKey | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopy = (key: CopyKey, text: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedKey(key);
    window.setTimeout(() => {
      setCopiedKey((current) => (current === key ? null : current));
    }, 2000);
  };

  return (
    <div
      className="cdf-ticket-popover-bridge"
      role="dialog"
      aria-label="티켓 예매 및 단체 구매"
    >
      <div className="cdf-ticket-popover">
        {/* Popover Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[rgba(255,255,255,0.12)]">
          <h2 className="cdf-card-title font-extrabold text-[#FFFFFF]">
            티켓 예매 및 단체 구매
          </h2>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="예매 팝오버 닫기"
            className="p-1 text-[#D1D5DB] hover:text-[#00FF66] transition-colors cursor-pointer shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Top Tabs: [일반 예매] / [단체 예매 안내] */}
        <div className="grid grid-cols-2 border-b border-[rgba(255,255,255,0.12)]" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'general'}
            onClick={() => setActiveTab('general')}
            className={`cdf-nowrap-token py-2.5 text-[13px] font-bold transition-colors cursor-pointer ${
              activeTab === 'general'
                ? 'bg-[#00FF66] text-[#080A0C]'
                : 'bg-[#10141A] text-[#D1D5DB] hover:text-[#FFFFFF]'
            }`}
          >
            일반 예매
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'group'}
            onClick={() => setActiveTab('group')}
            className={`cdf-nowrap-token py-2.5 text-[13px] font-bold transition-colors cursor-pointer ${
              activeTab === 'group'
                ? 'bg-[#00FF66] text-[#080A0C]'
                : 'bg-[#10141A] text-[#D1D5DB] hover:text-[#FFFFFF]'
            }`}
          >
            단체 예매 안내
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-4 space-y-3.5">
          {activeTab === 'general' ? (
            <div className="space-y-2.5">
              <p className="text-[13px] text-[#D1D5DB]">
                원하시는 공식 예매처를 선택해 예매 페이지로 이동하세요.
              </p>

              <div className="grid grid-cols-1 gap-2">
                {TICKET_PLATFORMS.map((platform) => (
                  <a
                    key={platform.id}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-3.5 py-2.5 bg-[#080A0C] border border-[rgba(255,255,255,0.12)] hover:border-[#00FF66] transition-colors group"
                  >
                    <div className="min-w-0">
                      <div className="text-[14px] font-bold text-[#FFFFFF] group-hover:text-[#00FF66] transition-colors leading-tight cdf-break-anywhere">
                        {platform.name}
                      </div>
                      <div className="text-[11px] text-[#9CA3AF] mt-0.5 leading-snug">
                        {platform.subLabel}
                      </div>
                    </div>
                    <span className="cdf-nowrap-token inline-flex items-center gap-1 text-[12px] font-bold text-[#00FF66] shrink-0 ml-2">
                      <span>이동</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              {/* Copy Toast Feedback */}
              {copiedKey && (
                <div
                  role="status"
                  className="px-3 py-1.5 bg-[#0B1510] border border-[#00FF66] text-[#00FF66] text-[12px] font-bold flex items-center gap-2"
                >
                  <Check className="w-3.5 h-3.5 shrink-0" />
                  <span>클립보드에 복사되었습니다.</span>
                </div>
              )}

              <div className="space-y-2.5">
                {/* 1. Mail Subject */}
                <div className="space-y-1">
                  <div className="text-[11px] font-mono text-[#9CA3AF]">메일 제목 양식</div>
                  <div className="flex items-center justify-between gap-2 bg-[#080A0C] border border-[rgba(255,255,255,0.12)] px-3 py-2">
                    <span className="text-[12px] font-mono text-[#FFFFFF] cdf-break-anywhere">
                      {FESTIVAL_INFO.groupMailSubjectFormat}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleCopy('subject', FESTIVAL_INFO.groupMailSubjectFormat)}
                      aria-label="메일 제목 양식 복사"
                      className="cdf-nowrap-token shrink-0 inline-flex items-center gap-1 px-2 py-1 text-[11px] font-bold border border-[rgba(255,255,255,0.16)] hover:border-[#00FF66] text-[#D1D5DB] hover:text-[#00FF66] cursor-pointer transition-colors"
                    >
                      {copiedKey === 'subject' ? (
                        <>
                          <Check className="w-3 h-3 text-[#00FF66]" />
                          <span className="text-[#00FF66]">복사됨</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>복사</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* 2. Required Fields */}
                <div className="space-y-1">
                  <div className="text-[11px] font-mono text-[#9CA3AF]">필수 기재 항목</div>
                  <div className="flex items-center justify-between gap-2 bg-[#080A0C] border border-[rgba(255,255,255,0.12)] px-3 py-2">
                    <span className="text-[12px] text-[#D1D5DB]">
                      {FESTIVAL_INFO.groupRequiredFields}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleCopy('fields', FESTIVAL_INFO.groupRequiredFields)}
                      aria-label="필수 기재 항목 복사"
                      className="cdf-nowrap-token shrink-0 inline-flex items-center gap-1 px-2 py-1 text-[11px] font-bold border border-[rgba(255,255,255,0.16)] hover:border-[#00FF66] text-[#D1D5DB] hover:text-[#00FF66] cursor-pointer transition-colors"
                    >
                      {copiedKey === 'fields' ? (
                        <>
                          <Check className="w-3 h-3 text-[#00FF66]" />
                          <span className="text-[#00FF66]">복사됨</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>복사</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* 3. Contact Email */}
                <div className="space-y-1">
                  <div className="text-[11px] font-mono text-[#9CA3AF]">문의 및 접수 메일</div>
                  <div className="flex items-center justify-between gap-2 bg-[#080A0C] border border-[rgba(255,255,255,0.12)] px-3 py-2">
                    <span className="text-[12px] font-mono font-bold text-[#00FF66] cdf-break-anywhere">
                      {FESTIVAL_INFO.contactEmail}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleCopy('email', FESTIVAL_INFO.contactEmail)}
                      aria-label="문의 메일 주소 복사"
                      className="cdf-nowrap-token shrink-0 inline-flex items-center gap-1 px-2 py-1 text-[11px] font-bold border border-[rgba(255,255,255,0.16)] hover:border-[#00FF66] text-[#D1D5DB] hover:text-[#00FF66] cursor-pointer transition-colors"
                    >
                      {copiedKey === 'email' ? (
                        <>
                          <Check className="w-3 h-3 text-[#00FF66]" />
                          <span className="text-[#00FF66]">복사됨</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>복사</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Non-commercial Notice */}
              <div className="pt-2.5 border-t border-[rgba(255,255,255,0.10)] text-[11px] text-[#9CA3AF] leading-relaxed space-y-1">
                <p>
                  * 단체 예매 티켓은 순수 관람 목적의 비상업적 용도로만 신청 가능합니다.
                </p>
                <p>
                  * 기업 마케팅, 경품 이벤트, 재판매 등 상업적·사적 활용은 엄격히 불가합니다.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
