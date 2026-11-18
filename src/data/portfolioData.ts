export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: ('ai' | 'web' | 'systems')[];
  featured: boolean;
  color: 'yellow' | 'mint' | 'orange' | 'cyan' | 'purple';
  badges: string[];
  github: string;
  demo?: string | null;
  problem: string;
  solution: string;
  architecture: string[];
  metrics?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  badge: string;
  color: 'yellow' | 'mint' | 'orange' | 'cyan';
  highlights: { title: string; desc: string }[];
  tags: string[];
}

export interface Achievement {
  title: string;
  event: string;
  organization: string;
  badge: string;
  description: string;
  color: 'yellow' | 'mint' | 'orange' | 'cyan';
  link?: { label: string; url: string };
  metrics?: string;
}

export const PERSONAL_INFO = {
  name: "Devesh Singh",
  role: "Software Engineer & AI Systems Developer",
  tagline: "Architecting autonomous agent workflows, high-frequency real-time distributed systems, and production full-stack platforms.",
  location: "Bengaluru, Karnataka, India",
  college: "Polaris School of Technology (CGPA: 8.42)",
  degree: "B.Tech in Computer Science (2024–2028)",
  email: "deveshsingh6986@gmail.com",
  phone: "+91-911-012-7769",
  resumeDriveView: "https://drive.google.com/file/d/1opRR4O4Qq5k8sIvQN32ycDLvozHbGWL5/view?usp=sharing",
  resumeDrivePreview: "https://drive.google.com/file/d/1opRR4O4Qq5k8sIvQN32ycDLvozHbGWL5/preview",
  resumeDriveDownload: "https://drive.google.com/uc?export=download&id=1opRR4O4Qq5k8sIvQN32ycDLvozHbGWL5",
  github: "https://github.com/deveshsingh0704",
  linkedin: "https://linkedin.com/in/devesh-singh-542483318/",
  leetcode: "https://leetcode.com/u/HonouredOneXdeveshSingh0704/",
};

export const PROJECTS: Project[] = [
  {
    id: "meetmind",
    title: "MeetMind – AI Meeting Assistant",
    subtitle: "End-to-End Audio Transcription, Structured Synthesis & Action Item Extraction",
    tagline: "Turns unstructured verbal discussions into crisp executive minutes and trackable Jira-ready action items in seconds.",
    category: ["ai", "web"],
    featured: true,
    color: "yellow",
    badges: ["Next.js", "TypeScript", "Groq Whisper", "Groq Llama 3", "Firebase", "Express", "jsPDF"],
    github: "https://github.com/deveshsingh0704/meetingMingenerator",
    demo: null,
    metrics: "< 3s synthesis latency",
    problem: "Manual meeting note-taking disrupts participant engagement and often misses crucial action items, deadlines, and technical decisions.",
    solution: "Built a full-stack platform that takes recorded audio or text transcripts and automatically generates clean, structured meeting minutes. Integrated Groq Whisper for near real-time audio transcription and Groq's Llama 3 model for rapid synthesis into categorized minutes, action items, and discussion points.",
    architecture: [
      "Next.js & React frontend with responsive editable notes interface",
      "Groq Whisper integration for low-latency audio-to-text conversion",
      "Groq Llama 3 prompt-engineered pipeline for decision and action-item extraction",
      "Firebase Auth, Cloud Storage (audio uploads), and Firestore searchable document records",
      "Client-side PDF & TXT document export engine with jsPDF"
    ]
  },
  {
    id: "voiceagent",
    title: "Voice AI Todo Agent",
    subtitle: "Conversational Task Management Powered by LangGraph StateGraph & Gemini",
    tagline: "Hands-free autonomous task orchestrator with persistent conversational memory and dynamic tool routing.",
    category: ["ai", "web"],
    featured: true,
    color: "mint",
    badges: ["React", "LangGraph", "LangChain", "Gemini API", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/deveshsingh0704/voice-agent",
    demo: null,
    metrics: "100% hands-free voice I/O",
    problem: "Interacting with task managers manually while multi-tasking, driving, or coding creates friction and interrupts productivity flow.",
    solution: "Engineered a hands-free conversational voice assistant utilizing browser speech synthesis and recognition. Powered by an autonomous LangGraph agent equipped with tool calling to add, list, search, and update MongoDB tasks while maintaining checkpointed context.",
    architecture: [
      "Web Speech Recognition & Synthesis API for natural voice I/O",
      "LangGraph StateGraph workflow with Gemini model for dynamic tool routing",
      "LangGraph MemorySaver for checkpointed multi-turn conversation memory",
      "Express REST API backend connecting agent decisions to MongoDB collections",
      "Real-time dual-view UI for pending and completed tasks with optimistic updates"
    ]
  },
  {
    id: "stocktracker",
    title: "Stock Tracker – Real-Time Dashboard",
    subtitle: "Sub-Second WebSocket Market Streaming & Interactive Portfolio Valuation",
    tagline: "High-frequency market intelligence platform visualizing live ticks, candlestick charts, and instant P&L analytics.",
    category: ["web", "systems"],
    featured: true,
    color: "cyan",
    badges: ["React", "WebSockets", "Finnhub API", "Recharts", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/deveshsingh0704/Stock-Tracker",
    demo: null,
    metrics: "Sub-second tick updates",
    problem: "Retail investors require lightweight, real-time dashboards to track custom watchlists and portfolio performance without bloated interfaces or subscription fees.",
    solution: "Developed an ultra-responsive full-stack market dashboard streaming live stock tick prices via Finnhub WebSockets. Includes interactive visualizations for price trends and portfolio valuation, with MongoDB-backed user holdings and watchlists.",
    architecture: [
      "Persistent WebSocket streaming client receiving live tick updates from Finnhub",
      "Express & Node.js backend managing authenticated MongoDB user watchlists",
      "Dynamic Recharts visualization engine rendering real-time candlestick and line graphs",
      "Calculates instantaneous portfolio profit/loss and asset distribution breakdown",
      "Tailwind CSS responsive design optimized for desktop and mobile tracking"
    ]
  },
  {
    id: "aegis",
    title: "AEGIS – Women's Safety Emergency Platform",
    subtitle: "Google Hackathon Winner • Live Geolocation, Emergency SMS & Twilio Escape Calls",
    tagline: "Crisis distress broadcast platform dispatching real-time coordinates and automated emergency phone call dispatches.",
    category: ["web", "systems"],
    featured: true,
    color: "orange",
    badges: ["Hackathon 1st Place", "React", "Twilio Voice API", "Geolocation API", "Express", "Netlify"],
    github: "https://github.com/himkar-cmd/Women-Safety.git",
    demo: "https://aegis1234.netlify.app/",
    metrics: "1-Tap SOS Dispatch",
    problem: "Personal safety crises require immediate, discreet emergency distress signals and escape mechanisms that work under pressure.",
    solution: "Won 1st place in the college hackathon organized in collaboration with Google. Developed an emergency platform featuring one-tap SOS GPS broadcasting, automated emergency SMS dispatch, and simulated Twilio fake calls to safely exit uncomfortable situations.",
    architecture: [
      "One-click SOS triggering browser Geolocation API coordinates broadcasting",
      "Twilio Voice API integration initiating automated simulated phone calls",
      "Emergency SMS notification dispatch to designated trusted contacts",
      "High-contrast, accessible mobile-first interface designed for crisis situations",
      "Deployed and hosted on Netlify with serverless API triggers"
    ]
  },
  {
    id: "jaldrishti",
    title: "JalDrishti 💧 Groundwater Resource Evaluation",
    subtitle: "DWLR Telemetry Analytics Pipeline for Ministry of Jal Shakti",
    tagline: "Hydrological diagnostics engine parsing nationwide sensor feeds and highlighting aquifer depletion trends.",
    category: ["systems"],
    featured: false,
    color: "cyan",
    badges: ["TypeScript", "Python", "Data Pipelines", "Telemetry", "Express", "REST APIs"],
    github: "https://github.com/deveshsingh0704/JalDrishti",
    demo: null,
    metrics: "Telemetry diagnostics",
    problem: "Groundwater monitoring stations nationwide rely on Digital Water Level Recorders (DWLR) that often experience telemetry dropouts and unparsed data streams.",
    solution: "Engineered an analytics dashboard and data diagnostic pipeline to evaluate national groundwater reserves from DWLR telemetry feeds for the Ministry of Jal Shakti. Diagnoses sensor anomalies and provides actionable hydrological charts.",
    architecture: [
      "Python data ingestion script processing raw telemetry feeds and resolving dropped signals",
      "TypeScript & Express REST backend serving processed groundwater metrics",
      "Spatial data visualization of water table depth changes across monitoring stations",
      "Automated anomaly detection flagging DWLR sensor maintenance requirements"
    ]
  },
  {
    id: "rag",
    title: "Investment RAG Engine",
    subtitle: "FastAPI & Gemini Powered PDF Financial Report Semantic Search",
    tagline: "High-precision financial prospectus parsing pipeline with vector embeddings and hallucination-free citations.",
    category: ["ai"],
    featured: false,
    color: "purple",
    badges: ["Python", "FastAPI", "Gemini API", "Sentence Transformers", "SQLite Vector"],
    github: "https://github.com/deveshsingh0704/rag-e1",
    demo: null,
    metrics: "100% cited disclosures",
    problem: "Financial quarterly reports and prospectus PDFs contain hundreds of pages of dense tables and disclosures that take analysts hours to manually parse.",
    solution: "Built a high-precision Retrieval-Augmented Generation (RAG) system with a FastAPI backend and interactive frontend. Ingests PDFs, chunks content, creates dense vector embeddings via Sentence Transformers, and uses Gemini to synthesize cited answers.",
    architecture: [
      "PDF ingestion and recursive semantic chunking pipeline",
      "Sentence Transformers vector embeddings stored in SQLite for rapid similarity retrieval",
      "Context-grounded prompt generation sent to Gemini API to eliminate hallucinations",
      "FastAPI asynchronous endpoints with complete citation metadata"
    ]
  },
  {
    id: "attendance",
    title: "AI Edge Classroom Attendance",
    subtitle: "Offline-First Computer Vision Facial Recognition Built in Pure OpenCV",
    tagline: "Zero-cloud, edge-ready biometric logging operating with zero latency directly on local classroom hardware.",
    category: ["ai", "systems"],
    featured: false,
    color: "mint",
    badges: ["Python", "OpenCV", "NumPy", "SQLite", "Computer Vision", "Edge AI"],
    github: "https://github.com/deveshsingh0704/face-recognition-attendacne",
    demo: null,
    metrics: "100% offline edge processing",
    problem: "Manual attendance wastes valuable lecture time, while cloud biometric systems fail during campus internet disruptions.",
    solution: "Developed an automated, 100% offline-first classroom attendance system powered strictly by computer vision algorithms in pure OpenCV without external cloud APIs. Detects student faces in real time and logs authenticated timestamps into SQLite.",
    architecture: [
      "Pure OpenCV Haar Cascade face detection pipeline",
      "Local LBPH (Local Binary Patterns Histograms) face recognition classifier",
      "Zero-latency edge processing guaranteeing complete data privacy",
      "SQLite local database logging attendance records and exportable CSV sheets"
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Front End Developer Intern",
    company: "Absolutely.ai",
    period: "Mar 10 – Jun 10, 2026",
    location: "Remote",
    type: "Internship",
    badge: "Production AI Platform",
    color: "yellow",
    highlights: [
      {
        title: "Product Interface Engineering",
        desc: "Translated complex Figma design specs into pixel-accurate, production-ready AGEN8 interfaces with responsive layouts and fluid interaction states."
      },
      {
        title: "Component Architecture & Integration",
        desc: "Owned frontend component architecture and design-system implementation; tightly integrated frontend with backend APIs to ship robust end-to-end features."
      }
    ],
    tags: ["React", "Next.js", "Figma to Code", "Component Architecture", "Design Systems", "REST Integration"]
  },
  {
    role: "Open Source Contributor",
    company: "Flotilla",
    period: "2024 – Present",
    location: "Remote • GitHub",
    type: "Open Source",
    badge: "6 Merged PRs",
    color: "mint",
    highlights: [
      {
        title: "Collaborative Code Reviews",
        desc: "Actively collaborated through code reviews and existing codebase workflows; authored and successfully merged 6 distinct pull requests."
      },
      {
        title: "UI & UX Fixes",
        desc: "Fixed complex UI layering and text-overlap issues on dynamic dashboards, and engineered login/signup progress indicators for streamlined user onboarding."
      }
    ],
    tags: ["TypeScript", "React", "Open Source", "PR Reviews", "UI Layering", "Git Workflows"]
  },
  {
    role: "Global Developer Track",
    company: "Summer of Bitcoin",
    period: "2024 & 2025",
    location: "Global Fellowship",
    type: "Competitive Selection",
    badge: "2x Selected",
    color: "orange",
    highlights: [
      {
        title: "Technical Screening Excellence",
        desc: "Selected for the highly competitive global Developer Track in consecutive editions (2024 & 2025). Successfully cleared rigorous algorithmic problem-solving rounds."
      },
      {
        title: "Proposal Advancement",
        desc: "Advanced to formal proposal development under international mentorship, focusing on distributed systems and protocol-level architecture."
      }
    ],
    tags: ["Distributed Systems", "Bitcoin Protocol", "P2P Architecture", "Algorithm Design"]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "1st Place Winner",
    event: "AEGIS Women's Safety App",
    organization: "Google Collab Hackathon",
    badge: "Hackathon Winner",
    color: "yellow",
    metrics: "1st of 50+ Teams",
    description: "Won college hackathon organized in collaboration with Google. Engineered an emergency women's safety platform with automated Twilio distress calls, emergency SMS, and live geolocation.",
    link: { label: "Live App Demo", url: "https://aegis1234.netlify.app/" }
  },
  {
    title: "Two-Time Global Selectee",
    event: "Summer of Bitcoin Fellowship",
    organization: "International Developer Track",
    badge: "2024 & 2025",
    color: "orange",
    metrics: "Top 2% Global Selection",
    description: "Selected for the international Developer Track in both 2024 and 2025 editions. Cleared competitive technical screenings and qualified for the formal project proposal round."
  },
  {
    title: "300+ Solved Algorithms",
    event: "Data Structures & Systems",
    organization: "LeetCode & Competitive Coding",
    badge: "Problem Solving",
    color: "mint",
    metrics: "300+ Problems",
    description: "Demonstrated deep problem-solving skills across Graphs, Dynamic Programming, Heap/Trees, and SQL. Continuous commitment to computational efficiency and clean algorithmic execution.",
    link: { label: "LeetCode Profile", url: "https://leetcode.com/u/HonouredOneXdeveshSingh0704/" }
  }
];

export const SKILL_CATEGORIES = [
  {
    title: "AI & Agentic Systems",
    subtitle: "Autonomous workflows & LLM orchestration",
    color: "yellow",
    skills: [
      { name: "LangGraph", level: 90 },
      { name: "LangChain", level: 88 },
      { name: "Google Gemini API", level: 92 },
      { name: "Groq (Whisper & Llama)", level: 88 },
      { name: "RAG Architectures", level: 85 },
      { name: "Sentence Transformers", level: 82 },
      { name: "Tool Calling & Memory", level: 90 },
      { name: "Prompt Engineering", level: 92 },
    ]
  },
  {
    title: "Frontend Engineering",
    subtitle: "Fluid, high-performance web experiences",
    color: "mint",
    skills: [
      { name: "React 18 / 19", level: 95 },
      { name: "Next.js (App Router)", level: 92 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 96 },
      { name: "Framer Motion", level: 88 },
      { name: "Recharts", level: 85 },
      { name: "Figma to Code", level: 92 },
      { name: "Design Systems", level: 88 },
    ]
  },
  {
    title: "Backend & Real-Time",
    subtitle: "High-frequency streaming & resilient APIs",
    color: "cyan",
    skills: [
      { name: "Node.js & Express", level: 90 },
      { name: "FastAPI (Python)", level: 85 },
      { name: "WebSockets (Streaming)", level: 88 },
      { name: "RESTful API Design", level: 92 },
      { name: "Twilio Voice & SMS API", level: 86 },
      { name: "Finnhub Market Stream", level: 84 },
    ]
  },
  {
    title: "Databases & Core Tools",
    subtitle: "Data persistence & engineering workflows",
    color: "orange",
    skills: [
      { name: "MongoDB", level: 88 },
      { name: "Firebase & Firestore", level: 86 },
      { name: "SQLite & Vector", level: 84 },
      { name: "Git & GitHub PR Workflows", level: 94 },
      { name: "OpenCV (Computer Vision)", level: 80 },
      { name: "Vercel & Netlify CI/CD", level: 90 },
    ]
  }
];
