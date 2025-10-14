import React from "react";
import Header from "../components/Header";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { auth, googleProvider, microsoftProvider } from "../lib/firebase";
import { signInWithPopup } from "firebase/auth";
import { authService } from "../lib/authService";
import { useNavigate, Link } from "react-router-dom";

export default function SignUpPage() {
  const navigate = useNavigate();

  async function handleGoogle() {
    if (authService.isBackend()) {
      const base = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000";
      window.location.href = `${base}/auth/google`;
      return;
    }
    await signInWithPopup(auth, googleProvider);
    navigate("/");
  }

  async function handleMicrosoft() {
    if (authService.isBackend()) {
      const base = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000";
      window.location.href = `${base}/auth/microsoft`;
      return;
    }
    await signInWithPopup(auth, microsoftProvider);
    navigate("/");
  }

  return (
    <div className="bg-white text-gray-900 min-h-screen app-theme">
      <Header />
      <div className="max-w-lg mx-auto px-6 py-16">
        <Card className="rounded-2xl border border-gray-200">
          <CardContent className="p-6">
            <h1 className="text-2xl font-semibold mb-6">Try <span className="text-blue-600">voqly</span> for free</h1>
            <div className="grid gap-3">
              <button
                type="button"
                onClick={handleGoogle}
                className="w-full h-11 inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-3 text-sm font-medium text-gray-800 hover:bg-gray-50 transition"
              >
                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="" className="h-4 w-4" />
                Continue with Google
              </button>
              <button
                type="button"
                onClick={handleMicrosoft}
                className="w-full h-11 inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-3 text-sm font-medium text-gray-800 hover:bg-gray-50 transition"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="" className="h-4 w-4" />
                Continue with Microsoft
              </button>
              <button
                type="button"
                onClick={() => navigate('/signup/email')}
                className="w-full h-11 inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-3 text-sm font-medium text-gray-800 hover:bg-gray-50 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16v16H4z"/><path d="M22 6l-10 7L2 6"/></svg>
                Continue with work email
              </button>
            </div>

            <p className="mt-6 text-center text-sm text-gray-600">
              Already have an account? <Link to="/signin" className="text-blue-600 hover:text-blue-700">Sign in</Link>
            </p>
            <p className="mt-4 text-[11px] text-gray-500 text-center">
              By signing up, you agree to our <Link to="/terms" className="underline">Terms of Service</Link>, <Link to="/privacy" className="underline">Privacy Policy</Link> and <Link to="/cookies" className="underline">Cookie Preferences</Link>.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


