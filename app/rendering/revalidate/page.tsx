// Next reads this named export as route config.
// revalidate means cache this route, then regenerate it after 10 seconds.

export const revalidate = 10;

export default function RevalidateRendering() {
  const renderedAt = new Date().toLocaleString();

  return (
    <>
      <h1>Incremental Static Regeneration</h1>
      <p className="lede">
        This page is statically generated and cached, then Next is allowed to
        regenerate it in the background after the interval expires.
      </p>

      <div className="panel">
        <h2>Cached static value</h2>
        <pre>{renderedAt}</pre>
        <small className="note">
          Key line: <code>revalidate = 10</code>
        </small>
      </div>

    </>
  );
}
