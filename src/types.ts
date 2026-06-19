/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Credential {
  id: string;
  institution: string;
  achievement: string;
  description: string;
  logoPlaceholder: string;
}

export interface ServiceCard {
  id: string;
  title: string;
  subTitle: string;
  description: string;
  features: string[];
  iconName: string;
}

export interface DealRecord {
  id: string;
  category: string;
  title: string;
  buyer: string;
  amount: string;
  description: string;
  logoPlaceholder: string;
  highlightColor: string;
}

export interface StrengthItem {
  id: string;
  num: string;
  title: string;
  description: string;
  subPoints: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface LeadSubmission {
  companyName: string;
  contactName: string;
  role: string;
  email: string;
  phone: string;
  privacyAccepted: boolean;
  notes?: string;
}
