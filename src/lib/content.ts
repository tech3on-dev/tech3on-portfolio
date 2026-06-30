import {
  type LucideIcon,
  Layers,
  Code2,
  BrainCircuit,
  Cloud,
  GitBranch,
  ShieldCheck,
  Rocket,
  Users,
  Globe2,
  Sparkles,
  Search,
  ClipboardList,
  Network,
  Hammer,
  TestTube2,
  ServerCog,
  LifeBuoy,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Hero stats                                                          */
/* ------------------------------------------------------------------ */
export const heroStats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "20+", label: "Technologies" },
  { value: "Global", label: "Delivery Model" },
  { value: "99.9%", label: "Availability Solutions" },
] as const;

/* ------------------------------------------------------------------ */
/* Trust / technology badges                                           */
/* ------------------------------------------------------------------ */
export const techBadges: { category: string; items: string[] }[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "Angular", "Vue"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "FastAPI", "Django", "Express"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    category: "Cloud",
    items: ["AWS", "Azure"],
  },
  {
    category: "DevOps",
    items: ["Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions"],
  },
  {
    category: "AI / ML",
    items: ["OpenAI", "LangChain", "Hugging Face", "TensorFlow", "PyTorch"],
  },
];

/* A flat marquee list for the trust strip */
export const trustMarquee = [
  "React",
  "Next.js",
  "Python",
  "FastAPI",
  "AWS",
  "Azure",
  "Kubernetes",
  "Docker",
  "Terraform",
  "OpenAI",
  "LangChain",
  "PyTorch",
  "TensorFlow",
  "PostgreSQL",
  "MongoDB",
  "Node.js",
];

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */
export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    icon: Layers,
    title: "Full Stack Development",
    description: "Custom web and enterprise applications built for scale.",
    features: [
      "Web Applications",
      "SaaS Platforms",
      "Enterprise Portals",
      "Mobile-Friendly Solutions",
    ],
  },
  {
    icon: Code2,
    title: "Python Development",
    description: "Robust backend systems and automation solutions.",
    features: ["FastAPI", "Django", "Data Processing", "Automation Workflows"],
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    description: "Intelligent solutions powered by modern AI technologies.",
    features: [
      "Generative AI",
      "Chatbots",
      "LLM Integrations",
      "Recommendation Systems",
      "Predictive Analytics",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Engineering",
    description: "Design, migration, and optimization of cloud infrastructure.",
    features: [
      "AWS Architecture",
      "Azure Architecture",
      "Cloud Migration",
      "Cost Optimization",
    ],
  },
  {
    icon: GitBranch,
    title: "DevOps Services",
    description: "Accelerate deployments and improve operational efficiency.",
    features: [
      "CI/CD Pipelines",
      "Infrastructure as Code",
      "Monitoring",
      "Containerization",
    ],
  },
  {
    icon: Sparkles,
    title: "Generative AI Solutions",
    description: "Production-grade GenAI products and agentic workflows.",
    features: [
      "RAG Pipelines",
      "AI Agents",
      "Document Intelligence",
      "Enterprise Copilots",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Why choose us                                                       */
/* ------------------------------------------------------------------ */
export const whyChooseUs: { icon: LucideIcon; title: string; description: string }[] =
  [
    {
      icon: Users,
      title: "Experienced Engineering Team",
      description:
        "Senior engineers and architects with deep domain experience across modern stacks.",
    },
    {
      icon: Rocket,
      title: "Agile Delivery",
      description:
        "Iterative sprints with transparent reporting that ship value early and often.",
    },
    {
      icon: Cloud,
      title: "Cloud-Native Expertise",
      description:
        "Architecting resilient, autoscaling platforms on AWS and Microsoft Azure.",
    },
    {
      icon: BrainCircuit,
      title: "AI-Driven Innovation",
      description:
        "Embedding generative AI and machine learning where it creates measurable impact.",
    },
    {
      icon: ShieldCheck,
      title: "Enterprise Security Standards",
      description:
        "Security-first engineering aligned with SOC 2, ISO 27001 and GDPR practices.",
    },
    {
      icon: Globe2,
      title: "Global Delivery Capability",
      description:
        "A follow-the-sun model serving clients across US, EMEA, APAC and the Middle East.",
    },
  ];

/* ------------------------------------------------------------------ */
/* Technology expertise (categorized grid)                             */
/* ------------------------------------------------------------------ */
export const techExpertise: { category: string; icon: LucideIcon; items: string[] }[] =
  [
    {
      category: "Frontend",
      icon: Layers,
      items: ["React", "Next.js", "Angular", "Vue"],
    },
    {
      category: "Backend",
      icon: Code2,
      items: ["Node.js", "Python", "FastAPI", "Django", "Express"],
    },
    {
      category: "AI",
      icon: BrainCircuit,
      items: ["OpenAI", "LangChain", "TensorFlow", "PyTorch"],
    },
    {
      category: "Cloud",
      icon: Cloud,
      items: ["AWS", "Azure"],
    },
    {
      category: "DevOps",
      icon: GitBranch,
      items: ["Docker", "Kubernetes", "Terraform", "Jenkins"],
    },
    {
      category: "Database",
      icon: ServerCog,
      items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    },
  ];

/* ------------------------------------------------------------------ */
/* Case studies                                                        */
/* ------------------------------------------------------------------ */
export interface CaseStudy {
  title: string;
  industry: string;
  result: string;
  challenge: string;
  solution: string;
  technologies: string[];
  outcomes: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    title: "AI Customer Support Platform",
    industry: "Customer Service",
    result: "40% reduction in support workload",
    challenge:
      "A high-growth SaaS provider faced rising support volumes and slow first-response times, straining its human agents.",
    solution:
      "We built an LLM-powered support assistant with retrieval-augmented generation over the knowledge base, smart ticket routing, and human-in-the-loop escalation.",
    technologies: ["OpenAI", "LangChain", "FastAPI", "PostgreSQL", "AWS"],
    outcomes: [
      "40% reduction in agent workload",
      "Sub-second answer suggestions",
      "24/7 multilingual coverage",
    ],
  },
  {
    title: "Cloud Migration Program",
    industry: "Enterprise IT",
    result: "35% infrastructure cost savings",
    challenge:
      "A legacy on-premise estate was expensive to operate, hard to scale, and a barrier to faster releases.",
    solution:
      "We re-architected workloads into containerized, autoscaling services, automated provisioning with Terraform, and established CI/CD pipelines for zero-downtime deploys.",
    technologies: ["Azure", "Kubernetes", "Terraform", "Docker", "GitHub Actions"],
    outcomes: [
      "35% lower infrastructure spend",
      "Zero-downtime deployments",
      "Elastic autoscaling under peak load",
    ],
  },
  {
    title: "Revenue Analytics Dashboard",
    industry: "Business Intelligence",
    result: "Real-time executive insights",
    challenge:
      "Leadership lacked a unified, real-time view of revenue across fragmented data sources and manual spreadsheets.",
    solution:
      "We engineered a streaming data pipeline and an interactive analytics dashboard that consolidates revenue KPIs with drill-downs and forecasting.",
    technologies: ["Next.js", "Python", "Redis", "PostgreSQL", "AWS"],
    outcomes: [
      "Real-time executive KPIs",
      "Self-service drill-down reporting",
      "Predictive revenue forecasting",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Development process                                                 */
/* ------------------------------------------------------------------ */
export const processSteps: { icon: LucideIcon; title: string; description: string }[] =
  [
    {
      icon: Search,
      title: "Discovery",
      description:
        "We align on goals, users and constraints — turning your vision into a clear problem statement.",
    },
    {
      icon: ClipboardList,
      title: "Planning",
      description:
        "Scope, roadmap and success metrics defined with a prioritized, transparent backlog.",
    },
    {
      icon: Network,
      title: "Architecture",
      description:
        "We design scalable, secure and cost-efficient system and cloud architectures.",
    },
    {
      icon: Hammer,
      title: "Development",
      description:
        "Agile sprints deliver working software early with continuous stakeholder feedback.",
    },
    {
      icon: TestTube2,
      title: "Testing",
      description:
        "Automated and manual QA ensure reliability, performance and security at every layer.",
    },
    {
      icon: ServerCog,
      title: "Deployment",
      description:
        "Automated CI/CD pipelines ship to production safely with zero-downtime releases.",
    },
    {
      icon: LifeBuoy,
      title: "Support",
      description:
        "Proactive monitoring, optimization and ongoing enhancements keep you ahead.",
    },
  ];

/* ------------------------------------------------------------------ */
/* Testimonials                                                        */
/* ------------------------------------------------------------------ */
export interface Testimonial {
  name: string;
  role: string;
  company: string;
  rating: number;
  review: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    role: "CTO",
    company: "NorthStar SaaS",
    rating: 5,
    review:
      "TECH3ON re-architected our platform for the cloud and delivered ahead of schedule. Their engineering depth and communication were exceptional throughout.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&fit=crop&crop=faces&auto=format",
  },
  {
    name: "David Chen",
    role: "VP of Engineering",
    company: "Helix Fintech",
    rating: 5,
    review:
      "The AI support assistant they built cut our ticket volume dramatically. It felt like an extension of our own team rather than an outside vendor.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=128&fit=crop&crop=faces&auto=format",
  },
  {
    name: "Amara Okafor",
    role: "Head of Product",
    company: "Lumio Analytics",
    rating: 5,
    review:
      "From discovery to deployment, the process was transparent and rigorous. Our real-time analytics dashboard transformed how leadership makes decisions.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=128&h=128&fit=crop&crop=faces&auto=format",
  },
  {
    name: "Lukas Becker",
    role: "Founder & CEO",
    company: "Voltmark",
    rating: 5,
    review:
      "As a startup we needed senior talent fast. TECH3ON delivered a production-ready MVP with cloud-native foundations we could scale on confidently.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=128&h=128&fit=crop&crop=faces&auto=format",
  },
];

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */
export const faqs: { question: string; answer: string }[] = [
  {
    question: "What industries do you serve?",
    answer:
      "We partner with startups, SMEs and enterprises across SaaS, fintech, healthcare, retail, logistics, business intelligence and more. Our engineering approach is industry-agnostic and tailored to your domain.",
  },
  {
    question: "Do you provide dedicated teams?",
    answer:
      "Yes. You can engage us for a fixed-scope project or a dedicated, embedded team that operates as a seamless extension of your in-house engineering organization.",
  },
  {
    question: "Can you migrate existing systems?",
    answer:
      "Absolutely. We specialize in modernizing legacy systems — re-platforming, containerizing and migrating workloads to AWS or Azure with zero-downtime cutover strategies.",
  },
  {
    question: "Do you support AI projects?",
    answer:
      "AI is core to what we do. From generative AI and LLM integrations to predictive analytics and recommendation systems, we build production-grade, secure and cost-efficient AI solutions.",
  },
  {
    question: "What cloud platforms do you support?",
    answer:
      "We are deeply experienced with both Amazon Web Services (AWS) and Microsoft Azure, covering architecture, migration, DevOps automation and ongoing cost optimization.",
  },
  {
    question: "How do you handle security?",
    answer:
      "Security is built into every stage of delivery. We follow secure-by-design principles aligned with SOC 2, ISO 27001 and GDPR, including encryption, least-privilege access and continuous monitoring.",
  },
];

/* ------------------------------------------------------------------ */
/* Contact form select options                                         */
/* ------------------------------------------------------------------ */
export const projectTypes = [
  "Full Stack Development",
  "AI & Machine Learning",
  "Cloud Engineering",
  "DevOps Services",
  "Python Development",
  "Data & Analytics",
  "Other",
];

export const budgetRanges = [
  "Under $10k",
  "$10k – $50k",
  "$50k – $100k",
  "$100k – $250k",
  "$250k+",
  "Not sure yet",
];
