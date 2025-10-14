import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../lib/firebase";
import { onAuthStateChanged, signOut, sendEmailVerification } from "firebase/auth";
import { authService } from "../lib/authService";

const AuthContext = createContext({ user: null, loading: true });

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const useBackend = authService.isBackend();
    if (useBackend) {
      let active = true;
      (async () => {
        try {
          const me = await authService.me();
          if (active) setUser(me || null);
        } catch (e) {
          if (active) setUser(null);
        } finally {
          if (active) setLoading(false);
        }
      })();
      return () => {
        active = false;
      };
    }

    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  async function signOutUser() {
    if (authService.isBackend()) {
      await authService.logout();
      setUser(null);
      return;
    }
    await signOut(auth);
  }

  async function resendVerificationEmail() {
    if (authService.isBackend()) {
      await authService.resendVerification();
      return;
    }
    if (auth.currentUser) {
      await sendEmailVerification(auth.currentUser);
    }
  }

  const value = {
    user,
    loading,
    isVerified: authService.isBackend()
      ? Boolean(user?.emailVerified || user?.isVerified)
      : Boolean(user?.emailVerified),
    signOutUser,
    resendVerificationEmail,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}


