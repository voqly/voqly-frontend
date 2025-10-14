import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import LandingPage from './LandingPage.jsx'
import SignInPage from './pages/SignIn.jsx'
import SignUpPage from './pages/SignUp.jsx'
import SignUpEmail from './pages/SignUpEmail.jsx'
import ResetPassword from './pages/ResetPassword.jsx'
import VerifyEmail from './pages/VerifyEmail.jsx'
import Dashboard from './pages/Dashboard.jsx'
import PricingPage from './pages/Pricing.jsx'
import LearnMore from './pages/LearnMore.jsx'
import BusinessGTM from './pages/subpages/BusinessGTM.jsx'
import LearningDevelopment from './pages/subpages/LearningDevelopment.jsx'
import PartnerEnablement from './pages/subpages/PartnerEnablement.jsx'
import CorporateComms from './pages/subpages/CorporateComms.jsx'
import AboutTeam from './pages/subpages/AboutTeam.jsx'
import Careers from './pages/subpages/Careers.jsx'
import AIRoleplays from './pages/subpages/AIRoleplays.jsx'
import FAQ from './pages/subpages/FAQ.jsx'
import Webinars from './pages/subpages/Webinars.jsx'
import FeatureAnnouncements from './pages/subpages/FeatureAnnouncements.jsx'
import UseCasesConversation from './pages/subpages/UseCasesConversation.jsx'
import UseCasesInterview from './pages/subpages/UseCasesInterview.jsx'
import UseCasesPresentation from './pages/subpages/UseCasesPresentation.jsx'
import UseCasesMeetings from './pages/subpages/UseCasesMeetings.jsx'
import Blog from './pages/subpages/Blog.jsx'
import Press from './pages/subpages/Press.jsx'
import HelpCenter from './pages/subpages/HelpCenter.jsx'
import SampleSpeeches from './pages/subpages/SampleSpeeches.jsx'
import TrustCenter from './pages/subpages/TrustCenter.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import RequireAuth from './components/RequireAuth.jsx'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'
import Cookies from './pages/Cookies.jsx'
import Contact from './pages/Contact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/learn-more" element={<LearnMore />} />
          {/* For Business */}
          <Route path="/business/gtm-enablement" element={<BusinessGTM />} />
          <Route path="/business/learning-development" element={<LearningDevelopment />} />
          <Route path="/business/partner-enablement" element={<PartnerEnablement />} />
          <Route path="/business/corporate-communications" element={<CorporateComms />} />
          {/* About */}
          <Route path="/about/team" element={<AboutTeam />} />
          <Route path="/about/careers" element={<Careers />} />
          <Route path="/about/ai-roleplays" element={<AIRoleplays />} />
          <Route path="/about/faq" element={<FAQ />} />
          <Route path="/about/webinars" element={<Webinars />} />
          <Route path="/about/announcements" element={<FeatureAnnouncements />} />
          {/* Use cases */}
          <Route path="/use-cases/conversation-roleplays" element={<UseCasesConversation />} />
          <Route path="/use-cases/interview-preparation" element={<UseCasesInterview />} />
          <Route path="/use-cases/presentation-practice" element={<UseCasesPresentation />} />
          <Route path="/use-cases/online-meetings" element={<UseCasesMeetings />} />
          {/* Resources */}
          <Route path="/resources/blog" element={<Blog />} />
          <Route path="/resources/partnership" element={<Press />} />
          <Route path="/resources/press" element={<Press />} />
          <Route path="/resources/help-center" element={<HelpCenter />} />
          <Route path="/resources/sample-speeches" element={<SampleSpeeches />} />
          <Route path="/resources/trust-center" element={<TrustCenter />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signup/email" element={<SignUpEmail />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
