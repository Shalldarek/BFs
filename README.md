# BFs

The current live deployment is available at https://bfs-4agu.onrender.com/.

BFs is a full-stack personal site built with FastAPI, React, Vite, and MongoDB. It serves a small set of pages for memories, photos, and funny sayings, with a Python backend and a modern React frontend.

## Overview

- Backend: FastAPI with an async MongoDB connection via Motor.
- Frontend: React 18 with Vite and React Router.
- Data: MongoDB collection `hlasky` for funny sayings.
- Deployment: Docker Compose for local containerized runs.

## Features

- Home page with profile, story, and photo sections.
- Funny sayings view backed by MongoDB.
- Simple About page.
- CORS configured for local development and the deployed frontend.

## Project Structure

```text
app/
  main.py              FastAPI app entry point
  database.py          MongoDB connection management
  routers/
    funny_sayings.py   API routes for sayings
frontend/
  src/
    App.jsx            Main React layout and routing
    Sayings.jsx        Funny sayings data view
  vite.config.js       Vite dev server and API proxy config
docker-compose.yml     Container setup for backend and frontend
requirements.txt       Python dependencies
```

## Prerequisites

- Python 3.12 or newer
- Node.js 18 or newer
- npm
- A running MongoDB instance

## Environment Variables

Create a `.env` file in the repository root with at least these values:

```env
MONGO_URI=your-mongodb-connection-string
DATABASE_NAME=your_database_name
```

The frontend also expects `VITE_API_URL` at runtime. For local development, set it to the backend base URL, for example:

```env
VITE_API_URL=http://127.0.0.1:8000
```

## Local Development

### Backend

Install the Python dependencies and start the API server:

```bash
pip install -r requirements.txt
uvicorn app.main:app --reload
```

The backend will be available at `http://127.0.0.1:8000`.

### Frontend

Install frontend dependencies and start Vite:

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at `http://127.0.0.1:5173`.

## Docker

The repository includes a Docker Compose stack for both services:

```bash
docker compose up --build
```

- Backend: `http://127.0.0.1:8000`
- Frontend: `http://127.0.0.1:8080`

The backend container still requires `MONGO_URI` and `DATABASE_NAME` from `.env`.

## API Endpoints

- `GET /` returns a basic welcome response.
- `GET /funny-sayings` returns up to 100 sayings from the `hlasky` collection.
- `GET /funny-sayings/{saying_id}` returns a single saying by MongoDB ObjectId.

## Notes

- The Vite dev server includes an `/api` proxy, but the current frontend fetches the backend through `VITE_API_URL`.
- MongoDB documents returned by the API are serialized with `_id` converted to a string.

## License

No license has been specified yet.