import { useLoaderData, Link } from "@remix-run/react";
import { loader } from "./postLoader";
export { loader };
export default function Posts() {
  const { posts } = useLoaderData();
  return (
<main>
  <h1>Posts</h1>
  <ul>
    {posts.map((post) => (
      <li key={post.slug}>
        <Link to={post.slug} className="text-blue-600 underline">
          {post.title}
        </Link>
      </li>
    ))}
  </ul>
</main>
  );
}
