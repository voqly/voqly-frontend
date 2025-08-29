import React from "react";
import Header from "../components/Header";
import SignInForm from "../components/SignInForm";

export default function SignInPage() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Header />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-[32rem] h-[32rem] bg-cyan-100 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-4xl font-bold leading-tight mb-4">
                Sign in to <span className="text-blue-600">voqly</span>
              </h1>
              <p className="text-gray-600 mb-6">
                Access your dashboard, track progress, and continue improving your speaking skills.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✅ Continue where you left off</li>
                <li>✅ Personalized drills and insights</li>
                <li>✅ Track streaks and milestones</li>
              </ul>
            </div>

            <div>
              <SignInForm standalone={false} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


