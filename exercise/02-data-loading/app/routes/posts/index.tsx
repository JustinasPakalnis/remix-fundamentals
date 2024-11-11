import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";

export const loader = async () => {
  const data = {
    posts: [
      {
        slug: "my-first-post",
        title: "My First Post",
      },
      {
        slug: "90s-mixtape",
        title: "A Mixtape I Made Just For You",
      },
    ],
  };
  return json(data); // <-- send the data from your backend
};
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
