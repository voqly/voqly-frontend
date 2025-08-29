import React, { useState } from "react";
import Header from "../components/Header";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

function CheckIcon({ className = "", size = 6 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={`flex-none shrink-0 ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export default function PricingPage() {
  const [annual, setAnnual] = useState(true);

  const price = (monthly, annually) => (annual ? annually : monthly);

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Header />

      <section className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-center">
          Choose a plan that best fits your speaking goals
        </h1>

        <div className="mt-6 flex items-center justify-center gap-4 text-sm">
          <span className={!annual ? "text-blue-600 font-semibold" : "text-gray-600"}>Billed monthly</span>
          <button
            onClick={() => setAnnual((v) => !v)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${annual ? "bg-blue-600" : "bg-gray-300"}`}
            aria-label="Toggle billing cadence"
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${annual ? "translate-x-5" : "translate-x-1"}`}
            />
          </button>
          <span className={annual ? "text-blue-600 font-semibold" : "text-gray-600"}>Billed annually</span>
          <span className="ml-2 rounded-full bg-green-100 text-green-700 px-2 py-0.5 text-xs font-semibold">SAVE 40%</span>
        </div>

        <div className="mt-6 text-center text-sm">
          <span className="inline-flex items-center gap-2 text-blue-600 font-semibold">
            <span className="text-yellow-500">✦</span>
            See details on <a href="#" className="underline">how to get reimbursed by your employer</a>
            <span className="text-yellow-500">✦</span>
          </span>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Starter */}
          <Card className="rounded-2xl border border-gray-200 shadow-sm">
            <CardContent className="p-6 flex flex-col h-full">
              <div>
                <h3 className="text-xl font-extrabold">Starter</h3>
                <p className="text-3xl font-extrabold mt-2">$0</p>
              </div>
              <div className="mt-6">
                <Button className="w-full bg-white text-blue-700 border border-blue-400 hover:bg-blue-50">Get started</Button>
                <p className="text-center text-sm text-gray-700 mt-3 font-semibold">Just exploring</p>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-gray-800 flex-1">
                <li className="flex items-start gap-2 leading-6"><CheckIcon className="mt-1" size={6} />Up to 5 roleplays total</li>
                <li className="flex items-start gap-2 leading-6"><CheckIcon className="mt-1" size={6} />Live AI roleplays</li>
                <li className="flex items-start gap-2 leading-6"><CheckIcon className="mt-1" size={6} />Feedback on uploaded recordings</li>
                <li className="flex items-start gap-2 leading-6"><CheckIcon className="mt-1" size={6} />No credit card required</li>
              </ul>
            </CardContent>
          </Card>

          {/* Pro */}
          <Card className="rounded-2xl border border-gray-200 shadow-sm">
            <CardContent className="p-6 flex flex-col h-full">
              <div>
                <h3 className="text-xl font-extrabold">Pro</h3>
                <p className="text-3xl font-extrabold mt-2">${price(10, 8)}<span className="text-base font-semibold"> / month</span></p>
                <p className="text-xs text-gray-600">{annual ? "billed annually" : "billed monthly"}</p>
              </div>
              <div className="mt-6">
                <Button className="w-full">Subscribe now</Button>
                <p className="text-center text-sm text-gray-700 mt-3 font-semibold">Preparing for a high-stakes event</p>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-gray-800 flex-1">
                <li className="flex items-start gap-2 leading-6"><CheckIcon className="mt-1" size={6} />Up to 10 roleplays/week</li>
                <li className="flex items-start gap-2 leading-6"><CheckIcon className="mt-1" size={6} />Live AI roleplays</li>
                <li className="flex items-start gap-2 leading-6"><CheckIcon className="mt-1" size={6} />Feedback on uploaded recordings</li>
                <li className="flex items-start gap-2 leading-6"><CheckIcon className="mt-1" size={6} />Access to exclusive user community</li>
              </ul>
            </CardContent>
          </Card>

          {/* Advanced - recommended */}
          <Card className="rounded-2xl border-2 border-blue-400 shadow-xl">
            <CardContent className="p-6 flex flex-col h-full">
              <div>
                <div className="text-[10px] font-bold uppercase text-white inline-block bg-gradient-to-r from-cyan-500 to-blue-600 px-2 py-1 rounded">Recommended</div>
                <h3 className="text-xl font-extrabold mt-2">Advanced</h3>
                <p className="text-3xl font-extrabold mt-2">${price(25, 20)}<span className="text-base font-semibold"> / month</span></p>
                <p className="text-xs text-gray-600">{annual ? "billed annually" : "billed monthly"}</p>
              </div>
              <div className="mt-6">
                <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500">Subscribe now</Button>
                <p className="text-center text-sm text-gray-700 mt-3 font-semibold">Ongoing performance improvement</p>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-gray-800 flex-1">
                <li className="flex items-start gap-2 leading-6"><CheckIcon className="mt-1" size={6} />Unlimited roleplays</li>
                <li className="flex items-start gap-2 leading-6"><CheckIcon className="mt-1" size={6} />Everything in Pro</li>
                <li className="flex items-start gap-2 leading-6"><CheckIcon className="mt-1" size={6} />Data is excluded from AI training</li>
                <li className="flex items-start gap-2 leading-6"><CheckIcon className="mt-1" size={6} />Instant data deletion</li>
                <li className="flex items-start gap-2 leading-6"><CheckIcon className="mt-1" size={6} />Reimbursable as a learning benefit</li>
              </ul>
            </CardContent>
          </Card>

          {/* Team & Enterprise */}
          <Card className="rounded-2xl border border-gray-200 shadow-sm">
            <CardContent className="p-6 flex flex-col h-full">
              <div>
                <h3 className="text-xl font-extrabold">Team & Enterprise</h3>
                <p className="text-base text-gray-700 mt-1">Let's talk</p>
              </div>
              <div className="mt-6">
                <Button className="w-full bg-white text-blue-700 border border-blue-400 hover:bg-blue-50">Contact Sales</Button>
                <p className="text-center text-sm text-gray-700 mt-3 font-semibold">For organizations and coaching companies</p>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-gray-800 flex-1">
                <li className="flex items-start gap-2 leading-6"><CheckIcon className="mt-1" size={6} />Customizable around your rubric, ICP, & methodology</li>
                <li className="flex items-start gap-2 leading-6"><CheckIcon className="mt-1" size={6} />Team dashboards, roleplay assignment, advanced user management</li>
                <li className="flex items-start gap-2 leading-6"><CheckIcon className="mt-1" size={6} />SSO, SCIM, & data retention</li>
                <li className="flex items-start gap-2 leading-6"><CheckIcon className="mt-1" size={6} />LMS, CMS, & HRIS integrations</li>
                <li className="flex items-start gap-2 leading-6"><CheckIcon className="mt-1" size={6} />SOC2 Type 2 certified</li>
                <li className="flex items-start gap-2 leading-6"><CheckIcon className="mt-1" size={6} />Dedicated account manager</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}


