import { createFileRoute, Link } from "@tanstack/react-router";

import { Ambience, SiteFooter, SiteHeader } from "@/components/site-chrome";
import { site } from "@/lib/site";
import { tours } from "@/lib/tours";
import heroZanzibar from "@/assets/hero-zanzibar.jpg";
import igDhow from "@/assets/ig-dhow.jpg";
import igBeach from "@/assets/ig-beach.jpg";
import igFeast from "@/assets/ig-feast.jpg";
import turtleCave from "@/assets/turtle-cave-feeding.jpg";
import turtleLagoon from "@/assets/turtle-lagoon-swim.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Ninea Holidays — Zanzibar Tours & Island Escapes" },
      {
        name: "description",
        content:
          "Stone Town walks, spice farms, Jozani forest and dhow sandbank days — private Zanzibar tours crafted by Ninea Holidays.",
      },
      { property: "og:title", content: "Ninea Holidays — Zanzibar Tours & Island Escapes" },
      {
        property: "og:description",
        content:
          "Into the island, in silence. Hand-guided Zanzibar journeys — Stone Town, spice farms, Jozani forest and turquoise sandbanks.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const instagramTiles = [
  { image: igDhow, alt: "Traditional dhow sailing at sunset off Zanzibar" },
  { image: igBeach, alt: "White sand Zanzibar beach with palms at dusk" },
  { image: igFeast, alt: "Seafood dinner on the beach by lantern light" },
];

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background font-sans text-glow">
      <Ambience />
      <SiteHeader />

      <main id="top" className="relative z-10 mx-auto w-full max-w-5xl px-5 sm:px-8">
        <section className="pt-12 sm:pt-16">
          <p className="rise text-[10px] uppercase tracking-[0.5em] text-gold">
            Zanzibar · Tanzania
          </p>
          <h1
            className="rise mt-6 max-w-3xl font-script text-6xl leading-[1.1] text-glow sm:text-7xl md:text-8xl"
            style={{ animationDelay: "120ms" }}
          >
            Into the island, <span className="text-gold">in silence.</span>
          </h1>
          <p
            className="rise mt-6 max-w-[24rem] text-[13px] leading-relaxed text-mist sm:text-[15px]"
            style={{ animationDelay: "240ms" }}
          >
            Spice farms, coral alleys and turquoise sandbanks — day journeys composed by hand and
            travelled slowly, from our home in Zanzibar.
          </p>
          <div className="rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: "360ms" }}>
            <Link
              to="/tours"
              hash="book"
              className="rounded-full bg-glow px-6 py-3 text-[12px] uppercase tracking-[0.15em] text-ink transition-transform active:scale-95"
            >
              Book a tour
            </Link>
            <Link
              to="/tours"
              className="rounded-full bg-glass/70 px-6 py-3 text-[12px] uppercase tracking-[0.15em] text-glow ring-1 ring-hairline transition-transform active:scale-95"
            >
              View the journeys
            </Link>
          </div>
        </section>

        <section className="mt-12 overflow-hidden rounded-3xl sm:mt-14">
          <div className="relative h-[300px] sm:h-[440px]">
            <img
              src={heroZanzibar}
              alt="Dhows anchored on turquoise water off the Zanzibar coast at dusk"
              className="absolute inset-0 size-full object-cover"
              width={1536}
              height={1024}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
            <div className="pointer-events-none absolute left-8 top-0 h-24 w-px bg-gradient-to-b from-gold/60 to-transparent" />
            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-ink/70 px-3 py-1.5 ring-1 ring-hairline">
              <span className="size-1.5 rounded-full bg-gold" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-glow">
                Zanzibar · 29°C
              </span>
            </div>
          </div>
        </section>

        <section id="tours" className="mt-12 sm:mt-16">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-3xl italic text-glow sm:text-4xl">
              Signature journeys
            </h2>
            <Link
              to="/tours"
              className="text-[10px] uppercase tracking-[0.2em] text-gold hover:text-glow"
            >
              All tours →
            </Link>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {tours.map((tour) => (
              <Link
                key={tour.slug}
                to="/tours"
                hash="book"
                className="group rounded-2xl bg-glass/50 p-3 ring-1 ring-hairline transition-colors hover:bg-glass/80"
              >
                <div className="flex gap-4">
                  <img
                    src={tour.image}
                    alt={tour.alt}
                    loading="lazy"
                    width={768}
                    height={768}
                    className="size-20 shrink-0 rounded-xl object-cover outline-1 -outline-offset-1 outline-hairline"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gold">{tour.tag}</p>
                    <p className="mt-0.5 truncate font-display text-xl text-glow">{tour.title}</p>
                    <p className="mt-1 truncate text-[11px] text-mist">{tour.blurb}</p>
                    <p className="mt-1 text-[11px] text-glow/80">{tour.price}</p>
                  </div>
                  <span className="self-center text-gold transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section
          id="instagram"
          className="mt-12 rounded-3xl bg-glass/60 p-6 ring-1 ring-hairline sm:mt-16"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-coal font-display text-gold ring-1 ring-hairline">
              IN
            </span>
            <div>
              <p className="font-display text-lg text-glow">{site.instagramHandle}</p>
              <p className="text-[11px] text-mist">Daily from the island</p>
            </div>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto rounded-full bg-glow px-4 py-2 text-[11px] uppercase tracking-[0.15em] text-ink transition-transform active:scale-95"
            >
              Follow
            </a>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-2">
            {instagramTiles.map((tile) => (
              <a
                key={tile.alt}
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="overflow-hidden rounded-xl outline-1 -outline-offset-1 outline-hairline"
              >
                <img
                  src={tile.image}
                  alt={tile.alt}
                  loading="lazy"
                  width={768}
                  height={768}
                  className="aspect-square w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </a>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl bg-glass/50 p-6 text-center ring-1 ring-hairline sm:mt-16 sm:p-10">
          <h2 className="font-display text-3xl italic text-glow">Ready when you are</h2>
          <p className="mx-auto mt-3 max-w-md text-[13px] text-mist">
            Tell us your dates and we'll shape the island around them.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="rounded-full bg-glow px-6 py-3 text-[12px] uppercase tracking-[0.15em] text-ink transition-transform active:scale-95"
            >
              Contact us
            </Link>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-glass/70 px-6 py-3 text-[12px] uppercase tracking-[0.15em] text-glow ring-1 ring-hairline transition-transform active:scale-95"
            >
              WhatsApp {site.whatsappLabel}
            </a>
          </div>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}
