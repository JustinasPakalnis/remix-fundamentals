import { Form, Link } from "@remix-run/react";
export default function Stuff() {
    return (
  <main>
    <h1>Stuff matosi</h1>
    <div className="mx-auto mt-16 max-w-7xl text-center">
  <Link to="/posts" className="text-xl text-blue-600 underline">
    Stuff Posts
  </Link>
</div>
  </main>
    );
  }
