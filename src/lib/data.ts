export interface PortfolioData {
  name: string;
  tagline: string;
  currently: string;
  contact: {
    github: string;
    email: string;
    linkedin: string;
    portfolio: string;
  };
  experience: Experience[];
  projects: Project[];
  skills: Record<string, string[]>;
  skillProjects: Record<string, string[]>;
  education: Education[];
  certifications: string[];
  achievements: Achievement[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  type: string;
  start: string;
  end: string;
  stack: string[];
  bullets: string[];
}

export interface Project {
  id: string;
  name: string;
  year: string;
  stack: string[];
  summary: string;
  preview: "news" | "image-gen" | "mobile" | "game" | "system" | "default";
  bullets: string[];
  links?: {
    github?: string;
    web?: string;
    mobile?: string;
  };
}

export interface Education {
  school: string;
  degree: string;
  start: string;
  end: string;
}

export interface Achievement {
  title: string;
  year: string;
  detail: string;
}

export const RESUME_DATA: PortfolioData = {
  name: "Snaehath P",
  tagline: "AI & Fullstack · Mobile · Desktop Developer",
  currently:
    "Actively exploring new opportunities in Fullstack, AI, Mobile & Desktop Engineering.",
  contact: {
    github: "Snaehath",
    email: "snaehath972002@gmail.com",
    linkedin: "snaehath-p-755997364",
    portfolio: "snaehath.github.io/portfolio",
  },
  experience: [
    {
      id: "goodbards",
      role: "Software Developer",
      company: "GoodBards",
      type: "Full-time",
      start: "Sep 2025",
      end: "May 2026",
      stack: ["React", "Next.js", "TypeScript", "Tailwind", "Shadcn"],
      bullets: [
        "Architected the core **CDP infrastructure**, delivering high-complexity management modules for unified **Contacts and Companies** data handling.",
        "Engineered an extensible **Custom Field System**, allowing users to define dynamic metadata and expand entity schemas during contact creation.",
        "Developed the **Import Pipeline (Job History)**, enabling large-scale **CSV bulk uploads**, automated entity provisioning, and progress tracking.",
        "Built **Segmentation Engine** using multi-condition query logic for real-time cohort tracking and targeted automated campaign distribution.",
        "Developed **Email Marketing Engine** with Design -> Content orchestration and the **Brand Kit Workstation** for corporate identity management.",
        "Developed **AI Translation Studio** with chain-of-thought auditing and a centralized **Prompt Studio** for versioned agent orchestration.",
        "Integrated **OCR-based Business Card ingestion** for entity extraction and designed the unified **Social Media Hub** for multi-platform scheduling.",
      ],
    },
    {
      id: "cmrl",
      role: "Deep Learning Engineer",
      company: "CMRL (Chennai Metro)",
      type: "Internship",
      start: "Mar 2024",
      end: "May 2024",
      stack: ["Python", "YOLOv8", "OCR", "Flask", "OpenCV"],
      bullets: [
        "Built vehicle classification system with HSV color detection and OCR; integrated via Flask API on metro POS machines for under 2s processing.",
      ],
    },
  ],
  projects: [
    {
      id: "spotlight-win",
      name: "Spotlight-Win v0.4",
      year: "2026",
      stack: ["Rust", "Tauri v2", "Tantivy", "JavaScript"],
      summary: "High-performance Windows launcher with sub-1ms search and local-first privacy.",
      preview: "system",
      bullets: [
        "Achieved **sub-1ms query latency** using the Tantivy search engine and engineered fuzzy search logic.",
        "Optimized application boot by 10x using an asynchronous icon caching subsystem; architected modular 11-crate backend with Win32 API and Tauri 2.0.",
      ],
    },
    {
      id: "aquaflow",
      name: "AquaFlow - Hydration Tracker",
      year: "2026",
      stack: ["React Native", "Expo SDK 54", "NativeWind", "TypeScript", "Zustand", "MMKV"],
      summary: "Offline-first mobile hydration tracker with adaptive goal scaling and SVG fluid physics.",
      preview: "mobile",
      bullets: [
        "Architected high-performance, offline-first mobile app with **React Native (Expo SDK 54)**, **NativeWind**, and **TypeScript**.",
        "Engineered adaptive goal scaling algorithm using **OpenWeather API** to dynamically calculate hydration targets based on temperature and activity.",
        "Implemented ultra-fast persistence (<1ms latency) leveraging **Zustand** paired with synchronous **MMKV** C++ storage.",
        "Designed custom vector **SVG fluid physics animations** using **Reanimated** and optimized waking-hours notification scheduling.",
      ],
    },
    {
      id: "ledgerly",
      name: "Ledgerly",
      year: "2026",
      stack: ["React Native", "Expo Router", "Gifted Charts", "Lucide", "NativeWind"],
      summary: "Personal finance and expense management client with interactive visual charts.",
      preview: "mobile",
      bullets: [
        "Designed expense management mobile app with **React Native Gifted Charts** for spending breakdown visualization.",
        "Integrated **Expo Router** navigation and dark-mode compatible **NativeWind** design system.",
      ],
    },
    {
      id: "byte",
      name: "Byte Desktop Assistant",
      year: "2026",
      stack: ["Rust", "Tauri v2", "Whisper STT", "Piper TTS", "Gemini AI"],
      summary: "Lightweight personal desktop voice assistant for Windows with local hardware voice pipeline.",
      preview: "system",
      bullets: [
        "Built local voice pipeline using **Whisper STT** for speech recognition and **Piper TTS** for zero-latency spoken responses.",
        "Engineered native Rust system controls with **WMI integration** for hardware metrics and active window management.",
      ],
    },
    {
      id: "readhub",
      name: "ReadHub",
      year: "2025",
      stack: ["Next.js", "Gemini AI", "Zustand", "RAG", "Vector Search"],
      summary: "Intelligent digital reading portal merging news, ebooks, and AI stories.",
      preview: "news",
      bullets: [
        "Built a **Streaming Investigative Engine** with real-time activity console.",
        "Integrated **Multi-Perspective AI** for 360-degree explanation of complex events.",
        "Developed a 'Future AI' engine to simulate potential future headlines.",
      ],
    },
    {
      id: "stampcam",
      name: "StampCam",
      year: "2026",
      stack: ["React Native", "Expo SDK 57", "Expo Camera", "Expo Location", "NativeWind"],
      summary: "GPS & Timestamp watermarking camera app for field evidence logging and photo sharing.",
      preview: "mobile",
      bullets: [
        "Built custom camera interface with **Expo Camera** and real-time **GPS location watermarking** using **Expo Location**.",
        "Implemented file system persistence and instant image sharing with **Expo Sharing** and **NativeWind** styling.",
      ],
    },
    {
      id: "glucotrack",
      name: "GlucoTrack",
      year: "2026",
      stack: ["React Native", "Expo Router", "Zustand", "NativeWind", "TypeScript"],
      summary: "Mobile glucose and metabolic health tracking app with real-time log analytics.",
      preview: "mobile",
      bullets: [
        "Developed mobile glucose log app using **Expo Router** and **Zustand** state persistence.",
        "Built intuitive entry workflows and analytics visualization with **NativeWind** components.",
      ],
    },
    {
      id: "lifelog",
      name: "LifeLog",
      year: "2026",
      stack: ["React Native", "Expo", "Zustand", "AsyncStorage", "TypeScript"],
      summary: "Minimalist daily activity log and habit tracker for personal productivity.",
      preview: "mobile",
      bullets: [
        "Created habit tracking and daily log app with **AsyncStorage** local persistence.",
        "Engineered streak tracking algorithms and clean list animations.",
      ],
    },
    {
      id: "devbridge",
      name: "DevBridge",
      year: "2026",
      stack: ["React", "Tauri v2", "TypeScript", "Zustand", "Tailwind"],
      summary: "Desktop developer workstation bridging project setup and AI agent workflows.",
      preview: "system",
      bullets: [
        "Built desktop developer hub for orchestrating project templates and agent workflows with **Tauri v2** and **React**.",
        "Implemented workspace state management and quick developer tools using **Zustand**.",
      ],
    },
    {
      id: "promptsmith",
      name: "PromptSmith",
      year: "2025",
      stack: ["Next.js", "Radix UI", "Flux"],
      summary: "High-fidelity prompt engineering workstation for generative AI workflows.",
      preview: "image-gen",
      bullets: [
        "Implemented a **multi-stage workflow** (Intent -> Blueprint -> Synthesis).",
        "Designed a **Noir aesthetic** UI with high-contrast Obsidian-inspired tokens.",
        "Architected a neural expansion layer to transform raw intent into detailed blueprints.",
      ],
    },
    {
      id: "readhub-mobile",
      name: "ReadHub Mobile",
      year: "2026",
      stack: ["React Native", "Expo", "Zustand", "TypeScript"],
      summary: "Premium mobile client for the ReadHub platform with offline-first capabilities.",
      preview: "mobile",
      bullets: [
        "Implemented **Infinite Scrolling** and paginated news feeds.",
        "Designed a custom **Avatar Selection UI** and shadcn-inspired navigation.",
      ],
    },
    {
      id: "crossword-gen",
      name: "Crossword",
      year: "2024",
      stack: ["React", "TypeScript", "Tailwind"],
      summary: "Precision crossword application with verification logic and difficulty scaling.",
      preview: "game",
      bullets: [
        "Built a robust validation engine for real-time answer verification.",
        "Implemented accessible keyboard navigation and multi-difficulty support.",
      ],
    },
    {
      id: "github-dogtags",
      name: "GitHub DogTags",
      year: "2024",
      stack: ["React", "TypeScript", "Vite", "Tailwind"],
      summary: "Customizable badge-style Dog Tag generator for developer profiles.",
      preview: "image-gen",
      bullets: [
        "Created a fun visual tool for generating **customizable README badges**.",
        "Integrated GitHub API for automatic avatar and username fetching.",
      ],
    },
    {
      id: "image-puzzle",
      name: "Image Puzzle",
      year: "2024",
      stack: ["React", "Vite", "Tailwind", "Sliding Logic"],
      summary: "Sliding puzzle game with custom image uploads and A*-based auto-solve.",
      preview: "game",
      bullets: [
        "Developed an **A* search-based auto-solver** for complex puzzle states.",
        "Enabled dynamic grid resizing and custom image partitioning.",
      ],
    },
    {
      id: "the-clock",
      name: "The Clock",
      year: "2024",
      stack: ["React", "TypeScript", "CSS Modules"],
      summary: "High-precision real-time digital clock with a minimal design.",
      preview: "system",
      bullets: [
        "Focused on **pixel-perfect timing** and clean component architecture.",
      ],
    },
    {
      id: "socket-chat",
      name: "Socket Chat",
      year: "2023",
      stack: ["Node.js", "Express", "Socket.io"],
      summary: "Real-time room-based chat application with user presence and typing indicators.",
      preview: "system",
      bullets: [
        "Engineered real-time **bi-directional communication** using WebSockets.",
        "Implemented room isolation and active user tracking.",
      ],
    },
    {
      id: "htg-game",
      name: "Hunt The Ghost",
      year: "2023",
      stack: ["Vanilla JS", "HTML5", "CSS3"],
      summary: "Card matching memory game featuring classic ghost-hunting mechanics.",
      preview: "game",
      bullets: [
        "Built using purely **Vanilla JavaScript** to focus on DOM manipulation logic.",
      ],
    },
    {
      id: "ping-pong",
      name: "Ping Pong",
      year: "2023",
      stack: ["Canvas API", "JavaScript"],
      summary: "Arcade-style table tennis simulation with predictive AI opponent.",
      preview: "game",
      bullets: [
        "Implemented **predictive AI logic** for the computer opponent.",
        "Utilized **Canvas API** for smooth 60FPS physics rendering.",
      ],
    },
  ],
  skills: {
    Fullstack: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Rust",
      "React",
      "Next.js",
      "React Native",
      "Node.js",
      "Express.JS",
      "REST APIs",
      "WebSockets",
      "OAuth",
    ],
    Database: ["MongoDB", "Redis", "SQL"],
    Tools: ["Docker", "Git", "Postman", "Tauri", "Win32 API", "Figma"],
  },
  skillProjects: {
    "Next.js": ["readhub", "promptsmith"],
    "React Native": ["aquaflow", "stampcam", "glucotrack", "ledgerly", "lifelog", "readhub-mobile"],
    Rust: ["spotlight-win", "byte"],
    Tauri: ["spotlight-win", "byte", "devbridge"],
    Python: ["cmrl"],
    AI: ["readhub", "promptsmith", "byte"],
  },
  education: [
    {
      school: "Sri Venkateswara College of Engineering (SVCE)",
      degree: "B.Tech in Artificial Intelligence and Data Science",
      start: "2020",
      end: "2024",
    },
  ],
  certifications: [
    "React: The Complete Guide (Udemy)",
    "Scientific Computing w/ Python (fCC)",
    "Web Dev Bootcamp (Udemy)",
  ],
  achievements: [
    {
      title: "MAMMATHON",
      year: "2024",
      detail:
        "Participated in building Pirate Land, a real-time Web3 arcade game featuring one-click Para onboarding and on-chain move verification via Celestia.",
    },
  ],
};
