"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 h-[72px] transition-all duration-400 ${
        scrolled
          ? "bg-[rgba(8,8,8,0.92)] backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
       <Link href="/" className="flex items-center group">
        <Image
          src="/logo.svg"
          alt="Olympia Fitness Centre"
          width={40}
          height={40}
        /> {/*
      <Link href="/" className="flex items-center gap-3 group">
        <div className="w-10 h-10 rounded-full border-2 border-[#E8593C] flex items-center justify-center transition-shadow group-hover:shadow-[0_0_16px_rgba(232,89,60,0.4)]">
          <span className="font-oswald font-bold text-[#E8593C] text-base">O</span>
        </div> */}
        <div>
          <div className="font-oswald font-bold text-white text-base tracking-[2px] leading-none">OLYMPIA</div>
          <div className="font-barlow-condensed text-[9px] tracking-[3px] text-white/40 uppercase">Fitness Centre</div>
        </div>
      </Link>

      {/* Links */}
      <ul className="flex gap-9 list-none">
        {["About", "Programs", "Pricing", "Trainers"].map((item) => (
          <li key={item}>
            <Link
              href={`#${item.toLowerCase()}`}
              className="font-barlow-condensed text-[13px] font-semibold tracking-[2px] uppercase text-white/50 hover:text-[#E8593C] transition-colors duration-200"
            >
              {item}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="#contact"
            className="font-barlow-condensed text-[12px] font-bold tracking-[2px] uppercase text-white bg-[#E8593C] px-6 py-2.5 hover:bg-[#c44a30] transition-colors duration-200"
          >
            Join Now →
          </Link>
        </li>
      </ul>
    </nav>
  );
}
