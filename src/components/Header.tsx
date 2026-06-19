/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileDown, Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onScrollToForm: () => void;
  onOpenExportModal: () => void;
}

export default function Header({ onScrollToForm, onOpenExportModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: '주요 자격', href: '#credentials' },
    { name: '서비스 범위', href: '#services' },
    { name: '트랙 레코드', href: '#track-record' },
    { name: '핵심 강점', href: '#strengths' },
    { name: '자주 묻는 질문', href: '#faq' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header
        id="app-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200 py-4 shadow-sm'
            : 'bg-white/50 backdrop-blur-md py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            id="header-logo"
            href="#"
            className="flex items-center gap-3 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-8 h-8 bg-blue-600 rounded-sm flex items-center justify-center font-bold text-xs italic shadow-md shadow-blue-500/10">
              <span className="text-white font-extrabold font-mono">ICP</span>
            </div>
            <div className="flex flex-col">
              <span className="text-slate-900 font-bold text-base md:text-lg tracking-tight uppercase font-sans group-hover:text-blue-600 transition-colors">
                InterCapital Partners
              </span>
              <span className="text-[8px] text-slate-500 tracking-[0.2em] uppercase -mt-0.5 font-mono">
                M&A Investment Banking
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                id={`nav-item-${item.href.replace('#', '')}`}
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div id="header-actions" className="hidden sm:flex items-center gap-4">
            <button
              id="btn-open-export"
              onClick={onOpenExportModal}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-300 bg-slate-50 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 hover:border-slate-400 transition-all cursor-pointer"
              title="단일 HTML 코드 보기 및 저장"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>HTML 파일 추출</span>
            </button>
            <button
              id="btn-header-cta"
              onClick={onScrollToForm}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 text-xs font-bold text-white hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all cursor-pointer"
            >
              <span>무료 진단 신청</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="btn-mobile-menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-slate-500 hover:text-slate-800 focus:outline-none"
            aria-label="메뉴 열기"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-18 left-0 right-0 bg-white/95 backdrop-blur-2xl z-40 border-b border-slate-200 px-6 py-8 flex flex-col gap-6 lg:hidden shadow-lg"
          >
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <a
                  id={`mobile-nav-item-${item.href.replace('#', '')}`}
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="text-slate-700 hover:text-slate-900 text-lg font-semibold transition-colors py-2 border-b border-slate-100"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3 pt-4 border-t border-slate-200">
              <button
                id="btn-mobile-export"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenExportModal();
                }}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-slate-300 bg-slate-50 text-sm font-semibold text-slate-700 hover:text-slate-900"
              >
                <FileDown className="w-4 h-4" />
                <span>HTML 단독 파일 추출</span>
              </button>
              <button
                id="btn-mobile-cta"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onScrollToForm();
                }}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-blue-600 text-sm font-bold text-white hover:bg-blue-500 shadow-lg shadow-blue-500/10"
              >
                <span>무료 진단 & 자문 신청하기</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
