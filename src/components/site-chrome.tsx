import { Link } from "@tanstack/react-router";

import { site } from "@/lib/site";

export function Ambience() {
  return (
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
    </div>
  );
}

export function SiteHeader() {
  return (
    <header className="relative z-10 mx-auto flex w-full max-w-5xl items-center justify-between px-5 pt-5 sm:px-8">
      <Link to="/" className="flex items-baseline gap-2">
        <span className="font-script text-3xl leading-none text-gold">Ninea</span>
        <span className="text-[9px] uppercase tracking-[0.4em] text-mist">Holidays</span>
      </Link>
      <nav className="flex items-center gap-3 sm:gap-4">
        <Link
          to="/tours"
          className="text-[11px] uppercase tracking-[0.2em] text-mist transition-colors hover:text-glow"
        >
          Tours
        </Link>
        <Link
          to="/contact"
          className="text-[11px] uppercase tracking-[0.2em] text-mist transition-colors hover:text-glow"
        >
          Contact
        </Link>
        <Link
          to="/tours"
          hash="book"
          className="rounded-full bg-glow px-4 py-2 text-[10px] uppercase tracking-[0.15em] text-ink transition-transform active:scale-95"
        >
          Book
        </Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer id="connect" className="mt-12 border-t border-hairline pt-6 sm:mt-16">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="flex items-baseline gap-2">
          <span className="font-script text-2xl text-gold">Ninea</span>
          <span className="text-[9px] uppercase tracking-[0.4em] text-mist">Holidays</span>
        </span>
        <span className="text-[10px] uppercase tracking-[0.2em] text-mist">{site.location}</span>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <a
          href={site.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-glass/70 px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] text-mist ring-1 ring-hairline transition-colors hover:text-glow"
        >
          {site.instagramHandle}
        </a>
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-glass/70 px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] text-mist ring-1 ring-hairline transition-colors hover:text-glow"
        >
          {site.whatsappLabel}
        </a>
        <a
          href={`mailto:${site.email}`}
          className="rounded-full bg-glass/70 px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] text-mist ring-1 ring-hairline transition-colors hover:text-glow"
        >
          {site.email}
        </a>
      </div>
      <p className="mt-5 pb-8 text-[10px] text-mist/60">
        © {new Date().getFullYear()} {site.name} · Travelled slowly, composed by hand.
      </p>
    </footer>
  );
}
