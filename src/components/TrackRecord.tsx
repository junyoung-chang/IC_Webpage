/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TRACK_RECORD_DATA } from '../data';
import { Award, Briefcase, TrendingUp, CheckCircle } from 'lucide-react';

export default function TrackRecord() {
  return (
    <section
      id="track-record"
      className="py-24 md:py-32 bg-white text-slate-900 overflow-hidden relative border-b border-slate-100"
    >
      {/* Visual background accents */}
      <div id="track-record-glow" className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Caption & Title */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 md:mb-20">
          <div className="max-w-3xl">
            <p className="text-blue-600 text-xs font-bold uppercase tracking-wider mb-3">
              M&A DEAL TRACK RECORD
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-slate-900">
              실적과 숫자로 입증하는 <br />
              독보적인 M&A 메이저 거래 성과
            </h2>
            <p className="text-slate-600 mt-6 leading-relaxed text-sm md:text-base">
              인터캐피탈파트너스는 수천억 원 규모의 대형 딜(Deal)부터 강소기업의 전략적 인수합병까지 다수의 시그니처 딜을 주간 및 성사시켰습니다. 
              검증된 레코드는 그 어떤 미사여구보다 확실한 당사의 실무 집행력과 업계 최고 수준의 매칭 파워를 보장합니다.
            </p>
          </div>
          <div className="flex-shrink-0 bg-blue-50/50 border border-blue-100 p-6 rounded-2xl flex items-center gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-blue-800 font-medium font-sans">당사 거래 합산</p>
              <p className="text-2xl font-bold text-slate-900 tracking-tight">누적 2조 5,000억 원+</p>
            </div>
          </div>
        </div>

        {/* Matrix Grid Board of Cases */}
        <div id="track-record-board" className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {TRACK_RECORD_DATA.map((deal, index) => (
            <div
              id={`deal-card-${deal.id}`}
              key={deal.id}
              className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 md:p-10 hover:border-blue-500/30 hover:shadow-2xl hover:bg-white transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header elements */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono text-blue-600 font-bold tracking-wider uppercase bg-blue-550/10 px-3 py-1 rounded-full">
                    {deal.category}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">CASE 0{index + 1}</span>
                </div>

                {/* Subtext and Main Title */}
                <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight mb-2">
                  {deal.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium mb-4">
                  거래 당사자: {deal.buyer}
                </p>

                {/* Simulated Logo Placement for future asset injection */}
                <div className="mb-6 p-4 bg-slate-100/60 rounded-xl border border-dashed border-slate-200 flex flex-col items-center justify-center text-center">
                  <span className="text-[9px] text-slate-500 font-mono">IMAGE SRC PLACEMENT GUI</span>
                  <span className="text-xs font-bold text-slate-700 mt-0.5 break-all select-all font-mono">
                    src={`[${deal.logoPlaceholder}]`}
                  </span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-8">
                  {deal.description}
                </p>
              </div>

              {/* Deal valuation indicator footer */}
              <div className="border-t border-slate-200 pt-6 flex items-center justify-between mt-auto">
                <span className="text-xs text-slate-500 font-medium">총 거래규모 (Advisory Value)</span>
                <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent tracking-tight">
                  {deal.amount}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Industrial coverage summary block (기타 산업 영역) */}
        <div id="sector-coverage" className="p-8 md:p-12 bg-slate-50 border border-slate-200 rounded-3xl">
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-blue-600" />
            광범위한 산업 섹터 크로스보더 커버리지
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {[
              { label: 'IT & 소프트웨어', detail: 'SaaS / 보안 / 원격' },
              { label: '반도체 & 소부장', detail: '공정 장비 / 핵심 소재' },
              { label: '바이오 & 바이오테크', detail: '임상 개발 / 신약 파이프' },
              { label: 'AI & 로보틱스', detail: '자율주행 / 공장 자동화' },
              { label: '소비재 & 커머스', detail: '프리미엄 푸드 / F&B 유통' },
              { label: '미디어 & 플랫폼', detail: '콘텐츠 / 테크 에듀' }
            ].map((sect, idx) => (
              <div id={`sector-pill-${idx}`} key={idx} className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-blue-500/30 hover:shadow-md transition-all">
                <p className="text-xs font-bold text-slate-900 mb-1">{sect.label}</p>
                <p className="text-[10px] text-slate-500">{sect.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap justify-between items-center gap-4 text-xs text-slate-600 font-medium">
            <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-blue-600" /> 대기업 및 사모펀드(PE)와의 최적 양수도 매칭 풀 가동</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-blue-600" /> 200여 개 비공개 소싱 네트워크 정합 매칭</span>
          </div>
        </div>
      </div>
    </section>
  );
}
