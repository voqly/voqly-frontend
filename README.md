# Voqly Frontend

A React + Vite frontend for Voqly with routing, Firebase auth (optional backend auth), Tailwind CSS, and a small fetch-based API client.

## Quick start

```bash
# Node 20.19+ or 22.12+ is required (Vite 7 requirement)
# Recommended: Node 22.19.0
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production (outputs to dist/)
npm run build

# Preview the production build
npm run preview
```

## Prerequisites
- Node.js 20.19+ or 22.12+ (recommended: 22.19.0)
- npm 9+

If you use `nvm`:
```bash
nvm install 22.19.0
nvm use 22.19.0
```

If you use `n` (requires sudo once on macOS):
```bash
npm i -g n
sudo n 22.19.0
```

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
Create a `.env.local` in the project root. Variables must be prefixed with `VITE_`.

```bash
VITE_API_BASE_URL=http://localhost:4000
VITE_AUTH_PROVIDER=firebase
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_APP_ID=your-app-id
VITE_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
```

## Local domain (app.localhost)
- In development, clicking Sign In/Sign Up will redirect to `http://app.localhost:<port>/signin` and `/signup` automatically when running on localhost.
- You can also start Vite bound to this host:
```bash
npm run dev -- --host app.localhost --port 5173 --strictPort
# open http://app.localhost:5173
```

## Scripts
- `npm run dev`: Start Vite dev server on port 5173
- `npm run build`: Production build into `dist/`
- `npm run preview`: Preview the built app locally
- `npm run lint`: Run ESLint

## Routing
Defined in `src/main.jsx` using `react-router-dom`. The dashboard route is protected via `src/components/RequireAuth.jsx`.

## Styling
Tailwind CSS is configured. Refer to `tailwind.config.js` and `src/index.css`.

## Module alias
`@` resolves to `src/` (see `vite.config.js`). Example:
```js
import Header from '@/components/Header'
```

## Deployment
- Build with `npm run build` and deploy the `dist/` directory.
- Ensure production env vars are provided at build time.

## Troubleshooting
- Dev server not starting with Vite 7 and Node 20.9.0:
  - Upgrade Node to 20.19+ or 22.12+ (`nvm install 22.19.0 && nvm use 22.19.0`)
- Cannot reach http://localhost:5173 while server runs:
  - Ensure it’s bound to the right host: `npm run dev -- --host 0.0.0.0 --port 5173 --strictPort`
  - Try `http://127.0.0.1:5173` and `http://app.localhost:5173`
- Port in use:
  - `lsof -tiTCP:5173 -sTCP:LISTEN | xargs -r kill -9`
- Xcode license blocks git:
  - `sudo xcodebuild -license accept`

## License
MIT
