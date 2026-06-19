/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldAlert, ArrowUp, Building2, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="app-footer"
      className="bg-slate-50 text-slate-600 border-t border-slate-200 py-16 md:py-20 text-xs"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          {/* Logo & Corporate Summary */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-md">
                <span className="text-white font-black text-xs">ICP</span>
              </div>
              <span className="text-slate-900 font-extrabold text-base tracking-wide uppercase">
                InterCapital Partners
              </span>
            </div>
            <p className="text-slate-550 leading-relaxed max-w-sm">
              인터캐피탈파트너스는 고도의 전문성과 비밀 보호 노하우를 바탕으로 거래 위험을 혁신적으로 통제하는 대한민국 자산 매칭 기업입니다.
            </p>
            <div className="flex gap-4 pt-1.5 text-slate-500">
              <a href="#" className="hover:text-slate-900 transition-colors">이용약관</a>
              <span>|</span>
              <a href="#" className="hover:text-slate-900 transition-colors font-bold text-slate-800">개인정보처리방침</a>
              <span>|</span>
              <a href="#" className="hover:text-slate-900 transition-colors">고객지원실</a>
            </div>
          </div>

          {/* Contact Details Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-8 text-slate-600">
            {/* 서울 사무소 */}
            <div className="space-y-3">
              <p className="text-slate-800 font-bold tracking-wider text-xs uppercase flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                HEADQUARTERS (SEOUL)
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-slate-400">주소:</span>
                  <span className="text-slate-700">서울특별시 강남구 테헤란로 419, 삼성금융플라자빌딩 18층</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-slate-400">이메일:</span>
                  <a href="mailto:info@intercapital.co.kr" className="hover:text-blue-600 transition-colors text-slate-700 font-medium">info@intercapital.co.kr</a>
                </li>
              </ul>
            </div>

            {/* 대표 문의처 */}
            <div className="space-y-3">
              <p className="text-slate-800 font-bold tracking-wider text-xs uppercase flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                CUSTOMER HOTLINE
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-slate-400">대표전화:</span>
                  <span className="text-slate-950 font-bold">02-518-9700</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-slate-400">파트너십:</span>
                  <span className="text-slate-700 font-medium font-sans">02-518-9711 (M&A 자문 직통)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Quick Shortcuts & Sub-utility */}
          <div className="lg:col-span-2 flex flex-col justify-between items-end">
            <button
              id="btn-back-to-top"
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-white border border-slate-300 hover:bg-slate-100 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-all cursor-pointer group shadow-sm"
              title="맨 위로 가기"
            >
              <ArrowUp className="w-4 h-4 transform group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <div className="text-right text-slate-400 hidden lg:block">
              <p className="font-mono text-[9px] uppercase tracking-wide">InterCapital Group</p>
              <p className="font-mono text-[9px]">Security Verified A-1</p>
            </div>
          </div>
        </div>

        {/* Legal disclosures & Registration Metadata */}
        <div id="footer-legals" className="border-t border-slate-200 pt-8 mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-slate-500">
          <div className="space-y-1">
            <p>상호명: (주)인터캐피탈파트너스 | 대표이사: 대표자명 기재 예정 | 사업자등록번호: 220-81-00000</p>
            <p>전문기관 지정: 중소벤처기업부 인증 M&A 자문 최고등급 획득 | KRX 전문기관 최우수 회원사</p>
            <p className="text-slate-400 mt-3 leading-relaxed">
              면책공고: 본 웹사이트의 모든 분석 자료, 사례 요약 및 예상 비율은 정보 참고용이며 법적으로 구속력이 없습니다. 상세 주간 계약 시 개별 약정 조항이 우선 적용됩니다.
            </p>
          </div>
          <div className="text-left md:text-right flex-shrink-0">
            <p>© 2026 InterCapital Ltd. All rights reserved.</p>
            <p className="text-slate-400 mt-1 text-[10px]">PREMIUM M&A ADVISORY EXPERT INTERFACE V2</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
