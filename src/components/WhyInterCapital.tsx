/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { STRENGTHS_DATA } from '../data';
import { ArrowLeftRight, Check, ShieldAlert } from 'lucide-react';

export default function WhyInterCapital() {
  return (
    <section
      id="strengths"
      className="py-24 md:py-32 bg-slate-50 text-slate-900 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Caption */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <p className="text-blue-600 text-xs font-bold uppercase tracking-wider mb-3">
            THE INTERCAPITAL EDGE
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-slate-900">
            의뢰인이 인터캐피탈파트너스를 <br />
            끝까지 신뢰하는 5대 핵심 가치
          </h2>
          <p className="text-slate-600 mt-6 leading-relaxed text-sm md:text-base">
            단순 계약 중개에 머무르지 않습니다. 최상위 딜 체계, 철저히 정보 차단이 수반되는 보안 네트워크, 
            그리고 세무/법무의 이점을 극대화 결합하는 독보적인 노하우로 업계 표준을 제시합니다.
          </p>
        </div>

        {/* 5 Strengths Vertical Stack with Bold Typography */}
        <div id="strengths-wrapper" className="space-y-0 border-t border-slate-200">
          {STRENGTHS_DATA.map((strength) => (
            <div
              id={`strength-row-${strength.id}`}
              key={strength.id}
              className="py-12 md:py-16 border-b border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start hover:bg-white hover:px-8 -mx-0 hover:-mx-4 md:-mx-8 md:hover:-mx-8 px-0 transition-all duration-305 rounded-2xl hover:shadow-lg hover:shadow-slate-250/30"
            >
              {/* Massive Number Label */}
              <div className="lg:col-span-2 flex items-center lg:block">
                <span className="text-4xl md:text-6xl font-extrabold font-mono text-blue-600/20 tracking-tighter block mr-4 lg:mr-0 lg:mb-2 text-gradient-to-tr">
                  {strength.num}
                </span>
                <span className="text-xs font-bold text-blue-600 tracking-wider uppercase lg:block font-mono">
                  ICP EDGE
                </span>
              </div>

              {/* Title & Description */}
              <div className="lg:col-span-5">
                <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight mb-4">
                  {strength.title}
                </h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  {strength.description}
                </p>
              </div>

              {/* Sub Points Bullet List */}
              <div className="lg:col-span-5 bg-slate-100/60 rounded-2xl p-6 border border-slate-200">
                <p className="text-xs font-bold text-slate-800 tracking-wider uppercase mb-4 flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5 text-blue-600" />
                  실질 차별화 성과 및 운영 방안
                </p>
                <ul className="space-y-3">
                  {strength.subPoints.map((point, ptIdx) => (
                    <li key={ptIdx} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                      <Check className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic bottom banner reinforcing safety */}
        <div id="security-banner" className="mt-16 bg-red-50 p-8 rounded-3xl border border-red-200/60 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center flex-shrink-0 border border-red-200">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 mb-1">인터캐피탈 비밀유지 삼중 보안 서약 (NDA Pledge)</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                정보 누출 시 거래 상대방 및 당사 간 피해 보상 가이드라인을 계약서에 명문화하여 의뢰 기업의 비즈니스를 완벽히 보호합니다.
              </p>
            </div>
          </div>
          <span className="text-xs font-mono font-bold bg-red-200/40 text-red-700 px-3.5 py-2 rounded-xl border border-red-300/30">
            SECURITY LEVEL 1-A COFFEE-STRICT
          </span>
        </div>
      </div>
    </section>
  );
}
