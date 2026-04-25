"use client";
import Image from "next/image";

const features = [
  "AC-Cooled Training Floor",
  "Pro-Grade Equipment",
  "Personal Training",
  "Nutrition Guidance",
  "Group Classes",
  "Locker Rooms",
];

export default function About() {
  return (
    <section id="about" className="bg-[#0e0e0e] px-20 py-24 grid grid-cols-2 gap-20 items-center">
      {/* Image */}
      <div className="reveal relative">
        <div className="relative h-[520px] overflow-hidden before:content-[''] before:absolute before:-top-5 before:-left-5 before:right-5 before:bottom-5 before:border before:border-[#E8593C] before:border-opacity-40 before:z-0">
          <Image
            src="https://i.pinimg.com/1200x/5c/b2/3a/5cb23a9a13c51f3a71992c0d2e034706.jpg"
            alt="Gym interior"
            fill
            className="object-cover grayscale-[40%] contrast-110 hover:grayscale-0 transition-all duration-500"
          />
          {/* Badge */}
          <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-[#E8593C] rounded-full flex flex-col items-center justify-center z-10">
            <span className="font-oswald font-bold text-2xl text-white leading-none">#1</span>
            <span className="font-barlow-condensed text-[9px] tracking-wide uppercase text-white/80">Perambur</span>
          </div>
        </div>
      </div>

      {/* Text */}
      <div className="reveal" style={{ transitionDelay: "150ms" }}>
        <div className="flex items-center gap-2.5 font-barlow-condensed text-[11px] font-semibold tracking-[4px] uppercase text-[#E8593C] mb-5 before:content-[''] before:block before:w-6 before:h-px before:bg-[#E8593C]">
          Our Story
        </div>
        <h2 className="font-oswald font-bold text-white uppercase leading-[0.95] tracking-tight mb-6" style={{ fontSize: "clamp(36px, 5vw, 58px)" }}>
          Built For <span className="text-[#E8593C]">Champions</span>
        </h2>
        <p className="text-base font-light text-white/50 leading-[1.8] mb-5">
          Olympia Fitness Centre was born from a simple belief — everyone deserves
          access to world-class training. Since 2015, we&apos;ve been Perambur&apos;s most
          trusted fitness destination, helping hundreds of members transform their
          bodies and lives.
        </p>
        <p className="text-base font-light text-white/50 leading-[1.8]">
          From first-timers to seasoned athletes, our coaches build personalised
          programs that deliver real, lasting results. No shortcuts. No gimmicks.
          Just hard work and the right guidance.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-9">
          {features.map((f) => (
            <div key={f} className="flex items-center gap-2.5 font-barlow-condensed text-sm font-semibold tracking-wide uppercase text-[#f0ede8]">
              <div className="w-1.5 h-1.5 rounded-full bg-[#E8593C] flex-shrink-0" />
              {f}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}