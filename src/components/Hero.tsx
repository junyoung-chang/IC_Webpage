/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowDown, Award, Shield, CheckCircle } from 'lucide-react';

interface HeroProps {
  onScrollToForm: () => void;
}

export default function Hero({ onScrollToForm }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 18 },
    },
  };

  return (
    <section
      id="hero-section"
      className="relative min-h-screen bg-white text-slate-900 pt-32 pb-24 md:pt-40 md:pb-32 flex flex-col justify-center overflow-hidden border-b border-slate-200"
    >
      {/* Abstract Corporate Background Elements */}
      <div id="hero-bg-glow-1" className="absolute top-1/4 right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-100/30 blur-[120px] pointer-events-none" />
      <div id="hero-bg-glow-2" className="absolute bottom-10 left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-200/20 blur-[150px] pointer-events-none" />
      <div id="hero-bg-grid" className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f080_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f080_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative w-full z-10">
        <motion.div
          id="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            id="hero-badge"
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-150 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-8 mx-auto"
          >
            <Shield className="w-3.5 h-3.5 text-blue-600" />
            <span>대한민국 TOP-Tier M&A Advisory</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            id="hero-headline"
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[1.12]"
          >
            <span className="text-slate-400 block text-lg md:text-2xl font-bold tracking-[0.2em] mb-4 uppercase">
              SINCE 1997
            </span>
            결과로 검증된 <br className="sm:hidden" />
            <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-blue-700 bg-clip-text text-transparent">
              대한민국 최상위
            </span> <br />
            M&A 전문 자문기관
          </motion.h1>

          {/* Description */}
          <motion.p
            id="hero-description"
            variants={itemVariants}
            className="text-slate-600 text-lg md:text-xl font-normal leading-relaxed max-w-3xl mx-auto mb-12"
          >
            누적 거래규모 <span className="font-semibold text-slate-900 text-xl border-b-2 border-blue-500 bg-blue-50/50 px-1 py-0.5 rounded-sm">2.5조 원 이상</span>.
            산업에 대한 깊이 있는 이해와 독보적인 글로벌 딜 소싱 능력을 품고 기업의 지속 가능한 도약을 약속하는 영구적인 금융 파트너가 됩니다.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            id="hero-buttons"
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
          >
            <button
              id="btn-hero-cta"
              onClick={onScrollToForm}
              className="w-full sm:w-auto px-8 py-4.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-base shadow-xl shadow-blue-500/15 hover:shadow-blue-500/30 hover:scale-[1.02] transform transition-all cursor-pointer flex items-center justify-center gap-2 group"
            >
              <span>M&A 무료 진단 및 자문 신청하기</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform animate-bounce mt-0.5" />
            </button>
            <a
              id="btn-hero-more"
              href="#credentials"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('credentials')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-4.5 rounded-full border border-slate-300 bg-slate-55 hover:bg-slate-100 text-slate-700 hover:text-slate-900 font-bold text-base transition-all text-center"
            >
              자격 증명 둘러보기
            </a>
          </motion.div>

          {/* Key Metrics Dashboard */}
          <motion.div
            id="hero-metrics-grid"
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-12 border-t border-slate-200 max-w-4xl mx-auto text-left"
          >
            <div>
              <p className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">2.5조원+</p>
              <p className="text-xs md:text-sm text-slate-500 mt-1 font-medium">누적 거래 합산 규모</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">29년</p>
              <p className="text-xs md:text-sm text-slate-500 mt-1 font-medium">설립 년수 및 시장 노하우</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">92%</p>
              <p className="text-xs md:text-sm text-slate-500 mt-1 font-medium">자문 성사 및 거래 만족도</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-extrabold text-blue-600 tracking-tight">최고등급</p>
              <p className="text-xs md:text-sm text-slate-500 mt-1 font-medium">중기부 선발 M&A 전문기관</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating features ticker */}
      <div id="hero-floating-pills" className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-6 text-sm text-slate-600 font-medium font-sans hidden md:flex">
        <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-600" /> 철저한 정보 은폐 보장</span>
        <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
        <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-600" /> 국가공인 최고등급 자격</span>
        <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
        <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-600" /> 1:1 VIP 파트너 전담 배치</span>
      </div>
    </section>
  );
}
