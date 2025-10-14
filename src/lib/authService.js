import { get, post } from "./api";

const BACKEND_AUTH = (import.meta.env.VITE_AUTH_PROVIDER || "firebase").toLowerCase() === "backend";

export const authService = {
  isBackend() {
    return BACKEND_AUTH;
  },

  async login({ email, password }) {
    return post("/auth/login", { email, password });
  },

  async register({ email, password }) {
    return post("/auth/register", { email, password });
  },

  async logout() {
    return post("/auth/logout", {});
  },

  async me() {
    return get("/auth/me");
  },

  async resendVerification() {
    return post("/auth/resend-verification", {});
  },
};


