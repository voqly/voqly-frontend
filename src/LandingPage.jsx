import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import Header, { VoqlyLogo } from "./components/Header";
import Footer from "./components/Footer";
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
<section className="px-6 py-16 md:py-32 text-center bg-gradient-to-r from-blue-50 to-blue-100">
  <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
    Your AI-Powered <span className="text-blue-600">Speaking Coach</span>
  </h1>
  <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-2xl mx-auto">
    Voqly helps you speak with confidence. AI-driven insights, real-time feedback, and gamified practice make public speaking easier than ever.
  </p>
  <Button size="lg">Start Practicing Now</Button>

{/* Full-width Hero Image */}
<div className="w-screen h-[50vh] md:h-[80vh] mt-8 md:mt-12 -ml-[50vw] left-1/2 relative">
  <img
    src="/images/hero-demo.png"
    alt="voqly hero"
    className="w-screen h-full object-contain"
  />
</div>

</section>




      {/* Trusted By */}
      <section className="py-10 px-6 bg-white">
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
        <h2 className="text-3xl font-bold text-center mb-10">Why voqly?</h2>
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
      <section id="how" className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">How it works</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 lg:gap-8">
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
          ].map(({ step, title, desc, bullets, Icon, AccentIcon }, i) => (
            <motion.div
              key={i}
              className="group bg-white rounded-2xl p-6 lg:p-7 shadow-sm border border-gray-100 flex flex-col min-h-[280px] transition hover:shadow-md"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 flex items-center justify-center ring-1 ring-blue-200">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">Step {step}</span>
              </div>
              <h3 className="text-xl font-semibold mt-3">{title}</h3>
              <p className="text-gray-600 mt-1">{desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {bullets.map((b, bi) => (
                  <li key={bi} className="flex items-start gap-2">
                    <AccentIcon className="h-4 w-4 text-blue-500 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Demo Video */}
      <section id="demo" className="py-16 md:py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Watch voqly in Action</h2>
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
              q: "Is voqly really free?",
              a: "Yes, we offer a completely free tier to get you started."
            },
            {
              q: "Do I need to install anything?",
              a: "Nope! voqly works right in your browser."
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

