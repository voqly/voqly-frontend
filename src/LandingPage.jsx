import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

// ✅ Define this outside the LandingPage component
const VoqlyLogo = () => (
  <svg width="30" height="30" viewBox="0 0 100 100" fill="none">
    <defs>
      <linearGradient id="voqlyGradient" x1="0" y1="0" x2="100" y2="100">
        <stop offset="0%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path d="M20 50 Q35 10, 50 50 T80 50" stroke="url(#voqlyGradient)" strokeWidth="10" fill="none" />
    <circle cx="20" cy="50" r="6" fill="url(#voqlyGradient)" />
    <circle cx="80" cy="50" r="6" fill="url(#voqlyGradient)" />
  </svg>
);

export default function LandingPage() {
  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 bg-white shadow-sm border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <VoqlyLogo />
          <span className="text-2xl font-semibold text-blue-600">voqly</span>
        </div>

        {/* Navigation - Centered */}
        <nav className="flex items-center text-blue-600 font-medium absolute left-1/2 transform -translate-x-1/2">
          <a href="#" className="hover:text-blue-700 transition-colors duration-200" style={{marginRight: '120px'}}>For Business</a>
          <a href="#" className="hover:text-blue-700 transition-colors duration-200" style={{marginRight: '120px'}}>Pricing</a>
          <a href="#" className="hover:text-blue-700 transition-colors duration-200" style={{marginRight: '120px'}}>About</a>
          <a href="#" className="hover:text-blue-700 transition-colors duration-200" style={{marginRight: '120px'}}>Use Cases</a>
          <a href="#" className="hover:text-blue-700 transition-colors duration-200">Resources</a>
        </nav>

        {/* CTAs */}
        <div className="flex items-center">
          <a href="/signin" className="text-[#8b5cf6] font-medium hover:text-[#7c3aed] transition-colors duration-200" style={{marginRight: '20px'}}>Sign In</a>
          <button className="bg-gradient-to-r from-[#3b82f6] to-[#6366f1] text-white px-6 py-2.5 rounded-lg font-semibold shadow-sm hover:opacity-90 transition-opacity duration-200" style={{marginRight: '20px'}}>
            Get Voqly
          </button>
          <button className="bg-white border border-[#6366f1] px-6 py-2.5 rounded-lg font-semibold transition-all duration-200" style={{marginRight: '20px'}}>
            <span className="bg-gradient-to-r from-[#3b82f6] to-[#6366f1] bg-clip-text text-transparent" >Talk to Sales</span>
          </button>
        </div>
      </header>

{/* Hero Section */}
<section className="px-6 py-20 md:py-32 text-center bg-gradient-to-r from-blue-50 to-blue-100">
  <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
    Your AI-Powered <span className="text-blue-600">Speaking Coach</span>
  </h1>
  <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-2xl mx-auto">
    voqly helps you speak with confidence. AI-driven insights, real-time feedback, and gamified practice make public speaking easier than ever.
  </p>
  <Button size="lg">Start Practicing Now</Button>

{/* Full-width Hero Image */}
<div className="w-screen h-[80vh] mt-12 -ml-[50vw] left-1/2 relative">
  <img
    src="/images/hero-demo.png"
    alt="voqly hero"
    className="w-screen h-full object-contain"
  />
</div>

</section>




      {/* Trusted By */}
      <section className="py-10 px-6 bg-white text-center">
        <h3 className="text-xl text-gray-500 mb-4">Trusted by professionals at</h3>
        <div className="flex flex-wrap justify-center items-center gap-8 grayscale opacity-80">
          {["google", "microsoft", "amazon", "adobe", "linkedin"].map((logo, i) => (
            <img
              key={i}
              src={`/images/logos/${logo}.png`}
              alt={logo}
              className="h-10 md:h-12"
            />
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Why voqly?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "AI Feedback",
              desc: "Get instant feedback on tone, filler words, eye contact, and more.",
              img: "/images/features/ai-feedback.png"
            },
            {
              title: "Gamified Practice",
              desc: "Level up your speaking skills with fun games and challenges.",
              img: "/images/features/gamified.png"
            },
            {
              title: "Progress Dashboard",
              desc: "Visualize your growth with charts, badges, and session history.",
              img: "/images/features/dashboard.png"
            },
          ].map((f, i) => (
            <Card key={i} className="overflow-hidden">
              <CardContent className="p-0">
                <img src={f.img} alt={f.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                  <p className="text-gray-600">{f.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">How it works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Record your speech or upload a video.",
            "Let our AI analyze your delivery.",
            "Get tips and drills tailored just for you."
          ].map((step, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-md"
              whileHover={{ scale: 1.05 }}>
              <h3 className="text-xl font-bold mb-2">Step {i + 1}</h3>
              <p>{step}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Demo Video */}
      <section id="demo" className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Watch voqly in Action</h2>
        <div className="max-w-4xl mx-auto">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Demo video"
              className="w-full h-96 rounded-xl shadow-lg"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Choose Your Plan</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Free",
              price: "$0",
              features: ["Basic AI Feedback", "Limited recordings", "Weekly report"]
            },
            {
              name: "Pro",
              price: "$9.99/mo",
              features: ["Unlimited recordings", "Advanced analytics", "Personalized coaching"]
            },
            {
              name: "Enterprise",
              price: "Contact Us",
              features: ["Team dashboard", "Admin controls", "Custom integrations"]
            },
          ].map((plan, i) => (
            <Card key={i} className="border border-gray-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-2xl text-blue-600 mb-4">{plan.price}</p>
                <ul className="space-y-2">
                  {plan.features.map((f, j) => <li key={j}>✅ {f}</li>)}
                </ul>
                <Button className="mt-6 w-full">Select</Button>
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

      {/* Footer */}
      <footer className="text-center py-10 text-sm text-gray-500">
        © {new Date().getFullYear()} voqly. All rights reserved.
      </footer>
    </div>
  );
}

