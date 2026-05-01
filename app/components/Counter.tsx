"use client";
import { useState } from "react";

export default function Counter() {
  console.log("Client component: Visible in the browser");
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div className="panel">
      <strong>Client Component</strong>
      <p>
        Count: <code className="inline">{count}</code>
      </p>
      <button onClick={increment}>+1</button>
      <p>
        <small className="note">
          <code>"use client"</code> lets this component use state and clicks.
        </small>
      </p>
    </div>
  );
}
