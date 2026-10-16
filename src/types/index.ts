export type NavItem = {
  name: string;
  href: string;
};

export type SocialLink = {
  name: string;
  href: string;
  label: string;
};

export type Metric = {
  value: string;
  label: string;
  logoUrl?: string;
};

export type SkillCategory = {
  title: string;
  skills: string[];
};

export type Project = {
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  visual: "discovery" | "security" | "posture" | "wellbeing";
  imageUrl?: string;
  featured?: boolean;
  liveUrl?: string;
  githubUrl?: string;
  award?: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location?: string;
  companyUrl?: string;
  certificateUrl?: string;
  logoUrl?: string;
  highlights: string[];
};

export type EducationItem = {
  school: string;
  degree: string;
  period: string;
  location: string;
  detail?: string;
  logoUrl?: string;
  schoolUrl?: string;
  credentialUrl?: string;
};

export type Certification = {
  title: string;
  issuer: string;
  url?: string;
  imageUrl?: string;
  logoUrl?: string;
  type: "certificate" | "achievement" | "publication";
};

export type ContactInfo = {
  email: string;
  phone: string;
  phoneDisplay: string;
  location: string;
};
