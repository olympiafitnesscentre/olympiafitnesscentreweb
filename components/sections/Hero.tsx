"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(8,8,8,0.98) 40%, rgba(8,8,8,0.6) 70%, rgba(8,8,8,0.3) 100%), url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1400&q=80')`,
        }}
      />

      {/* Grain overlay */}
      <div className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")` }}
      />

      {/* Orange pulse line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#E8593C] to-transparent animate-[pulseLine_3s_ease-in-out_infinite]" />

      {/* Content */}
      <div className="relative z-10 px-20 max-w-[760px]">
        <div
          className="flex items-center gap-2.5 font-barlow-condensed text-[12px] font-semibold tracking-[4px] uppercase text-[#E8593C] mb-7 opacity-0"
          style={{ animation: "fadeUp 0.8s 0.2s forwards" }}
        >
          <span className="block w-8 h-px bg-[#E8593C]" />
          Perambur · Chennai · Since 2015
        </div>

        <h1
          className="font-oswald font-bold text-white uppercase leading-[0.92] tracking-tight mb-7 opacity-0"
          style={{ fontSize: "clamp(56px, 8vw, 96px)", animation: "fadeUp 0.8s 0.4s forwards" }}
        >
          Forge Your
          <em className="not-italic text-[#E8593C] block">Strongest</em>
          Self.
        </h1>

        <p
          className="text-[17px] font-light text-white/50 leading-[1.8] max-w-[460px] mb-11 opacity-0"
          style={{ animation: "fadeUp 0.8s 0.6s forwards" }}
        >
          Chennai&apos;s most intense fitness experience. Elite equipment, expert
          coaches, and a community that pushes you beyond what you thought
          possible.
        </p>

        <div
          className="flex items-center gap-5 flex-wrap opacity-0"
          style={{ animation: "fadeUp 0.8s 0.8s forwards" }}
        >
          <Link
            href="#pricing"
            className="inline-flex items-center gap-2.5 bg-[#E8593C] text-white font-barlow-condensed text-sm font-bold tracking-[2.5px] uppercase px-9 py-4 hover:bg-[#c44a30] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(232,89,60,0.3)] transition-all duration-200"
          >
            Start Free Trial →
          </Link>
          <Link
            href="#programs"
            className="inline-flex items-center gap-2.5 bg-transparent text-[#f0ede8] font-barlow-condensed text-sm font-semibold tracking-[2px] uppercase px-8 py-4 border border-white/10 hover:border-white/30 hover:text-white hover:-translate-y-0.5 transition-all duration-200"
          >
            Explore Programs
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-20 flex items-center gap-3 font-barlow-condensed text-[11px] tracking-[3px] uppercase text-white/40 opacity-0"
        style={{ animation: "fadeUp 0.8s 1.2s forwards" }}
      >
        <div className="w-10 h-px bg-white/40 animate-[scrollLine_2s_ease-in-out_infinite]" />
        Scroll to explore
      </div>

      <style jsx>{`
        @keyframes pulseLine {
          0%, 100% { opacity: 0.4; transform: scaleY(0.8); }
          50% { opacity: 1; transform: scaleY(1); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scrollLine {
          0%, 100% { width: 20px; opacity: 0.4; }
          50% { width: 40px; opacity: 1; }
        }
      `}</style>
    </section>
  );
}