# Next.js Frontend

## Setup

```bash
npm install
npm run dev
```

Deploy by pushing the `frontend` directory to Vercel.

The app expects the FastAPI backend to be running separately and accessible via
`NEXT_PUBLIC_API_URL` defined in your `.env` file. During local development the
proxy in `vercel.json` can be used to forward API requests.

## Environment Variables
See `.env.example` for required variables.

### Tailwind CSS
Tailwind is configured in `tailwind.config.js`. Global styles are loaded via
`pages/_app.js`.
