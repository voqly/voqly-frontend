import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Twitter, Youtube, BadgeDollarSign, MessageCircleMore, Tag } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-200 bg-gradient-to-br from-[#faf5ff] via-[#f7f2ff] to-[#f3efff]">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-16" style={{margin: '60px'}}>
        <div>
          <div className="text-[11px] font-bold uppercase tracking-widest text-indigo-700 mb-3">For Business</div>
          <ul className="space-y-2.5 text-gray-800/90">
            <li><Link to="/business/gtm-enablement" className="hover:text-blue-700">GTM Enablement</Link></li>
            <li><Link to="/business/learning-development" className="hover:text-blue-700">Learning & Development</Link></li>
            <li><Link to="/business/partner-enablement" className="hover:text-blue-700">Partner Enablement</Link></li>
            <li><Link to="/business/corporate-communications" className="hover:text-blue-700">Corporate Communications</Link></li>
            <li><a href="#" className="hover:text-blue-700">Leadership</a></li>
            <li><a href="#" className="hover:text-blue-700">Engineering</a></li>
          </ul>
        </div>

        <div>
          <div className="text-[11px] font-bold uppercase tracking-widest text-indigo-700 mb-3">About</div>
          <ul className="space-y-2.5 text-gray-800/90">
            <li><Link to="/about/team" className="hover:text-blue-700">Our Team</Link></li>
            <li><Link to="/about/careers" className="hover:text-blue-700">Careers</Link></li>
            <li><Link to="/about/ai-roleplays" className="hover:text-blue-700">AI Roleplays</Link></li>
            <li><Link to="/about/faq" className="hover:text-blue-700">FAQ</Link></li>
            <li><Link to="/about/webinars" className="hover:text-blue-700">Webinars</Link></li>
            <li><a href="#" className="hover:text-blue-700">Status</a></li>
            <li><Link to="/about/announcements" className="hover:text-blue-700">Feature Announcements</Link></li>
            <li><a href="#" className="hover:text-blue-700">Coach Directory</a></li>
            <li><a href="#" className="hover:text-blue-700">Glossary</a></li>
          </ul>
        </div>

        <div>
          <div className="text-[11px] font-bold uppercase tracking-widest text-indigo-700 mb-3">Use Cases</div>
          <ul className="space-y-2.5 text-gray-800/90">
            <li><Link to="/use-cases/conversation-roleplays" className="hover:text-blue-700">Conversation Roleplays</Link></li>
            <li><Link to="/use-cases/interview-preparation" className="hover:text-blue-700">Interview Preparation</Link></li>
            <li><Link to="/use-cases/presentation-practice" className="hover:text-blue-700">Presentation Practice</Link></li>
            <li><Link to="/use-cases/online-meetings" className="hover:text-blue-700">Online Meetings</Link></li>
            <li><a href="#" className="hover:text-blue-700">Speech Coaches</a></li>
          </ul>
        </div>

        <div>
          <div>
            <div className="text-[11px] font-bold uppercase tracking-widest text-indigo-700 mb-3">Resources</div>
            <ul className="space-y-2.5 text-gray-800/90">
              <li><Link to="/resources/blog" className="hover:text-blue-700">Blog</Link></li>
              <li><Link to="/resources/partnership" className="hover:text-blue-700">Our Partnerships</Link></li>
              <li><Link to="/resources/press" className="hover:text-blue-700">Press</Link></li>
              <li><Link to="/resources/help-center" className="hover:text-blue-700">Help Center</Link></li>
              <li><Link to="/resources/sample-speeches" className="hover:text-blue-700">Sample Speeches</Link></li>
              <li><Link to="/resources/trust-center" className="hover:text-blue-700">Trust Center</Link></li>
              <li><a href="#" className="hover:text-blue-700">Courses</a></li>
              <li><a href="#" className="hover:text-blue-700">Video Tutorials</a></li>
            </ul>
          </div>
        </div>

        {/* Right rail CTAs & Social */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-3">
            <a href="https://www.linkedin.com/company/voqly" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 rounded-full bg-white/70 backdrop-blur  shadow-sm hover:shadow transition hover:scale-105" style={{ margin: "10px" }}>
              <Linkedin className="h-5 w-5 text-[#0A66C2]"/>
            </a>
            <a href="https://x.com/voqly" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="p-2 rounded-full bg-white/70 backdrop-blur  shadow-sm hover:shadow transition hover:scale-105" style={{ margin: "10px" }}>
              <Twitter className="h-5 w-5 text-[#000000]"/>
            </a>
            <a href="https://www.youtube.com/@voqly" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="p-2 rounded-full bg-white/70 backdrop-blur  shadow-sm hover:shadow transition hover:scale-105" style={{ margin: "10px" }}>
              <Youtube className="h-5 w-5 text-[#FF0000]"/>
            </a>
          </div>
          <div className="grid gap-3">
            <Link to="/pricing" className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur  px-4 py-2.5 shadow-sm hover:shadow transition" style={{ marginBottom: "10px" }}>
              <Tag className="h-4 w-4 text-indigo-700"/> See pricing plans
            </Link>
            <a href="tel:9860246306" className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur  px-4 py-2.5 shadow-sm hover:shadow transition" style={{ marginBottom: "10px" }}>
              <BadgeDollarSign className="h-4 w-4 text-indigo-700"/> Talk to Sales
            </a>
            <a href="https://discord.gg/voqly" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur  px-4 py-2.5 shadow-sm hover:shadow transition" style={{ marginBottom: "10px" }}>
              <MessageCircleMore className="h-4 w-4 text-indigo-700"/> Join our community
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-indigo-100/70">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between text-sm text-gray-700 gap-3">
          <div>© {year} Voqly, Inc. ❤️</div>
          <ul className="grid grid-flow-col auto-cols-max gap-[48px] list-none m-0 p-0 items-center">
            <li><Link to="/contact" className="hover:text-blue-700 inline-block">Contact Us</Link></li>
            <li><Link to="/privacy" className="hover:text-blue-700 inline-block">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-blue-700 inline-block">Terms of Service</Link></li>
            <li><Link to="/cookies" className="hover:text-blue-700 inline-block">Cookie Preferences</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}


