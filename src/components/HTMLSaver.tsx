/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { X, Copy, Download, Check, FileCode, ExternalLink, HelpCircle } from 'lucide-react';

interface HTMLSaverProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HTMLSaver({ isOpen, onClose }: HTMLSaverProps) {
  const [copied, setCopied] = useState(false);

  // Generate the absolute single page HTML contents
  const generateHTMLCode = () => {
    return `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>인터캐피탈파트너스 | 대한민국 최상위 M&A 전문 자문기관</title>
  
  <!-- Premium Font Pretendard -->
  <link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css" />
  
  <!-- FontAwesome CDN for Premium Corporate Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- Tailwind Configuration to inject Pretendard and custom corporate palettes -->
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
          },
          colors: {
            navy: {
              50: '#f1f5f9',
              100: '#e2e8f0',
              800: '#1e293b',
              900: '#0f172a',
              950: '#0b0f19',
            }
          }
        }
      }
    }
  </script>
  
  <style>
    html {
      scroll-behavior: smooth;
    }
    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: #0f172a;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: #334155;
      border-radius: 4px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: #2563eb;
    }
  </style>
</head>
<body class="bg-[#0b0f19] text-white font-sans antialiased overflow-x-hidden">

  <!-- Header Section -->
  <header id="app-header" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent py-6">
    <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">
      <a href="#" class="flex items-center gap-3 group" onclick="window.scrollTo({top: 0, behavior: 'smooth'}); return false;">
        <div class="w-9 h-9 rounded-lg bg-gradient-to-tr from-blue-600 to-amber-500 flex items-center justify-center shadow-lg">
          <span class="text-white font-extrabold text-sm tracking-wider">ICP</span>
        </div>
        <div class="flex flex-col">
          <span class="text-white font-bold text-lg md:text-xl tracking-wide">
            InterCapital <span class="text-blue-400 font-medium">Partners</span>
          </span>
          <span class="text-[9px] text-slate-400 tracking-[0.2em] uppercase -mt-1">
            M&A Investment Banking
          </span>
        </div>
      </a>

      <!-- Desktop Nav -->
      <nav class="hidden lg:flex items-center gap-8">
        <a href="#credentials" class="text-slate-300 hover:text-white text-sm font-medium transition-colors">주요 자격</a>
        <a href="#services" class="text-slate-300 hover:text-white text-sm font-medium transition-colors">서비스 범위</a>
        <a href="#track-record" class="text-slate-300 hover:text-white text-sm font-medium transition-colors">트랙 레코드</a>
        <a href="#strengths" class="text-slate-300 hover:text-white text-sm font-medium transition-colors">핵심 강점</a>
        <a href="#faq" class="text-slate-300 hover:text-white text-sm font-medium transition-colors">자주 묻는 질문</a>
      </nav>

      <!-- Action Button -->
      <div class="hidden sm:flex items-center gap-4">
        <a href="#lead-capture" class="flex items-center gap-2 px-6 py-2.5 rounded-full bg-blue-600 text-xs font-bold text-white hover:bg-blue-500 transition-all">
          <span>무료 진단 신청</span>
          <i class="fa-solid fa-arrow-right text-[10px]"></i>
        </a>
      </div>

      <!-- Mobile Toggle -->
      <button onclick="toggleMobileMenu()" class="lg:hidden p-2 text-slate-400 hover:text-white focus:outline-none">
        <i id="menu-icon" class="fa-solid fa-bars text-xl"></i>
      </button>
    </div>
  </header>

  <!-- Mobile Drawer Menu -->
  <div id="mobile-menu" class="fixed top-20 left-0 right-0 bg-[#0b0f19]/95 backdrop-blur-2xl z-40 border-b border-slate-800/80 px-6 py-8 hidden flex-col gap-6 lg:hidden">
    <div class="flex flex-col gap-4">
      <a href="#credentials" onclick="closeMobileMenu()" class="text-slate-300 text-lg py-2 border-b border-slate-800/50">주요 자격</a>
      <a href="#services" onclick="closeMobileMenu()" class="text-slate-300 text-lg py-2 border-b border-slate-800/50">서비스 범위</a>
      <a href="#track-record" onclick="closeMobileMenu()" class="text-slate-300 text-lg py-2 border-b border-slate-800/50">트랙 레코드</a>
      <a href="#strengths" onclick="closeMobileMenu()" class="text-slate-300 text-lg py-2 border-b border-slate-800/50">핵심 강점</a>
      <a href="#faq" onclick="closeMobileMenu()" class="text-slate-300 text-lg py-2 border-b border-slate-800/50">자주 묻는 질문</a>
    </div>
    <a href="#lead-capture" onclick="closeMobileMenu()" class="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-blue-600 text-sm font-bold text-white">
      <span>무료 진단 & 자문 신청하기</span>
      <i class="fa-solid fa-arrow-right text-xs"></i>
    </a>
  </div>

  <!-- ① Hero Section (Hero) -->
  <section class="relative min-h-screen pt-32 pb-24 md:pt-40 md:pb-32 flex flex-col justify-center overflow-hidden">
    <div class="absolute top-1/4 right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-900/15 blur-[120px] pointer-events-none"></div>
    <div class="absolute bottom-10 left-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-900/10 blur-[150px] pointer-events-none"></div>
    <div class="max-w-7xl mx-auto px-6 relative w-full z-10 text-center max-w-5xl">
      
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-8 mx-auto">
        <i class="fa-solid fa-shield-halved"></i>
        <span>대한민국 TOP-Tier M&A Advisory</span>
      </div>

      <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[1.12]">
        <span class="text-slate-400 block text-lg md:text-2xl font-semibold tracking-[0.2em] mb-4 uppercase">
          SINCE 1997
        </span>
        결과로 검증된 대한민국 최상위 M&A 전문 자문기관
      </h1>

      <p class="text-slate-300 text-lg md:text-xl font-normal leading-relaxed max-w-3xl mx-auto mb-12">
        누적 거래규모 <span class="font-semibold text-slate-100 border-b-2 border-blue-500">2.5조 원 이상</span>.
        산업에 대한 깊이 있는 이해와 독보적인 글로벌 딜 소싱 능력을 품고 기업의 지속 가능한 도약을 약속하는 영구적인 금융 파트너가 됩니다.
      </p>

      <div class="flex gap-4 justify-center items-center mb-20">
        <a href="#lead-capture" class="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-base shadow-xl transition-all">
          M&A 무료 진단 및 자문 신청하기
        </a>
      </div>

      <!-- Key Metrics -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-12 border-t border-slate-800/80 max-w-4xl mx-auto text-left">
        <div>
          <p class="text-3xl md:text-4xl font-bold tracking-tight">2.5조원+</p>
          <p class="text-xs md:text-sm text-slate-400 mt-1">누적 거래 합산 규모</p>
        </div>
        <div>
          <p class="text-3xl md:text-4xl font-bold tracking-tight">29년</p>
          <p class="text-xs md:text-sm text-slate-400 mt-1">설립 년수 및 노하우</p>
        </div>
        <div>
          <p class="text-3xl md:text-4xl font-bold tracking-tight">92%</p>
          <p class="text-xs md:text-sm text-slate-400 mt-1">자문 성사 및 고객 만족</p>
        </div>
        <div>
          <p class="text-3xl md:text-4xl font-bold text-blue-400 tracking-tight">최고등급</p>
          <p class="text-xs md:text-sm text-slate-400 mt-1">중기부 공인 전문기관</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ② 국가공인 자격 섹션 (Trust & Credibility) -->
  <section id="credentials" class="py-24 md:py-32 bg-slate-50 border-y border-slate-200 text-slate-900">
    <div class="max-w-7xl mx-auto px-6">
      <div class="max-w-3xl mb-16 md:mb-20">
        <p class="text-blue-600 text-xs font-bold uppercase tracking-wider mb-3">GOVERNMENT CERTIFIED CREDIBILITY</p>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
          대한민국 정부가 인증한 <br>
          국가공인 전문 M&A 자문·협력기관
        </h2>
        <p class="text-slate-500 mt-6 leading-relaxed text-sm md:text-base">
          인터캐피탈파트너스는 공공기관 및 거래소 등의 엄격한 심사 문턱을 거쳐 선정된 우수 투자 자문기관입니다. 
          투명한 신뢰도에 기반하여 대한민국 기업들의 건전한 성장을 이끌고 있으며, 제도적 이점과 연계하여 최선의 거래 구조를 구체화합니다.
        </p>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-slate-200 rounded-3xl overflow-hidden bg-white shadow-sm">
        
        <!-- MSS -->
        <div class="p-8 md:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200">
          <div>
            <div class="mb-8 flex items-start justify-between">
              <span class="text-xs uppercase font-mono text-slate-400 font-semibold">Credential 1</span>
              <i class="fa-solid fa-award text-3xl text-blue-600"></i>
            </div>
            <div class="mb-6 py-4 px-5 bg-slate-100 rounded-xl border border-dashed border-slate-300 flex flex-col items-center justify-center text-center">
              <span class="text-[9px] text-slate-500 font-mono">IMG SRC PLACEHOLDER</span>
              <span class="text-xs font-semibold text-slate-700 mt-1 font-mono">src="[중소벤처기업부 로고.png]"</span>
            </div>
            <h3 class="text-lg font-bold mb-2">중소벤처기업부</h3>
            <p class="text-xs font-bold text-blue-600 bg-blue-50 inline-block px-2.5 py-1 rounded mb-3">
              M&A 자문기관 최고등급 획득
            </p>
          </div>
          <p class="text-xs text-slate-500 mt-4 border-t border-slate-100 pt-4 leading-relaxed">
            기업승계 중개기관 최초 선정 및 공공 펀드 운용 심사위원 참여 자격 부여
          </p>
        </div>

        <!-- KIBO -->
        <div class="p-8 md:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200">
          <div>
            <div class="mb-8 flex items-start justify-between">
              <span class="text-xs uppercase font-mono text-slate-400 font-semibold">Credential 2</span>
              <i class="fa-solid fa-shield-heart text-3xl text-indigo-600"></i>
            </div>
            <div class="mb-6 py-4 px-5 bg-slate-100 rounded-xl border border-dashed border-slate-300 flex flex-col items-center justify-center text-center">
              <span class="text-[9px] text-slate-500 font-mono">IMG SRC PLACEHOLDER</span>
              <span class="text-xs font-semibold text-slate-700 mt-1 font-mono">src="[기술보증기금 로고.png]"</span>
            </div>
            <h3 class="text-lg font-bold mb-2">기술보증기금</h3>
            <p class="text-xs font-bold text-blue-600 bg-blue-50 inline-block px-2.5 py-1 rounded mb-3">
              M&A 파트너스 최초 선정
            </p>
          </div>
          <p class="text-xs text-slate-500 mt-4 border-t border-slate-100 pt-4 leading-relaxed">
            민관협력 제1호 M&A 매칭성공 및 우수 협력 네트워크 표창 수상
          </p>
        </div>

        <!-- KRX -->
        <div class="p-8 md:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200">
          <div>
            <div class="mb-8 flex items-start justify-between">
              <span class="text-xs uppercase font-mono text-slate-400 font-semibold">Credential 3</span>
              <i class="fa-solid fa-graduation-cap text-3xl text-sky-600"></i>
            </div>
            <div class="mb-6 py-4 px-5 bg-slate-100 rounded-xl border border-dashed border-slate-300 flex flex-col items-center justify-center text-center">
              <span class="text-[9px] text-slate-500 font-mono">IMG SRC PLACEHOLDER</span>
              <span class="text-xs font-semibold text-slate-700 mt-1 font-mono">src="[한국거래소 로고.png]"</span>
            </div>
            <h3 class="text-lg font-bold mb-2">한국거래소</h3>
            <p class="text-xs font-bold text-blue-600 bg-blue-50 inline-block px-2.5 py-1 rounded mb-3">
              KRX M&A 전문기관 최초 선정
            </p>
          </div>
          <p class="text-xs text-slate-500 mt-4 border-t border-slate-100 pt-4 leading-relaxed">
            상장사 매칭 시스템 공식 연동 및 우회상장 타당성 검토 자문 수행
          </p>
        </div>

        <!-- KITIA -->
        <div class="p-8 md:p-10 flex flex-col justify-between border-slate-200">
          <div>
            <div class="mb-8 flex items-start justify-between">
              <span class="text-xs uppercase font-mono text-slate-400 font-semibold">Credential 4</span>
              <i class="fa-solid fa-fire text-3xl text-amber-600"></i>
            </div>
            <div class="mb-6 py-4 px-5 bg-slate-100 rounded-xl border border-dashed border-slate-300 flex flex-col items-center justify-center text-center">
              <span class="text-[9px] text-slate-500 font-mono">IMG SRC PLACEHOLDER</span>
              <span class="text-xs font-semibold text-slate-700 mt-1 font-mono">src="[KITIA 로고.png]"</span>
            </div>
            <h3 class="text-lg font-bold mb-2">KITIA</h3>
            <p class="text-xs font-bold text-blue-600 bg-blue-50 inline-block px-2.5 py-1 rounded mb-3">
              한국소재부품장비투자기관협의회
            </p>
          </div>
          <p class="text-xs text-slate-500 mt-4 border-t border-slate-100 pt-4 leading-relaxed">
            소부장 전문 기업 투자유치 및 크로스보더(해외) M&A 공식 협력 파트너
          </p>
        </div>

      </div>
    </div>
  </section>

  <!-- ③ 비즈니스 커버리지 섹션 (Core Services) -->
  <section id="services" class="py-24 md:py-32 bg-white text-slate-900">
    <div class="max-w-7xl mx-auto px-6">
      <div class="max-w-3xl mb-16 md:mb-24 text-center mx-auto">
        <p class="text-blue-600 text-xs font-bold uppercase tracking-wider mb-3">BUSINESS COVERAGE</p>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
          완벽한 거래 성사를 위한 <br>
          인터캐피탈의 핵심 비즈니스 영역
        </h2>
      </div>

      <!-- 3 Columns -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        
        <!-- Card 1 -->
        <div class="p-8 md:p-10 rounded-3xl border border-slate-200 bg-slate-50/50 flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-8">
              <i class="fa-solid fa-chart-line text-lg"></i>
            </div>
            <span class="text-xs font-mono font-bold text-slate-400 block mb-1">SERVICE AREA 01</span>
            <h3 class="text-2xl font-bold mb-3 text-slate-900">M&A 및 Deal Structuring</h3>
            <p class="text-xs text-slate-500 mb-8 leading-relaxed">
              기업의 전략적 가치를 분석하고 정교한 지분 교환 및 자산 양수도 구조 설계를 통해 안전하고 극대화된 가치를 도출합니다.
            </p>
            <div class="border-t border-slate-200/80 pt-6">
              <ul class="space-y-2.5 text-xs text-slate-600">
                <li class="flex items-start gap-2">✔ 기업 인수(Buy-Side) 및 매각(Sell-Side) 자문</li>
                <li class="flex items-start gap-2">✔ 경영권 이전 및 지분 거래 구조 설계</li>
                <li class="flex items-start gap-2">✔ 기업승계 및 가업 상속 중개</li>
                <li class="flex items-start gap-2">✔ 분사(Spin-off) 자문 및 구조조정</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="p-8 md:p-10 rounded-3xl border border-slate-200 bg-slate-50/50 flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mb-8">
              <i class="fa-solid fa-handshake-simple text-lg"></i>
            </div>
            <span class="text-xs font-mono font-bold text-slate-400 block mb-1">SERVICE AREA 02</span>
            <h3 class="text-2xl font-bold mb-3 text-slate-900">Value-Up Consulting</h3>
            <p class="text-xs text-slate-500 mb-8 leading-relaxed">
              인수합병 이전과 이후 부가가치 창출을 위해 재무 구조를 재조정하고, 미래 지향적인 비즈니스 포트폴리오 스케일업 파트너십을 제시합니다.
            </p>
            <div class="border-t border-slate-200/80 pt-6">
              <ul class="space-y-2.5 text-xs text-slate-600">
                <li class="flex items-start gap-2">✔ 경영 및 재무 전략 종합 자문</li>
                <li class="flex items-start gap-2">✔ 기업가치 제고 및 투자유치 전략</li>
                <li class="flex items-start gap-2">✔ 합작법인(JV) 자문 및 컨설팅</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="p-8 md:p-10 rounded-3xl border border-slate-200 bg-slate-50/50 flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-8">
              <i class="fa-solid fa-arrow-up-right-dots text-lg"></i>
            </div>
            <span class="text-xs font-mono font-bold text-slate-400 block mb-1">SERVICE AREA 03</span>
            <h3 class="text-2xl font-bold mb-3 text-slate-900">IPO Advisory</h3>
            <p class="text-xs text-slate-500 mb-8 leading-relaxed">
              자본시장 진입을 위해 거래소 예심 기준을 충족하는 사전 정밀 진단 시스템과 대형 기관 매칭 Pre-IPO 자본 조달을 지원합니다.
            </p>
            <div class="border-t border-slate-200/80 pt-6">
              <ul class="space-y-2.5 text-xs text-slate-600">
                <li class="flex items-start gap-2">✔ IPO 추진 및 사전 준비 정밀 점검 자문</li>
                <li class="flex items-start gap-2">✔ Pre-IPO 대규모 해외/국내 투자 유치</li>
                <li class="flex items-start gap-2">✔ 우회상장 / SPAC 합병 가치 분석</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ④ 독보적인 M&A 트랙 레코드 (Track Record) -->
  <section id="track-record" class="py-24 md:py-32 bg-[#0f172a]" style="color:white !important;">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 md:mb-20">
        <div>
          <p class="text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">M&A DEAL TRACK RECORD</p>
          <h2 class="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
            실적과 숫자로 입증하는 <br>
            독보적인 M&A 메이저 거래 성과
          </h2>
        </div>
        <div class="flex-shrink-0 bg-slate-800/40 border border-slate-700 p-6 rounded-2xl">
          <p class="text-xs text-slate-400">당사 거래 합산</p>
          <p class="text-2xl font-bold tracking-tight">누적 2조 5,000억 원+</p>
        </div>
      </div>

      <!-- Record Matrix -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        
        <!-- Case 1 -->
        <div class="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-10 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-6">
              <span class="text-xs font-mono text-blue-400 font-bold bg-blue-500/10 px-3 py-1 rounded-full">골판지/제지 산업</span>
              <span class="text-xs text-slate-500 font-mono">CASE 01</span>
            </div>
            <h3 class="text-xl md:text-2xl font-extrabold mb-2">태림포장그룹 지분매매 자문</h3>
            <p class="text-xs text-slate-400 mb-4">인수자: IMM Private Equity 인수</p>
            <div class="mb-6 p-4 bg-slate-950 rounded-xl border border-dashed border-slate-800 flex flex-col items-center justify-center text-center">
              <span class="text-[9px] text-slate-600 font-mono">IMAGE SRC PLACEMENT</span>
              <span class="text-xs font-bold text-slate-400 font-mono">src="[태림포장_IMMPE_로고.png]"</span>
            </div>
            <p class="text-xs text-slate-300 leading-relaxed">
              전략적 가치 평가 및 최적의 협상 조건 타결을 통해 IMM PE와의 지분 양수도를 성사시켰으며, 종합 패키징 솔루션 산업 리더십 구축에 기여했습니다.
            </p>
          </div>
          <div class="border-t border-slate-800 pt-6 flex items-center justify-between mt-8">
            <span class="text-xs text-slate-500">총 거래금액 (Advisory Value)</span>
            <span class="text-2xl font-extrabold text-[#fbbf24]">3,775억 원</span>
          </div>
        </div>

        <!-- Case 2 -->
        <div class="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-10 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-6">
              <span class="text-xs font-mono text-blue-400 font-bold bg-blue-500/10 px-3 py-1 rounded-full">축산/사료 산업</span>
              <span class="text-xs text-slate-500 font-mono">CASE 02</span>
            </div>
            <h3 class="text-xl md:text-2xl font-extrabold mb-2">하림그룹의 선진그룹 6개사 경영권 인수자문</h3>
            <p class="text-xs text-slate-400 mb-4">인수자: 하림그룹 인수</p>
            <div class="mb-6 p-4 bg-slate-950 rounded-xl border border-dashed border-slate-800 flex flex-col items-center justify-center text-center">
              <span class="text-[9px] text-slate-600 font-mono">IMAGE SRC PLACEMENT</span>
              <span class="text-xs font-bold text-slate-400 font-mono">src="[하림그룹_선진6개사_로고.png]"</span>
            </div>
            <p class="text-xs text-slate-300 leading-relaxed">
              글로벌 경쟁력 확대를 위한 수직계열화 구축 목적 하림그룹의 중점 해외/국내 계열 구축을 성공적으로 리드하였습니다.
            </p>
          </div>
          <div class="border-t border-slate-800 pt-6 flex items-center justify-between mt-8">
            <span class="text-xs text-slate-500">총 거래금액 (Advisory Value)</span>
            <span class="text-2xl font-extrabold text-[#fbbf24]">2,450억 원</span>
          </div>
        </div>

        <!-- Case 3 -->
        <div class="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-10 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-6">
              <span class="text-xs font-mono text-blue-400 font-bold bg-blue-500/10 px-3 py-1 rounded-full">바이오 산업</span>
              <span class="text-xs text-slate-500 font-mono">CASE 03</span>
            </div>
            <h3 class="text-xl md:text-2xl font-extrabold mb-2">한올바이오파마 지분매매 자문</h3>
            <p class="text-xs text-slate-400 mb-4">인수자: 대웅제약 인수</p>
            <div class="mb-6 p-4 bg-slate-950 rounded-xl border border-dashed border-slate-800 flex flex-col items-center justify-center text-center">
              <span class="text-[9px] text-slate-600 font-mono">IMAGE SRC PLACEMENT</span>
              <span class="text-xs font-bold text-slate-400 font-mono">src="[한올바이오파마_대웅제약_로고.png]"</span>
            </div>
            <p class="text-xs text-slate-300 leading-relaxed">
              신약 개발 역량 강화 및 글로벌 R&D 네트워크 시너지 조성을 목적으로 대웅제약과의 역사적 빅딜 경영권 인수를 성공적으로 주선했습니다.
            </p>
          </div>
          <div class="border-t border-slate-800 pt-6 flex items-center justify-between mt-8">
            <span class="text-xs text-slate-500">총 거래금액 (Advisory Value)</span>
            <span class="text-2xl font-extrabold text-[#fbbf24]">1,046억 원</span>
          </div>
        </div>

        <!-- Case 4 -->
        <div class="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-10 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-6">
              <span class="text-xs font-mono text-blue-400 font-bold bg-blue-500/10 px-3 py-1 rounded-full">제약/정밀화학 산업</span>
              <span class="text-xs text-slate-500 font-mono">CASE 04</span>
            </div>
            <h3 class="text-xl md:text-2xl font-extrabold mb-2">화일약품 경영권 인수 자문</h3>
            <p class="text-xs text-slate-400 mb-4">인수자: 전략 투자그룹 인수</p>
            <div class="mb-6 p-4 bg-slate-950 rounded-xl border border-dashed border-slate-800 flex flex-col items-center justify-center text-center">
              <span class="text-[9px] text-slate-600 font-mono">IMAGE SRC PLACEMENT</span>
              <span class="text-xs font-bold text-slate-400 font-mono">src="[화일약품_로고.png]"</span>
            </div>
            <p class="text-xs text-slate-300 leading-relaxed">
              원료 의약품 선도 주자인 화일약품의 지배구조 개선과 유동성 확보를 실현했고, 크리스탈지노믹스 자문 협력 구도 설계까지 주간했습니다.
            </p>
          </div>
          <div class="border-t border-slate-800 pt-6 flex items-center justify-between mt-8">
            <span class="text-xs text-slate-500">총 거래금액 (Advisory Value)</span>
            <span class="text-2xl font-extrabold text-[#fbbf24]">486억 원</span>
          </div>
        </div>

      </div>

      <!-- Industrial coverage details -->
      <div class="p-8 md:p-12 bg-slate-900/40 border border-slate-800 rounded-3xl">
        <h3 class="text-lg md:text-xl font-bold mb-6"><i class="fa-solid fa-briefcase text-blue-500 mr-2"></i>광범위한 산업 섹터 크로스보더 커버리지</h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center text-xs">
          <div class="p-4 bg-slate-950/40 rounded-2xl border border-slate-800/30">
            <p class="font-bold mb-1 text-white">IT & 소프트웨어</p>
            <p class="text-[10px] text-slate-500">SaaS / 보안 / 원격</p>
          </div>
          <div class="p-4 bg-slate-950/40 rounded-2xl border border-slate-800/30">
            <p class="font-bold mb-1 text-white">반도체 & 소부장</p>
            <p class="text-[10px] text-slate-500">공정 장비 / 핵심 소재</p>
          </div>
          <div class="p-4 bg-slate-950/40 rounded-2xl border border-slate-800/30">
            <p class="font-bold mb-1 text-white">바이오 & 바이오테크</p>
            <p class="text-[10px] text-slate-500">임상 개발 / 신약 파이프</p>
          </div>
          <div class="p-4 bg-slate-950/40 rounded-2xl border border-slate-800/30">
            <p class="font-bold mb-1 text-white">AI & 로보틱스</p>
            <p class="text-[10px] text-slate-500">자율주행 / 공장 자동화</p>
          </div>
          <div class="p-4 bg-slate-950/40 rounded-2xl border border-slate-800/30">
            <p class="font-bold mb-1 text-white">소비재 & 커머스</p>
            <p class="text-[10px] text-slate-500">프리미엄 푸드 / F&B 유통</p>
          </div>
          <div class="p-4 bg-slate-950/40 rounded-2xl border border-slate-800/30">
            <p class="font-bold mb-1 text-white">미디어 & 플랫폼</p>
            <p class="text-[10px] text-slate-500">콘텐츠 / 테크 에듀</p>
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- ⑤ 인터캐피탈의 5대 핵심 강점 (Why InterCapital) -->
  <section id="strengths" class="py-24 md:py-32 bg-slate-50 text-slate-900">
    <div class="max-w-7xl mx-auto px-6">
      <div class="max-w-3xl mb-16 md:mb-24">
        <p class="text-blue-600 text-xs font-bold uppercase tracking-wider mb-3 font-mono">THE INTERCAPITAL EDGE</p>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
          의뢰인이 인터캐피탈파트너스를 <br>
          끝까지 신뢰하는 5대 핵심 가치
        </h2>
      </div>

      <div class="space-y-0 border-t border-slate-200">
        
        <!-- Strength 1 -->
        <div class="py-12 md:py-16 border-b border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start hover:bg-white hover:px-8 transition-all duration-300 rounded-2xl">
          <div class="lg:col-span-2">
            <span class="text-4xl md:text-6xl font-extrabold font-mono text-blue-500/20 tracking-tighter block mb-2">01</span>
            <span class="text-xs font-bold text-blue-600 tracking-wider font-mono">ICP EDGE</span>
          </div>
          <div class="lg:col-span-5">
            <h3 class="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">맞춤형 M&A 솔루션</h3>
            <p class="text-slate-500 text-sm md:text-base leading-relaxed">
              기계식 중개가 아닌 기업의 본질적 기술력과 브랜드 가치를 발굴하여 매도자에게는 최적의 엑시트 타이밍을, 매수자에게는 확실한 도약 원동력을 제공합니다.
            </p>
          </div>
          <div class="lg:col-span-5 bg-slate-100 p-6 rounded-2xl">
            <p class="text-xs font-bold text-slate-800 uppercase mb-4">운영 및 자문 방안</p>
            <ul class="space-y-2.5 text-xs text-slate-600">
              <li>✔ 다차원 밸류에이션 모델링 정교화</li>
              <li>✔ 지식재산권, 브랜딩 가치 권리 재산정</li>
              <li>✔ 철저한 회계/규제 실사 리스크 스크리닝</li>
            </ul>
          </div>
        </div>

        <!-- Strength 2 -->
        <div class="py-12 md:py-16 border-b border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start hover:bg-white hover:px-8 transition-all duration-300 rounded-2xl">
          <div class="lg:col-span-2">
            <span class="text-4xl md:text-6xl font-extrabold font-mono text-blue-500/20 tracking-tighter block mb-2">02</span>
            <span class="text-xs font-bold text-blue-600 tracking-wider font-mono">ICP EDGE</span>
          </div>
          <div class="lg:col-span-5">
            <h3 class="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">전문 M&A 네트워크</h3>
            <p class="text-slate-500 text-sm md:text-base leading-relaxed">
              수십 년간 쌓아온 자본 시장의 신뢰를 바탕으로 비공개(Unlisted) 딜 소싱 네트워크를 기민하게 구동하고 최단기 최적 후보군을 밀착 제안합니다.
            </p>
          </div>
          <div class="lg:col-span-5 bg-slate-100 p-6 rounded-2xl">
            <p class="text-xs font-bold text-slate-800 uppercase mb-4">운영 및 자문 방안</p>
            <ul class="space-y-2.5 text-xs text-slate-600">
              <li>✔ 국내 주요 그룹사 임원 직라인 채널 연계</li>
              <li>✔ 대형 벤처캐피탈, 사모펀드 딜 소싱 데이터 교류</li>
              <li>✔ 글로벌 파트너사와 크로스보더 거래 주도</li>
            </ul>
          </div>
        </div>

        <!-- Strength 3 -->
        <div class="py-12 md:py-16 border-b border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start hover:bg-white hover:px-8 transition-all duration-300 rounded-2xl">
          <div class="lg:col-span-2">
            <span class="text-4xl md:text-6xl font-extrabold font-mono text-blue-500/20 tracking-tighter block mb-2">03</span>
            <span class="text-xs font-bold text-blue-600 tracking-wider font-mono">ICP EDGE</span>
          </div>
          <div class="lg:col-span-5">
            <h3 class="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">국가공인 지정기관</h3>
            <p class="text-slate-500 text-sm md:text-base leading-relaxed">
              중소벤처기업부 공식 선정 최고 등급 획득, KRX 전문기관 주임 자격사 등 제도권 정식 이력으로 높은 안정성과 정부 제도가 연동됩니다.
            </p>
          </div>
          <div class="lg:col-span-5 bg-slate-100 p-6 rounded-2xl">
            <p class="text-xs font-bold text-slate-800 uppercase mb-4">운영 및 자문 방안</p>
            <ul class="space-y-2.5 text-xs text-slate-600">
              <li>✔ 가업 승계 최적 조세 감면 구조 제안</li>
              <li>✔ 정부 지원 자금 및 매칭 자금 활용 극대화</li>
              <li>✔ 한국거래소 매칭 공식 채널 최우선권 보유</li>
            </ul>
          </div>
        </div>

        <!-- Strength 4 -->
        <div class="py-12 md:py-16 border-b border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start hover:bg-white hover:px-8 transition-all duration-300 rounded-2xl">
          <div class="lg:col-span-2">
            <span class="text-4xl md:text-6xl font-extrabold font-mono text-blue-500/20 tracking-tighter block mb-2">04</span>
            <span class="text-xs font-bold text-blue-600 tracking-wider font-mono">ICP EDGE</span>
          </div>
          <div class="lg:col-span-5">
            <h3 class="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">최고 수준 금융 전문가 그룹</h3>
            <p class="text-slate-500 text-sm md:text-base leading-relaxed">
              유명 사모펀드 소속 심사역, 대형 IB 본부장, 글로벌 회계법인 및 가치분석가들로 배정된 시니어 전담 자문단이 직접 실무 협상을 처리합니다.
            </p>
          </div>
          <div class="lg:col-span-5 bg-slate-100 p-6 rounded-2xl">
            <p class="text-xs font-bold text-slate-800 uppercase mb-4">운영 및 자문 방안</p>
            <ul class="space-y-2.5 text-xs text-slate-600">
              <li>✔ 시니어 파트너 2인 상시 전담 배치제</li>
              <li>✔ 세무사, 회계사, 변호사 원스톱 실사 주관</li>
              <li>✔ 협상 리무진 및 원스톱 VIP 룸 제공</li>
            </ul>
          </div>
        </div>

        <!-- Strength 5 -->
        <div class="py-12 md:py-16 border-b border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start hover:bg-white hover:px-8 transition-all duration-300 rounded-2xl">
          <div class="lg:col-span-2">
            <span class="text-4xl md:text-6xl font-extrabold font-mono text-blue-500/20 tracking-tighter block mb-2">05</span>
            <span class="text-xs font-bold text-blue-600 tracking-wider font-mono">ICP EDGE</span>
          </div>
          <div class="lg:col-span-5">
            <h3 class="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">철저한 비밀유지 및 보안 체계</h3>
            <p class="text-slate-500 text-sm md:text-base leading-relaxed">
              사소한 평판 타격을 차단하고 거래 진행의 완벽한 밀행성을 보장하기 위해 3구조 기밀 계약과 코드화 정보 가림을 운영합니다.
            </p>
          </div>
          <div class="lg:col-span-5 bg-slate-100 p-6 rounded-2xl">
            <p class="text-xs font-bold text-slate-800 uppercase mb-4">운영 및 자문 방안</p>
            <ul class="space-y-2.5 text-xs text-slate-600">
              <li>✔ 정보 교환 전 예외 없는 강력 NDA 선결</li>
              <li>✔ 1차 가칭(Project ID)을 이용한 익명 티징</li>
              <li>✔ 실사 자료 전담 통제 보안 드라이브 운영</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ⑥ 자주 묻는 질문 (FAQ) -->
  <section id="faq" class="py-24 md:py-32 bg-white text-slate-900">
    <div class="max-w-4xl mx-auto px-6">
      <div class="text-center mb-16 md:mb-20">
        <p class="text-blue-600 text-xs font-bold uppercase tracking-wider mb-3">FREQUENTLY ASKED QUESTIONS</p>
        <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight">M&A 진단 및 자문자문 자주 묻는 질문</h2>
      </div>

      <div class="space-y-4">
        
        <!-- FAQ 1 -->
        <div class="border border-slate-200 rounded-2xl overflow-hidden bg-white">
          <button onclick="toggleFAQ('faq-content-1', 'faq-chevron-1')" class="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4 font-bold text-slate-900 focus:outline-none">
            <span>Q. M&A 진행 시 대외 보안 유지 및 정보 유출 방지는 어떻게 이루어지나요?</span>
            <span id="faq-chevron-1" class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center transition-transform"><i class="fa-solid fa-chevron-down text-slate-500 text-xs"></i></span>
          </button>
          <div id="faq-content-1" class="px-6 pb-8 md:px-8 md:pb-10 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-6 hidden">
            M&A 성공의 첫 단추는 철저한 은밀성입니다. 당사는 정보 공개 전에 예비 매수 후보자측과 법적 책임이 담보된 비밀유지약정(NDA)을 필수 체결합니다. 또한, 매도 기업의 정체를 추정할 수 없도록 익명 가칭(Project ID)을 설정한 한 페이지 분량의 티저(Teaser Key-sheet)를 우선 제공합니다. 최고 임원간 실무 협상 단계에 도달한 검증된 파트너에게만 구체적인 정보를 전담 인가 하에 제한적으로 순차 공개합니다.
          </div>
        </div>

        <!-- FAQ 2 -->
        <div class="border border-slate-200 rounded-2xl overflow-hidden bg-white">
          <button onclick="toggleFAQ('faq-content-2', 'faq-chevron-2')" class="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4 font-bold text-slate-900 focus:outline-none">
            <span>Q. 기업가치 평가(Valuation) 방식과 우리 회사가 받을 수 있는 실질적인 가치 산출은 어떻게 되나요?</span>
            <span id="faq-chevron-2" class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center transition-transform"><i class="fa-solid fa-chevron-down text-slate-500 text-xs"></i></span>
          </button>
          <div id="faq-content-2" class="px-6 pb-8 md:px-8 md:pb-10 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-6 hidden">
            단순 재무제표 수치에만 한정하지 않습니다. 전통적인 현금흐름할인법(DCF), 자산가치법, 상장 유사기업 비교법(Relative Valuation) 등을 종합적으로 시뮬레이션합니다. 여기에 기업이 보유한 핵심 기술 가치, 지식재산권(IP), 지속 가능한 비즈니스 모델, 고정 거래처 네트워크 등을 적극적으로 프리미엄 화하여 계약 협상 테이블에서 반영해 냅니다.
          </div>
        </div>

        <!-- FAQ 3 -->
        <div class="border border-slate-200 rounded-2xl overflow-hidden bg-white">
          <button onclick="toggleFAQ('faq-content-3', 'faq-chevron-3')" class="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4 font-bold text-slate-900 focus:outline-none">
            <span>Q. 중기부 지정 M&A 자문기관 및 KRX 전문기관이라는 지위가 거래 성사에 어떤 도움이 되나요?</span>
            <span id="faq-chevron-3" class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center transition-transform"><i class="fa-solid fa-chevron-down text-slate-500 text-xs"></i></span>
          </button>
          <div id="faq-content-3" class="px-6 pb-8 md:px-8 md:pb-10 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-6 hidden">
            국가공인 지정은 거래 안정성과 정부 신인도를 담보합니다. 상장사들이 이용하는 한국거래소의 공식 기업 매칭 플랫폼 데이터베이스에 특권을 가지고 접근할 수 있어 대량의 딜 소싱 기회가 발생합니다. 또한, 기술보증기금이나 기업승계 지원금을 연동할 수 있으며, 정부 매칭 펀드 적용 주선 시 세제 혜택 및 절세 자문을 합법적으로 결합하여 최고 가치 이전을 실현할 수 있습니다.
          </div>
        </div>

        <!-- FAQ 4 -->
        <div class="border border-slate-200 rounded-2xl overflow-hidden bg-white">
          <button onclick="toggleFAQ('faq-content-4', 'faq-chevron-4')" class="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4 font-bold text-slate-900 focus:outline-none">
            <span>Q. 의뢰 이후 매칭 파트너 선정과 딜 클로징(거래 완료)까지 통상적인 소요 기간은 어느 정도인가요?</span>
            <span id="faq-chevron-4" class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center transition-transform"><i class="fa-solid fa-chevron-down text-slate-500 text-xs"></i></span>
          </button>
          <div id="faq-content-4" class="px-6 pb-8 md:px-8 md:pb-10 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-6 hidden">
            산업 스펙트럼과 딜의 규모, 그리고 정교한 실사 내용에 따라 다릅니다. 통상적인 국내 딜의 경우, 약 3~6개월 내외의 기간이 대다수 수렴됩니다. 초기 가치 도출 및 티저 패키징에 1~2주, 후보군 타겟팅 및 비밀 준수 하에 자료 전달에 1~2달, 양해각서(MOU) 조인과 실사(Due Diligence) 후 본계약 조율에 2달가량이 평균적으로 소요됩니다.
          </div>
        </div>

        <!-- FAQ 5 -->
        <div class="border border-slate-200 rounded-2xl overflow-hidden bg-white">
          <button onclick="toggleFAQ('faq-content-5', 'faq-chevron-5')" class="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4 font-bold text-slate-900 focus:outline-none">
            <span>Q. 초기 자문 상담을 신청하고 싶은데 비용 청구 조건 및 상담 절차는 어떻게 되나요?</span>
            <span id="faq-chevron-5" class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center transition-transform"><i class="fa-solid fa-chevron-down text-slate-500 text-xs"></i></span>
          </button>
          <div id="faq-content-5" class="px-6 pb-8 md:px-8 md:pb-10 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-6 hidden">
            첫 대면 사전 미팅과 가치 개략 진단 자문은 전면 무상으로 지원됩니다. 정식 주간사 계약을 체결하기 전에는 수수료를 한 푼도 청구하지 않습니다. 세부적인 성공 보수 조건은 리스크 강도 및 가치에 결부하여 합리적으로 조율 가능하오니 안심하고 신청하실 수 있습니다.
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ⑦ 리드 수집 폼 & 푸터 (Lead Form & Footer) -->
  <section id="lead-capture" class="py-24 md:py-32 bg-[#0f172a] text-white relative">
    <div class="max-w-4xl mx-auto px-6">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <p class="text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">SECURE CONSULTING REQUEST</p>
        <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight">M&A 무료 진단 및 개별 매니징 신청</h2>
        <p class="text-slate-400 mt-4 text-xs md:text-sm leading-relaxed">
          인터캐피탈파트너스의 전문 자문단이 신청 즉시 기밀 유지 하에 사전 심사에 착수합니다. 
          단순 수치 환산이 아닌 기업 고유 역량을 극적으로 밸류업할 시나리오를 제공해 드립니다.
        </p>
      </div>

      <!-- Form Card -->
      <div class="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
        <div class="bg-slate-900/50 p-6 border-b border-slate-800 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span class="text-xs text-slate-400 font-mono">SECURE 256-BIT SSL ENCRYPTED GATEWAY</span>
          </div>
          <div class="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <i class="fa-solid fa-lock text-blue-500"></i>
            <span>철저무결 기밀유지</span>
          </div>
        </div>

        <form id="leadCaptureForm" onsubmit="handleFormSubmit(event)" class="p-8 md:p-12 space-y-6">
          <div id="form-error-alert" class="hidden p-4 bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded-xl flex items-center gap-2">
            <i class="fa-solid fa-circle-exclamation text-sm"></i>
            <span id="form-error-msg">필수 정보를 모두 올바르게 입력해 주세요.</span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Company Name -->
            <div>
              <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">회사명 <span class="text-red-500">*</span></label>
              <input type="text" id="companyName" placeholder="예: (주)인터테크" required class="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500 text-white">
            </div>

            <!-- Contact Name & Title -->
            <div>
              <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">담당자 성명 및 직책 <span class="text-red-500">*</span></label>
              <div class="grid grid-cols-2 gap-3">
                <input type="text" id="contactName" placeholder="성함 (예: 홍길동)" required class="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500 text-white">
                <input type="text" id="contactRole" placeholder="직책 (예: 대표)" required class="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500 text-white">
              </div>
            </div>

            <!-- Email -->
            <div>
              <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">연락 받을 이메일 주소 <span class="text-red-500">*</span></label>
              <input type="email" id="email" placeholder="예: ceo@company.com" required class="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500 text-white">
            </div>

            <!-- Phone -->
            <div>
              <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">직통 전화번호 <span class="text-red-500">*</span></label>
              <input type="tel" id="phone" placeholder="예: 010-1234-5678" required class="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500 text-white">
            </div>
          </div>

          <!-- Notes -->
          <div>
            <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">주요 전달 메시지 (선택 사항)</label>
            <textarea id="notes" rows="4" placeholder="매각 혹은 인수 구도, 대략적인 기업 가치 타겟 희망 수준 등의 메모를 적어주시면 매칭 품질이 강화됩니다." class="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500 text-white resize-none"></textarea>
          </div>

          <!-- Checkbox Terms -->
          <div class="p-4 bg-slate-950 rounded-xl border border-slate-800/80">
            <div class="flex items-start gap-3">
              <input type="checkbox" id="privacyConsent" class="w-4 h-4 text-blue-600 bg-slate-950 border-slate-800 rounded mt-0.5 cursor-pointer" required>
              <label for="privacyConsent" class="text-xs text-slate-400 select-none cursor-pointer">
                <span class="text-blue-400 font-bold">[필수]</span> 개인정보 수집 및 자문 서비스 이용 약관에 동의합니다. 
                전송해 주신 회사 자료를 포함하는 정보는 당사의 담당 대표 위원 외에는 절대 타 플랫폼으로 공개하지 않음을 서약합니다.
              </label>
            </div>
          </div>

          <!-- Submit Button -->
          <button type="submit" class="w-full py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl text-white font-extrabold text-base tracking-wide flex items-center justify-center gap-2 shadow-xl hover:shadow-blue-500/20 group transition-all duration-300">
            <span>상세 회사소개서 보기 (자문 가이드라인 확보)</span>
            <i class="fa-solid fa-paper-plane text-xs group-hover:translate-x-1.5 transition-transform"></i>
          </button>
        </form>

        <!-- Success Message Pane -->
        <div id="form-success-pane" class="p-8 md:p-12 text-center hidden">
          <div class="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto mb-6 border border-emerald-500/20">
            <i class="fa-solid fa-circle-check text-3xl"></i>
          </div>
          <h3 class="text-2xl font-bold mb-3 text-white">무료 자문 심사가 성공적으로 접수되었습니다.</h3>
          <p class="text-sm text-slate-400 max-w-lg mx-auto leading-relaxed mb-8">
            전송된 자료는 비대칭 키로 완전 암호화 소싱 드라이브에 이적되었습니다. 
            기밀 보장 수칙에 의거, 당사의 전담위원 지명자가 기재해 주신 연락처로 24시간 내에 보안 통신 콜을 주간하겠습니다.
          </p>
          <button onclick="resetCaptureForm()" class="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300">
            새로 요청하기
          </button>
        </div>

      </div>
    </div>
  </section>

  <!-- Footer Disclosure -->
  <footer class="bg-[#0b0f19] text-slate-400 border-t border-slate-900 py-16 md:py-20 text-xs">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
        <div class="lg:col-span-5 space-y-4">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <span class="text-white font-black text-xs">ICP</span>
            </div>
            <span class="text-white font-extrabold text-base tracking-wide uppercase">InterCapital Partners</span>
          </div>
          <p class="text-[#94a3b8] leading-relaxed max-w-sm">
            인터캐피탈파트너스는 고도의 전문성과 비밀 보호 노하우를 바탕으로 거래 위험을 혁신적으로 통제하는 대한민국 자산 매칭 기업입니다.
          </p>
          <div class="flex gap-4 pt-1.5 text-slate-500">
            <a href="#" class="hover:text-white transition-colors">이용약관</a>
            <span>|</span>
            <a href="#" class="hover:text-white transition-colors font-bold text-slate-400">개인정보처리방침</a>
            <span>|</span>
            <a href="#" class="hover:text-white transition-colors">고객지원실</a>
          </div>
        </div>

        <div class="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-8 text-[#94a3b8]">
          <div class="space-y-3">
            <p class="text-white font-bold tracking-wider text-xs uppercase flex items-center gap-1.5">
              <i class="fa-solid fa-location-dot text-blue-500"></i> HEADQUARTERS (SEOUL)
            </p>
            <ul class="space-y-2">
              <li class="flex items-start gap-2">
                <span class="text-slate-500">주소:</span>
                <span>서울특별시 강남구 테헤란로 419, 삼성금융플라자빌딩 18층</span>
              </li>
              <li><span class="text-slate-500">이메일:</span> info@intercapital.co.kr</li>
            </ul>
          </div>
          <div class="space-y-3">
            <p class="text-white font-bold tracking-wider text-xs uppercase flex items-center gap-1.5">
              <i class="fa-solid fa-phone text-blue-500"></i> CUSTOMER HOTLINE
            </p>
            <ul class="space-y-2">
              <li><span class="text-slate-500">대표전화:</span> <span class="text-white font-bold">02-518-9700</span></li>
              <li><span class="text-slate-500">파트너십 직통:</span> 02-518-9711 (M&A 자문 담당 직통)</li>
            </ul>
          </div>
        </div>

        <div class="lg:col-span-2 flex flex-col justify-between items-end">
          <button onclick="window.scrollTo({top: 0, behavior: 'smooth'}); return false;" class="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 hover:text-white flex items-center justify-center cursor-pointer">
            <i class="fa-solid fa-arrow-up"></i>
          </button>
        </div>
      </div>

      <div class="border-t border-slate-900 pt-8 mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-[#64748b]">
        <div class="space-y-1">
          <p>상호명: (주)인터캐피탈파트너스 | 대표이사: 대표자명 기재 예정 | 사업자등록번호: 220-81-00000</p>
          <p>전문기관 지정: 중소벤처기업부 인증 M&A 자문 최고등급 획득 | KRX 전문기관 최우수 회원사</p>
          <p class="text-[#475569] mt-3">
            면책공고: 본 웹사이트의 모든 분석 자료, 사례 요약 및 예상 비율은 정보 참고용이며 법적으로 구속력이 없습니다. 상세 주간 계약 시 개별 약정 조항이 우선 적용됩니다.
          </p>
        </div>
        <div class="text-left md:text-right flex-shrink-0">
          <p>© 2026 InterCapital Ltd. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>

  <!-- Vanilla JavaScript Implementation -->
  <script>
    // Header background change on scroll
    window.addEventListener('scroll', function() {
      const header = document.getElementById('app-header');
      if (window.scrollY > 20) {
        header.classList.add('bg-navy-950/80', 'backdrop-blur-xl', 'border-b', 'border-slate-800/50', 'py-4');
        header.classList.remove('bg-transparent', 'py-6');
      } else {
        header.classList.remove('bg-navy-950/80', 'backdrop-blur-xl', 'border-b', 'border-slate-800/50', 'py-4');
        header.classList.add('bg-transparent', 'py-6');
      }
    });

    // Mobile Menu Toggling
    function toggleMobileMenu() {
      const menu = document.getElementById('mobile-menu');
      const icon = document.getElementById('menu-icon');
      if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menu.classList.add('flex');
        icon.className = 'fa-solid fa-xmark text-xl';
      } else {
        closeMobileMenu();
      }
    }
    
    function closeMobileMenu() {
      const menu = document.getElementById('mobile-menu');
      const icon = document.getElementById('menu-icon');
      menu.classList.add('hidden');
      menu.classList.remove('flex');
      icon.className = 'fa-solid fa-bars text-xl';
    }

    // Smooth scroll offset adjustment for HTML anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          closeMobileMenu();
          const headerOffset = 90;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      });
    });

    // FAQ Accordion 개폐
    function toggleFAQ(contentId, chevronId) {
      const content = document.getElementById(contentId);
      const chevron = document.getElementById(chevronId);
      
      if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        chevron.style.transform = 'rotate(180deg)';
        chevron.classList.add('bg-blue-100', 'text-blue-600');
      } else {
        content.classList.add('hidden');
        chevron.style.transform = 'rotate(0deg)';
        chevron.classList.remove('bg-blue-100', 'text-blue-600');
      }
    }

    // Lead capturing Form Submission
    function handleFormSubmit(e) {
      e.preventDefault();
      const form = document.getElementById('leadCaptureForm');
      const successPane = document.getElementById('form-success-pane');
      const errorAlert = document.getElementById('form-error-alert');
      
      const company = document.getElementById('companyName').value.trim();
      const contact = document.getElementById('contactName').value.trim();
      const role = document.getElementById('contactRole').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const consent = document.getElementById('privacyConsent').checked;

      // Basic front-end Validation
      if (!company || !contact || !role || !email || !phone || !consent) {
        errorAlert.classList.remove('hidden');
        return;
      }

      errorAlert.classList.add('hidden');
      
      // Simulate submission animation
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch animate-spin mr-2"></i> 전송 중...';

      setTimeout(() => {
        // Save to LocalStorage leads cache for testing
        const lead = {
          companyName: company,
          contactName: contact,
          role: role,
          email: email,
          phone: phone,
          notes: document.getElementById('notes').value.trim(),
          submittedAt: new Date().toISOString()
        };
        
        let savedLeads = [];
        try {
          const raw = localStorage.getItem('icp_submissions');
          if (raw) savedLeads = JSON.parse(raw);
        } catch(err){}
        savedLeads.unshift(lead);
        localStorage.setItem('icp_submissions', JSON.stringify(savedLeads));

        form.classList.add('hidden');
        successPane.classList.remove('hidden');
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }, 1200);
    }

    function resetCaptureForm() {
      const form = document.getElementById('leadCaptureForm');
      const successPane = document.getElementById('form-success-pane');
      form.reset();
      form.classList.remove('hidden');
      successPane.classList.add('hidden');
    }
  </script>
</body>
</html>`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateHTMLCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([generateHTMLCode()], { type: 'text/html' });
    element.href = URL.createObjectURL(file);
    element.download = 'index.html';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  if (!isOpen) return null;

  return (
    <div
      id="export-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
    >
      <motion.div
        id="export-modal-box"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-4xl bg-[#0B0F19] border border-slate-800 rounded-3xl overflow-hidden flex flex-col max-h-[90vh] shadow-2xl shadow-blue-500/10 text-white"
      >
        {/* Header toolbar */}
        <div className="p-6 md:p-8 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center border border-blue-500/20">
              <FileCode className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base md:text-lg">독립형 단일 HTML 파일 추출기</h3>
              <p className="text-[11px] text-slate-400 mt-0.5">그 어떤 외부 종속성 없이 더블클릭만으로 즉각 작동하는 오직 하나의 index.html 파일입니다.</p>
            </div>
          </div>
          <button
            id="btn-close-modal"
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800/50 border border-slate-850 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Informative advice */}
        <div id="export-help-banner" className="bg-blue-600/15 border-b border-blue-500/20 p-4 px-6 md:px-8 text-xs text-slate-300 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
            <p>
              이 파일은 전 세계 국가공인 기업에서 채용하는 <span className="text-white font-semibold">Tailwind CSS Play CDN, 폰트 Pretendard CDN, FontAwesome 아이콘</span>을 품고 있어, 
              웹서버 호스팅이나 가비아/카페24 및 일반 폴더 더블클릭으로도 즉시 배포되어 구동 가능합니다.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-1 bg-slate-900 border border-slate-800 text-[10px] uppercase tracking-wider font-mono px-2 py-1 rounded text-slate-400 font-bold">
            <Check className="w-3 h-3 text-emerald-500" />
            <span>SEO Ready</span>
          </div>
        </div>

        {/* Code representation frame */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-slate-950 font-mono text-xs select-all text-slate-400 overflow-x-auto relative min-h-[250px] custom-scrollbar">
          <pre className="whitespace-pre">{generateHTMLCode()}</pre>
        </div>

        {/* Action Bottom utility */}
        <div className="p-6 md:p-8 border-t border-slate-800 bg-[#0B0F19]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500">
            <span className="font-semibold text-slate-400">파일 크기:</span> 약 33KB (초경량 고성능) | <span className="font-semibold text-slate-450">UTF-8 깨짐방지 필수동봉</span>
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <button
              id="btn-copy-html"
              onClick={handleCopy}
              className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-700 bg-slate-800/40 hover:bg-slate-800 text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2 "
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-extrabold">클립보드 복사 완료</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>전체 코드 복사하기</span>
                </>
              )}
            </button>
            <button
              id="btn-download-html"
              onClick={handleDownload}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-blue-500/10"
            >
              <Download className="w-4 h-4" />
              <span>index.html 파일 다운로드</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
