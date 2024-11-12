import { useLoaderData, Link } from "@remix-run/react";
import { json } from "@remix-run/node";
import { prisma } from "~/db.server";
async function getPosts() {
  return prisma.post.findMany();
}

export async function loader() {
  const posts = await getPosts();
  return json({posts});
}
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
