import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { Ambience, SiteFooter, SiteHeader } from "@/components/site-chrome";
import { site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Ninea Holidays — Zanzibar" },
      {
        name: "description",
        content:
          "Talk to Ninea Holidays in Zanzibar — WhatsApp +255 753 242 884, nineaholidays@gmail.com, or send a message from this page.",
      },
      { property: "og:title", content: "Contact Ninea Holidays — Zanzibar" },
      {
        property: "og:description",
        content: "Reach our Zanzibar team by WhatsApp, email or Instagram.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const fieldClass =
  "mt-1 w-full rounded-xl bg-coal/70 px-4 py-3 text-sm text-glow ring-1 ring-hairline outline-none placeholder:text-mist/60 focus:ring-gold";
const labelClass = "block text-[10px] uppercase tracking-[0.2em] text-mist";

function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `Enquiry from ${data.get("name")}`;
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone") || "—"}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");
    setSent(true);
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background font-sans text-glow">
      <Ambience />
      <SiteHeader />

      <main className="relative z-10 mx-auto w-full max-w-5xl px-5 sm:px-8">
        <section className="pt-12 sm:pt-16">
          <p className="text-[10px] uppercase tracking-[0.5em] text-gold">Zanzibar, Tanzania</p>
          <h1 className="mt-5 font-script text-5xl leading-[1.1] text-glow sm:text-7xl">
            Say <span className="text-gold">hello</span>
          </h1>
          <p className="mt-5 max-w-[30rem] text-[13px] leading-relaxed text-mist sm:text-[15px]">
            We answer quickest on WhatsApp. Tell us your dates and what you'd love to see, and we'll
            shape the days around it.
          </p>
        </section>

        <section className="mt-10 grid gap-5 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-3">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl bg-glass/50 p-5 ring-1 ring-hairline transition-colors hover:bg-glass/80"
            >
              <p className="text-[10px] uppercase tracking-[0.2em] text-gold">WhatsApp</p>
              <p className="mt-1 font-display text-xl text-glow">{site.whatsappLabel}</p>
            </a>
            <a
              href={`mailto:${site.email}`}
              className="block rounded-2xl bg-glass/50 p-5 ring-1 ring-hairline transition-colors hover:bg-glass/80"
            >
              <p className="text-[10px] uppercase tracking-[0.2em] text-gold">Email</p>
              <p className="mt-1 font-display text-xl text-glow">{site.email}</p>
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl bg-glass/50 p-5 ring-1 ring-hairline transition-colors hover:bg-glass/80"
            >
              <p className="text-[10px] uppercase tracking-[0.2em] text-gold">Instagram</p>
              <p className="mt-1 font-display text-xl text-glow">{site.instagramHandle}</p>
            </a>
            <div className="rounded-2xl bg-glass/50 p-5 ring-1 ring-hairline">
              <p className="text-[10px] uppercase tracking-[0.2em] text-gold">Based in</p>
              <p className="mt-1 font-display text-xl text-glow">Zanzibar, Tanzania</p>
              <p className="mt-1 text-[12px] text-mist">Daily 8:00 – 20:00 (UTC+3)</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid gap-4 rounded-3xl bg-glass/60 p-6 ring-1 ring-hairline sm:grid-cols-2 sm:p-8"
          >
            <h2 className="font-display text-2xl italic text-glow sm:col-span-2">
              Send us a message
            </h2>
            <div>
              <label className={labelClass} htmlFor="name">
                Full name
              </label>
              <input id="name" name="name" required placeholder="Amina Juma" className={fieldClass} />
            </div>
            <div>
              <label className={labelClass} htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@email.com"
                className={fieldClass}
              />
            </div>
            <div className="sm:col-span-2">
              <label className={labelClass} htmlFor="phone">
                Phone (optional)
              </label>
              <input id="phone" name="phone" placeholder="+255 …" className={fieldClass} />
            </div>
            <div className="sm:col-span-2">
              <label className={labelClass} htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="We're two travellers in Zanzibar from 12–18 October…"
                className={fieldClass}
              />
            </div>
            <div className="flex flex-wrap items-center gap-3 sm:col-span-2">
              <button
                type="submit"
                className="rounded-full bg-glow px-6 py-3 text-[12px] uppercase tracking-[0.15em] text-ink transition-transform active:scale-95"
              >
                Send message
              </button>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-glass/70 px-6 py-3 text-[12px] uppercase tracking-[0.15em] text-glow ring-1 ring-hairline transition-transform active:scale-95"
              >
                WhatsApp instead
              </a>
              {sent && (
                <span className="text-[12px] text-gold">Opening your email app…</span>
              )}
            </div>
          </form>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}
