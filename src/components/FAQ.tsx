/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { FAQ_DATA } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, MessageSquare } from 'lucide-react';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  return (
    <section
      id="faq"
      className="py-24 md:py-32 bg-white text-slate-900 border-b border-slate-100"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Caption and Title */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-blue-600 text-xs font-bold uppercase tracking-wider mb-3">
            FREQUENTLY ASKED QUESTIONS
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            M&A 진단 및 자문 관련 자주 묻는 질문
          </h2>
          <p className="text-slate-600 mt-4 text-sm md:text-base">
            성공적인 인수합병을 준비하는 파트너들을 위해 준비한 최정예 실무 요약 답변입니다.
          </p>
        </div>

        {/* FAQs Accordion Stack */}
        <div id="faq-accordion-stack" className="space-y-4">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                id={`faq-item-${faq.id}`}
                key={faq.id}
                className={`border rounded-2xl transition-all duration-300 ${
                  isOpen
                    ? 'border-blue-500 bg-blue-50/50 shadow-lg shadow-blue-100/40'
                    : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                }`}
              >
                {/* Accordion Trigger */}
                <button
                  id={`faq-trigger-${faq.id}`}
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm md:text-base focus:outline-none focus:ring-1 focus:ring-blue-500/30 rounded-2xl cursor-pointer"
                >
                  <span className="leading-normal">{faq.question}</span>
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? 'bg-blue-600 text-white rotate-180' : 'text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {/* Accordion Content with framer-motion */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-content-wrap-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div id={`faq-answer-${faq.id}`} className="px-6 pb-8 md:px-8 md:pb-10 text-xs md:text-sm text-slate-650 leading-relaxed border-t border-slate-150 pt-6">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* FAQ Bottom Help Center Box */}
        <div id="faq-help-box" className="mt-16 text-center p-8 bg-slate-50 border border-dashed border-slate-300 rounded-3xl">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4 font-bold">
            <MessageSquare className="w-5 h-5" />
          </div>
          <p className="text-sm font-bold text-slate-900 mb-1">궁금증이나 특정 구조화 고민이 해결되지 않으셨나요?</p>
          <p className="text-xs text-slate-500 mb-6 leading-relaxed">
            비정밀 블라인드 비공개 상담을 통해 한 차원 깊이 있는 해결책을 개진해 드립니다. 사전 상담 주선은 전액 무상입니다.
          </p>
          <button
            id="btn-faq-action"
            onClick={() => {
              const target = document.querySelector('#lead-capture-section');
              if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-colors cursor-pointer"
          >
            자문 위원 즉시 매칭 신청
          </button>
        </div>
      </div>
    </section>
  );
}
