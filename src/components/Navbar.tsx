import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { PageView } from '../data/festivalData';
import { TicketPopover } from './TicketPopover';

interface NavbarProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
  isTicketOpen: boolean;
  onSetTicketOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NAV_ITEMS: { id: PageView; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'lineup', label: 'Lineup' },
  { id: 'timetable', label: 'Time Table' },
  { id: 'contents', label: 'Contents' },
  { id: 'info', label: 'Info' },
  { id: 'md', label: 'MD' },
];

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  isTicketOpen,
  onSetTicketOpen,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const ticketWrapperRef = useRef<HTMLDivElement>(null);
  const hoverOpenedAtRef = useRef<number>(0);
  const handledByTouchDownRef = useRef<number>(0);

  const handleSelectPage = (page: PageView) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    onSetTicketOpen(false);
    window.scrollTo(0, 0);
  };

  // Close ticket popover when clicking/tapping outside wrapper
  useEffect(() => {
    if (!isTicketOpen) return;

    const handleOutsidePointerDown = (event: PointerEvent) => {
      const target = event.target as Element | null;
      if (!target) return;
      if (ticketWrapperRef.current?.contains(target)) return;
      if (target.closest('[data-ticket-trigger="true"]')) return;
      onSetTicketOpen(false);
    };

    document.addEventListener('pointerdown', handleOutsidePointerDown);
    return () => {
      document.removeEventListener('pointerdown', handleOutsidePointerDown);
    };
  }, [isTicketOpen, onSetTicketOpen]);

  const handleButtonPointerEnter = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (e.pointerType !== 'mouse') return;
    setMobileMenuOpen(false);
    if (!isTicketOpen) {
      hoverOpenedAtRef.current = Date.now();
      onSetTicketOpen(true);
    }
  };

  const handleButtonPointerDown = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (e.pointerType === 'touch' || e.pointerType === 'pen') {
      handledByTouchDownRef.current = Date.now();
      setMobileMenuOpen(false);
      onSetTicketOpen((prev) => !prev);
    }
  };

  const handleTicketButtonClick = () => {
    setMobileMenuOpen(false);
    // Skip trailing synthetic click if touch/pen tap was already handled in onPointerDown
    if (Date.now() - handledByTouchDownRef.current < 600) {
      return;
    }
    // Keep open if mouse hovered and clicked right away
    if (isTicketOpen && Date.now() - hoverOpenedAtRef.current < 320) {
      return;
    }
    onSetTicketOpen((prev) => !prev);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[rgba(8,10,12,0.92)] backdrop-blur-md border-b border-[rgba(255,255,255,0.12)]">
      <div className="max-w-7xl mx-auto cdf-header-inner flex items-center justify-between gap-2 sm:gap-4">
        {/* Left: Brand Logo -> Home */}
        <button
          type="button"
          onClick={() => handleSelectPage('home')}
          className="cdf-brand-logo text-left text-[#FFFFFF] font-extrabold tracking-tight text-[11.5px] min-[400px]:text-[13px] min-[769px]:text-[16px] whitespace-nowrap truncate max-w-[calc(100vw-164px)] sm:max-w-none cursor-pointer hover:text-[#00FF66] transition-colors"
          aria-label="Home으로 이동"
        >
          COUNTDOWN FANTASY 2026-2027
        </button>

        {/* Center: Desktop Navigation */}
        <nav
          aria-label="주요 메뉴"
          className="cdf-desktop-nav items-center gap-6 lg:gap-8 text-[14px] font-medium"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelectPage(item.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`whitespace-nowrap shrink-0 py-1.5 border-b-2 transition-colors cursor-pointer ${
                  isActive
                    ? 'text-[#00FF66] border-[#00FF66] font-bold'
                    : 'text-[#D1D5DB] border-transparent hover:text-[#FFFFFF]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right: Ticket Popover Wrapper + Mobile Hamburger */}
        <div className="flex items-center gap-2 shrink-0">
          <div
            ref={ticketWrapperRef}
            className="relative inline-flex"
          >
            <button
              type="button"
              onPointerEnter={handleButtonPointerEnter}
              onPointerDown={handleButtonPointerDown}
              onClick={handleTicketButtonClick}
              aria-expanded={isTicketOpen}
              aria-haspopup="dialog"
              className="cdf-nav-ticket-btn bg-[#00FF66] text-[#080A0C] font-bold text-[12px] min-[400px]:text-[13px] min-[769px]:text-[14px] px-2.5 min-[400px]:px-3.5 min-[769px]:px-5 py-1.5 min-[400px]:py-2 whitespace-nowrap shrink-0 cursor-pointer hover:brightness-110 transition-all active:scale-95"
            >
              예매하기
            </button>

            <TicketPopover
              isOpen={isTicketOpen}
              onClose={() => onSetTicketOpen(false)}
            />
          </div>

          <button
            type="button"
            onClick={() => {
              onSetTicketOpen(false);
              setMobileMenuOpen((prev) => !prev);
            }}
            className="cdf-mobile-hamburger items-center justify-center p-1.5 text-[#FFFFFF] cursor-pointer shrink-0"
            aria-label={mobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#FFFFFF]" />
            ) : (
              <Menu className="w-6 h-6 text-[#FFFFFF]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Vertical Dropdown Menu (Portrait <= 768px & Landscape <= 932px) */}
      {mobileMenuOpen && (
        <nav
          aria-label="모바일 메뉴"
          className="cdf-mobile-drawer bg-[rgba(8,10,12,0.98)] border-b border-[rgba(255,255,255,0.12)] py-3"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelectPage(item.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`w-full text-left py-3 px-2 text-[15px] border-b border-[rgba(255,255,255,0.08)] last:border-b-0 flex items-center justify-between cursor-pointer transition-colors ${
                  isActive
                    ? 'text-[#00FF66] font-bold'
                    : 'text-[#D1D5DB] hover:text-[#FFFFFF]'
                }`}
              >
                <span className={isActive ? 'border-b-2 border-[#00FF66] pb-0.5' : ''}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>
      )}
    </header>
  );
};
