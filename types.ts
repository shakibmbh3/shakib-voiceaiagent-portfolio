import { LucideIcon } from "lucide-react";

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  problem: string;
  solution: string;
  keyCapabilities: string[];
  impact: string;
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface WhyChooseItem {
  title: string;
  description: string;
}

export interface TechItem {
  category: string;
  tools: string;
}