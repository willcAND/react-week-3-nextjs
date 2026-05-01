// No route config export is needed here.
// With no dynamic data, Next can render this once and reuse the HTML.

export default function StaticRendering() {
  const renderedAt = new Date().toLocaleString();

  return (
    <>
      <h1>Static Site Generation</h1>
      <p className="lede">
        With no dynamic route config or request-time data, Next can pre-render
        this route at build time and serve the same static HTML repeatedly.
      </p>

      <div className="panel">
        <h2>Build-time value</h2>
        <pre>{renderedAt}</pre>
        <small className="note">
          In production, this value is created during <code>next build</code>.
        </small>
      </div>

    </>
  );
}
