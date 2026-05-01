const API_URL = "http://localhost:3000/api/time";

export const metadata = {
  title: "Next.js Data fetching",
  description: "Next.js features, App Router, RSC, and data fetching",
};

export const dynamic = "force-dynamic";

function formatTime(data: { time: string }) {
  return new Date(data.time).toLocaleString();
}

export default async function DataFetching() {
  // Static - cached forever. The value comes from the first successful request
  // Next stores in its data cache, then that cached response is reused.
  const staticData = await fetch(API_URL, {
    cache: "force-cache",
  }).then((res) => res.json());

  // Dynamic - never cached.
  const dynamicData = await fetch(API_URL, {
    cache: "no-store",
  }).then((res) => res.json());

  // Revalidated - cached, then refreshed by Next after 5 seconds.
  const revalidatedData = await fetch(API_URL, {
    next: { revalidate: 5 },
  }).then((res) => res.json());

  return (
    <>
      <h1>Data fetching</h1>

      <div className="panel">
        <strong>Static - cache: "force-cache"</strong>
        <p>Useful when data can be reused like pre-rendered HTML.</p>
        <pre>{formatTime(staticData)}</pre>
      </div>

      <div className="panel">
        <strong>Dynamic - cache: "no-store"</strong>
        <p>Useful when each request needs the freshest server value.</p>
        <pre>{formatTime(dynamicData)}</pre>
      </div>

      <div className="panel">
        <strong>Revalidate - revalidate: 5</strong>
        <p>Useful for ISR-style freshness without recomputing every request.</p>
        <pre>{formatTime(revalidatedData)}</pre>
      </div>
    </>
  );
}
