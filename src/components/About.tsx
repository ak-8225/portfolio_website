"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Layers3, Lightbulb, Trophy } from "lucide-react";
import { aboutHighlights, siteConfig } from "@/data/resumeData";
import { SectionHeading } from "./SectionHeading";

const highlightIcons = [Layers3, Lightbulb, Trophy];

export function About() {
  return (
    <section id="about" className="relative px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="Curious by nature. Product-minded by design."
          description="I turn messy problems into useful AI products, from the first user conversation to a tool people rely on."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {aboutHighlights.map((item, i) => {
            const Icon = highlightIcons[i];
            return (
              <motion.article
                key={item}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="glass group rounded-2xl p-5 transition hover:border-accent/35 sm:p-6"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-sm leading-relaxed text-foreground/85">
                  {item}
                </p>
                <ArrowUpRight className="mt-5 h-4 w-4 text-muted/60 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
              </motion.article>
            );
          })}
        </div>

        <p className="mt-8 text-sm text-muted">
          {siteConfig.bio}
        </p>
      </div>
    </section>
  );
}
