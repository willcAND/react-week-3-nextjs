import Link from "next/link";

// Server Component by default. No "use client" here.
// This renders entirely on the server; zero JS ships to the browser for the
// markup below.
export default function Home() {
  return (
    <>
      <h1>Next.js Fundamentals</h1>

      <div className="panel">
        <h2>Routing</h2>
        <ul>
          <li>
            <Link href="/routing">/routing</Link> — nested layout
          </li>
          <li>
            <Link href="/routing/typescript">/routing/typescript</Link> — dynamic
            <code className="inline">[slug]</code>
          </li>
        </ul>
      </div>

      <div className="panel">
        <h2>Rendering modes (App Router)</h2>
        <ul>
          <li>
            <Link href="/rendering/static">/rendering/static</Link> — static
          </li>
          <li>
            <Link href="/rendering/dynamic">/rendering/dynamic</Link> — per-request
          </li>
          <li>
            <Link href="/rendering/revalidate">/rendering/revalidate</Link> —
            revalidate every 10s
          </li>
        </ul>
      </div>

      <div className="panel">
        <h2>Server vs. Client Components</h2>
        <p>
          <Link href="/components">/components</Link> — a Server Component that
          renders a Client Component.
        </p>
      </div>

      <div className="panel">
        <h2>Data fetching: cache / revalidate / no-store</h2>
        <p>
          <Link href="/data-fetching">/data-fetching</Link> — same endpoint, three
          caching modes, side by side.
        </p>
      </div>

    </>
  );
}
