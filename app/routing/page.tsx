import Link from "next/link";

export default function RoutingIndex() {
  const slugs = ["typescript", "web-components", "react-server-components"];
  return (
    <>
      <h1>File-system routing</h1>
      <p>
        Next.js turns the folder structure under{" "}
        <code className="inline">app/</code> into the routing table. This page
        is <code className="inline">app/routing/page.tsx</code>.
      </p>
      <p>Try a dynamic segment:</p>
      <ul>
        {slugs.map((slug) => (
          <li key={slug}>
            <Link href={`/routing/${slug}`}>/routing/{slug}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
