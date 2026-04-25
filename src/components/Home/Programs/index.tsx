"use client";
import Link from "next/link";

const programs = [
  { num: "01", icon: "🏋️", title: "Weight Training", desc: "Build serious muscle with structured progressive overload. Olympic bars, dumbbells up to 50kg, cable machines and more.", tag: "All Levels" },
  { num: "02", icon: "🔥", title: "CrossFit & HIIT", desc: "High-intensity functional training that torches fat and builds athletic performance. Coached circuits, never boring.", tag: "Intermediate" },
  { num: "03", icon: "💃", title: "Zumba & Dance", desc: "High-energy dance-fitness classes led by certified Zumba instructors. The workout that never feels like work.", tag: "All Levels" },
  { num: "04", icon: "🧘", title: "Yoga & Flexibility", desc: "Improve mobility, reduce injury risk and build mind-body awareness. Morning and evening sessions available.", tag: "Beginners Welcome" },
  { num: "05", icon: "🚴", title: "Cardio Zone", desc: "Treadmills, bikes, ellipticals and rowing machines with entertainment screens and heart-rate tracking.", tag: "All Levels" },
  { num: "06", icon: "🥊", title: "Personal Training", desc: "One-on-one sessions with a certified coach who designs and tracks your program from day one.", tag: "Book a Session" },
];

export default function Programs() {
  return (
    <section id="programs" className="relative bg-[#080808] px-20 py-24 overflow-hidden">
      {/* Watermark */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-oswald font-bold pointer-events-none select-none whitespace-nowrap"
        style={{ fontSize: 260, color: "rgba(255,255,255,0.015)", letterSpacing: "-4px" }}
      >
        OLYMPIA
      </div>

      {/* Header */}
      <div className="flex justify-between items-end mb-14 relative z-10">
        <div>
          <div className="flex items-center gap-2.5 font-barlow-condensed text-[11px] font-semibold tracking-[4px] uppercase text-[#E8593C] mb-5 before:content-[''] before:block before:w-6 before:h-px before:bg-[#E8593C]">
            What We Offer
          </div>
          <h2 className="font-oswald font-bold text-white uppercase leading-[0.95]" style={{ fontSize: "clamp(36px, 5vw, 58px)" }}>
            Our <span className="text-[#E8593C]">Programs</span>
          </h2>
        </div>
        <Link href="#" className="font-barlow-condensed text-sm font-semibold tracking-[2px] uppercase text-[#f0ede8] border border-white/10 px-8 py-4 hover:border-white/30 hover:text-white hover:-translate-y-0.5 transition-all duration-200">
          All Programs →
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-0.5 relative z-10">
        {programs.map((p, i) => (
          <div
            key={p.num}
            className="reveal group relative bg-[#141414] border border-white/[0.07] p-10 overflow-hidden cursor-none hover:border-[rgba(232,89,60,0.2)] hover:-translate-y-1 hover:bg-[#1a1a1a] transition-all duration-300"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            {/* Bottom bar on hover */}
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#E8593C] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-400" />
            {/* Ghost number */}
            <div className="absolute top-8 right-8 font-oswald font-bold text-[64px] text-white/[0.04] leading-none select-none">{p.num}</div>
            <span className="text-[36px] mb-6 block">{p.icon}</span>
            <h3 className="font-oswald font-semibold text-[22px] uppercase tracking-wide text-white mb-3">{p.title}</h3>
            <p className="text-sm font-light text-white/50 leading-[1.7]">{p.desc}</p>
            <span className="inline-block mt-5 font-barlow-condensed text-[11px] font-semibold tracking-[2px] uppercase text-[#E8593C]">{p.tag} →</span>
          </div>
        ))}
      </div>
    </section>
  );
}
