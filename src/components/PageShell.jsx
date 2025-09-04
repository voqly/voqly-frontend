import React from "react";
import Header from "./Header";

export default function PageShell({ title, subtitle, children, heroAdornment }) {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Header />

      <section className="relative overflow-hidden app-theme">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-24 -right-24 w-[28rem] h-[28rem] bg-blue-50 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-[32rem] h-[32rem] bg-cyan-50 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-16">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">{title}</h1>
          {subtitle ? <p className="text-gray-600 mt-3 max-w-2xl">{subtitle}</p> : null}
          {heroAdornment ? <div className="mt-6">{heroAdornment}</div> : null}
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 pb-20 app-theme">
        {children}
      </main>
    </div>
  );
}


