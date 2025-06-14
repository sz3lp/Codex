# SaaS Scaffold

This repository contains a minimal SaaS scaffold with a Next.js frontend and a FastAPI backend.

- **frontend/** – Next.js application
- **backend/** – FastAPI application

Each directory has its own README with setup instructions. The backend exposes JWT auth endpoints and Stripe billing examples while the frontend demonstrates a prompt engine page built with Tailwind CSS.

## Quick start

1. Configure PostgreSQL and create `.env` files using the provided examples in `frontend` and `backend`.
2. Start the backend:

   ```bash
   cd backend
   uvicorn app.main:app --reload
   ```

3. Start the frontend:

   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```

Deploy the `frontend` directory to Vercel (set the project root to `frontend` when creating the project) and host the FastAPI backend separately.
The included `vercel.json` rewrites `/api/*` calls to `localhost:8000` for local development.
g52nvo-codex/create-saas-scaffold-with-next.js-and-fastapi

The frontend includes a sample `/prompt` page demonstrating Tailwind CSS and
client-server interaction.
======

main