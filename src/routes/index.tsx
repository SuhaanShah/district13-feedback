import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import figmaMockupHd from "@/assets/figma-mockup-hd.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "District 13 | Feedback" },
      {
        name: "description",
        content: "Leave your mark and connect with the District 13 community.",
      },
      { property: "og:title", content: "District 13 | Feedback" },
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
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [nameFocused, setNameFocused] = useState(false);
  const [phoneFocused, setPhoneFocused] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function submitFeedback(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 400);
  }

  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-x-auto overflow-y-hidden bg-black select-none">
      {/* 16:9 Canvas Container locked to Figma Frame 66 aspect ratio */}
      <div
        className="relative shadow-[0_0_80px_rgba(0,0,0,0.95)] transition-all duration-300 overflow-hidden shrink-0"
        style={{
          width: "min(100vw, calc(100vh * 16 / 9))",
          height: "min(100vh, calc(100vw * 9 / 16))",
          aspectRatio: "16 / 9",
        }}
      >
        {/* Pixel-for-Pixel 1:1 HD Figma Frame 66 Artwork */}
        <img
          src={figmaMockupHd}
          alt="District 13 Feedback Frame 66"
          width={1920}
          height={1080}
          className="absolute inset-0 size-full object-cover pointer-events-none select-none"
          draggable={false}
        />

        {/* ---------------------------------------------------- */}
        {/* INTERACTIVE OVERLAYS: Pixel-mapped to Frame 66 items */}
        {/* ---------------------------------------------------- */}

        {/* Top Center: Mockingjay Emblem Link to S4DS Home */}
        <a
          href="https://www.djss4ds.in/"
          target="_blank"
          rel="noopener noreferrer"
          title="DJS S4DS"
          aria-label="DJS S4DS Home"
          className="absolute z-10 rounded-full transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(223,183,92,0.8)] cursor-pointer"
          style={{
            left: "46.2%",
            top: "2.5%",
            width: "6.0%",
            height: "10.0%",
          }}
        />

        {/* Navigation: HOME */}
        <a
          href="https://www.djss4ds.in/"
          target="_blank"
          rel="noopener noreferrer"
          title="Visit HOME"
          aria-label="Home"
          className="absolute z-10 rounded-md transition-all duration-200 hover:bg-[#dfb75c]/15 hover:shadow-[0_0_15px_rgba(223,183,92,0.4)] hover:ring-1 hover:ring-[#dfb75c]/60 cursor-pointer"
          style={{
            left: "15.0%",
            top: "21.6%",
            width: "10.5%",
            height: "4.8%",
          }}
        />

        {/* Navigation: TEAM */}
        <a
          href="https://www.djss4ds.in/team"
          target="_blank"
          rel="noopener noreferrer"
          title="Visit TEAM"
          aria-label="Team"
          className="absolute z-10 rounded-md transition-all duration-200 hover:bg-[#dfb75c]/15 hover:shadow-[0_0_15px_rgba(223,183,92,0.4)] hover:ring-1 hover:ring-[#dfb75c]/60 cursor-pointer"
          style={{
            left: "15.0%",
            top: "27.0%",
            width: "10.5%",
            height: "4.8%",
          }}
        />

        {/* Navigation: Events */}
        <a
          href="https://www.djss4ds.in/events"
          target="_blank"
          rel="noopener noreferrer"
          title="Visit Events"
          aria-label="Events"
          className="absolute z-10 rounded-md transition-all duration-200 hover:bg-[#dfb75c]/15 hover:shadow-[0_0_15px_rgba(223,183,92,0.4)] hover:ring-1 hover:ring-[#dfb75c]/60 cursor-pointer"
          style={{
            left: "14.5%",
            top: "32.4%",
            width: "11.5%",
            height: "4.8%",
          }}
        />

        {/* Contact Us: Phone Dialer */}
        <a
          href="tel:+918958107107"
          title="Call +91 9858107107"
          aria-label="Call +91 9858107107"
          className="absolute z-10 rounded-md transition-all duration-200 hover:bg-[#dfb75c]/15 hover:shadow-[0_0_15px_rgba(223,183,92,0.4)] hover:ring-1 hover:ring-[#dfb75c]/60 cursor-pointer"
          style={{
            left: "6.5%",
            top: "62.4%",
            width: "27.5%",
            height: "6.5%",
          }}
        />

        {/* Social: Instagram */}
        <a
          href="https://www.instagram.com/djs.s4ds/"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram @djs.s4ds"
          aria-label="Instagram"
          className="absolute z-10 rounded-xl transition-all duration-200 hover:bg-[#dfb75c]/20 hover:scale-110 hover:shadow-[0_0_15px_rgba(223,183,92,0.6)] hover:ring-1 hover:ring-[#dfb75c] cursor-pointer"
          style={{
            left: "6.0%",
            top: "83.2%",
            width: "4.6%",
            height: "7.8%",
          }}
        />

        {/* Social: LinkedIn */}
        <a
          href="https://www.linkedin.com/company/djs-s4ds/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn DJS S4DS"
          aria-label="LinkedIn"
          className="absolute z-10 rounded-xl transition-all duration-200 hover:bg-[#dfb75c]/20 hover:scale-110 hover:shadow-[0_0_15px_rgba(223,183,92,0.6)] hover:ring-1 hover:ring-[#dfb75c] cursor-pointer"
          style={{
            left: "12.6%",
            top: "83.2%",
            width: "4.6%",
            height: "7.8%",
          }}
        />

        {/* Social: Email */}
        <a
          href="mailto:info.djss4ds@gmail.com"
          title="Email info.djss4ds@gmail.com"
          aria-label="Email"
          className="absolute z-10 rounded-xl transition-all duration-200 hover:bg-[#dfb75c]/20 hover:scale-110 hover:shadow-[0_0_15px_rgba(223,183,92,0.6)] hover:ring-1 hover:ring-[#dfb75c] cursor-pointer"
          style={{
            left: "19.1%",
            top: "83.2%",
            width: "5.1%",
            height: "7.8%",
          }}
        />

        {/* Map Location: DJSCE Google Maps */}
        <a
          href="https://maps.google.com/?q=Dwarkadas+J.+Sanghvi+College+of+Engineering,+Vile+Parle+West,+Mumbai+400056"
          target="_blank"
          rel="noopener noreferrer"
          title="Open Location on Google Maps"
          aria-label="DJSCE Location on Google Maps"
          className="group absolute z-10 rounded-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(223,183,92,0.7)] hover:ring-2 hover:ring-[#dfb75c] cursor-pointer"
          style={{
            left: "66.43%",
            top: "48.40%",
            width: "14.75%",
            height: "26.23%",
          }}
        >
          <span className="absolute inset-0 bg-transparent group-hover:bg-[#dfb75c]/10 transition-colors" />
        </a>

        {/* ---------------------------------------------------- */}
        {/* INTERACTIVE FORM: Seamless overlay on Feedback Card  */}
        {/* ---------------------------------------------------- */}
        <form onSubmit={submitFeedback} noValidate className="contents">
          {/* Name Field Overlay */}
          <div
            className="absolute z-20 group"
            style={{
              left: "36.69%",
              top: "37.74%",
              width: "26.62%",
              height: "6.82%",
            }}
          >
            <input
              id="name"
              name="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={() => setNameFocused(true)}
              onBlur={() => setNameFocused(false)}
              placeholder={nameFocused ? "Your Name" : ""}
              aria-label="Name"
              className={`size-full rounded-xl px-4 font-display text-[clamp(11px,1.2vw,22px)] tracking-wider outline-none transition-all duration-200 ${
                nameFocused || name
                  ? "bg-[#0b0c0e] text-[#f2e7ba] border border-[#dfb75c] shadow-[0_0_15px_rgba(223,183,92,0.35)]"
                  : "bg-transparent text-transparent placeholder-transparent cursor-pointer hover:bg-white/5"
              }`}
            />
          </div>

          {/* Phone Field Overlay */}
          <div
            className="absolute z-20 group"
            style={{
              left: "36.69%",
              top: "47.97%",
              width: "26.62%",
              height: "6.82%",
            }}
          >
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              onFocus={() => setPhoneFocused(true)}
              onBlur={() => setPhoneFocused(false)}
              placeholder={phoneFocused ? "Phone Number" : ""}
              aria-label="Phone Number"
              className={`size-full rounded-xl px-4 font-display text-[clamp(11px,1.2vw,22px)] tracking-wider outline-none transition-all duration-200 ${
                phoneFocused || phone
                  ? "bg-[#0b0c0e] text-[#f2e7ba] border border-[#dfb75c] shadow-[0_0_15px_rgba(223,183,92,0.35)]"
                  : "bg-transparent text-transparent placeholder-transparent cursor-pointer hover:bg-white/5"
              }`}
            />
          </div>

          {/* SEND REQUEST Button Overlay */}
          <button
            type="submit"
            disabled={submitting}
            title="Submit Feedback"
            aria-label="Send Request"
            className="absolute z-20 rounded-full cursor-pointer transition-all duration-200 hover:bg-[#dfb75c]/25 hover:shadow-[0_0_25px_rgba(223,183,92,0.6)] active:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-[#dfb75c]"
            style={{
              left: "38.13%",
              top: "57.14%",
              width: "23.74%",
              height: "6.40%",
            }}
          >
            {submitting && (
              <span className="flex size-full items-center justify-center rounded-full bg-[#0b0c0e]/95 font-display text-[clamp(9px,0.9vw,16px)] font-bold tracking-widest text-[#dfb75c]">
                SENDING...
              </span>
            )}
          </button>
        </form>

        {/* Submission Confirmation Modal Overlay */}
        {submitted && (
          <div
            className="absolute z-30 flex flex-col items-center justify-center rounded-2xl bg-[#0b0c0e]/95 px-6 py-4 border border-[#dfb75c] shadow-[0_0_35px_rgba(223,183,92,0.45)] backdrop-blur-md animate-fade-in"
            style={{
              left: "35.5%",
              top: "36.2%",
              width: "29.0%",
              height: "29.0%",
            }}
          >
            <div className="flex size-9 sm:size-11 items-center justify-center rounded-full border border-[#dfb75c] bg-[#dfb75c]/20 text-[#dfb75c] mb-2 shadow-[0_0_15px_rgba(223,183,92,0.5)]">
              <svg
                className="size-5 sm:size-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <p className="font-display text-[clamp(12px,1.2vw,22px)] font-bold tracking-[0.2em] text-[#f2e7ba] text-center">
              TRIBUTE RECORDED
            </p>
            <p className="mt-1 font-display text-[clamp(9px,0.85vw,15px)] text-[#dfb75c]/80 text-center tracking-wider">
              Your mark has been received in District 13.
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setName("");
                setPhone("");
              }}
              className="mt-3 rounded-full border border-[#dfb75c] px-4 py-1 font-display text-[clamp(8px,0.75vw,13px)] tracking-widest text-[#dfb75c] hover:bg-[#dfb75c]/25 hover:shadow-[0_0_12px_rgba(223,183,92,0.4)] transition-all cursor-pointer"
            >
              SUBMIT ANOTHER
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
