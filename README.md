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
