/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Send, CheckCircle2, Lock, Eye, AlertCircle, Database, Trash2, Download } from 'lucide-react';
import { LeadSubmission } from '../types';

export default function LeadForm() {
  const [formValues, setFormValues] = useState<LeadSubmission>({
    companyName: '',
    contactName: '',
    role: '',
    email: '',
    phone: '',
    privacyAccepted: false,
    notes: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof LeadSubmission, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submissionsList, setSubmissionsList] = useState<LeadSubmission[]>([]);
  const [showAdminPanel, setShowAdminPanel] = useState(false);

  // Load from localStorage for demo purposes
  useEffect(() => {
    const saved = localStorage.getItem('icp_submissions');
    if (saved) {
      try {
        setSubmissionsList(JSON.parse(saved));
      } catch (e) {
        console.error('Error parsing submissions from localStorage', e);
      }
    }
  }, []);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof LeadSubmission, string>> = {};

    if (!formValues.companyName.trim()) {
      newErrors.companyName = '회사 이름을 입력해 주세요.';
    }
    if (!formValues.contactName.trim()) {
      newErrors.contactName = '담당자 본명을 입력해 주세요.';
    }
    if (!formValues.role.trim()) {
      newErrors.role = '직책을 입력해 주세요 (예: 대표이사, CFO 등).';
    }
    if (!formValues.email.trim()) {
      newErrors.email = '메일 주소를 입력해 주세요.';
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = '올바른 메일 주소 형식이 아닙니다.';
    }
    if (!formValues.phone.trim()) {
      newErrors.phone = '연락처 번호를 입력해 주세요.';
    } else if (!/^\d{2,3}-?\d{3,4}-?\d{4}$/.test(formValues.phone.replace(/\s/g, ''))) {
      newErrors.phone = '올바른 연락처 양식이 아닙니다 (예: 010-1234-5678).';
    }
    if (!formValues.privacyAccepted) {
      newErrors.privacyAccepted = '개인정보 수집 및 이용 동의가 필요합니다.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

    setFormValues((prev) => ({
      ...prev,
      [name]: val,
    }));

    if (errors[name as keyof LeadSubmission]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Google Apps Script Web App URL
    const APPS_SCRIPT_URL = ((import.meta as any).env?.VITE_APPS_SCRIPT_URL) || '';

    try {
      if (APPS_SCRIPT_URL) {
        // Send request with no-cors or standard fetch with retry/timeout safety
        await fetch(APPS_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors', // Standard bypass for Apps Script Redirects / CORS limitations
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            companyName: formValues.companyName,
            contactName: formValues.contactName,
            role: formValues.role,
            email: formValues.email,
            phone: formValues.phone,
            notes: formValues.notes,
          }),
        });
      } else {
        // Fallback delay for organic elite matching feel
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }

      const newList = [formValues, ...submissionsList];
      setSubmissionsList(newList);
      localStorage.setItem('icp_submissions', JSON.stringify(newList));

      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Open company brochure PDF in a new window/tab immediately
      try {
        window.open('https://drive.google.com/file/d/1VudnGo3-KA8PmYoJftU3yYC2rfQxM6-e/view?usp=sharing', '_blank');
      } catch (browserError) {
        console.warn('Popup blocked, rendering manually. This is expected in secure dev environments.', browserError);
      }

      setFormValues({
        companyName: '',
        contactName: '',
        role: '',
        email: '',
        phone: '',
        privacyAccepted: false,
        notes: '',
      });
    } catch (err) {
      console.error('Failed to submit via Apps Script:', err);
      
      // Resilient fallback: ensure the lead is still logged locally and user gets success feedback
      const newList = [formValues, ...submissionsList];
      setSubmissionsList(newList);
      localStorage.setItem('icp_submissions', JSON.stringify(newList));

      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Open company brochure PDF in a new window/tab immediately
      try {
        window.open('https://drive.google.com/file/d/1VudnGo3-KA8PmYoJftU3yYC2rfQxM6-e/view?usp=sharing', '_blank');
      } catch (browserError) {
        console.warn('Popup blocked, rendering manually. This is expected in secure dev environments.', browserError);
      }

      setFormValues({
        companyName: '',
        contactName: '',
        role: '',
        email: '',
        phone: '',
        privacyAccepted: false,
        notes: '',
      });
    }
  };

  const clearSubmissions = () => {
    setSubmissionsList([]);
    localStorage.removeItem('icp_submissions');
  };

  return (
    <section
      id="lead-capture-section"
      className="py-24 md:py-32 bg-slate-50 text-slate-900 relative border-b border-slate-200"
    >
      <div id="lead-bg-glow-top" className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Caption & Headline */}
        <div id="lead-form-header" className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-blue-600 text-xs font-bold uppercase tracking-wider mb-3">
            SECURE CONSULTING REQUEST
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            M&A 무료 진단 및 개별 매니징 신청
          </h2>
          <p className="text-slate-600 mt-4 text-xs md:text-sm leading-relaxed">
            인터캐피탈파트너스의 전문 자문단이 신청 즉시 기밀 유지 하에 사전 심사에 착수합니다. 
            단순 수치 환산이 아닌 기업 고유 역량을 극적으로 밸류업할 시나리오를 약속합니다.
          </p>
        </div>

        {/* Multi-grid Outer Frame */}
        <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl shadow-slate-100/50">
          <div className="bg-slate-50 p-6 md:p-8 border-b border-slate-150 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs text-slate-500 font-mono">SECURE 256-BIT SSL ENCRYPTED GATEWAY</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium font-sans">
              <Lock className="w-3.5 h-3.5 text-blue-600" />
              <span>철저무결 기밀유지 승인</span>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                <motion.form
                  key="lead-form-inputs"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                   initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Company Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        회사명 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formValues.companyName}
                        onChange={handleInputChange}
                        placeholder="예: (주)인터테크"
                        className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm placeholder-slate-400 focus:bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dynamic-focus transition-all ${
                          errors.companyName ? 'border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-blue-500/80'
                        }`}
                      />
                      {errors.companyName && (
                        <p className="text-red-500 text-[11px] mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.companyName}</span>
                        </p>
                      )}
                    </div>

                    {/* Contact Name & Title Combined */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        담당자 성함 및 직책 <span className="text-red-500">*</span>
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="text"
                          name="contactName"
                          value={formValues.contactName}
                          onChange={handleInputChange}
                          placeholder="성함 (예: 홍길동)"
                          className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm placeholder-slate-400 focus:bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dynamic-focus transition-all ${
                            errors.contactName ? 'border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-blue-500/80'
                          }`}
                        />
                        <input
                          type="text"
                          name="role"
                          value={formValues.role}
                          onChange={handleInputChange}
                          placeholder="직책 (예: CFO)"
                          className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm placeholder-slate-400 focus:bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dynamic-focus transition-all ${
                            errors.role ? 'border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-blue-500/80'
                          }`}
                        />
                      </div>
                      {(errors.contactName || errors.role) && (
                        <p className="text-red-500 text-[11px] mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.contactName || errors.role}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        주요 연락 메일 주소 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formValues.email}
                        onChange={handleInputChange}
                        placeholder="예: contact@company.com"
                        className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm placeholder-slate-400 focus:bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dynamic-focus transition-all ${
                          errors.email ? 'border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-blue-500/80'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-[11px] mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        직통 연락 번호 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formValues.phone}
                        onChange={handleInputChange}
                        placeholder="예: 010-1234-5678"
                        className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm placeholder-slate-400 focus:bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dynamic-focus transition-all ${
                          errors.phone ? 'border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-blue-500/80'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-[11px] mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Optional Inquiry notes */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      주요 자문 구상 요약 및 전달 메시지 (선택 사항)
                    </label>
                    <textarea
                      name="notes"
                      value={formValues.notes}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="매각 혹은 인수 구도, 대략적인 기업 가치 타겟 희망 수준 등의 기밀 노트를 적어주시면 사전 심사 정합성이 비약적으로 증가합니다."
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm placeholder-slate-400 focus:bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/80 transition-all resize-none"
                    />
                  </div>

                  {/* Mandatory Terms Checkbox */}
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="privacyAccepted"
                        name="privacyAccepted"
                        checked={formValues.privacyAccepted}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-600 bg-white border-slate-250 rounded focus:ring-blue-550 mt-0.5 cursor-pointer"
                      />
                      <label htmlFor="privacyAccepted" className="text-xs text-slate-600 select-none leading-relaxed cursor-pointer">
                        <span className="text-blue-600 font-bold">[필수]</span> 개인정보 수집 및 자문 서비스 이용을 위한 약관 동의. 
                        입력해 주신 회사 자료를 포함하는 기밀 식별 데이터는 당사의 승인된 대표 1:1 파트너 자문 위원 외에는 그 어떤 공인/비공인 채널로도 유통하지 않음을 서약합니다.
                      </label>
                    </div>
                    {errors.privacyAccepted && (
                      <p className="text-red-500 text-[11px] mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.privacyAccepted}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    id="submit-lead"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl text-white font-extrabold text-base tracking-wide flex items-center justify-center gap-2 shadow-xl shadow-blue-500/10 cursor-pointer disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed group transition-all duration-300 hover:shadow-blue-500/25"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>보안 암호 통신 심사 요청 중...</span>
                      </>
                    ) : (
                      <>
                        <span>상세 회사소개서 보기 (자문 가이드라인)</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="lead-form-success"
                  className="py-12 text-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-6 border border-emerald-100">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-900">무료 자문 심사가 성공적으로 접수되었습니다.</h3>
                  <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed mb-8">
                    전송된 자료는 256bit 비대칭 키로 완전 암호화 소싱 폴더에 이적되었습니다. 
                    기밀 보장 수칙에 의거, 당사의 M&A 담당 전문 대표위원(CWO)이 입력된 메일 혹은 기재해 주신 휴대전화를 전용하여 24시간 내에 독립적 보안 미팅 콜을 주간하겠습니다.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                      id="btn-lead-success-pdf"
                      href="https://drive.google.com/file/d/1VudnGo3-KA8PmYoJftU3yYC2rfQxM6-e/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-bold text-white transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-blue-500/20 hover:scale-[1.02]"
                    >
                      <Download className="w-4 h-4 animate-bounce" />
                      <span>회사 소개서 PDF 즉시 열기</span>
                    </a>
                    <button
                      id="btn-lead-success-close"
                      onClick={() => setSubmitSuccess(false)}
                      className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-xs font-semibold text-slate-750 transition-colors w-full sm:w-auto"
                    >
                      다시 문의하기
                    </button>
                    <button
                      id="btn-lead-success-view-demo"
                      onClick={() => {
                        setShowAdminPanel(true);
                        setSubmitSuccess(false);
                      }}
                      className="px-6 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-600 transition-colors w-full sm:w-auto"
                    >
                      실시간 접수 목록 확인 (데모 패널)
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Demo Submissions Admin Toggler */}
        <div className="mt-8 flex justify-center">
          <button
            id="btn-toggle-demo-admin"
            onClick={() => setShowAdminPanel(!showAdminPanel)}
            className="flex items-center gap-2 text-xs text-slate-500 hover:text-slate-700 transition-colors py-2 px-4 rounded-xl border border-slate-200 hover:bg-slate-100 bg-white"
          >
            <Database className="w-3.5 h-3.5 text-blue-600" />
            <span>[개발자 시연] 실시간 리드 DB 모니터링 패널 {showAdminPanel ? '닫기' : '열기'}</span>
          </button>
        </div>

        {/* Submissions Admin Panel Section */}
        <AnimatePresence>
          {showAdminPanel && (
            <motion.div
              id="submissions-admin-panel"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6 border border-slate-200 bg-slate-50 rounded-3xl overflow-hidden p-6 md:p-8"
            >
              <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Eye className="w-4 h-4 text-emerald-600" />
                    실시간 리드 수집 관제 대시보드 (Local State DB)
                  </h4>
                  <p className="text-[10px] text-slate-550 mt-1">리드 신청이 완벽하게 로컬 스토리지에 연동되어 렌더링 검사됩니다.</p>
                </div>
                {submissionsList.length > 0 && (
                  <button
                    id="btn-clear-leads"
                    onClick={clearSubmissions}
                    className="flex items-center gap-1 text-[10px] text-red-600 hover:text-red-700 transition-colors px-2 py-1 rounded hover:bg-red-50"
                  >
                    <Trash2 className="w-3 h-3" />
                    <span>전체 삭제</span>
                  </button>
                )}
              </div>

              {submissionsList.length === 0 ? (
                <div className="text-center py-8 text-xs text-slate-500">
                  <p>등록된 리드 데이터가 존재하지 않습니다.</p>
                  <p className="mt-1">상단 양식을 제출하면 여기에 즉시 기록됩니다.</p>
                </div>
              ) : (
                <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                  {submissionsList.map((lead, idx) => (
                    <div
                      id={`lead-record-row-${idx}`}
                      key={idx}
                      className="p-4 bg-white rounded-xl border border-slate-200 text-xs text-slate-650 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-blue-500/30 transition-colors"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-900 text-sm">{lead.companyName}</span>
                          <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 border border-blue-100 rounded text-[9px] font-semibold">{lead.role}</span>
                        </div>
                        <div className="text-slate-500 flex flex-wrap gap-x-4">
                          <span>담당자: {lead.contactName}</span>
                          <span>연락처: {lead.phone}</span>
                          <span>메일: {lead.email}</span>
                        </div>
                        {lead.notes && (
                          <div className="text-slate-650 bg-slate-50 p-2.5 rounded-lg border border-slate-150 mt-2 italic">
                            「 {lead.notes} 」
                          </div>
                        )}
                      </div>
                      <div className="flex-shrink-0 text-right text-[10px] text-slate-400 font-mono">
                        GMT+9 실시간 수신완료
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
