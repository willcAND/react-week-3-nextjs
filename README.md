# Next.js Fundamentals

A small teaching codebase for Next.js fundamentals. Every example is
intentionally minimal.

## Contents

```
next-fundamentals/
├── app/                    App Router examples
├── package.json
└── next.config.js
```

## How to run

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Running in production mode

Build the optimized production bundle:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

Open http://localhost:3000.

## Tour

| Path                           | Demonstrates                                |
|--------------------------------|---------------------------------------------|
| `/`                            | Framework overview + nav                    |
| `/routing`                     | Nested layouts with the App Router          |
| `/routing/anything`            | Dynamic `[slug]` segment                    |
| `/rendering/static`            | Default static rendering                    |
| `/rendering/dynamic`           | Per-request dynamic rendering               |
| `/rendering/revalidate`        | Static rendering with timed revalidation    |
| `/components`                  | Server Component rendering a Client Counter |
| `/data-fetching`               | Three server `fetch` caching modes          |
| `/api/time`                    | Route Handler                               |
| `/api/bff`                     | Simplified backend-for-frontend endpoint    |
