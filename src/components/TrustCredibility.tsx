/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CREDENTIALS_DATA } from '../data';
import { ShieldCheck, Award, GraduationCap, Flame } from 'lucide-react';

export default function TrustCredibility() {
  const getIcon = (id: string) => {
    switch (id) {
      case 'mss':
        return <Award className="w-8 h-8 text-blue-600" />;
      case 'kibo':
        return <ShieldCheck className="w-8 h-8 text-indigo-600" />;
      case 'krx':
        return <GraduationCap className="w-8 h-8 text-sky-600" />;
      case 'kitia':
        return <Flame className="w-8 h-8 text-amber-600" />;
      default:
        return <ShieldCheck className="w-8 h-8 text-blue-600" />;
    }
  };

  return (
    <section
      id="credentials"
      className="py-24 md:py-32 bg-slate-50 border-y border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Caption and Title */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <p className="text-blue-600 text-xs font-bold uppercase tracking-wider mb-3">
            GOVERNMENT CERTIFIED CREDIBILITY
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0B0F19] tracking-tight leading-tight">
            대한민국 정부가 인증한 <br />
            국가공인 전문 M&A 자문·협력기관
          </h2>
          <p className="text-slate-600 mt-6 leading-relaxed text-sm md:text-base">
            인터캐피탈파트너스는 공공기관 및 거래소 등의 엄격한 심사 문턱을 거쳐 선정된 우수 투자 자문기관입니다. 
            투명한 신뢰도에 기반하여 대한민국 기업들의 건전한 성장을 이끌고 있으며, 제도적 이점과 연계하여 최선의 거래 구조를 구체화합니다.
          </p>
        </div>

        {/* Credentials Grid */}
        <div id="credentials-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-slate-200 rounded-3xl overflow-hidden bg-white shadow-sm">
          {CREDENTIALS_DATA.map((cred, idx) => (
            <div
               id={`credential-card-${cred.id}`}
              key={cred.id}
              className={`p-8 md:p-10 flex flex-col justify-between hover:bg-slate-50/50 transition-colors ${
                idx !== CREDENTIALS_DATA.length - 1
                  ? 'border-b lg:border-b-0 lg:border-r border-slate-200'
                  : ''
              }`}
            >
              {/* Institution Logo Area Placeholder */}
              <div>
                <div className="mb-8 flex items-start justify-between">
                  <span className="text-xs uppercase tracking-wider font-mono text-slate-400 font-semibold">
                    Credential {idx + 1}
                  </span>
                  {getIcon(cred.id)}
                </div>

                {/* Simulated Institutional Logo Placement */}
                <div className="mb-6 py-4 px-5 bg-slate-50/85 rounded-xl border border-dashed border-slate-200 flex flex-col items-center justify-center text-center group">
                  <div className="text-[10px] text-slate-500 font-mono select-none">
                    IMG SRC PLACEHOLDER
                  </div>
                  <div className="text-xs font-semibold text-slate-700 mt-1 select-all break-all">
                    src={`[${cred.logoPlaceholder}]`}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {cred.institution}
                </h3>
                <p className="text-xs font-bold text-blue-600 mb-3 bg-blue-50 border border-blue-100 inline-block px-2.5 py-1 rounded">
                  {cred.achievement}
                </p>
              </div>

              <p className="text-xs text-slate-500 mt-4 leading-relaxed border-t border-slate-100 pt-4">
                {cred.description}
              </p>
            </div>
          ))}
        </div>

        {/* Informative Label */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-blue-50/50 border border-blue-100 max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
              <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            <p className="text-xs text-slate-700 font-medium text-center sm:text-left">
              국가 지정 자문기관은 정량 실적, 소속 인력 전문성 자격, 정보 보안 인프라 등 50여 가지 평가 조건에서 우수한 등급을 획득했음을 공인하는 성과입니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
