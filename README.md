<<<<<<< HEAD
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
=======
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
>>>>>>> 81c3a8c3ba55e8369d0062a033d88844cf9254de
