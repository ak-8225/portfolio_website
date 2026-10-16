import type {
  Certification,
  ContactInfo,
  EducationItem,
  ExperienceItem,
  Metric,
  NavItem,
  Project,
  SkillCategory,
  SocialLink,
} from "@/types";

export const siteConfig = {
  name: "Akshay Kumar",
  role: "MS AI & Business Analytics · Product + ML",
  tagline: "I ship AI products that move real metrics.",
  bio: "MS (AI & Business Analytics) student and former Program Associate, building AI products from an early pilot to company-wide use.",
  resumeUrl: "/assets/Akshay_Kumar_Resume.pdf",
  profileImage: "/assets/profile-speaking.png",
  coverImage: "/assets/cover.png",
  location: "Gwalior, India",
};

export const navItems: NavItem[] = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/ak-8225",
    label: "GitHub",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/akshay-kumar-b61aa624b/",
    label: "LinkedIn",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/akshayk.20",
    label: "Instagram",
  },
  {
    name: "Email",
    href: "mailto:kumar.akshay60560@gmail.com",
    label: "Email",
  },
];

export const contactInfo: ContactInfo = {
  email: "kumar.akshay60560@gmail.com",
  phone: "+919045408264",
  phoneDisplay: "+91 90454 08264",
  location: "Gwalior, India",
};

export const metrics: Metric[] = [
  { value: "2% → 30%", label: "Video counselling engagement" },
  { value: "19% → 52%", label: "Session attendance" },
  {
    value: "Ex Program Associate",
    label: "Leap Scholar",
    logoUrl: "/assets/leap-scholar-logo.png",
  },
  {
    value: "Finalist",
    label: "Barclays Hack-O-Hire · 6,000+",
    logoUrl: "/assets/barclays-logo.png",
  },
];

export const aboutHighlights = [
  "AI tooling from a 40-person pilot to a company-wide daily product.",
  "Four workflow automation bots, built and shipped across counselling operations.",
  "Innofusion winner · Barclays Hack-O-Hire finalist · IEEE research author.",
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Product & Program",
    skills: [
      "0→1 Builds",
      "Roadmapping",
      "KPI Tracking",
      "Workflow Automation",
      "SOP Design",
      "Stakeholder Mgmt",
    ],
  },
  {
    title: "AI & ML",
    skills: [
      "LLM Integration",
      "Gemini / Llama",
      "Computer Vision",
      "NLP",
      "Prompt Design",
      "Explainable AI",
    ],
  },
  {
    title: "Engineering",
    skills: [
      "Python",
      "C++",
      "REST APIs",
      "Next.js",
      "Firebase",
      "Supabase",
      "Git",
    ],
  },
  {
    title: "Analytics & Design",
    skills: ["Power BI", "Tableau", "Figma", "Streamlit", "OpenCV"],
  },
];

export const projects: Project[] = [
  {
    title: "Hidden Gems",
    tagline: "Local discovery platform",
    description: "Discover independent local places, starting with Chennai.",
    tech: ["Next.js", "Supabase", "Firebase", "Sentence-BERT"],
    imageUrl: "/assets/hidden-gems-project.png",
    liveUrl: "https://hidden-gems-new.vercel.app/login",
    award: "IEEE SPICES 2026 (accepted)",
    visual: "discovery",
    featured: true,
  },
  {
    title: "AI Password Strength Analyser",
    tagline: "Barclays Hack-O-Hire finalist",
    description: "A password risk tool with breach checks, facial MFA, and GenAI feedback.",
    tech: ["ML", "Facial MFA", "GenAI"],
    imageUrl: "/assets/breach-ai-project.png",
    liveUrl: "https://barclays-hackathon.vercel.app/",
    githubUrl: "https://github.com/ak-8225/my-hack-o-hire",
    award: "Finalist · Top 24 / 6000+",
    visual: "security",
  },
  {
    title: "PosturaSenseAI",
    tagline: "Real-time posture detection",
    description: "A 92%-accurate posture classifier with LLM-guided corrections.",
    tech: ["OpenCV", "CNN", "Streamlit", "Llama"],
    award: "1st Place · Innofusion'25 (71 teams)",
    visual: "posture",
  },
  {
    title: "SHEild Mental Health Chatbot",
    tagline: "Proactive LLM companion",
    description: "A proactive mental-health companion inside the SHEild safety app.",
    tech: ["LLM", "Product Design"],
    award: "Runner-Up · Day Zero Hackathon (100+ teams)",
    visual: "wellbeing",
  },
];

export const experience: ExperienceItem[] = [
  {
    company: "Leap Scholar (Outleap Technologies)",
    role: "Program Associate",
    period: "Jun 2025 – Jun 2026",
    location: "Product operations · AI tooling",
    logoUrl: "/assets/leap-scholar-logo.png",
    companyUrl: "https://leapscholar.com/",
    certificateUrl: "/assets/cert-leap.png",
    highlights: [
      "Took a Gemini-powered college recommender from a 40-person pilot to company-wide daily use.",
      "Raised video counselling engagement from 2% to 30% with internal AI tools.",
      "Built four automation bots; session attendance grew from 19% to 52%.",
    ],
  },
  {
    company: "IASRI (Indian Agricultural Statistics Research Institute)",
    role: "Machine Learning Intern",
    period: "June 2024",
    location: "Computer vision · Research",
    logoUrl: "/assets/icar-iasri-logo.png",
    companyUrl: "https://www.iasri.res.in/",
    certificateUrl: "/assets/cert-iasri.png",
    highlights: [
      "Built a plant-disease CNN reaching 91% accuracy across crop datasets.",
      "Owned the computer-vision pipeline from data collection through deployment.",
    ],
  },
];

export const education: EducationItem[] = [
  {
    school: "ABV-IIITM Gwalior",
    degree: "MS in Artificial Intelligence & Business Analytics",
    period: "2026 – Present",
    location: "Gwalior, India",
    detail: "Institute of National Importance",
    logoUrl: "/assets/abv-iiitm-logo.png",
    schoolUrl: "https://www.iiitm.ac.in/",
  },
  {
    school: "SRM Institute of Science and Technology",
    degree: "B.Tech CSE (Big Data Analytics)",
    period: "2022 – 2026",
    location: "Chennai, India",
    detail: "CGPA: 8.9/10",
    logoUrl: "/assets/srm-logo.png",
    schoolUrl: "https://www.srmist.edu.in/",
    credentialUrl: "/assets/srm-provisional-degree.png",
  },
];

export const certifications: Certification[] = [
  {
    title: "Microsoft Certified: Azure AI Fundamentals",
    issuer: "Microsoft",
    url: "https://drive.google.com/file/d/1qdOryby3lBdI29s2QZaejpnvUkhJiS6h/view?pli=1",
    imageUrl: "/assets/cert-azure.png",
    logoUrl: "/assets/microsoft-logo.png",
    type: "certificate",
  },
  {
    title: "Leap Scholar Internship Completion",
    issuer: "Leap Scholar",
    url: "https://drive.google.com/file/d/1CthE3fgkjGnAm31da8kUPeb4nPJaEHXa/view?pli=1",
    imageUrl: "/assets/cert-leap.png",
    logoUrl: "/assets/leap-scholar-logo.png",
    type: "certificate",
  },
  {
    title: "IASRI Internship Completion",
    issuer: "IASRI / ICAR",
    url: "https://drive.google.com/file/d/1j9ungyKgNBBGJXMV2_TN9fpSf7aLNwQC/view?pli=1",
    imageUrl: "/assets/cert-iasri.png",
    logoUrl: "/assets/icar-iasri-logo.png",
    type: "certificate",
  },
  {
    title: "Winner · Innofusion'25",
    issuer: "71 teams competed",
    type: "achievement",
  },
  {
    title: "Finalist · Barclays Hack-O-Hire 2025",
    issuer: "Top 24 / 6000+",
    logoUrl: "/assets/barclays-logo.png",
    type: "achievement",
  },
  {
    title: "Runner-Up · Day Zero Hackathon",
    issuer: "100+ teams",
    type: "achievement",
  },
  {
    title: "Credit Card Fraud Detection with Explainable AI",
    issuer: "IEEE-sponsored ICDSBS 2025, SRMIST",
    url: "https://www.researchgate.net/publication/392884577_Enhancing_Credit_Card_Fraud_Detection_with_Explainable_AI_and_Model_Comparison",
    logoUrl: "/assets/ieee-logo.png",
    type: "publication",
  },
];
