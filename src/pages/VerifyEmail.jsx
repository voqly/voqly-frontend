import React, { useState } from "react";
import Header from "../components/Header";
import { Button } from "../components/ui/button";
import { auth } from "../lib/firebase";
import { sendEmailVerification } from "firebase/auth";
import { authService } from "../lib/authService";
import { useNavigate } from "react-router-dom";

export default function VerifyEmail() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleResend() {
    setMessage("");
    setError("");
    try {
      if (authService.isBackend()) {
        await authService.resendVerification();
        setMessage("Verification email sent again. Please check your inbox.");
      } else if (auth.currentUser) {
        await sendEmailVerification(auth.currentUser);
        setMessage("Verification email sent again. Please check your inbox.");
      }
    } catch (e) {
      setError("Could not send verification email. Try again later.");
    }
  }

  async function handleRefresh() {
    setLoading(true);
    setMessage("");
    setError("");
    try {
      if (authService.isBackend()) {
        const me = await authService.me();
        if (me?.isVerified || me?.emailVerified) {
          navigate("/dashboard");
          return;
        }
        setError("Not verified yet. Please check your inbox.");
      } else if (auth.currentUser) {
        await auth.currentUser.reload();
        if (auth.currentUser.emailVerified) {
          navigate("/dashboard");
          return;
        } else {
          setError("Not verified yet. Please check your inbox.");
        }
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Header />
      <div className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-2">Verify your email</h1>
        <p className="text-gray-600 mb-6">We sent a verification link to your email. Click it to activate your account.</p>
        {message ? (<div className="mb-4 rounded-lg border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-700">{message}</div>) : null}
        {error ? (<div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{error}</div>) : null}
        <div className="flex gap-3">
          <Button onClick={handleResend}>Resend email</Button>
          <Button onClick={handleRefresh} disabled={loading}>{loading ? "Checking..." : "I've verified"}</Button>
        </div>
      </div>
    </div>
  );
}


