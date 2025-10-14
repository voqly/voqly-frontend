# Voqly Frontend

A React + Vite frontend for Voqly with routing, Firebase auth (optional backend auth), Tailwind CSS, and a small fetch-based API client.

## Quick start

```bash
# Node 18+ is recommended
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production (outputs to dist/)
npm run build

# Preview the production build
npm run preview
```

## Prerequisites
- Node.js 18 or newer
- npm 9+ (or use pnpm/yarn if you prefer – scripts assume npm)

## Project structure
- `src/main.jsx`: App entry with `react-router-dom` routes and `AuthProvider`
- `src/context/AuthContext.jsx`: Firebase-based auth provider
- `src/lib/firebase.js`: Firebase initialization (reads VITE_ env vars)
- `src/lib/api.js`: Fetch wrapper that targets `VITE_API_BASE_URL`
- `src/lib/authService.js`: Switchable auth (Firebase or backend) via `VITE_AUTH_PROVIDER`
- `src/components/**`: UI components including protected-route `RequireAuth`
- `src/pages/**`: Routed pages
- `vite.config.js`: React plugin and `@` alias to `src/`
- `tailwind.config.js`: Tailwind config

## Environment variables
Create a `.env.local` (not committed) in the project root. All variables must be prefixed with `VITE_` for Vite to expose them to the client.

Minimum recommended vars:

```bash
# API base URL for backend calls
VITE_API_BASE_URL=http://localhost:4000

# Choose auth provider: "firebase" (default) or "backend"
# - firebase: uses Firebase client auth via AuthContext
# - backend: uses API endpoints in authService (requires working backend)
VITE_AUTH_PROVIDER=firebase

# Firebase config (required if using firebase auth)
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_APP_ID=your-app-id
VITE_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
```

Notes:
- Sensible demo fallbacks exist in code, but real auth needs valid values.
- When switching to `backend` auth, implement `/auth/login`, `/auth/register`, `/auth/logout`, `/auth/me`, `/auth/resend-verification` on your API, as used in `src/lib/authService.js`.

## Scripts
- `npm run dev`: Start Vite dev server on port 5173 (see `vite.config.js`)
- `npm run build`: Production build into `dist/`
- `npm run preview`: Preview the built app locally
- `npm run lint`: Run ESLint (see `eslint.config.js`)

## Routing
Defined in `src/main.jsx` using `react-router-dom`. The dashboard route is protected via `src/components/RequireAuth.jsx`.

## Styling
Tailwind CSS is configured. Refer to `tailwind.config.js` and `src/index.css` for base styles. Utility-first classes are used throughout components.

## Module alias
`@` resolves to `src/` (see `vite.config.js`). Example:
```js
import Header from '@/components/Header'
```

## Deployment
- Build with `npm run build` and deploy the `dist/` directory to your static host (e.g., Vercel, Netlify, S3+CloudFront).
- Ensure production env vars are set on your hosting platform (the `VITE_` vars must be available at build time).

## Troubleshooting
- Auth not working (Firebase): Verify all `VITE_FIREBASE_*` values and that the auth providers are enabled in Firebase console. Update authorized domains.
- API calls failing: Check `VITE_API_BASE_URL`, CORS settings, and that your backend sets/accepts cookies if using session auth (`credentials: 'include'`).
- Port conflicts: Change dev server port in `vite.config.js`.

## License
MIT
