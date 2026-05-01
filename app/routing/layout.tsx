import type { ReactNode } from "react";

/* 
<RootLayout> // app/layout.tsx
  <ChildLayout> app/routing/layout.tsx
    <RoutingPage /> // app/routing/page.tsx
  </ChildLayout>
</RootLayout> 
*/

export default function ChildLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <section className="panel">
        <div className="note">
          This panel is a nested layout applied to /routing/*
        </div>
      </section>
      <section className="panel">{children}</section>
    </>
  );
}
