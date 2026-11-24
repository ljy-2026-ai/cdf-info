/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { LineupSection } from './components/LineupSection';
import { TimetableSection } from './components/TimetableSection';
import { ContentsSection } from './components/ContentsSection';
import { InfoSection } from './components/InfoSection';
import { MdSection } from './components/MdSection';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { PageView } from './data/festivalData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [isTicketPopoverOpen, setIsTicketPopoverOpen] = useState<boolean>(false);

  const handleNavigate = (page: PageView) => {
    setCurrentPage(page);
    setIsTicketPopoverOpen(false);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HeroSection
            onOpenTicketModal={() => setIsTicketPopoverOpen(true)}
            onNavigate={handleNavigate}
          />
        );
      case 'lineup':
        return <LineupSection />;
      case 'timetable':
        return <TimetableSection />;
      case 'contents':
        return <ContentsSection />;
      case 'info':
        return <InfoSection />;
      case 'md':
        return <MdSection />;
      default:
        return (
          <HeroSection
            onOpenTicketModal={() => setIsTicketPopoverOpen(true)}
            onNavigate={handleNavigate}
          />
        );
    }
  };

  return (
    <div className="cdf-app-root overflow-x-clip min-h-screen bg-[#080A0C] text-[#D1D5DB] flex flex-col font-sans selection:bg-[#00FF66] selection:text-[#080A0C]">
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        isTicketOpen={isTicketPopoverOpen}
        onSetTicketOpen={setIsTicketPopoverOpen}
      />

      <main className="flex-1">
        <div key={currentPage} className="animate-page-enter">
          {renderPage()}
        </div>
      </main>

      <Footer onNavigate={handleNavigate} />

      <BackToTop />
    </div>
  );
}
