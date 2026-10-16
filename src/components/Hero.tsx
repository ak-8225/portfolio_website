"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, MapPin, Sparkles } from "lucide-react";
import { metrics, siteConfig } from "@/data/resumeData";

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src={siteConfig.coverImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%] opacity-[0.15] saturate-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/45" />
        <div className="absolute inset-0 mesh-bg opacity-45 mix-blend-soft-light" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-5 pt-24 pb-8 sm:px-8">
        <div className="grid flex-1 items-center gap-10 py-10 md:grid-cols-[1fr_0.85fr] md:gap-14">
          <div className="order-2 md:order-1">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3.5 py-2 font-mono text-[11px] tracking-[0.16em] text-accent uppercase"
            >
              <Sparkles className="h-3.5 w-3.5" />
              {siteConfig.role}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="font-display text-5xl leading-[0.95] font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
            >
              {siteConfig.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-5 max-w-lg text-xl leading-snug text-foreground/85 sm:text-2xl"
            >
              {siteConfig.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="mt-5 flex flex-wrap items-center gap-2 text-sm text-muted"
            >
              <MapPin className="h-4 w-4 text-accent" />
              {siteConfig.location}
              <span className="mx-1 h-1 w-1 rounded-full bg-accent" />
              Product-minded AI builder
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-[0_12px_40px_var(--glow)] transition hover:brightness-110"
              >
                Explore my work
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-card-border bg-card/80 px-5 py-3 text-sm font-semibold text-foreground backdrop-blur transition hover:border-accent/40"
              >
                <Mail className="h-4 w-4" />
                Get in touch
              </a>
              <a
                href={siteConfig.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-xl px-3 py-3 text-sm font-medium text-muted transition hover:text-foreground"
              >
                <Download className="h-4 w-4" />
                Resume
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="relative order-1 mx-auto w-full max-w-[19rem] md:order-2 md:max-w-[25rem]"
          >
            <div className="absolute -inset-3 -rotate-3 rounded-[2rem] border border-accent/20 bg-accent/[0.06]" />
            <div className="relative aspect-square overflow-hidden rounded-[1.7rem] border border-card-border bg-surface shadow-[0_28px_90px_var(--glow)]">
              <Image
                src={siteConfig.profileImage}
                alt={`${siteConfig.name}, AI and product builder`}
                fill
                priority
                sizes="(max-width: 768px) 78vw, 400px"
                className="object-cover object-top"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/35 via-transparent to-transparent" />
            </div>
            <div className="glass absolute -right-3 bottom-5 rounded-xl px-4 py-3 shadow-xl sm:-right-6">
              <p className="font-display text-sm font-semibold text-foreground">
                Product <span className="text-accent">×</span> AI
              </p>
              <p className="mt-0.5 text-xs text-muted">Built for real-world impact</p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-2 border-t border-card-border/80 pt-5 sm:grid-cols-4 sm:gap-4 sm:pt-6">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.36 + i * 0.06 }}
              className="rounded-xl bg-card/55 px-3 py-3 backdrop-blur-sm sm:px-4"
            >
              <p className="font-display text-xl font-semibold tracking-tight text-accent sm:text-2xl">
                {metric.value}
              </p>
              <p className="mt-1 text-[11px] leading-snug text-muted sm:text-xs">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
