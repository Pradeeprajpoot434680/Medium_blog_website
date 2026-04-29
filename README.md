# Medium Blog Website

A full‑stack Medium-like blogging platform built with:

- **Frontend:** React + TypeScript + Vite, React Router, Axios, Tailwind CSS
- **Backend:** Cloudflare Workers using **Hono** (TypeScript), Prisma (Edge) + Prisma Accelerate
- **Validation / Types:** Shared package `@p434680/medium-comman` (used by both frontend and backend)

---

## Repository structure

- `frontend/` — React (Vite) client application
- `backend/` — Hono API deployed as a Cloudflare Worker, Prisma (edge) for DB
- `common/` — shared code (types / zod schemas) consumed as `@p434680/medium-comman`

---

## Features (current API)

### Authentication (Backend)
Implemented under `backend/src/routes/user.ts`:

- `POST /api/v1/user/signup`
  - Validates request body using `signupInputs` from `@p434680/medium-comman`
  - Creates a user in DB
  - Returns a JWT: `{ jwt: "..." }`

- `POST /api/v1/user/signin`
  - Finds user by `email` and `password`
  - Returns a JWT: `{ jwt: "..." }`

### Blog routes
Blog APIs are mounted via `backend/src/index.ts` using `blogRoute` from `backend/src/routes/blog.ts`.

> Note: There is commented-out JWT middleware code in `backend/src/index.ts`, which indicates blog endpoints may be intended to be protected, but it is currently not enabled in the shown code.

---

## Tech stack

### Frontend (`frontend/package.json`)
- React 18
- React Router DOM
- Axios
- TailwindCSS
- TypeScript + Vite

### Backend (`backend/package.json`)
- Hono (Cloudflare Workers)
- Prisma (Edge) + Accelerate extension
- JWT signing via `hono/jwt`
- Shared package: `@p434680/medium-comman`

---

## Getting started (local development)

### 1) Clone the repo

```bash
git clone https://github.com/Pradeeprajpoot434680/Medium_blog_website.git
cd Medium_blog_website
```

---

## Backend setup (Cloudflare Worker)

The backend runs using Wrangler:

### Install dependencies
```bash
cd backend
npm install
```

### Environment variables
Your Worker expects these bindings (see `backend/src/index.ts`):

- `DATABASE_URL`
- `JWT_SECRET`

They are currently defined in `backend/wrangler.toml` under `[vars]`.

**Important security note:** your current `wrangler.toml` contains a `DATABASE_URL` and `JWT_SECRET` value committed in the repo. In real projects you should move secrets to Cloudflare dashboard secrets or `.dev.vars` and avoid committing them.

### Run backend locally
```bash
npm run dev
```

### Deploy backend
```bash
npm run deploy
```

---

## Frontend setup (React app)

### Install dependencies
```bash
cd frontend
npm install
```

### Run frontend locally
```bash
npm run dev
```

### Build frontend
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```

---

## API base path

Backend routes are mounted in `backend/src/index.ts`:

- User routes: `/api/v1/user/*`
- Blog routes: `/api/v1/blog/*`

Example endpoints:
- `POST /api/v1/user/signup`
- `POST /api/v1/user/signin`

---

## Notes / Observations

- Backend uses **PrismaClient (edge)** with `withAccelerate()` for Cloudflare-friendly DB access.
- Request validation for signup uses `signupInputs.safeParse(...)` from the shared package `@p434680/medium-comman`.
- CORS is enabled (backend uses `app.use(cors())` and also `userRoute.use(cors())`).

---

## License

Add a license if you plan to make the project public and reusable.
