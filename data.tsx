import { 
  PhoneCall, 
  GitBranch, 
  Calendar, 
  Zap, 
  Server, 
  Globe 
} from "lucide-react";
import { CaseStudy, Service, ProcessStep, TechItem, WhyChooseItem } from "./types";

export const services: Service[] = [
  {
    title: "AI Voice Agents",
    description: "Never miss calls. Qualify leads. Book appointments automatically.",
    icon: PhoneCall,
  },
  {
    title: "Call Flow Logic",
    description: "Custom qualification, objections, routing, and hand-offs based on real business rules.",
    icon: GitBranch,
  },
  {
    title: "CRM Integrations",
    description: "Direct sync with GoHighLevel, HubSpot, Salesforce, Google Calendar, and internal systems.",
    icon: Calendar,
  },
  {
    title: "Advanced Automation",
    description: "Multi-step Make.com and Zapier workflows with conditional logic and retries.",
    icon: Zap,
  },
  {
    title: "APIs & Webhooks",
    description: "Clean REST APIs, JSON payloads, and real-time call data capture.",
    icon: Server,
  },
  {
    title: "Multilingual Setup",
    description: "Support multiple languages with smart human transfer when needed.",
    icon: Globe,
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Call Flow Design",
    description: "Map real conversations, decision paths, and edge cases.",
  },
  {
    number: "02",
    title: "Implementation",
    description: "Build and deploy agents in Retell or similar platforms.",
  },
  {
    number: "03",
    title: "Integrations",
    description: "Connect CRMs, calendars, and internal tools via REST APIs.",
  },
  {
    number: "04",
    title: "Logic & Automations",
    description: "Make/Zapier workflows with custom API calls and validations.",
  },
  {
    number: "05",
    title: "Testing & Handover",
    description: "Production testing, logging setup, and documentation.",
  },
];

export const techStack: TechItem[] = [
  {
    category: "Voice AI Platforms",
    tools: "Retell · VAPI · Synthflow · ElevenLabs",
  },
  {
    category: "Automation",
    tools: "Make.com · n8n · Zapier · Webhooks",
  },
  {
    category: "APIs & Data",
    tools: "REST APIs · JSON · HTTP Methods",
  },
  {
    category: "CRMs & Scheduling",
    tools: "GoHighLevel · HubSpot · Salesforce · GCal",
  },
  {
    category: "Scripting",
    tools: "JavaScript · Python · Custom Logic",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "dental",
    title: "Dental Clinic Automation",
    category: "Appointment Automation",
    summary: "Reduced front-desk workload and captured appointments 24/7.",
    problem: "High call volume. Missed calls. Staff overloaded with scheduling and FAQs.",
    solution: "Built an AI voice agent that manages the full appointment lifecycle.",
    keyCapabilities: [
      "Book, reschedule, and cancel appointments",
      "Answer treatment and clinic FAQs",
      "Sync appointments with calendar and CRM",
      "Log call outcomes and patient details",
      "Transfer complex cases to staff"
    ],
    impact: "Reduced front-desk workload and captured appointments 24/7."
  },
  {
    id: "plumbing",
    title: "Plumbing Service Dispatch",
    category: "Lead Qualification",
    summary: "Faster emergency routing and higher-quality booked jobs.",
    problem: "Unqualified calls, emergency vs non-emergency confusion, slow follow-ups.",
    solution: "Outbound + inbound voice agent focused on lead qualification and routing.",
    keyCapabilities: [
      "Qualify job type, urgency, and location",
      "Route emergencies instantly",
      "Capture lead details via live calls",
      "Trigger SMS/email follow-ups automatically",
      "Push clean data into CRM"
    ],
    impact: "Faster response times and higher-quality booked jobs."
  },
  {
    id: "cancer",
    title: "Cancer Screening Center",
    category: "Sensitive Handling",
    summary: "Consistent screening with accuracy, empathy, and human escalation.",
    problem: "High-stakes conversations requiring accuracy, empathy, and structured screening.",
    solution: "Voice agent designed for eligibility screening and appointment booking.",
    keyCapabilities: [
      "Guided eligibility questions",
      "FAQ handling with knowledge base",
      "Appointment scheduling to calendar",
      "CRM logging with call summaries",
      "Human hand-off for sensitive cases"
    ],
    impact: "Consistent screening, reduced staff load, improved patient experience."
  },
  {
    id: "restaurant",
    title: "Restaurant Reservations",
    category: "Call Volume",
    summary: "Fewer missed calls and smoother front-of-house operations.",
    problem: "Staff overwhelmed by reservation calls and repeated questions.",
    solution: "Inbound voice agent optimized for speed and clarity.",
    keyCapabilities: [
      "Reservation booking and confirmations",
      "Answer hours, menu, and location FAQs",
      "Peak-hour call handling",
      "Calendar and system sync"
    ],
    impact: "Fewer missed calls and smoother front-of-house operations."
  },
];

export const whyMe: WhyChooseItem[] = [
  {
    title: "Custom Logic",
    description: "Every agent is built from real business rules — not reused templates."
  },
  {
    title: "Production-Ready",
    description: "Designed for live traffic, real customers, and edge cases."
  },
  {
    title: "Clean CRM Data",
    description: "Structured call data sales and ops teams can actually use."
  },
  {
    title: "Scalable",
    description: "Reusable flows with clear documentation for easy cloning."
  },
  {
    title: "Outcome-Focused",
    description: "More booked calls, faster follow-ups, lower operational load."
  }
];