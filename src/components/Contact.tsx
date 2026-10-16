"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { contactInfo, socialLinks } from "@/data/resumeData";
import { SectionHeading } from "./SectionHeading";

const socialLogos: Record<string, string> = {
  GitHub: "/assets/github.svg",
  LinkedIn: "/assets/linkedin.svg",
  Instagram: "/assets/instagram.svg",
};

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
    form.reset();
  }

  return (
    <section id="contact" className="relative px-5 py-24 sm:px-8">
      <div className="absolute inset-0 -z-10 bg-surface/50" />
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something that moves a metric"
          description="Open to internships, full-time roles, and collaborations in AI product, applied ML, and 0→1 tooling."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <a
              href={`mailto:${contactInfo.email}`}
              className="glass flex items-center gap-3 rounded-2xl p-4 transition hover:border-accent/40"
            >
              <Mail className="h-5 w-5 text-accent" />
              <div>
                <p className="text-xs text-muted">Email</p>
                <p className="text-sm font-medium text-foreground">
                  {contactInfo.email}
                </p>
              </div>
            </a>
            <a
              href={`tel:${contactInfo.phone}`}
              className="glass flex items-center gap-3 rounded-2xl p-4 transition hover:border-accent/40"
            >
              <Phone className="h-5 w-5 text-accent" />
              <div>
                <p className="text-xs text-muted">Phone</p>
                <p className="text-sm font-medium text-foreground">
                  {contactInfo.phoneDisplay}
                </p>
              </div>
            </a>
            <div className="glass flex items-center gap-3 rounded-2xl p-4">
              <MapPin className="h-5 w-5 text-accent" />
              <div>
                <p className="text-xs text-muted">Location</p>
                <p className="text-sm font-medium text-foreground">
                  {contactInfo.location}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {socialLinks.map((link) => {
                const logo = socialLogos[link.name];
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border border-card-border text-foreground transition hover:border-accent/40 hover:text-accent ${
                      logo ? "bg-white" : "bg-card"
                    }`}
                  >
                    {logo ? (
                      <Image
                        src={logo}
                        alt=""
                        width={19}
                        height={19}
                        className="h-[19px] w-[19px] object-contain"
                      />
                    ) : (
                      <Mail className="h-4 w-4" />
                    )}
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="mb-1.5 block text-muted">Name</span>
                <input
                  required
                  name="name"
                  type="text"
                  className="w-full rounded-xl border border-card-border bg-background/70 px-3 py-2.5 text-foreground outline-none focus:border-accent focus:ring-2 focus:ring-ring"
                  placeholder="Your name"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1.5 block text-muted">Email</span>
                <input
                  required
                  name="email"
                  type="email"
                  className="w-full rounded-xl border border-card-border bg-background/70 px-3 py-2.5 text-foreground outline-none focus:border-accent focus:ring-2 focus:ring-ring"
                  placeholder="you@company.com"
                />
              </label>
            </div>
            <label className="mt-4 block text-sm">
              <span className="mb-1.5 block text-muted">Message</span>
              <textarea
                required
                name="message"
                rows={5}
                className="w-full resize-y rounded-xl border border-card-border bg-background/70 px-3 py-2.5 text-foreground outline-none focus:border-accent focus:ring-2 focus:ring-ring"
                placeholder="Tell me about the role, project, or idea..."
              />
            </label>
            <button
              type="submit"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition hover:brightness-110"
            >
              Send message
              <Send className="h-4 w-4" />
            </button>
            {status === "sent" ? (
              <p className="mt-3 text-sm text-muted">
                Opening your email client…
              </p>
            ) : null}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
