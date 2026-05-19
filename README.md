# FeedFlow Realtime Platform

Realtime professional feed platform built using:

- Node.js
- Express.js
- PostgreSQL
- Redis
- Socket.IO
- Next.js
- Docker

---

# Features

- GET /feed API
- POST /feed API
- PostgreSQL database integration
- Redis caching
- Realtime updates using Socket.IO
- Next.js frontend
- Home feed page
- Admin posting page
- Loading and error handling
- Socket reconnect handling
- Duplicate socket event prevention
- Dockerized PostgreSQL and Redis setup

---

# Tech Stack

## Backend
- Node.js
- Express.js
- PostgreSQL
- Redis
- Socket.IO

## Frontend
- Next.js
- Axios
- Socket.IO Client

---

# Architecture

Admin Page
↓
POST /feed
↓
Express API
↓
PostgreSQL Save
↓
Redis Cache Clear
↓
Socket.IO Emit
↓
Frontend Updates Instantly

---

# Project Structure

```bash
feedflow/
│
├── backend/
│   ├── routes/
│   ├── server.js
│   ├── db.js
│   ├── redis.js
│   └── .env
│
├── frontend/
│
└── docker-compose.yml
```

---

# Run Project Locally

## 1. Start PostgreSQL and Redis

```bash
docker compose up -d
```

---

## 2. Start Backend

```bash
cd backend
npm install
npm run dev
```

Backend runs on:

```bash
http://localhost:5000
```

---

## 3. Start Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```bash
http://localhost:3001
```

Admin page:

```bash
http://localhost:3001/admin
```

---

# API Endpoints

## GET Feeds

```http
GET /feed
```

## POST Feed

```http
POST /feed
```

Request Body:

```json
{
  "message": "New professional update"
}
```

---

# Redis Cache Flow

- GET /feed first checks Redis cache
- If cache exists, data is returned directly
- If cache is missing, PostgreSQL is queried
- New feed creation clears Redis cache

---

# Realtime Flow

- Admin posts new feed
- Backend stores data in PostgreSQL
- Socket.IO emits realtime event
- Connected frontend clients update instantly

---

# GitHub Repository

https://github.com/Ijas5/feedflow-realtime-platform
