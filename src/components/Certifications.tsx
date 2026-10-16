"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, ExternalLink, Medal, ShieldCheck } from "lucide-react";
import { certifications } from "@/data/resumeData";
import { SectionHeading } from "./SectionHeading";

const iconMap = {
  certificate: ShieldCheck,
  achievement: Medal,
  publication: BookOpen,
};

export function Certifications() {
  return (
    <section id="achievements" className="relative px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Achievements"
          title="Certifications & recognition"
          description="Credentials, hackathon results, and peer-reviewed research — with links where available."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((item, i) => {
            const Icon = iconMap[item.type];
            const content = (
              <>
                {item.imageUrl ? (
                  <div className="relative mb-4 flex h-40 items-center justify-center overflow-hidden rounded-xl bg-white p-2">
                    <Image
                      src={item.imageUrl}
                      alt={`${item.title} certificate`}
                      fill
                      sizes="(max-width: 768px) 90vw, 360px"
                      className="object-contain p-2"
                    />
                  </div>
                ) : null}
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{item.issuer}</p>
                {item.url ? (
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-accent">
                    Verify credential <ExternalLink className="h-3 w-3" />
                  </span>
                ) : null}
              </>
            );

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass block h-full rounded-2xl p-5 transition hover:border-accent/40"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="glass h-full rounded-2xl p-5">{content}</div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
