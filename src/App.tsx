/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustCredibility from './components/TrustCredibility';
import CoreServices from './components/CoreServices';
import TrackRecord from './components/TrackRecord';
import WhyInterCapital from './components/WhyInterCapital';
import FAQ from './components/FAQ';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';
import HTMLSaver from './components/HTMLSaver';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const [isExportModelOpen, setIsExportModelOpen] = useState(false);

  // Smooth scroll handler targeting the lead capturing questionnaire
  const handleScrollToForm = () => {
    const target = document.querySelector('#lead-capture-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div id="landing-app-root" className="bg-white min-h-screen text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* Sticky Header */}
      <Header
        onScrollToForm={handleScrollToForm}
        onOpenExportModal={() => setIsExportModelOpen(true)}
      />

      <main id="main-content-stream">
        {/* ① 히어로 섹션 */}
        <Hero onScrollToForm={handleScrollToForm} />

        {/* ② 국가공인 자격 섹션 */}
        <TrustCredibility />

        {/* ③ 비즈니스 커버리지 섹션 */}
        <CoreServices onScrollToForm={handleScrollToForm} />

        {/* ④ 독보적인 M&A 트랙 레코드 */}
        <TrackRecord />

        {/* ⑤ 핵심 강점 */}
        <WhyInterCapital />

        {/* ⑥ 자주 묻는 질문 */}
        <FAQ />

        {/* ⑦ 리드 수집 폼 */}
        <LeadForm />
      </main>

      {/* 푸터 영역 */}
      <Footer />

      {/* Standalone index.html saving wizard modal */}
      <AnimatePresence>
        {isExportModelOpen && (
          <HTMLSaver
            isOpen={isExportModelOpen}
            onClose={() => setIsExportModelOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
