import type { ReactNode } from "react";
import Link from "next/link";
import "./globals.css";

// static metadata
export const metadata = {
  title: "Next.js App Router Fundamentals",
  description: "Next.js features, App Router, RSC, and data fetching",
};

// This layout is called a root layout because it's defined at the root of the app directory.
// The root layout is required and must contain html and body tags.
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="nav">
          <strong>next-fundamentals</strong>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/routing">Routing</Link>
            <Link href="/rendering/static">Static</Link>
            <Link href="/rendering/dynamic">Dynamic</Link>
            <Link href="/rendering/revalidate">Revalidate</Link>
            <Link href="/components">RSC</Link>
            <Link href="/data-fetching">Data fetching</Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
