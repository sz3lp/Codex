# FastAPI Backend

## Setup

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

Create a `.env` file based on `.env.example` and start the server:

```bash
uvicorn app.main:app --reload
```

## Environment Variables
See `.env.example` for required variables.
