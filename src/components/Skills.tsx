"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/resumeData";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="relative px-5 py-24 sm:px-8">
      <div className="absolute inset-0 -z-10 bg-surface/50" />
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Skills that ship outcomes"
          description="A practical stack spanning product execution, AI systems, and full-stack delivery."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="font-display text-lg font-semibold text-foreground">
                {category.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-card-border bg-background/60 px-3 py-1.5 text-sm text-muted transition hover:border-accent/40 hover:text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
