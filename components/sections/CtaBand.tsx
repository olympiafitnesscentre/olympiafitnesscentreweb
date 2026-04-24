"use client";
import Link from "next/link";

export default function CtaBand() {
  return (
    <div id="contact" className="relative bg-[#E8593C] px-20 py-20 flex items-center justify-between gap-10 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute right-16 -bottom-24 w-60 h-60 rounded-full bg-white/5 pointer-events-none" />

      <div className="relative z-10">
        <h2
          className="font-oswald font-bold text-white uppercase leading-[0.95] mb-3"
          style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
        >
          What Hurts Today<br />
          Makes You{" "}
          <span className="underline underline-offset-[6px]">Stronger</span>{" "}
          Tomorrow.
        </h2>
        <p className="text-white/75 text-base font-light">
          Your first week is on us. Walk in any day, no appointment needed.
        </p>
      </div>

      <div className="flex gap-4 items-center flex-shrink-0 relative z-10">
        <Link
          href="tel:+919876543210"
          className="inline-flex items-center gap-2 bg-white text-[#E8593C] font-barlow-condensed text-sm font-bold tracking-[2px] uppercase px-8 py-4 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)] transition-all duration-200"
        >
          📞 Call Now
        </Link>
        <Link
          href="https://maps.google.com"
          target="_blank"
          className="inline-flex items-center gap-2 bg-transparent text-white font-barlow-condensed text-sm font-semibold tracking-[2px] uppercase px-7 py-4 border-[1.5px] border-white/50 hover:border-white hover:-translate-y-0.5 transition-all duration-200"
        >
          Get Directions →
        </Link>
      </div>
    </div>
  );
}
