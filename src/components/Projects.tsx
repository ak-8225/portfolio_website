"use client";

import { motion } from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  Code2,
  ExternalLink,
  HeartPulse,
  MapPin,
  ShieldCheck,
  Sparkles,
  Trophy,
} from "lucide-react";
import { projects } from "@/data/resumeData";
import { SectionHeading } from "./SectionHeading";

const visualIcons = {
  discovery: MapPin,
  security: ShieldCheck,
  posture: Activity,
  wellbeing: HeartPulse,
};

export function Projects() {
  return (
    <section id="projects" className="relative px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected work"
          title="Ideas, shipped"
          description="A few products where AI, thoughtful design, and measurable outcomes meet."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="group glass flex flex-col overflow-hidden rounded-2xl transition hover:border-accent/35"
            >
              <div className={`relative flex h-48 items-center justify-center overflow-hidden p-6 sm:h-52 ${
                project.visual === "discovery"
                  ? "bg-gradient-to-br from-emerald-950 via-teal-900 to-cyan-950"
                  : project.visual === "security"
                    ? "bg-gradient-to-br from-slate-950 via-indigo-950 to-violet-950"
                    : project.visual === "posture"
                      ? "bg-gradient-to-br from-slate-950 via-sky-950 to-teal-950"
                      : "bg-gradient-to-br from-rose-950 via-purple-950 to-slate-950"
              }`}>
                <div className="absolute inset-0 grid-overlay opacity-30" />
                <div className="absolute -top-16 -right-10 h-48 w-48 rounded-full bg-white/10 blur-3xl transition duration-500 group-hover:scale-125" />
                <div className="relative flex w-full max-w-sm items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white shadow-lg backdrop-blur">
                    {(() => {
                      const Icon = visualIcons[project.visual];
                      return <Icon className="h-7 w-7" />;
                    })()}
                  </div>
                  <div className="min-w-0 flex-1 rounded-2xl border border-white/15 bg-slate-950/45 p-4 text-white shadow-2xl backdrop-blur-md">
                    <div className="mb-3 flex items-center justify-between gap-2">
                      <span className="truncate text-xs font-medium text-white/80">
                        {project.tagline}
                      </span>
                      <Sparkles className="h-3.5 w-3.5 shrink-0 text-white/70" />
                    </div>
                    {project.visual === "discovery" ? (
                      <div className="flex flex-wrap gap-2">
                        {["Chennai", "Local finds", "Explore"].map((label) => (
                          <span key={label} className="rounded-lg bg-white/10 px-2.5 py-1.5 text-[11px] text-white/85">
                            {label}
                          </span>
                        ))}
                      </div>
                    ) : project.visual === "security" ? (
                      <div className="flex items-center gap-2">
                        {["Breach check", "Risk score", "Facial MFA"].map((label) => (
                          <span key={label} className="rounded-lg bg-white/10 px-2 py-1.5 text-[10px] text-white/85">
                            {label}
                          </span>
                        ))}
                      </div>
                    ) : project.visual === "posture" ? (
                      <div>
                        <div className="mb-2 flex justify-between text-[11px] text-white/75">
                          <span>Posture classifier</span>
                          <span>92% accuracy</span>
                        </div>
                        <div className="h-1.5 overflow-hidden rounded-full bg-white/15">
                          <div className="h-full w-[92%] rounded-full bg-cyan-300" />
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-2 text-[11px]">
                        <p className="ml-auto w-fit rounded-xl rounded-br-sm bg-fuchsia-400/20 px-3 py-2 text-white/90">
                          Check in with me
                        </p>
                        <p className="w-fit rounded-xl rounded-bl-sm bg-white/10 px-3 py-2 text-white/75">
                          I&apos;m here to listen.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                {project.featured ? (
                  <span className="absolute top-4 left-4 rounded-full border border-white/20 bg-slate-950/45 px-3 py-1 text-[10px] font-semibold tracking-[0.12em] text-white uppercase backdrop-blur">
                    Featured
                  </span>
                ) : null}
              </div>

              <div className="flex flex-1 flex-col p-6">
                {project.award ? (
                  <p className="mb-3 inline-flex items-center gap-1.5 text-xs font-medium tracking-wide text-accent uppercase">
                    <Trophy className="h-3.5 w-3.5" />
                    {project.award}
                  </p>
                ) : null}

                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {project.description}
                    </p>
                  </div>
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} live demo`}
                      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-card-border bg-background/70 text-muted transition hover:border-accent/40 hover:text-accent"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ) : null}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-surface px-2.5 py-1 text-xs text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-4">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                    >
                      Live demo <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  ) : null}
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-foreground"
                    >
                      <Code2 className="h-3.5 w-3.5" /> Code
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
