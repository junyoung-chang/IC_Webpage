/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Credential, ServiceCard, DealRecord, StrengthItem, FAQItem } from './types';

export const CREDENTIALS_DATA: Credential[] = [
  {
    id: 'mss',
    institution: '중소벤처기업부',
    achievement: 'M&A 전문 자문기관 최고등급 획득',
    description: '기업승계 중개기관 최초 선정 및 공공 펀드 운용 심사위원 참여 자격 부여',
    logoPlaceholder: '중소벤처기업부 로고.png'
  },
  {
    id: 'kibo',
    institution: '기술보증기금',
    achievement: 'M&A 파트너스 최초 선정',
    description: '민관협력 제1호 M&A 매칭성공 및 우수 협력 네트워크 표창 수상',
    logoPlaceholder: '기술보증기금 로고.png'
  },
  {
    id: 'krx',
    institution: '한국거래소',
    achievement: 'KRX M&A 전문기관 최초 선정',
    description: '상장사 매칭 시스템 공식 연동 및 우회상장 타당성 검토 전문 패널 자문 수행',
    logoPlaceholder: '한국거래소 로고.png'
  },
  {
    id: 'kitia',
    institution: 'KITIA',
    achievement: '한국소재부품장비투자기관협의회',
    description: '소부장 전문 기업 투자유치 및 크로스보더(해외) M&A 공식 협력 파트너',
    logoPlaceholder: 'KITIA 로고.png'
  }
];

export const SERVICES_DATA: ServiceCard[] = [
  {
    id: 'service-1',
    title: 'M&A & Deal Structuring',
    subTitle: '기업 매각·인수 및 최적 거래 구조 매트릭스 설계',
    description: '기업의 전략적 가치를 분석하고 정교한 지분 교환 및 자산 양수도 구조 설계를 통해 안전하고 극대화된 가치를 도출합니다.',
    features: [
      '기업 인수(Buy-Side) 및 매각(Sell-Side) 주간 자문',
      '경영권 이전, 구주 매각 및 신주 발행 최적 구조 설계',
      '패밀리 비즈니스를 위한 가업/기업승계 전략적 중개',
      '경쟁력 증대를 위한 스핀오프(Spin-off) 및 분사 자문'
    ],
    iconName: 'TrendingUp'
  },
  {
    id: 'service-2',
    title: 'Value-Up Consulting',
    subTitle: '재무·경영 전략 및 기업가치 제고를 위한 자문',
    description: '인수합병 이전과 이후 부가가치 창출을 위해 재무 구조를 재조정하고, 미래 지향적인 비즈니스 포트폴리오 스케일업 파트너십을 제시합니다.',
    features: [
      '경영 분석 및 중장기 재무 구조 다각화 솔루션',
      '기업가치 극대화(Value-Up Plan) 로드맵 실행 지원',
      '전략적 투자자(SI) 및 유수 재무적 투자자(FI) 매칭 자문',
      '글로벌 시너지 창출을 위한 조인트벤처(JV) 설립 자문'
    ],
    iconName: 'ShieldAlert'
  },
  {
    id: 'service-3',
    title: 'IPO Advisory',
    subTitle: 'IPO 추진 준비 및 상장 추진 전략 자문',
    description: '자본시장 진입을 위해 거래소 예심 기준을 충족하는 사전 정밀 진단 시스템과 대형 기관 매칭 Pre-IPO 자본 조달을 지원합니다.',
    features: [
      '상업성 및 질적 요건 분석을 통한 상장 가능성 사전 도출',
      '유력 벤처캐피탈/사모펀드 대상 대규모 Pre-IPO 투자유치',
      '특수목적 기업 결합을 통한 우회상장 자문',
      '스팩(SPAC) 합병 성공 여부 최적 시나리오 컨설팅'
    ],
    iconName: 'Award'
  }
];

export const TRACK_RECORD_DATA: DealRecord[] = [
  {
    id: 'deal-1',
    category: '골판지/제지 산업',
    title: '태림포장그룹 지분매매 자문',
    buyer: 'IMM Private Equity 인수',
    amount: '3,775억 원',
    description: '전략적 가치 평가 및 최적의 협상 조건 타결을 통해 IMM PE와의 지분 양수도를 성사시켰으며, 종합 패키징 솔루션 산업 리더십 구축에 기여했습니다.',
    logoPlaceholder: '태림포장 로고 또는 IMM PE 로고.png',
    highlightColor: 'from-[#0F172A] to-[#1E293B]'
  },
  {
    id: 'deal-2',
    category: '축산/사료 산업',
    title: '하림그룹의 선진그룹 6개사 경영권 인수자문',
    buyer: '하림그룹 인수',
    amount: '2,450억 원',
    description: '글로벌 경쟁력 확대를 위한 수직계열화 구축 목적 하림그룹의 중점 해외/국내 계열 구축을 성공적으로 리드하였습니다.',
    logoPlaceholder: '하림그룹 로고 또는 선진 로고.png',
    highlightColor: 'from-[#1E3A8A] to-[#1D4ED8]'
  },
  {
    id: 'deal-3',
    category: '바이오/제약 산업',
    title: '한올바이오파마 지분매매 자문',
    buyer: '대웅제약 인수',
    amount: '1,046억 원',
    description: '신약 개발 역량 강화 및 글로벌 R&D 네트워크 시너지 조성을 목적으로 대웅제약과의 역사적 빅딜 경영권 인수를 성공적으로 주선했습니다.',
    logoPlaceholder: '한올바이오파마 로고 또는 대웅제약 로고.png',
    highlightColor: 'from-[#0369A1] to-[#0284C7]'
  },
  {
    id: 'deal-4',
    category: '제약/정밀화학 산업',
    title: '화일약품 경영권 인수 자문',
    buyer: '전략 투자그룹 인수',
    amount: '486억 원',
    description: '원료 의약품 선도 주자인 화일약품의 지배구조 개선과 유동성 확보를 실현했고, 후속 크리스탈지노믹스 협력 구도 설계까지 주간했습니다.',
    logoPlaceholder: '화일약품 로고.png',
    highlightColor: 'from-[#1F2937] to-[#111827]'
  }
];

export const STRENGTHS_DATA: StrengthItem[] = [
  {
    id: 'st-1',
    num: '01',
    title: '정교한 맞춤형 M&A 솔루션',
    description: '기계식 중개가 아닌 기업의 본질적 기술력과 브랜드 가치를 발굴하여 매도자에게는 최적의 엑시트 타이밍을, 매수자에게는 확실한 장기적 도약 원동력을 제공합니다.',
    subPoints: [
      '독보적인 DCF, 유사기업 비교법 등 다차원 가치 분석 기법',
      '단순 장부 가치가 아닌 특허 및 상표권 등 무형자산 가치의 프리미엄화',
      '최고의 거래 안전성을 담보하는 법률 계약 조항 및 정밀 회계 실사 구조화'
    ]
  },
  {
    id: 'st-2',
    num: '02',
    title: '독점적 딜 소싱 & 전문 파트너스 네트워크',
    description: '단순 공개 시장에 노출된 매물이 아닌, 수십 년간 쌓아온 신뢰를 바탕으로 비공개(Unlisted) 딜 소싱 네트워크를 폭넓게 가동합니다.',
    subPoints: [
      '대한민국 대기업 집단, 중견기업 및 유니콘 스타트업 경영진 직라인 채널',
      '전국단위 공인 회계법인, 법률사무소 및 VC/PE 마켓 딜 공유 네트워크',
      '글로벌 크로스보더 자문을 위한 해외 거점 파트너십 상시 가동'
    ]
  },
  {
    id: 'st-3',
    num: '03',
    title: '검증된 대한민국 국가공인 지정기관',
    description: '중소벤처기업부, 한국거래소, 기술보증기금 등이 공식 지정한 파트너로서 신뢰성 높은 정부 공인 가이드라인과 제도적 이점을 적극 연계합니다.',
    subPoints: [
      '가업승계 중개기관 지원 정책 및 각종 정책 자금 매칭 역량 보유',
      '한국거래소(KRX) 공식 등록 전문기관으로서 규제 리스크의 사전 스크리닝 가능',
      '정부 지원 사업과의 연계를 통한 세제 혜택 등 비즈니스 최적화 자문'
    ]
  },
  {
    id: 'st-4',
    num: '04',
    title: 'TOP-Tier 메이저 금융사 및 회계사 출신 전문가 그룹',
    description: '국내외 유명 투자은행, 4대 글로벌 회계법인(Classic Big 4), 유수 리서치센터 출신의 기업 실무형 엘리트들이 모든 프로젝트를 1:1 전담합니다.',
    subPoints: [
      '바이오, AI/IT, 소부장, 전통 제조업 등 섹터별 업계 최고 분석가 상시 포진',
      '매칭의 신뢰성 극대화를 위해 전문 컨설턴트 2인 이상 전담 서포트 체계',
      '초기 밸류에이션 모델링부터 거래 클로징 계약 이후 포스트 M&A 시너지 코칭'
    ]
  },
  {
    id: 'st-5',
    num: '05',
    title: '철저한 기밀 보장 및 업계 최고 등급 보안 체계',
    description: 'M&A 정보 유출은 기업 평가액과 주가 변동에 직접적인 타격을 입힙니다. 당사는 특화된 블라인드 마케팅과 3단계 보안 관제 프로세스를 운영합니다.',
    subPoints: [
      '철저한 비밀유지 계약(NDA) 체결 및 정보 제공 범위의 세분화 제어',
      '공식 티저 문서(Teaser Letter)의 익명화 처리 최적화 시스템 보유',
      '전담 프로젝트 룸의 네트워크 관리 및 인가된 담당자 외 정보 교류 완벽 차단'
    ]
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Q. M&A 진행 시 대외 보안 유지 및 정보 유출 방지는 어떻게 이루어지나요?',
    answer: 'M&A 성공의 첫 단추는 철저한 은밀성입니다. 당사는 정보 공개 전에 예비 매수 후보자측과 법적 책임이 담보된 비밀유지약정(NDA)을 필수 체결합니다. 또한, 매도 기업의 정체를 추정할 수 없도록 익명 가칭(Project ID)을 설정한 한 페이지 분량의 티저(Teaser Key-sheet)를 우선 제공합니다. 최고 임원간 실무 협상 단계에 도달한 검증된 파트너에게만 구체적인 정보를 전담 인가 하에 제한적으로 순차 공개합니다.'
  },
  {
    id: 'faq-2',
    question: 'Q. 기업가치 평가(Valuation) 방식과 우리 회사가 받을 수 있는 실질적인 가치 산출은 어떻게 되나요?',
    answer: '단순 재무제표 수치에만 한정하지 않습니다. 전통적인 현금흐름할인법(DCF), 자산가치법, 상장 유사기업 비교법(Relative Valuation) 등을 종합적으로 시뮬레이션합니다. 여기에 기업이 보유한 핵심 기술 가치, 지식재산권(IP), 지속 가능한 비즈니스 모델, 고정 거래처 네트워크, 창업주 및 핵심 경영진의 브랜드 가치 등을 적극적으로 프리미엄 화하여 계약 협상 테이블에서 반영해 냅니다.'
  },
  {
    id: 'faq-3',
    question: 'Q. 중기부 지정 M&A 자문기관 및 KRX 전문기관이라는 지위가 거래 성사에 어떤 도움이 되나요?',
    answer: '국가공인 지정은 거래 안정성과 정부 신인도를 담보합니다. 상장사들이 이용하는 한국거래소의 공식 기업 매칭 플랫폼 데이터베이스에 특권을 가지고 접근할 수 있어 대량의 딜 소싱 기회가 발생합니다. 또한, 기술보증기금이나 기업승계 지원금을 연동할 수 있으며, 정부 매칭 펀드 적용 주선 시 세제 혜택 및 절세 자문을 합법적으로 결합하여 최고 가치 이전을 실현할 수 있습니다.'
  },
  {
    id: 'faq-4',
    question: 'Q. 의뢰 이후 매칭 파트너 선정과 딜 클로징(거래 완료)까지 통상적인 소요 기간은 어느 정도인가요?',
    answer: '산업 스펙트럼과 딜의 규모, 그리고 정교한 실사 내용에 따라 다릅니다. 통상적인 국내 딜의 경우, 약 3~6개월 내외의 기간이 대다수 수렴됩니다. 초기 가치 도출 및 티저 패키징에 2~3주, 후보군 타겟팅 및 비밀 준수 하에 자료 전달에 1~2달, 양해각서(MOU) 조인과 실사(Due Diligence) 후 본계약 조율에 2달가량이 평균적으로 소요되며 기간을 단축하기 위한 최정예 패스트트랙팀을 추가 배정할 수도 있습니다.'
  },
  {
    id: 'faq-5',
    question: 'Q. 초기 자문 상담을 신청하고 싶은데 비용 청구 조건 및 상담 절차는 어떻게 되나요?',
    answer: '첫 대면 사전 미팅과 가치 개략 진단 자문은 전면 무상(Free)으로 지원됩니다. 정식 주간사 도급 계약을 정립하기 전에는 별도의 가입비나 선취 출장 수수료를 한 푼도 요구하지 않습니다. 세부적인 성공 보수 조건은 대상 거래 가치의 규모 및 복잡성에 결부하여 슬라이딩 스케일(Sliding Scale, 거래 금액 대 수수료율 방식)로 상호 가장 합리적으로 합의하며 조정 가능하오니 안심하고 신청하실 수 있습니다.'
  }
];
