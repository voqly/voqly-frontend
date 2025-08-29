import React, { useState } from "react";
import Header from "../components/Header";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { auth } from "../lib/firebase";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    if (!email) return setError("Email is required");
    if (password.length < 6) return setError("Password must be at least 6 characters");
    if (password !== confirm) return setError("Passwords do not match");
    setLoading(true);
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(cred.user);
      navigate("/verify-email");
    } catch (err) {
      setError("Could not create account. Try a different email.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Header />
      <div className="max-w-lg mx-auto px-6 py-16">
        <Card className="rounded-2xl border border-gray-200">
          <CardContent className="p-6">
            <h1 className="text-2xl font-semibold mb-1">Create your voqly account</h1>
            <p className="text-sm text-gray-600 mb-4">Start your journey in minutes.</p>
            {error ? (
              <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{error}</div>
            ) : null}
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input id="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-300" placeholder="you@example.com" />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input id="password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-300" placeholder="••••••••" />
              </div>
              <div>
                <label htmlFor="confirm" className="block text-sm font-medium text-gray-700 mb-1">Confirm password</label>
                <input id="confirm" type="password" value={confirm} onChange={(e)=>setConfirm(e.target.value)} className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-300" placeholder="••••••••" />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>{loading ? "Creating..." : "Create account"}</Button>
            </form>
            <p className="mt-4 text-center text-sm text-gray-600">Already have an account? <a href="/signin" className="text-blue-600 hover:text-blue-700">Sign in</a></p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


