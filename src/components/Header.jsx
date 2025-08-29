import React from "react";
import { Link, useNavigate } from "react-router-dom";

export function VoqlyLogo({ className = "" }) {
  return (
    <svg className={className} width="30" height="30" viewBox="0 0 100 100" fill="none">
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
}

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white shadow-sm border-b border-gray-200">
      <Link to="/" className="flex items-center space-x-2 hover:opacity-90 transition-opacity" aria-label="Go to homepage">
        <VoqlyLogo />
        <span className="text-2xl font-semibold text-blue-600">voqly</span>
      </Link>

      <nav className="flex items-center text-blue-600 font-medium absolute left-1/2 transform -translate-x-1/2">
        <div className="relative group" style={{marginRight: '120px'}}>
          <Link to="#" className="hover:text-blue-700 transition-colors duration-200 whitespace-nowrap">For Business</Link>
          <div className="hidden group-hover:block absolute left-0 top-full mt-1 z-50 opacity-100">
            <div className="relative">
              <div className="absolute left-4 -top-1.5 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[5px] border-b-white"></div>
              <div className="w-max rounded-xl shadow-xl p-2 bg-white select-none cursor-default caret-white opacity-100" style={{ backgroundColor: '#ffffff', opacity: 1 }}>
                <ul className="list-none m-0 p-0 space-y-[15px] text-black">
                  <li>
                    <Link to="#gtm" className="block text-sm leading-tight text-black hover:text-blue-600 hover:bg-gray-50 rounded px-3 py-1 cursor-pointer select-none whitespace-nowrap">GTM Enablement</Link>
                  </li>
                  <li>
                    <Link to="#learning" className="block text-sm leading-tight text-black hover:text-blue-600 hover:bg-gray-50 rounded px-3 py-1 cursor-pointer select-none whitespace-nowrap">Learning & Development</Link>
                  </li>
                  <li>
                    <Link to="#partner" className="block text-sm leading-tight text-black hover:text-blue-600 hover:bg-gray-50 rounded px-3 py-1 cursor-pointer select-none whitespace-nowrap">Partner Enablement</Link>
                  </li>
                  <li>
                    <Link to="#corporate" className="block text-sm leading-tight text-black hover:text-blue-600 hover:bg-gray-50 rounded px-3 py-1 cursor-pointer select-none whitespace-nowrap">Corporate Communications</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Link to="/pricing" className="hover:text-blue-700 transition-colors duration-200" style={{marginRight: '120px'}}>Pricing</Link>
        <div className="relative group" style={{marginRight: '120px'}}>
          <Link to="/about/team" className="hover:text-blue-700 transition-colors duration-200 whitespace-nowrap">About</Link>
          <div className="hidden group-hover:block absolute left-0 top-full mt-1 z-50 opacity-100">
            <div className="relative">
              <div className="absolute left-4 -top-1.5 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[5px] border-b-white"></div>
              <div className="w-max rounded-xl shadow-xl p-2 bg-white select-none cursor-default caret-white opacity-100" style={{ backgroundColor: '#ffffff', opacity: 1 }}>
                <ul className="list-none m-0 p-0 space-y-[15px] text-black">
                  <li>
                    <Link to="/about/team" className="block text-sm leading-tight text-black hover:text-blue-600 hover:bg-gray-50 rounded px-3 py-1 cursor-pointer select-none whitespace-nowrap">Our team</Link>
                  </li>
                  <li>
                    <Link to="/about/careers" className="block text-sm leading-tight text-black hover:text-blue-600 hover:bg-gray-50 rounded px-3 py-1 cursor-pointer select-none whitespace-nowrap">Careers</Link>
                  </li>
                  <li>
                    <Link to="/about/ai-roleplays" className="block text-sm leading-tight text-black hover:text-blue-600 hover:bg-gray-50 rounded px-3 py-1 cursor-pointer select-none whitespace-nowrap">AI Roleplays</Link>
                  </li>
                  <li>
                    <Link to="/about/faq" className="block text-sm leading-tight text-black hover:text-blue-600 hover:bg-gray-50 rounded px-3 py-1 cursor-pointer select-none whitespace-nowrap">FAQ</Link>
                  </li>
                  <li>
                    <Link to="/about/webinars" className="block text-sm leading-tight text-black hover:text-blue-600 hover:bg-gray-50 rounded px-3 py-1 cursor-pointer select-none whitespace-nowrap">Webinars</Link>
                  </li>
                  <li>
                    <Link to="/about/announcements" className="block text-sm leading-tight text-black hover:text-blue-600 hover:bg-gray-50 rounded px-3 py-1 cursor-pointer select-none whitespace-nowrap">Feature Announcements</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="relative group" style={{marginRight: '120px'}}>
          <Link to="/use-cases/conversation-roleplays" className="hover:text-blue-700 transition-colors duration-200 whitespace-nowrap">Use Cases</Link>
          <div className="hidden group-hover:block absolute left-0 top-full mt-1 z-50 opacity-100">
            <div className="relative">
              <div className="absolute left-4 -top-1.5 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[5px] border-b-white"></div>
              <div className="w-max rounded-xl shadow-xl p-2 bg-white select-none cursor-default caret-white opacity-100" style={{ backgroundColor: '#ffffff', opacity: 1 }}>
                <ul className="list-none m-0 p-0 space-y-[15px] text-black">
                  <li>
                    <Link to="/use-cases/conversation-roleplays" className="block text-sm leading-tight text-black hover:text-blue-600 hover:bg-gray-50 rounded px-3 py-1 cursor-pointer select-none whitespace-nowrap">Conversation Roleplays</Link>
                  </li>
                  <li>
                    <Link to="/use-cases/interview-preparation" className="block text-sm leading-tight text-black hover:text-blue-600 hover:bg-gray-50 rounded px-3 py-1 cursor-pointer select-none whitespace-nowrap">Interview Preparation</Link>
                  </li>
                  <li>
                    <Link to="/use-cases/presentation-practice" className="block text-sm leading-tight text-black hover:text-blue-600 hover:bg-gray-50 rounded px-3 py-1 cursor-pointer select-none whitespace-nowrap">Presentation Practice</Link>
                  </li>
                  <li>
                    <Link to="/use-cases/online-meetings" className="block text-sm leading-tight text-black hover:text-blue-600 hover:bg-gray-50 rounded px-3 py-1 cursor-pointer select-none whitespace-nowrap">Online Meetings</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="relative group">
          <Link to="/resources/blog" className="hover:text-blue-700 transition-colors duration-200 whitespace-nowrap">Resources</Link>
          <div className="hidden group-hover:block absolute left-0 top-full mt-1 z-50 opacity-100">
            <div className="relative">
              <div className="absolute left-4 -top-1.5 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[5px] border-b-white"></div>
              <div className="w-max rounded-xl shadow-xl p-2 bg-white select-none cursor-default caret-white opacity-100" style={{ backgroundColor: '#ffffff', opacity: 1 }}>
                <ul className="list-none m-0 p-0 space-y-[15px] text-black">
                  <li>
                    <Link to="/resources/blog" className="block text-sm leading-tight text-black hover:text-blue-600 hover:bg-gray-50 rounded px-3 py-1 cursor-pointer select-none whitespace-nowrap">Blog</Link>
                  </li>
                  <li>
                    <Link to="/resources/partnership" className="block text-sm leading-tight text-black hover:text-blue-600 hover:bg-gray-50 rounded px-3 py-1 cursor-pointer select-none whitespace-nowrap">Our Partnership</Link>
                  </li>
                  <li>
                    <Link to="/resources/press" className="block text-sm leading-tight text-black hover:text-blue-600 hover:bg-gray-50 rounded px-3 py-1 cursor-pointer select-none whitespace-nowrap">Press</Link>
                  </li>
                  <li>
                    <Link to="/resources/help-center" className="block text-sm leading-tight text-black hover:text-blue-600 hover:bg-gray-50 rounded px-3 py-1 cursor-pointer select-none whitespace-nowrap">Help Center</Link>
                  </li>
                  <li>
                    <Link to="/resources/sample-speeches" className="block text-sm leading-tight text-black hover:text-blue-600 hover:bg-gray-50 rounded px-3 py-1 cursor-pointer select-none whitespace-nowrap">Sample Speeches</Link>
                  </li>
                  <li>
                    <Link to="/resources/trust-center" className="block text-sm leading-tight text-black hover:text-blue-600 hover:bg-gray-50 rounded px-3 py-1 cursor-pointer select-none whitespace-nowrap">Trust Center</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex items-center">
        <Link to="/signin" className="text-[#8b5cf6] font-medium hover:text-[#7c3aed] transition-colors duration-200" style={{marginRight: '20px'}}>Sign In</Link>
        <button onClick={() => navigate('/signup')} className="bg-gradient-to-r from-[#3b82f6] to-[#6366f1] text-white px-6 py-2.5 rounded-lg font-semibold shadow-sm hover:opacity-90 transition-opacity duration-200" style={{marginRight: '20px'}}>
          Get Voqly
        </button>
        <div className="relative">
          <button className="bg-white border border-[#6366f1] px-6 py-2.5 rounded-lg font-semibold transition-all duration-200">
            <a href="tel:9860246306" className="bg-gradient-to-r from-[#3b82f6] to-[#6366f1] bg-clip-text text-transparent">Talk to Sales</a>
          </button>
          <div className="absolute right-0 top-full mt-2 w-64 rounded-xl bg-white shadow-lg border border-gray-200 p-3 hidden group-hover:block">
            <div className="text-xs uppercase text-gray-500 mb-2">Contact Sales</div>
            <a href="tel:9860246306" className="flex flex-col rounded-lg px-3 py-2 hover:bg-gray-50">
              <span className="font-medium text-gray-900">Vatika Bansal</span>
              <span className="text-sm text-gray-600">9860246306</span>
            </a>
            <a href="tel:9945754591" className="mt-1 flex flex-col rounded-lg px-3 py-2 hover:bg-gray-50">
              <span className="font-medium text-gray-900">Shivank Goyal</span>
              <span className="text-sm text-gray-600">9945754591</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}


