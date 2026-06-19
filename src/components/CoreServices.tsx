/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SERVICES_DATA } from '../data';
import { TrendingUp, FileSpreadsheet, ShieldCheck, ArrowRight, Kanban, BarChart3, Presentation } from 'lucide-react';

interface CoreServicesProps {
  onScrollToForm: () => void;
}

export default function CoreServices({ onScrollToForm }: CoreServicesProps) {
  const getIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case 'TrendingUp':
        return <Kanban className={className} />;
      case 'ShieldAlert':
        return <BarChart3 className={className} />;
      case 'Award':
        return <Presentation className={className} />;
      default:
        return <TrendingUp className={className} />;
    }
  };

  return (
    <section
      id="services"
      className="py-24 md:py-32 bg-white text-slate-900 border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Caption and Title */}
        <div className="max-w-3xl mb-16 md:mb-24 text-center mx-auto">
          <p className="text-blue-600 text-xs font-bold uppercase tracking-wider mb-3">
            BUSINESS COVERAGE
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-slate-900">
            완벽한 거래 성사를 위한 <br />
            인터캐피탈의 핵심 비즈니스 영역
          </h2>
          <p className="text-slate-600 mt-6 leading-relaxed text-sm md:text-base max-w-2xl mx-auto">
            자문 위원이 직접 주간하여 복잡한 세무, 재무, 법무 리스크를 사전 조율하며, 기업 매도자 및 매수자 모두가 공인하는 안정적 시너지를 실현합니다.
          </p>
        </div>

        {/* 3-Column Premium Card Layout */}
        <div id="services-grid" className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {SERVICES_DATA.map((service, index) => (
            <div
              id={`service-card-${index}`}
              key={service.id}
              className="group relative p-8 md:p-10 rounded-3xl border border-slate-200 bg-slate-50/40 hover:bg-white hover:border-blue-500/30 hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Card visual elements */}
              <div id={`service-bg-decor-${index}`} className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div>
                {/* Icon Circle */}
                <div id={`service-icon-wrap-${index}`} className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-800 flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {getIcon(service.iconName, "w-5 h-5")}
                </div>

                <div className="mb-4">
                  <span className="text-xs font-mono font-bold text-slate-400 block mb-1">
                    SERVICE AREA 0{index + 1}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                </div>

                <p className="text-sm font-semibold text-blue-600 mb-4">
                  {service.subTitle}
                </p>

                <p className="text-xs text-slate-500 mb-8 leading-relaxed">
                  {service.description}
                </p>

                {/* Features list */}
                <div id={`service-features-${index}`} className="border-t border-slate-150 pt-6 mt-6">
                  <p className="text-xs font-bold text-slate-800 tracking-wide uppercase mb-3">
                    주요 상세 자문 내역
                  </p>
                  <ul className="space-y-2.5">
                    {service.features.map((feat, featIdx) => (
                      <li key={featIdx} className="flex items-start gap-2 text-xs text-slate-600">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 group-hover:scale-125 transition-transform" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Hover arrow indicator on footer */}
              <div className="mt-8 pt-4 flex justify-end">
                <span className="flex items-center gap-1.5 text-xs text-slate-500 font-bold group-hover:text-blue-600 transition-colors">
                  상담 및 설계 신청
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Secondary Action */}
        <div id="services-bottom-card" className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-[#000814] to-[#0b1329] border border-white/5 text-white p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
          <div id="services-bottom-glow" className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-blue-500/10 blur-2xl pointer-events-none" />
          <p className="text-xs font-bold text-blue-400 tracking-wider mb-2">CUSTOM SERVICE OPTIONS</p>
          <h4 className="text-xl md:text-2xl font-bold tracking-tight mb-4">산업군별 비공개 딜매니징 서비스 지원</h4>
          <p className="text-xs text-slate-400 max-w-2xl mx-auto leading-relaxed mb-6">
            바이오, 소부장, 핀테크, 서비스 플랫폼, 스마트 제조 공정 등 분야별 전문 지식을 보유한 회계사와 IB 전문가가 특화 심사를 통해 고유의 맞춤형 중개 전술을 설계해 드립니다.
          </p>
          <button
            id="btn-services-bottom-cta"
            onClick={onScrollToForm}
            className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-xs font-bold transition-all hover:scale-105"
          >
            전담 자문위원 배정 상담 신청하기
          </button>
        </div>
      </div>
    </section>
  );
}
