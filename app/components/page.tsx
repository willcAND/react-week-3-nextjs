import Counter from "./Counter";

export default function ComponentsPage() {
  console.log("Server component: Not visible in the browser");
  const renderedAt = new Date().toLocaleTimeString();

  return (
    <>
      <h1>Server Components + Client Components</h1>
      <div className="panel">
        <strong>Server Component</strong>
        <p>
          Rendered on the server at <code className="inline">{renderedAt}</code>
          .
        </p>
      </div>

      <Counter />
    </>
  );
}
