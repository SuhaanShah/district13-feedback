import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import background from "@/assets/background.png";
import addressGold from "@/assets/address_gold.png";
import xtractBanner from "@/assets/xtract-side-banner.png";

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
    <main className="relative isolate flex min-h-screen items-center overflow-hidden bg-background px-5 py-14 sm:px-8 lg:px-12">
      <img
        src={background}
        alt="Distressed dark texture backdrop with red border styling"
        width={1536}
        height={864}
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-overlay" />

      {/* Right side XTRACT 5.0 watermark banner */}
      <img
        src={xtractBanner}
        alt="The XTRACT 5.0"
        className="pointer-events-none absolute right-0 top-0 bottom-0 -z-10 hidden h-full w-auto object-contain opacity-75 xl:block"
      />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-14 lg:grid-cols-[0.8fr_1.15fr_0.9fr] lg:items-center lg:gap-10">
        <aside className="space-y-9 text-center lg:self-stretch lg:py-4 lg:text-left">
          <section aria-labelledby="info-heading">
            <h2 id="info-heading" className="section-heading">Info</h2>
            <nav aria-label="Primary navigation" className="mt-4 flex flex-col items-center gap-1 lg:items-start">
              <a className="nav-link" href="https://www.djss4ds.in/" target="_blank" rel="noopener noreferrer">Home</a>
              <a className="nav-link" href="https://www.djss4ds.in/team" target="_blank" rel="noopener noreferrer">Team</a>
              <a className="nav-link" href="https://www.djss4ds.in/events" target="_blank" rel="noopener noreferrer">Events</a>
            </nav>
          </section>

          <section aria-labelledby="contact-heading">
            <h2 id="contact-heading" className="section-heading">Contact us</h2>
            <p className="mx-auto mt-4 max-w-xs font-display text-sm font-semibold uppercase leading-relaxed text-foreground">
              Khush Thakkar
              <br />
              <span className="text-primary">(S4DS Chairperson)</span>
              <br />
              <a className="contact-link" href="tel:+918958107107">+91 89581 07107</a>
              <br />
              <a className="contact-link normal-case" href="mailto:info.djss4ds@gmail.com">info.djss4ds@gmail.com</a>
            </p>
          </section>

          <section aria-labelledby="social-heading">
            <h2 id="social-heading" className="section-heading">Social media</h2>
            <div className="mt-4 flex justify-center gap-3 lg:justify-start">
              <a className="social-link" href="https://www.instagram.com/djs.s4ds/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram /></a>
              <a className="social-link" href="https://www.linkedin.com/company/djs-s4ds/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin /></a>
              <a className="social-link" href="mailto:info.djss4ds@gmail.com" aria-label="Email"><Mail /></a>
            </div>
          </section>
        </aside>

        <section className="mx-auto w-full max-w-md text-center" aria-labelledby="feedback-heading">
          <h1 id="feedback-heading" className="section-heading text-3xl sm:text-4xl">Feedback</h1>
          <p className="mt-1 font-body text-sm italic text-muted-foreground">Leave your mark, Tribute.</p>

          <form onSubmit={submitFeedback} className="mt-6 border-2 border-primary bg-panel p-5 sm:p-7">
            <div className="space-y-4">
              <label className="sr-only" htmlFor="name">Name</label>
              <input id="name" name="name" required className="field" placeholder="Name" />

              <label className="sr-only" htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required className="field" placeholder="Email address" />

              <label className="sr-only" htmlFor="message">Message</label>
              <textarea id="message" name="message" required rows={4} className="field resize-none" placeholder="Write your message" />
            </div>

            <Button type="submit" className="mt-5 gap-2 rounded-full border border-primary-foreground/70 px-7">
              <Send className="size-3.5" /> Send request
            </Button>

            <p aria-live="polite" className="mt-3 min-h-5 text-xs font-semibold text-primary">
              {sent ? "Your message has been received." : ""}
            </p>
          </form>
        </section>

        <aside className="text-center lg:self-start lg:pt-4 lg:text-left">
          <section aria-labelledby="address-heading">
            <h2 id="address-heading" className="sr-only">Address</h2>
            <a
              href="https://maps.google.com/?q=Dwarkadas+J.+Sanghvi+College+of+Engineering,+Vile+Parle+West,+Mumbai+400056"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto block max-w-xs transition-opacity hover:opacity-90"
            >
              <img
                src={addressGold}
                alt="Address: No. U-15, J.V.P.D. Scheme, Bhaktivedanta Swami Marg, Opp. Cooper Hospital, Vile Parle (West), Mumbai - 400 056, India"
                className="mx-auto w-full object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
              />
            </a>

            <a
              href="https://maps.google.com/?q=Dwarkadas+J.+Sanghvi+College+of+Engineering,+Vile+Parle+West,+Mumbai+400056"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open location in Google Maps"
              className="mx-auto mt-7 flex aspect-[4/3] max-w-xs items-center justify-center border-4 border-primary bg-map text-center transition-opacity hover:opacity-80 lg:mx-0"
            >
              <span>
                <MapPin className="mx-auto size-10 text-primary" strokeWidth={1.5} />
                <span className="mt-2 block font-display text-xs font-bold uppercase text-map-foreground">Mumbai, India</span>
              </span>
            </a>
          </section>
        </aside>
      </div>
    </main>
  );
}
