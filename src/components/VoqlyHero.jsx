import React, { useEffect, useRef, useState } from "react";

export default function VoqlyHero() {
  const WORDS = ["confidence", "clarity", "impact"];
  const ADJECTIVES = ["confidence", "assurance", "poise", "conviction", "presence"];
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const intervalRef = useRef(null);
  const timeoutFadeRef = useRef(null);
  const timeoutInRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setFading(true);
      timeoutFadeRef.current = setTimeout(() => {
        setIndex((i) => (i + 1) % WORDS.length);
        timeoutInRef.current = setTimeout(() => setFading(false), 60);
      }, 240);
    }, 2000);

    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(timeoutFadeRef.current);
      clearTimeout(timeoutInRef.current);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden py-20 px-0">
      {/* Decorative curve behind content */}
      <svg
        className="pointer-events-none absolute left-0 top-1/2 -z-10 h-[240px] w-screen -translate-y-1/2"
        viewBox="0 0 1200 240"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M0,160 C200,20 400,220 600,120 C800,20 1000,220 1200,80"
          stroke="#4f46e5"
          strokeWidth="2"
          strokeOpacity="0.18"
          fill="none"
        />
      </svg>

      <div className="mx-auto w-full max-w-7xl px-10 text-center justify-center">
        {/* Full-width headline */}
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
          Master conversations with{" "}
          <span
            className={`relative inline-block w-[6ch] whitespace-nowrap transition-opacity duration-300 ${
              fading ? "opacity-0" : "opacity-100"
            }`}
          >
            {/* Fallback (solid color) */}
            <span className="text-indigo-600">{WORDS[index]}</span>
            {/* Gradient overlay (supported browsers) */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent"
              style={{ WebkitTextFillColor: "transparent" }}
            >
              {WORDS[index]}
            </span>
          </span>
        </h1>

       {/* Two-column content below headline */}
       <div className="mt-6 grid grid-cols-[65%_35%] items-center gap-8 lg:gap-12">
{/* Left column */}
<div className="flex items-center justify-center">
  <div className="text-center max-w-xl">
    {/* Heading */}
    <h2 className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
      Interact with{" "}
      <span
        className={`relative inline-block w-[12ch] text-left align-baseline whitespace-nowrap transition-opacity duration-800 ${
          fading ? "opacity-10" : "opacity-100"
        }`}
      >
        <span className="text-indigo-600">{ADJECTIVES[index % ADJECTIVES.length]}</span>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent"
          style={{ WebkitTextFillColor: "transparent" }}
        >
          {ADJECTIVES[index % ADJECTIVES.length]}
        </span>
      </span>
    </h2>

    {/* Main Hero Text */}
    <p className="mt-3 text-4xl font-extrabold text-gray-900 leading-snug max-w-md mx-auto text-center">
  Voqly helps you practice and improve your speaking skills with{" "}


  <span
  class="inline-block bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse"
>
  AI-powered feedback
</span>
</p>

    {/* CTA Buttons */}
    <div className="mt-8 flex gap-4 justify-center">
      <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-md hover:bg-indigo-700 transition">
        Get Started
      </button>
      <button className="px-6 py-3 border border-indigo-600 text-indigo-600 font-semibold rounded-full hover:bg-indigo-50 transition">
        Learn More
      </button>
    </div>
  </div>
</div>


  {/* Right column */}
  <div className="flex items-center justify-left">
    <div className="relative right-[25px] w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] md:w-[380px] md:h-[380px] lg:w-[400px] lg:h-[400px] max-w-[400px] max-h-[400px] rounded-full overflow-hidden shadow-xl shadow-indigo-100">
        
      <video
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        aria-label="Voqly demo"
      >
        <source src="/videos/demo.mp4" type="video/mp4" />
        <source src="/videos/demo.webm" type="video/webm" />
      </video>
    </div>
  </div>
</div>

</div>
    </section>
  );
}


