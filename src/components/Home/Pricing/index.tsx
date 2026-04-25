import Link from "next/link";

const plans = [
  {
    name: "Monthly",
    price: "700",
    period: "per month",
    featured: false,
    features: [
      { text: "Gym floor access", included: true },
      { text: "Locker room", included: true },
      { text: "2 Group classes/week", included: true },
      { text: "Fitness assessment", included: true },
      { text: "Personal trainer", included: false },
      { text: "Nutrition plan", included: false },
    ],
  },
  {
    name: "Quarterly",
    price: "2,400",
    period: "per 4 months",
    featured: true,
    features: [
      { text: "Gym floor access", included: true },
      { text: "Locker room", included: true },
      { text: "Unlimited Group classes", included: true },
      { text: "Fitness assessment", included: true },
      { text: "2 PT sessions/month", included: true },
      { text: "Full nutrition plan", included: false },
    ],
  },
  {
    name: "Annual",
    price: "12,999",
    period: "per year · save 28%",
    featured: false,
    features: [
      { text: "Gym floor access", included: true },
      { text: "Locker room", included: true },
      { text: "Unlimited Group classes", included: true },
      { text: "Fitness assessment", included: true },
      { text: "4 PT sessions/month", included: true },
      { text: "Full nutrition plan", included: true },
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#0e0e0e] px-20 py-24">
      <div className="text-center mb-14">
        <div className="flex items-center justify-center gap-2.5 font-barlow-condensed text-[11px] font-semibold tracking-[4px] uppercase text-[#E8593C] mb-5 before:content-[''] before:block before:w-6 before:h-px before:bg-[#E8593C]">
          Membership Plans
        </div>
        <h2 className="font-oswald font-bold text-white uppercase leading-[0.95]" style={{ fontSize: "clamp(36px, 5vw, 58px)" }}>
          Simple <span className="text-[#E8593C]">Pricing</span>
        </h2>
        <p className="text-white/50 mt-3 text-[15px] font-light">No hidden fees. Cancel anytime. First week free.</p>
      </div>

      <div className="grid grid-cols-3 gap-6 max-w-[900px] mx-auto">
        {plans.map((plan, i) => (
          <div
            key={plan.name}
            className={`reveal relative p-11 border hover:-translate-y-1.5 transition-all duration-300 ${
              plan.featured
                ? "bg-[#1a1a1a] border-[#E8593C]"
                : "bg-[#141414] border-white/[0.07]"
            }`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            {plan.featured && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#E8593C] text-white font-barlow-condensed text-[11px] font-bold tracking-[2px] uppercase px-4 py-1 whitespace-nowrap">
                POPULAR
              </div>
            )}
            <div className="font-barlow-condensed text-[13px] font-semibold tracking-[3px] uppercase text-white/50 mb-4">{plan.name}</div>
            <div className="font-oswald font-bold text-[52px] text-white leading-none mb-1">
              <sup className="text-[22px] text-[#E8593C] align-super">₹</sup>
              {plan.price}
            </div>
            <div className="text-[13px] text-white/50 mb-8">{plan.period}</div>
            <ul className="mb-9 space-y-0">
              {plan.features.map((f) => (
                <li
                  key={f.text}
                  className={`flex items-center gap-2.5 text-sm py-2.5 border-b border-white/[0.07] font-light ${
                    f.included ? "text-white/50" : "text-white/20"
                  }`}
                >
                  <span className={`text-xs font-bold flex-shrink-0 ${f.included ? "text-[#E8593C]" : "text-white/20"}`}>
                    {f.included ? "✓" : "×"}
                  </span>
                  {f.text}
                </li>
              ))}
            </ul>
            <Link
              href="#contact"
              className={`block text-center font-barlow-condensed text-sm font-bold tracking-[2px] uppercase py-4 transition-all duration-200 hover:-translate-y-0.5 ${
                plan.featured
                  ? "bg-[#E8593C] text-white hover:bg-[#c44a30]"
                  : "bg-transparent text-[#f0ede8] border border-white/10 hover:border-white/30 hover:text-white"
              }`}
            >
              Get Started
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
