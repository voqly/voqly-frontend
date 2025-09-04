import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import Header, { VoqlyLogo } from "./components/Header";
import Footer from "./components/Footer";
import VoqlyHero from "./components/VoqlyHero";
import { motion } from "framer-motion";
import { Brain, Gamepad2, BarChart3, Mic, Cpu, Sparkles, Upload, CheckCircle2 } from "lucide-react";

// VoqlyLogo now imported from reusable Header

export default function LandingPage() {
  const logoUrls = {
    google: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    microsoft: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    amazon: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    adobe: "https://logo.clearbit.com/adobe.com",
    linkedin: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
    morganstanley: "https://logo.clearbit.com/morganstanley.com",
  };
  const brandLabels = {
    google: "Google",
    microsoft: "Microsoft",
    amazon: "Amazon",
    adobe: "Adobe",
    linkedin: "LinkedIn",
    morganstanley: "Morgan Stanley",
  };
  const brandOrder = [
    "google",
    "microsoft",
    "amazon",
    "adobe",
    "linkedin",
    "morganstanley",
  ];
  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      <Header />

{/* Hero Section */}
<VoqlyHero />

{/* Legacy full-width hero image retained below new hero */}
<section class="relative left-1/2 -translate-x-1/2 w-screen mt-4 md:mt-8">
  <div class="relative h-[60vh] md:h-[80vh] overflow-hidden">
    <div class="pointer-events-none absolute inset-y-0 left-0 w-[15vw] bg-gradient-to-r from-violet-600 to-transparent z-20"></div>
    <div class="pointer-events-none absolute inset-y-0 right-0 w-[15vw] bg-gradient-to-l from-blue-600 to-transparent z-20"></div>
    <img
      src="/images/hero-demo.png"
      alt="voqly hero"
      class="absolute inset-0 z-10 w-full h-full object-cover"
    />
  </div>
</section>





      {/* Trusted By */}
      <section className="px-6 bg-white pt-20 pb-10">
        <h3 className="text-xl text-gray-500 mb-6 text-center">Trusted by professionals at</h3>
        <div className="marquee">
          <div className="marquee-track">
            {[...brandOrder, ...brandOrder].map((brand, i) => (
              <div key={i} className="marquee-item">
                <img src={logoUrls[brand]} alt={brandLabels[brand] || brand} referrerPolicy="no-referrer" />
                <span className="text-sm">{brandLabels[brand] || brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
<div className="shivank">
      {/* Features */}
      <section id="features" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Why Voqly?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "AI Feedback",
              desc: "Get instant feedback on tone, filler words, eye contact, and more.",
              icon: Brain,
            },
            {
              title: "Gamified Practice",
              desc: "Level up your speaking skills with fun games and challenges.",
              icon: Gamepad2,
            },
            {
              title: "Progress Dashboard",
              desc: "Visualize your growth with charts, badges, and session history.",
              icon: BarChart3,
            },
          ].map((f, i) => (
            <Card key={i} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  {f.icon ? <f.icon className="h-7 w-7" /> : null}
                </div>
                <h3 className="text-xl font-semibold mt-4">{f.title}</h3>
                <p className="text-gray-600 mt-1">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="relative py-20 px-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] bg-indigo-100 rounded-full blur-3xl opacity-70"></div>
          <div className="absolute -bottom-24 -right-24 w-[32rem] h-[32rem] bg-purple-100 rounded-full blur-3xl opacity-70"></div>
        </div>
        <h2 className="relative text-3xl font-extrabold text-center mb-10 tracking-tight text-gray-900">How it works</h2>
        <div className="relative max-w-6xl mx-auto grid md:grid-cols-3 gap-6 lg:gap-8">
          {[
            {
              step: 1,
              title: "Record or Upload",
              desc: "Capture a new speech with your mic or drop in a video you already have.",
              bullets: ["One‑click recording", "Upload MP4 / MOV", "Noise suppression"],
              Icon: Mic,
              AccentIcon: Upload,
            },
            {
              step: 2,
              title: "AI Analysis",
              desc: "Models evaluate clarity, pace, filler words, energy and more.",
              bullets: ["Realtime & post‑run insights", "Smart transcript highlights", "Privacy‑first processing"],
              Icon: Cpu,
              AccentIcon: Sparkles,
            },
            {
              step: 3,
              title: "Personalized Coaching",
              desc: "Get targeted tips and interactive drills tailored to your delivery.",
              bullets: ["Daily micro‑drills", "Goal tracking", "Shareable progress"],
              Icon: Sparkles,
              AccentIcon: BarChart3,
            },
          ].map(({ step, title, desc, bullets, Icon, AccentIcon }, i) => {
            const topBarClass = i === 0
              ? "bg-gradient-to-r from-cyan-500 to-blue-500"
              : i === 1
              ? "bg-gradient-to-r from-fuchsia-500 to-pink-500"
              : "bg-gradient-to-r from-amber-500 to-orange-500";
            const iconWrapClass = i === 0
              ? "text-cyan-600 bg-cyan-50"
              : i === 1
              ? "text-fuchsia-600 bg-pink-50"
              : "text-amber-600 bg-amber-50";
            const badgeClass = i === 0
              ? "text-cyan-700 bg-cyan-50"
              : i === 1
              ? "text-fuchsia-700 bg-pink-50"
              : "text-amber-700 bg-amber-50";
            const bulletIconClass = i === 0
              ? "text-cyan-600"
              : i === 1
              ? "text-fuchsia-600"
              : "text-amber-600";
            return (
              <motion.div
                key={i}
                className="group bg-white/90 backdrop-blur rounded-2xl p-6 lg:p-7 shadow-md border border-gray-100 flex flex-col min-h-[280px] transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <div className={`h-1 w-full rounded-full ${topBarClass} mb-4`}></div>
                <div className="flex items-center gap-3">
                  <div className={`h-12 w-12 rounded-xl ${iconWrapClass} flex items-center justify-center shadow-sm group-hover:shadow-md`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className={`text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${badgeClass}`}>Step {step}</span>
                </div>
                <h3 className="text-xl font-bold mt-3 text-gray-900">{title}</h3>
                <p className="text-gray-700 mt-1">{desc}</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  {bullets.map((b, bi) => (
                    <li key={bi} className="flex items-start gap-2">
                      <AccentIcon className={`h-4 w-4 mt-0.5 ${bulletIconClass}`} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
        <div className="relative mt-10 flex items-center justify-center gap-4">
          {/* <a href="#demo" className="inline-flex items-center px-5 py-2.5 rounded-lg bg-white text-indigo-700 border border-indigo-200 shadow-sm hover:shadow transition">Watch demo</a> */}
          {/* <a href="/signup" className="inline-flex items-center px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-sm hover:opacity-90 transition">Start practicing</a> */}
        </div>
      </section>

      {/* Demo Video */}
      <section id="demo" className="py-16 md:py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Watch Voqly in Action</h2>
        <div className="max-w-4xl mx-auto">
          <iframe
            src="https://www.youtube.com/embed/BErcHaCt5rA"
            title="Demo video"
            className="w-full h-[40vh] md:h-[60vh] rounded-xl shadow-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Divider before Pricing */}
      <div className="max-w-6xl mx-auto my-16 px-6">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      </div>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center">Choose your plan</h2>
        <p className="text-center text-gray-600 mt-2 max-w-2xl mx-auto">Simple pricing for every stage — from first practice to ongoing performance improvement.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-10">
          {[
            {
              name: "Starter",
              price: "$0",
              blurb: "Just exploring",
              cta: "Get started",
              highlighted: false,
              features: [
                "Up to 5 roleplays total",
                "Live AI roleplays",
                "Feedback on uploads",
                "No credit card required",
              ],
            },
            {
              name: "Pro",
              price: "$9.99/mo",
              blurb: "Preparing for a high‑stakes event",
              cta: "Subscribe now",
              highlighted: true,
              features: [
                "Up to 10 roleplays/week",
                "Everything in Starter",
                "Advanced analytics",
                "Priority support",
              ],
            },
            {
              name: "Team & Enterprise",
              price: "Let’s talk",
              blurb: "For organizations and coaching companies",
              cta: "Contact sales",
              highlighted: false,
              features: [
                "Customizable to your rubric",
                "Team dashboards & roles",
                "SSO/SCIM & data retention",
                "Dedicated account manager",
              ],
            },
          ].map((plan, i) => (
            <Card key={i} className={`${plan.highlighted ? "border-2 border-blue-400 shadow-xl" : "border border-gray-200 shadow-sm"} rounded-2xl`}>
              <CardContent className="p-6 flex flex-col h-full">
                <div>
                  {plan.highlighted ? (
                    <span className="inline-block text-[10px] font-bold uppercase text-white bg-gradient-to-r from-cyan-500 to-blue-600 px-2 py-1 rounded">Recommended</span>
                  ) : null}
                  <h3 className="text-xl font-extrabold mt-2">{plan.name}</h3>
                  <p className="text-3xl font-extrabold mt-1 text-gray-900">{plan.price}</p>
                </div>
                <div className="mt-5">
                  <Button className={`${plan.highlighted ? "bg-gradient-to-r from-blue-500 to-indigo-500" : "bg-white text-blue-700 border border-blue-400 hover:bg-blue-50"} w-full`}>{plan.cta}</Button>
                  <p className="text-center text-sm text-gray-700 mt-3 font-semibold">{plan.blurb}</p>
                </div>
                <ul className="mt-5 space-y-2 text-sm text-gray-800 flex-1">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5" />{f}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">FAQs</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {[
            {
              q: "Is Voqly really free?",
              a: "Yes, we offer a completely free tier to get you started."
            },
            {
              q: "Do I need to install anything?",
              a: "Nope! Voqly works right in your browser."
            },
            {
              q: "Is my data secure?",
              a: "Yes, we use encryption and follow best practices to protect your data."
            }
          ].map((faq, i) => (
            <div key={i}>
              <h4 className="text-lg font-semibold">Q: {faq.q}</h4>
              <p className="text-gray-700">A: {faq.a}</p>
            </div>
          ))}
        </div>
      </section>
      </div>

      <Footer />
    </div>
  );
}

