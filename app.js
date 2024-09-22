import { serve } from "https://deno.land/std@0.222.1/http/server.ts";

let visitCount = 0;

const handler = (request) => {
  const url = new URL(request.url);

  // Handle /visits path
  if (url.pathname === "/visits") {
    visitCount++;
    const body = `<html><body>Visits: ${visitCount}</body></html>`;
    return new Response(body, {
      headers: { "Content-Type": "text/html;charset=UTF-8" },
    });

  // Handle /meaning path
  } else if (url.pathname === "/meaning") {
    return new Response("Seeking truths beyond meaning of life, you will find 43.", {
      headers: { "Content-Type": "text/plain;charset=UTF-8" },
    });

  // Handle other paths
  } else {
    return new Response("Nothing here yet.", {
      headers: { "Content-Type": "text/plain;charset=UTF-8" },
    });
  }
};

// Start the server
console.log("Server running on http://localhost:7777");
serve(handler, { port: 7777 });

