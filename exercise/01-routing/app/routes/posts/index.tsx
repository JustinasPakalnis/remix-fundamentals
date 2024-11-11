import { Form, Link } from "@remix-run/react";
export default function Posts() {
  return (
<main>
  <h1>Posts matosi</h1>
  <div className="mx-auto mt-16 max-w-7xl text-center">
  <Link to="/posts/stuff" className="text-xl text-blue-600 underline">
    Stuff Posts
  </Link>
</div>
</main>
  );
}
