// Lightweight API client using fetch with credentials
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000";

function buildUrl(path) {
  if (!path.startsWith("/")) return `${apiBaseUrl}/${path}`;
  return `${apiBaseUrl}${path}`;
}

export async function apiFetch(path, options = {}) {
  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };

  const response = await fetch(buildUrl(path), {
    method: options.method || "GET",
    headers,
    credentials: "include",
    body: options.body,
    signal: options.signal,
  });

  const contentType = response.headers.get("content-type") || "";
  const isJson = contentType.includes("application/json");
  const data = isJson ? await response.json().catch(() => null) : await response.text().catch(() => null);

  if (!response.ok) {
    const err = new Error((isJson && data && data.message) || `Request failed with status ${response.status}`);
    err.status = response.status;
    err.data = data;
    throw err;
  }

  return data;
}

export function get(path) {
  return apiFetch(path, { method: "GET" });
}

export function post(path, body) {
  return apiFetch(path, { method: "POST", body: JSON.stringify(body) });
}


