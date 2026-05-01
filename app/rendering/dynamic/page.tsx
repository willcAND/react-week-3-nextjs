// Next reads this named export as route config.
// force-dynamic means render this route on the server for each request.
export const dynamic = "force-dynamic";

export default function DynamicRendering() {
  // Because the route is dynamic, this timestamp changes on every request.
  const renderedAt = new Date().toLocaleString();

  return (
    <>
      <h1>Server Side Rendering</h1>
      <p className="lede">
        This route generates HTML on the server for each request. 
      </p>

      <div className="panel">
        <h2>Per-request server value</h2>
        <pre>{renderedAt}</pre>
        <small className="note">
          Key line: <code>{'dynamic = "force-dynamic"'}</code>
        </small>
      </div>


    </>
  );
}
