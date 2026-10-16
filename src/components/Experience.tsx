"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, ExternalLink, GraduationCap } from "lucide-react";
import { education, experience } from "@/data/resumeData";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="relative px-5 py-24 sm:px-8">
      <div className="absolute inset-0 -z-10 bg-surface/40" />
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Experience"
          title="Where I learned to ship"
          description="Product ownership, applied ML, and the foundations behind both."
        />

        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative space-y-4">
            {experience.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="glass relative rounded-2xl p-5 sm:p-6"
              >
                <div className="flex gap-4">
                  {job.logoUrl ? (
                    <div className="flex h-10 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-card-border/70 bg-white/85 p-1.5 opacity-85">
                      <Image
                        src={job.logoUrl}
                        alt={`${job.company} logo`}
                        width={112}
                        height={64}
                        className="h-auto w-auto max-h-full max-w-full object-contain"
                      />
                    </div>
                  ) : null}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="font-display text-lg font-semibold text-foreground sm:text-xl">
                          {job.role}
                        </h3>
                        <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-accent">
                          {job.companyUrl ? (
                            <a
                              href={job.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 hover:underline"
                            >
                              {job.company}
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          ) : (
                            <span>{job.company}</span>
                          )}
                          <span className="text-muted">· {job.location}</span>
                        </div>
                      </div>
                      <span className="rounded-full bg-surface px-3 py-1 font-mono text-[11px] text-muted">
                        {job.period}
                      </span>
                    </div>
                    <ul className="mt-5 space-y-2.5">
                      {job.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex gap-2.5 text-sm leading-relaxed text-muted"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    {job.certificateUrl ? (
                      <a
                        href={job.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:underline"
                      >
                        <Award className="h-3.5 w-3.5" />
                        View completion letter
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div>
            <p className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-foreground">
              <GraduationCap className="h-4 w-4 text-accent" />
              Education
            </p>
            <div className="space-y-4">
            {education.map((edu, i) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="glass rounded-2xl p-5 sm:p-6"
              >
                <div className="flex items-start gap-3">
                  {edu.logoUrl ? (
                    <div className="flex h-10 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-card-border/70 bg-white/85 p-1 opacity-85">
                      <Image
                        src={edu.logoUrl}
                        alt={`${edu.school} logo`}
                        width={112}
                        height={64}
                        className="h-auto w-auto max-h-full max-w-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface text-accent">
                      <GraduationCap className="h-4 w-4" />
                    </div>
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-[11px] text-muted">{edu.period}</p>
                    <h4 className="mt-1 font-display text-base font-semibold text-foreground">
                      {edu.schoolUrl ? (
                        <a
                          href={edu.schoolUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 transition hover:text-accent"
                        >
                          {edu.school}
                          <ExternalLink className="h-3 w-3 shrink-0 text-muted" />
                        </a>
                      ) : (
                        edu.school
                      )}
                    </h4>
                    <p className="mt-1 text-sm text-muted">{edu.degree}</p>
                    <p className="mt-2 text-xs text-accent">
                      {edu.location}
                      {edu.detail ? ` · ${edu.detail}` : ""}
                    </p>
                    {edu.credentialUrl ? (
                      <a
                        href={edu.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group mt-4 block max-w-sm overflow-hidden rounded-xl border border-card-border/70 bg-surface/70 transition hover:border-accent/40"
                      >
                        <div className="relative aspect-[1.46] overflow-hidden">
                          <Image
                            src={edu.credentialUrl}
                            alt={`${edu.school} provisional degree certificate`}
                            fill
                            sizes="(max-width: 1024px) 80vw, 320px"
                            className="object-cover object-top opacity-85 transition group-hover:opacity-100"
                          />
                        </div>
                        <span className="flex items-center justify-between gap-2 px-3 py-2 text-xs font-medium text-muted transition group-hover:text-accent">
                          View provisional degree
                          <ExternalLink className="h-3 w-3 shrink-0" />
                        </span>
                      </a>
                    ) : null}
                  </div>
                </div>
              </motion.div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
