const stats = [
  { num: "500+", label: "Active Members" },
  { num: "12", label: "Expert Trainers" },
  { num: "9+", label: "Years Strong" },
  { num: "4.9★", label: "Member Rating" },
];

export default function Stats() {
  return (
    <div className="grid grid-cols-4 bg-[#E8593C]">
      {stats.map((s, i) => (
        <div
          key={s.label}
          className="reveal py-8 px-6 text-center border-r border-white/15 last:border-r-0 hover:bg-white/10 transition-colors duration-300"
          style={{ transitionDelay: `${i * 100}ms` }}
        >
          <div className="font-oswald font-bold text-5xl text-white leading-none">{s.num}</div>
          <div className="font-barlow-condensed text-[11px] font-semibold tracking-[3px] uppercase text-white/70 mt-1.5">{s.label}</div>
        </div>
      ))}
    </div>
  );
}