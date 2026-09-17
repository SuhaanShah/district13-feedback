import { createFileRoute } from "@tanstack/react-router";
import { User, Mail } from "lucide-react";
import { useState, type FormEvent } from "react";
import background from "@/assets/background.png";
import mockingjay from "@/assets/mockingjay.png";
import mapPreview from "@/assets/map-preview.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Feedback | District 13" },
      {
        name: "description",
        content: "Leave your mark and connect with the District 13 community.",
      },
      { property: "og:title", content: "Feedback | District 13" },
      {
        property: "og:description",
        content: "Leave your mark and connect with the District 13 community.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [sent, setSent] = useState(false);

  function submitFeedback(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <main className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-black px-4 py-8 sm:px-8 lg:px-12">
      {/* Complete Composite Background: Tree, Noose, Red Distressed Corners & XTRACT 5.0 */}
      <img
        src={background}
        alt="District 13 dark distressed background with tree and XTRACT 5.0"
        width={1920}
        height={1080}
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/25" />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[1fr_1.35fr_1fr] lg:items-center lg:gap-8 xl:gap-12">
        {/* Left Column: INFO, CONTACT US, SOCIAL MEDIA */}
        <aside className="flex flex-col items-center justify-between space-y-10 text-center lg:py-2">
          {/* INFO */}
          <section aria-labelledby="info-heading" className="w-full">
            <h2
              id="info-heading"
              className="font-display text-2xl sm:text-3xl font-bold tracking-[0.25em] text-[#dfb75c] drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]"
            >
              INFO
            </h2>
            <nav
              aria-label="Primary navigation"
              className="mt-4 flex flex-col items-center gap-2.5"
            >
              <a
                className="font-display text-base font-semibold tracking-[0.2em] text-[#dfb75c] transition-colors hover:text-white"
                href="https://www.djss4ds.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                HOME
              </a>
              <a
                className="font-display text-base font-semibold tracking-[0.2em] text-[#dfb75c] transition-colors hover:text-white"
                href="https://www.djss4ds.in/team"
                target="_blank"
                rel="noopener noreferrer"
              >
                TEAM
              </a>
              <a
                className="font-display text-base font-semibold tracking-[0.2em] text-[#dfb75c] transition-colors hover:text-white"
                href="https://www.djss4ds.in/events"
                target="_blank"
                rel="noopener noreferrer"
              >
                Events
              </a>
            </nav>
          </section>

          {/* CONTACT US */}
          <section aria-labelledby="contact-heading" className="w-full">
            <h2
              id="contact-heading"
              className="font-display text-2xl sm:text-3xl font-bold tracking-[0.25em] text-[#dfb75c] drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]"
            >
              CONTACT US
            </h2>
            <div className="mt-4 space-y-1 text-center font-display text-sm sm:text-base font-semibold tracking-[0.15em] text-[#dfb75c]">
              <p>KHUSH THAKKAR</p>
              <p>(S4DS CHAIRPERSON)</p>
              <a
                className="inline-block transition-colors hover:text-white"
                href="tel:+918958107107"
              >
                +919858107107
              </a>
            </div>
          </section>

          {/* SOCIAL MEDIA */}
          <section aria-labelledby="social-heading" className="w-full">
            <h2
              id="social-heading"
              className="font-display text-xl sm:text-2xl font-bold tracking-[0.25em] text-[#dfb75c] drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]"
            >
              SOCIAL MEDIA
            </h2>
            <div className="mt-4 flex items-center justify-center gap-4">
              {/* Instagram */}
              <a
                className="flex size-10 items-center justify-center text-white transition-transform hover:scale-110"
                href="https://www.instagram.com/djs.s4ds/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg
                  className="size-9"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                className="flex size-10 items-center justify-center text-white transition-transform hover:scale-110"
                href="https://www.linkedin.com/company/djs-s4ds/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg
                  className="size-9"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="4" ry="4" />
                  <line x1="7" y1="10" x2="7" y2="17" />
                  <line x1="7" y1="7" x2="7.01" y2="7" />
                  <path d="M11 17V10h3v1.5a3 3 0 0 1 3-1.5 3 3 0 0 1 3 3V17h-3v-4c0-.8-.7-1.5-1.5-1.5S14 12.2 14 13v4h-3z" />
                </svg>
              </a>

              {/* Email */}
              <a
                className="flex size-10 items-center justify-center text-white transition-transform hover:scale-110"
                href="mailto:info.djss4ds@gmail.com"
                aria-label="Email"
              >
                <svg
                  className="size-9"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
            </div>
          </section>
        </aside>

        {/* Center Column: Mockingjay + FEEDBACK + Form */}
        <section
          className="mx-auto flex w-full max-w-md flex-col items-center text-center"
          aria-labelledby="feedback-heading"
        >
          {/* Mockingjay Pin Badge */}
          <img
            src={mockingjay}
            alt="Mockingjay Emblem"
            className="size-16 sm:size-20 drop-shadow-[0_0_15px_rgba(223,183,92,0.6)] object-contain"
          />

          <h1
            id="feedback-heading"
            className="mt-1 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[0.25em] text-[#dfb75c] drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]"
          >
            FEEDBACK
          </h1>

          <p className="mt-1 font-display text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#dfb75c]">
            LEAVE YOUR MARK TRIBUTE
          </p>
          <div className="mt-1.5 h-[1px] w-52 bg-[#a98e4c]/70" />

          {/* Form Box */}
          <form
            onSubmit={submitFeedback}
            className="mt-6 w-full max-w-sm border-2 border-[#a98e4c] bg-black/60 p-6 sm:p-8 backdrop-blur-sm shadow-[0_0_30px_rgba(0,0,0,0.9)]"
          >
            <div className="space-y-4">
              {/* Name Field */}
              <div className="flex items-center rounded-xl border border-[#a98e4c] bg-black/40 px-3.5 py-2.5 transition-colors focus-within:border-[#dfb75c] focus-within:ring-1 focus-within:ring-[#dfb75c]">
                <User className="mr-3 size-4 shrink-0 text-[#dfb75c]" />
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full bg-transparent font-display text-xs sm:text-sm text-[#f2e7ba] placeholder-[#a98e4c]/80 focus:outline-none"
                  placeholder="Name"
                />
              </div>

              {/* Phone Number Field */}
              <div className="flex items-center rounded-xl border border-[#a98e4c] bg-black/40 px-3.5 py-2.5 transition-colors focus-within:border-[#dfb75c] focus-within:ring-1 focus-within:ring-[#dfb75c]">
                <Mail className="mr-3 size-4 shrink-0 text-[#dfb75c]" />
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  required
                  className="w-full bg-transparent font-display text-xs sm:text-sm text-[#f2e7ba] placeholder-[#a98e4c]/80 focus:outline-none"
                  placeholder="Phone Number"
                />
              </div>
            </div>

            {/* Pill-shaped Send Request Button */}
            <div className="mt-6 flex justify-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full border border-[#a98e4c] bg-transparent px-8 py-2 font-display text-xs font-bold uppercase tracking-[0.2em] text-[#dfb75c] transition-all hover:bg-[#dfb75c]/20 hover:border-[#dfb75c] hover:shadow-[0_0_15px_rgba(223,183,92,0.4)] active:scale-95"
              >
                <span className="mr-2 opacity-60">—</span>
                SEND REQUEST
                <span className="ml-2 opacity-60">—</span>
              </button>
            </div>

            {sent && (
              <p
                aria-live="polite"
                className="mt-3 text-center text-xs font-semibold text-[#dfb75c]"
              >
                Your message has been received.
              </p>
            )}
          </form>
        </section>

        {/* Right Column: ADDRESS + Map */}
        <aside className="flex flex-col items-center justify-between space-y-6 text-center lg:py-2">
          {/* ADDRESS */}
          <section aria-labelledby="address-heading" className="w-full">
            <h2
              id="address-heading"
              className="font-display text-2xl sm:text-3xl font-bold tracking-[0.25em] text-[#dfb75c] drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]"
            >
              ADDRESS
            </h2>
            <div className="mx-auto mt-4 max-w-xs font-serif text-sm sm:text-base leading-relaxed text-[#dfb75c] drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
              <p>No. U-15, J.V.P.D. Scheme,</p>
              <p>Bhaktivedanta Swami Marg,</p>
              <p>Opp.Cooper Hospital,</p>
              <p>Vile Parle (West),</p>
              <p>Mumbai – 400 056, India</p>
            </div>
          </section>

          {/* Map Preview with Solid Gold Border */}
          <a
            href="https://maps.google.com/?q=Dwarkadas+J.+Sanghvi+College+of+Engineering,+Vile+Parle+West,+Mumbai+400056"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open location in Google Maps"
            className="group relative block size-36 sm:size-44 overflow-hidden border-4 border-[#c59b27] shadow-[0_0_20px_rgba(0,0,0,0.9)] transition-transform hover:scale-105"
          >
            <img
              src={mapPreview}
              alt="Dwarkadas J. Sanghvi College of Engineering Map"
              className="size-full object-cover transition-opacity group-hover:opacity-90"
            />
          </a>
        </aside>
      </div>
    </main>
  );
}
