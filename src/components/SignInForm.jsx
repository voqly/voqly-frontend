import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { useNavigate, Link } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { auth, googleProvider, facebookProvider } from "../lib/firebase";

export default function SignInForm({ standalone = true }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const navigate = useNavigate();

  function validate() {
    const nextErrors = { email: "", password: "" };
    if (!email) {
      nextErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Enter a valid email";
    }
    if (!password) {
      nextErrors.password = "Password is required";
    } else if (password.length < 6) {
      nextErrors.password = "Must be at least 6 characters";
    }
    setErrors(nextErrors);
    return !nextErrors.email && !nextErrors.password;
  }

  function mapAuthErrorMessage(code) {
    switch (code) {
      case "auth/invalid-credential":
      case "auth/wrong-password":
      case "auth/user-not-found":
        return "Incorrect email or password.";
      case "auth/too-many-requests":
        return "Too many attempts. Please try again later.";
      case "auth/popup-closed-by-user":
        return "Sign-in was canceled.";
      default:
        return "Something went wrong. Please try again.";
    }
  }

  async function withPersistence() {
    await setPersistence(auth, rememberMe ? browserLocalPersistence : browserSessionPersistence);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setAuthError("");
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      await withPersistence();
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setAuthError(mapAuthErrorMessage(err?.code));
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleGoogleSignIn() {
    setAuthError("");
    setIsSubmitting(true);
    try {
      await withPersistence();
      await signInWithPopup(auth, googleProvider);
      navigate("/");
    } catch (err) {
      setAuthError(mapAuthErrorMessage(err?.code));
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleFacebookSignIn() {
    setAuthError("");
    setIsSubmitting(true);
    try {
      await withPersistence();
      await signInWithPopup(auth, facebookProvider);
      navigate("/");
    } catch (err) {
      setAuthError(mapAuthErrorMessage(err?.code));
    } finally {
      setIsSubmitting(false);
    }
  }

  const formContent = (
      <Card className="w-full max-w-sm rounded-2xl border border-gray-200 shadow-sm">
        <CardContent className="p-6">
          {authError ? (
            <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
              {authError}
            </div>
          ) : null}
          <div className="mb-5">
            <h2 className="text-xl font-semibold text-gray-900">Welcome back</h2>
            <p className="text-sm text-gray-500">Sign in to your account</p>
          </div>

          <div className="grid gap-2 mb-4">
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full h-10 inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 text-sm font-medium text-gray-800 hover:bg-gray-50 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" aria-hidden="true" className="shrink-0" style={{ width: "14px", height: "14px" }}><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.153,7.957,3.043l5.657-5.657C34.046,6.053,29.268,4,24,4C12.954,4,4,12.954,4,24c0,11.046,8.954,20,20,20c11.046,0,20-8.954,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,16.108,18.961,13,24,13c3.059,0,5.842,1.153,7.957,3.043l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.197l-6.19-5.238C29.181,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.275-7.949l-6.533,5.028C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.097,5.651c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.83,40.355,44,35,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
              Continue with Google
            </button>
            <button
              type="button"
              onClick={handleFacebookSignIn}
              className="w-full h-10 inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 text-sm font-medium text-gray-800 hover:bg-gray-50 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0" style={{ width: "14px", height: "14px" }} fill="#1877F2"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.095 10.125 24v-8.437H7.078V12.07h3.047V9.412c0-3.007 1.792-4.668 4.533-4.668 1.313 0 2.686.235 2.686.235v2.953h-1.513c-1.49 0-1.953.927-1.953 1.878v2.258h3.328l-.532 3.492h-2.796V24C19.612 23.095 24 18.1 24 12.073z"/></svg>
              Continue with Facebook
            </button>
          </div>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-200"></span>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-white px-2 text-gray-500">Or continue with email</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3 text-left">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full h-10 rounded-lg border px-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="you@example.com"
                autoComplete="email"
                autoFocus
              />
              {errors.email ? (
                <p className="text-xs text-red-600 mt-1">{errors.email}</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full h-10 rounded-lg border px-3 pr-10 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="••••••••"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute inset-y-0 right-2 flex items-center text-gray-500 hover:text-gray-700"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M2 2l20 20"/><path d="M10.58 10.58a2 2 0 102.83 2.83"/><path d="M16.88 16.88A10.94 10.94 0 0112 19c-5 0-9.27-3.11-11-7 1.04-2.36 2.86-4.35 5.07-5.6"/><path d="M17.94 6.06C20.14 7.31 21.96 9.3 23 11.67A12.44 12.44 0 0112 19"/></svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                  )}
                </button>
              </div>
              {errors.password ? (
                <p className="text-xs text-red-600 mt-1">{errors.password}</p>
              ) : null}
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="inline-flex items-center gap-2 select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 accent-blue-600"
                />
                Remember me
              </label>
              <button type="button" onClick={() => navigate('/reset-password')} className="text-blue-600 hover:text-blue-700">Forgot password?</button>
            </div>

            <div className="pt-1">
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Signing in..." : "Sign in"}
              </Button>
            </div>
          </form>

          <p className="mt-5 text-center text-sm text-gray-600">
            Don’t have an account? <Link to="/signup" className="text-blue-600 hover:text-blue-700 font-medium">Sign up</Link>
          </p>
        </CardContent>
      </Card>
  );

  if (!standalone) return formContent;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      {formContent}
    </div>
  );
}


