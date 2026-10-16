"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  BrainCircuit,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Languages,
  Lightbulb,
  MessageSquareText,
  PanelsTopLeft,
  ScanEye,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
  WandSparkles,
  Webhook,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { skillCategories } from "@/data/resumeData";
import { SectionHeading } from "./SectionHeading";

const categoryIcons: Record<string, LucideIcon[]> = {
  "Product & Program": [
    Workflow,
    Target,
    BarChart3,
    PanelsTopLeft,
    UsersRound,
    Lightbulb,
  ],
  "AI & ML": [
    BrainCircuit,
    Sparkles,
    ScanEye,
    Languages,
    WandSparkles,
    ShieldCheck,
  ],
  Engineering: [Code2, Cpu, Webhook, Database, GitBranch, PanelsTopLeft],
  "Analytics & Design": [
    BarChart3,
    PanelsTopLeft,
    Workflow,
    Database,
    MessageSquareText,
  ],
};

const ringRadii = [22, 29, 36, 43];
const globeSkills = skillCategories.flatMap((category) =>
  category.skills.map((name, index) => ({
    name,
    category: category.title,
    Icon: categoryIcons[category.title][index % categoryIcons[category.title].length],
  })),
);

export function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(globeSkills[0].name);
  const [turn, setTurn] = useState(0);
  let skillIndex = 0;

  return (
    <section id="skills" className="relative px-5 py-24 sm:px-8">
      <div className="absolute inset-0 -z-10 bg-surface/50" />
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Tech Stack"
          title="A toolkit in motion"
          description="Explore the mix of product, AI, engineering, and analytics skills I bring to each build."
        />

        <div className="mx-auto mb-12 max-w-3xl">
          <div className="relative mx-auto aspect-square w-full max-w-[30rem] overflow-hidden rounded-full">
            <div className="absolute inset-[9%] rounded-full border border-accent/15 bg-[radial-gradient(circle_at_34%_27%,color-mix(in_oklab,var(--accent)_15%,transparent),transparent_50%),radial-gradient(circle_at_50%_50%,var(--surface),var(--background)_72%)] shadow-[0_0_90px_var(--glow)]" />
            <div className="absolute inset-[17%] rounded-full border border-dashed border-accent/20" />
            <div className="absolute inset-[29%] rounded-full border border-card-border/80" />
            <div className="absolute inset-[41%] rounded-full border border-accent/15" />

            <div
              className="skill-globe-turn absolute inset-0"
              style={{ transform: `rotate(${turn}deg)` }}
            >
              <div className="skill-globe-orbit absolute inset-0">
                {globeSkills.map(({ name, category, Icon }, index) => {
                  const ring = Math.min(Math.floor(index / 6), ringRadii.length - 1);
                  const positionInRing = index % 6;
                  const angle =
                    (positionInRing / 6) * Math.PI * 2 -
                    Math.PI / 2 +
                    ring * (Math.PI / 6);
                  const radius = ringRadii[ring];
                  const x = (Math.cos(angle) * radius).toFixed(3);
                  const y = (Math.sin(angle) * radius).toFixed(3);
                  const skillNumber = skillIndex++;
                  const isSelected = selectedSkill === name;

                  return (
                    <motion.button
                      key={name}
                      type="button"
                      title={`${name} · ${category}`}
                      aria-label={`Explore ${name}, ${category}`}
                      aria-pressed={isSelected}
                      onMouseEnter={() => {
                        if (!isSelected) {
                          setSelectedSkill(name);
                          setTurn((previous) => previous + 60);
                        }
                      }}
                      onClick={() => {
                        setSelectedSkill(name);
                        setTurn((previous) => previous + 60);
                      }}
                      className={`absolute left-1/2 top-1/2 z-10 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border shadow-lg backdrop-blur transition-colors sm:h-12 sm:w-12 ${
                        isSelected
                          ? "border-accent bg-accent text-accent-foreground shadow-[0_0_28px_var(--glow)]"
                          : "border-card-border bg-card/90 text-accent hover:border-accent/60 hover:bg-surface"
                      }`}
                      style={{
                        marginLeft: `${x}%`,
                        marginTop: `${y}%`,
                      }}
                      initial={false}
                      animate={{
                        scale: isSelected ? 1.14 : 1,
                      }}
                      transition={{ type: "spring", stiffness: 280, damping: 18 }}
                    >
                      <motion.span
                        key={`${name}-${isSelected ? skillNumber : "idle"}`}
                        animate={isSelected ? { rotate: 360 } : { rotate: 0 }}
                        transition={{
                          duration: 0.65,
                          ease: "easeInOut",
                        }}
                      >
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </motion.span>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
              <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full border border-accent/20 bg-background/90 text-center shadow-[0_0_45px_var(--glow)] backdrop-blur sm:h-32 sm:w-32">
                <BrainCircuit className="h-6 w-6 text-accent" />
                <span className="mt-2 font-display text-xs font-semibold text-foreground sm:text-sm">
                  Product × AI
                </span>
                <span className="mt-1 text-[10px] text-muted">Skills orbit</span>
              </div>
            </div>
          </div>

          <p className="mt-4 min-h-6 text-center text-sm text-muted" aria-live="polite">
            <span className="font-medium text-foreground">{selectedSkill}</span>
            {" · "}
            Tap or hover a skill to explore
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="glass rounded-2xl p-5 sm:p-6"
            >
              <h3 className="font-display text-lg font-semibold text-foreground">
                {category.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => {
                      setSelectedSkill(skill);
                      setTurn((previous) => previous + 60);
                    }}
                    className="rounded-lg border border-card-border bg-background/60 px-3 py-1.5 text-left text-sm text-muted transition hover:border-accent/40 hover:text-foreground focus-visible:outline"
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
