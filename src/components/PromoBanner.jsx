import React, { useEffect, useState } from "react";

const PROMOS = [
  {
    brand: "RingCentral",
    text: "used Voqly AI Roleplays to cut customer support call certification time by 90%",
    href: "#",
  },
  {
    brand: "Acme Retail",
    text: "scaled onboarding with AI roleplays and boosted NPS by 25% in 60 days",
    href: "#",
  },
  {
    brand: "GloboCorp",
    text: "trained 500+ sellers on discovery calls with measurable skill lift",
    href: "#",
  },
];

export default function PromoBanner() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((v) => (v + 1) % PROMOS.length), 4000);
    return () => clearInterval(t);
  }, []);

  const current = PROMOS[idx];

  return (
    <div
      className="w-full bg-[#0b0f2a] text-white border-b border-white/10"
      role="status"
      aria-live="polite"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-center text-center">
          <p
            key={idx}
            className="text-white text-[13px] sm:text-sm leading-5 sm:leading-6 font-extrabold tracking-wide "
          >
<span style={{ color: "white" }}>{current.brand}</span>{" "}
<span style={{ color: "white", marginRight: "1.25rem" }}>{current.text}</span>


            <a
              href="/learn-more"
              className="ml-5 mr-5 inline-block text-white hover:text-white underline underline-offset-4 decoration-white font-extrabold "
            >
              Learn More
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}


