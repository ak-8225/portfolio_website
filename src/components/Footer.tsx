"use client";

import { useEffect, useState } from "react";
import { navItems, siteConfig, socialLinks } from "@/data/resumeData";

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-card-border px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-display text-lg font-semibold text-foreground">
            {siteConfig.name}
          </p>
          <p className="mt-1 max-w-xs text-sm text-muted">
            {siteConfig.tagline}
          </p>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition hover:text-foreground"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted transition hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-card-border pt-6 text-sm text-muted">
        © {year ?? "2026"} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
