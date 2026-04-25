"use client";
import Link from "next/link";

const quickLinks = ["About Us", "Programs", "Membership", "Trainers", "Gallery", "Blog"];
const programLinks = ["Weight Training", "CrossFit & HIIT", "Zumba", "Yoga", "Cardio Zone", "Personal Training"];

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/[0.07] px-20 pt-18 pb-9">
      <div className="grid grid-cols-[1.5fr_1fr_1fr_1.2fr] gap-12 mb-16 pt-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-13 h-13 rounded-full border-2 border-[#E8593C] flex items-center justify-center flex-shrink-0" style={{width:52,height:52}}>
              <span className="font-oswald font-bold text-[#E8593C] text-xl">O</span>
            </div>
            <div>
              <div className="font-oswald font-bold text-white text-xl tracking-[2px] leading-none">OLYMPIA</div>
              <div className="font-barlow-condensed text-[10px] tracking-[3px] text-white/40 uppercase">Fitness Centre</div>
            </div>
          </div>
          <p className="font-barlow-condensed text-[12px] tracking-[2px] uppercase text-white/40 mb-5 leading-relaxed">
            What hurts today makes you<br />stronger tomorrow.
          </p>
          <div className="flex gap-2.5">
            {[
              { label: "f", href: "#" },
              { label: "in", href: "#" },
              { label: "ig", href: "#" },
              { label: "yt", href: "#" },
            ].map((s) => (
              <Link
                key={s.label}
                href={s.href}
                className="w-9 h-9 border border-white/[0.07] flex items-center justify-center text-[13px] text-white/40 font-barlow-condensed font-bold uppercase hover:border-[#E8593C] hover:text-[#E8593C] hover:bg-[rgba(232,89,60,0.08)] transition-all duration-200"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-barlow-condensed text-[12px] font-bold tracking-[3px] uppercase text-white mb-5">Quick Links</h4>
          <ul className="flex flex-col gap-2.5">
            {quickLinks.map((link) => (
              <li key={link}>
                <Link href="#" className="text-sm font-light text-white/40 hover:text-[#E8593C] transition-colors duration-200">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h4 className="font-barlow-condensed text-[12px] font-bold tracking-[3px] uppercase text-white mb-5">Programs</h4>
          <ul className="flex flex-col gap-2.5">
            {programLinks.map((link) => (
              <li key={link}>
                <Link href="#" className="text-sm font-light text-white/40 hover:text-[#E8593C] transition-colors duration-200">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-barlow-condensed text-[12px] font-bold tracking-[3px] uppercase text-white mb-5">Visit Us</h4>
          <div className="space-y-3">
            <div className="flex items-start gap-2.5 text-sm font-light text-white/40 leading-relaxed">
              <span className="text-[#E8593C] flex-shrink-0 text-xs mt-0.5">📍</span>
              <span>No. 12, Nehru Street,<br />Perambur, Chennai – 600 011,<br />Tamil Nadu, India</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm font-light text-white/40">
              <span className="text-[#E8593C] text-xs">📞</span>
              <Link href="tel:+919876543210" className="hover:text-[#E8593C] transition-colors duration-200">
                +91 98765 43210
              </Link>
            </div>
            <div className="flex items-center gap-2.5 text-sm font-light text-white/40">
              <span className="text-[#E8593C] text-xs">✉</span>
              <Link href="mailto:info@olympiafitness.in" className="hover:text-[#E8593C] transition-colors duration-200">
                info@olympiafitness.in
              </Link>
            </div>
          </div>
          {/* Hours badge */}
          <div className="mt-5 inline-flex items-center gap-2 bg-[rgba(232,89,60,0.08)] border border-[rgba(232,89,60,0.2)] px-4 py-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#E8593C] animate-[blink_1.5s_ease-in-out_infinite]" />
            <span className="font-barlow-condensed text-[12px] tracking-[1.5px] uppercase text-[#E8593C]">
              Open · 5:30 AM – 10 PM
            </span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.07] pt-7 flex justify-between items-center">
        <p className="text-[13px] font-light text-white/30">
          © 2025 <span className="text-[#E8593C]">Olympia Fitness Centre</span>. All rights reserved. · Perambur, Chennai
        </p>
        <div className="flex gap-5 text-[12px] font-light text-white/30">
          <Link href="#" className="hover:text-white/60 transition-colors duration-200">v1.3.2</Link>
        </div>
        <div className="flex gap-5 text-[12px] font-light text-white/30">
          <Link href="#" className="hover:text-white/60 transition-colors duration-200">Privacy Policy</Link>
          <Link href="#" className="hover:text-white/60 transition-colors duration-200">Terms of Use</Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.2; }
        }
      `}</style>
    </footer>
  );
}