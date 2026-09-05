import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { Ambience, SiteFooter, SiteHeader } from "@/components/site-chrome";
import { site } from "@/lib/site";
import { tours } from "@/lib/tours";

export const Route = createFileRoute("/tours")({
  component: ToursPage,
  head: () => ({
    meta: [
      { title: "Zanzibar Tours & Booking — Ninea Holidays" },
      {
        name: "description",
        content:
          "Book Stone Town, spice farm, Jozani forest and Safari Blue sandbank day tours in Zanzibar with Ninea Holidays.",
      },
      { property: "og:title", content: "Zanzibar Tours & Booking — Ninea Holidays" },
      {
        property: "og:description",
        content:
          "Hand-guided Zanzibar day journeys — Stone Town, spice farms, Jozani forest and dhow sandbank sailing.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const fieldClass =
  "mt-1 w-full rounded-xl bg-coal/70 px-4 py-3 text-sm text-glow ring-1 ring-hairline outline-none placeholder:text-mist/60 focus:ring-gold";
const labelClass = "block text-[10px] uppercase tracking-[0.2em] text-mist";

function ToursPage() {
  const [selected, setSelected] = useState(tours[0]!.slug);
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const tour = tours.find((t) => t.slug === data.get("tour")) ?? tours[0]!;
    const message = [
      `Hello Ninea Holidays, I'd like to book: ${tour.title}`,
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Preferred date: ${data.get("date")}`,
      `Guests: ${data.get("guests")}`,
      `Notes: ${data.get("notes") || "—"}`,
    ].join("\n");
    setSent(true);
    window.open(
      `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener",
    );
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background font-sans text-glow">
      <Ambience />
      <SiteHeader />

      <main className="relative z-10 mx-auto w-full max-w-5xl px-5 sm:px-8">
        <section className="pt-12 sm:pt-16">
          <p className="text-[10px] uppercase tracking-[0.5em] text-gold">Zanzibar · Day journeys</p>
          <h1 className="mt-5 font-script text-5xl leading-[1.1] text-glow sm:text-7xl">
            Choose your <span className="text-gold">day</span>
          </h1>
          <p className="mt-5 max-w-[30rem] text-[13px] leading-relaxed text-mist sm:text-[15px]">
            Small groups, local guides and unhurried timing. Pick a journey, send us the date and
            we'll confirm within the day.
          </p>
        </section>

        <section className="mt-10 grid gap-5 sm:grid-cols-2">
          {tours.map((tour) => (
            <article
              key={tour.slug}
              className="overflow-hidden rounded-3xl bg-glass/50 ring-1 ring-hairline"
            >
              <img
                src={tour.image}
                alt={tour.alt}
                loading="lazy"
                width={768}
                height={768}
                className="h-44 w-full object-cover"
              />
              <div className="p-5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-gold">{tour.tag}</p>
                <h2 className="mt-1 font-display text-2xl italic text-glow">{tour.title}</h2>
                <p className="mt-2 text-[13px] leading-relaxed text-mist">{tour.description}</p>
                <ul className="mt-3 space-y-1">
                  {tour.highlights.map((h) => (
                    <li key={h} className="text-[12px] text-mist">
                      <span className="mr-2 text-gold">·</span>
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-[12px] text-glow">{tour.price}</span>
                  <a
                    href="#book"
                    onClick={() => setSelected(tour.slug)}
                    className="rounded-full bg-glow px-5 py-2.5 text-[11px] uppercase tracking-[0.15em] text-ink transition-transform active:scale-95"
                  >
                    Book this
                  </a>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section id="book" className="mt-14 rounded-3xl bg-glass/60 p-6 ring-1 ring-hairline sm:p-8">
          <h2 className="font-display text-3xl italic text-glow">Request a booking</h2>
          <p className="mt-2 text-[13px] text-mist">
            Fill this in and it opens a ready-written WhatsApp message to our team.
          </p>
          <form onSubmit={handleSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className={labelClass} htmlFor="tour">
                Journey
              </label>
              <select
                id="tour"
                name="tour"
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                className={fieldClass}
              >
                {tours.map((tour) => (
                  <option key={tour.slug} value={tour.slug} className="bg-coal">
                    {tour.title} — {tour.price}
                  </option>
                ))}
              </select>
            </div>
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
            <div>
              <label className={labelClass} htmlFor="date">
                Preferred date
              </label>
              <input id="date" name="date" type="date" required className={fieldClass} />
            </div>
            <div>
              <label className={labelClass} htmlFor="guests">
                Guests
              </label>
              <input
                id="guests"
                name="guests"
                type="number"
                min={1}
                defaultValue={2}
                className={fieldClass}
              />
            </div>
            <div className="sm:col-span-2">
              <label className={labelClass} htmlFor="notes">
                Anything else
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                placeholder="Hotel, pick-up time, dietary needs…"
                className={fieldClass}
              />
            </div>
            <div className="flex flex-wrap items-center gap-3 sm:col-span-2">
              <button
                type="submit"
                className="rounded-full bg-glow px-6 py-3 text-[12px] uppercase tracking-[0.15em] text-ink transition-transform active:scale-95"
              >
                Send booking request
              </button>
              {sent && (
                <span className="text-[12px] text-gold">
                  Opening WhatsApp — if nothing appears, write to {site.email}.
                </span>
              )}
            </div>
          </form>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}
