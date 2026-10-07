"use client";

import { useState } from "react";
import "./globals.css";

export default function Home() {
  const [message, setMessage] = useState("");

  async function callHelloApi() {
    const response = await fetch("/api/hello");
    const data = await response.json();
    setMessage(data.message);
  }

  return (
    <main>
      <h1>API Practice</h1>
      <button onClick={callHelloApi}>Call Hello API</button>
      <div id="response">{message}</div>
    </main>
  );
}
