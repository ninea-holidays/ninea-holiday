import { createFileRoute } from "@tanstack/react-router";

import { site } from "@/lib/site";
import heroSerengeti from "@/assets/hero-serengeti.jpg";
import tourKilimanjaro from "@/assets/tour-kilimanjaro.jpg";
import tourNgorongoro from "@/assets/tour-ngorongoro.jpg";
import tourZanzibar from "@/assets/tour-zanzibar.jpg";
import igJeep from "@/assets/ig-jeep.jpg";
import igWildebeest from "@/assets/ig-wildebeest.jpg";
import igCampfire from "@/assets/ig-campfire.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Ninea Holidays — Bespoke Tanzania Safaris" },
      {
        name: "description",
        content:
          "Private safaris, Kilimanjaro treks and Zanzibar escapes crafted by Ninea Holidays — a touring operator based in Dar es Salaam, Tanzania.",
      },
      { property: "og:title", content: "Ninea Holidays — Bespoke Tanzania Safaris" },
      {
        property: "og:description",
        content:
          "Into the wild, in silence. Private guided journeys across the Serengeti, Ngorongoro and Zanzibar — composed by hand, travelled slowly.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const tours = [
  {
    tag: "Trek · 7 days",
    title: "Kilimanjaro Ascent",
    blurb: "Machame route to Uhuru Peak",
    image: tourKilimanjaro,
    alt: "Misty Kilimanjaro peak at dawn",
  },
  {
    tag: "Safari · 5 days",
    title: "Ngorongoro Crater",
    blurb: "The Great Rift at daybreak",
    image: tourNgorongoro,
    alt: "Ngorongoro crater rim at golden hour",
  },
  {
    tag: "Island · 6 days",
    title: "Zanzibar Blue",
    blurb: "Stone Town to the reef",
    image: tourZanzibar,
    alt: "Turquoise Zanzibar lagoon with a dhow",
  },
];

const instagramTiles = [
  { image: igJeep, alt: "Safari jeep at dawn on a dusty track" },
  { image: igWildebeest, alt: "Wildebeest herd at sunset with amber backlight" },
  { image: igCampfire, alt: "Campfire under a starry night sky" },
];

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background font-sans text-glow">
      {/* Ambient drifting light and rising embers */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="drift absolute -left-24 -top-16 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
        <div
          className="drift absolute right-[-40px] top-64 h-80 w-80 rounded-full bg-mist/10 blur-3xl"
          style={{ animationDelay: "-6s" }}
        />
        <div
          className="drift absolute bottom-24 left-10 h-64 w-64 rounded-full bg-gold/10 blur-3xl"
          style={{ animationDelay: "-3s" }}
        />
        <div className="floaty absolute left-[22%] top-1/3 size-1.5 rounded-full bg-gold/70 blur-[1px]" />
        <div
          className="floaty absolute right-[24%] top-1/2 size-1 rounded-full bg-mist/70 blur-[1px]"
          style={{ animationDelay: "-2.4s" }}
        />
        <div
          className="floaty absolute bottom-1/3 left-[40%] size-1.5 rounded-full bg-gold/60 blur-[1px]"
          style={{ animationDelay: "-4.6s" }}
        />
      </div>

      <header className="relative z-10 mx-auto flex w-full max-w-5xl items-center justify-between px-5 pt-5 sm:px-8">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-script text-3xl leading-none text-gold">Ninea</span>
          <span className="text-[9px] uppercase tracking-[0.4em] text-mist">Holidays</span>
        </a>
        <nav className="flex items-center gap-3 sm:gap-4">
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ninea Holidays on Instagram"
            className="hidden text-mist transition-colors hover:text-glow sm:block"
          >
            <span className="text-[11px] uppercase tracking-[0.2em]">Instagram</span>
          </a>
          <a
            href="#tours"
            className="text-mist transition-colors hover:text-glow"
          >
            <span className="text-[11px] uppercase tracking-[0.2em]">Journeys</span>
          </a>
          <a
            href="#connect"
            className="rounded-full bg-glass/70 px-4 py-2 text-mist ring-1 ring-hairline transition-colors hover:text-glow sm:hidden"
            aria-label="Contact Ninea Holidays"
          >
            <span className="text-[10px] uppercase tracking-[0.15em]">Say hi</span>
          </a>
        </nav>
      </header>

      <main id="top" className="relative z-10 mx-auto w-full max-w-5xl px-5 sm:px-8">
        {/* Hero */}
        <section className="pt-12 sm:pt-16">
          <p className="rise text-[10px] uppercase tracking-[0.5em] text-gold">
            Tanzania · Est. 2011
          </p>
          <h1
            className="rise mt-6 max-w-3xl font-script text-6xl leading-[1.1] text-glow sm:text-7xl md:text-8xl"
            style={{ animationDelay: "120ms" }}
          >
            Into the wild, <span className="text-gold">in silence.</span>
          </h1>
          <p
            className="rise mt-6 max-w-[24rem] text-[13px] leading-relaxed text-mist sm:text-[15px]"
            style={{ animationDelay: "240ms" }}
          >
            Bespoke safaris and island escapes across the Serengeti, Ngorongoro and Zanzibar —
            composed by hand, travelled slowly.
          </p>
          <div
            className="rise mt-8 flex flex-wrap gap-3"
            style={{ animationDelay: "360ms" }}
          >
            <a
              href="#connect"
              className="rounded-full bg-glow px-6 py-3 text-[12px] uppercase tracking-[0.15em] text-ink transition-transform active:scale-95"
            >
              Plan your journey
            </a>
            <a
              href="#tours"
              className="rounded-full bg-glass/70 px-6 py-3 text-[12px] uppercase tracking-[0.15em] text-glow ring-1 ring-hairline transition-transform active:scale-95"
            >
              View the journeys
            </a>
          </div>
        </section>

        {/* Hero media */}
        <section className="mt-12 overflow-hidden rounded-3xl sm:mt-14">
          <div className="relative h-[300px] sm:h-[440px]">
            <img
              src={heroSerengeti}
              alt="Cinematic dusk aerial over the Serengeti savanna"
              className="absolute inset-0 size-full object-cover"
              width={1024}
              height={768}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
            <div className="pointer-events-none absolute left-8 top-0 h-24 w-px bg-gradient-to-b from-gold/60 to-transparent" />
            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-ink/70 px-3 py-1.5 ring-1 ring-hairline">
              <span className="size-1.5 rounded-full bg-gold" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-glow">
                Serengeti · 24°C
              </span>
            </div>
          </div>
        </section>

        {/* Signature journeys */}
        <section id="tours" className="mt-12 sm:mt-16">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-3xl italic text-glow sm:text-4xl">
              Signature journeys
            </h2>
            <span className="text-[10px] uppercase tracking-[0.2em] text-mist">03</span>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {tours.map((tour) => (
              <a
                key={tour.title}
                href="#connect"
                className="group rounded-2xl bg-glass/50 p-3 ring-1 ring-hairline transition-colors hover:bg-glass/80"
              >
                <div className="flex gap-4">
                  <img
                    src={tour.image}
                    alt={tour.alt}
                    loading="lazy"
                    width={512}
                    height={512}
                    className="size-20 shrink-0 rounded-xl object-cover outline-1 -outline-offset-1 outline-hairline"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gold">{tour.tag}</p>
                    <p className="mt-0.5 truncate font-display text-xl text-glow">{tour.title}</p>
                    <p className="mt-1 truncate text-[11px] text-mist">{tour.blurb}</p>
                  </div>
                  <span className="self-center text-gold transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Instagram connect */}
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
              <p className="text-[11px] text-mist">Daily from the field</p>
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
                  width={512}
                  height={512}
                  className="aspect-square w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer id="connect" className="mt-12 border-t border-hairline pt-6 sm:mt-16">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="flex items-baseline gap-2">
              <span className="font-script text-2xl text-gold">Ninea</span>
              <span className="text-[9px] uppercase tracking-[0.4em] text-mist">Holidays</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-mist">
              {site.location}
            </span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-glass/70 px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] text-mist ring-1 ring-hairline transition-colors hover:text-glow"
            >
              Instagram
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-glass/70 px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] text-mist ring-1 ring-hairline transition-colors hover:text-glow"
            >
              WhatsApp
            </a>
            <a
              href={`mailto:${site.email}`}
              className="rounded-full bg-glass/70 px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] text-mist ring-1 ring-hairline transition-colors hover:text-glow"
            >
              Email
            </a>
          </div>
          <p className="mt-5 pb-8 text-[10px] text-mist/60">
            © {new Date().getFullYear()} {site.name} · Travelled slowly, composed by hand.
          </p>
        </footer>
      </main>
    </div>
  );
}
