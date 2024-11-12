import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { marked } from "marked";
import { getPost } from "~/models/post.server";

export async function loader({ params }: LoaderArgs) {
  if (!params.slug) {
    throw new Error ("No slug")
  }
  const post = await getPost(params.slug);
  if (!post) {
    throw new Error ("Post not found sorry")
  }
  const html = marked(post.markdown)
  return json({ post, html });
}
export default function PostSlug() {
  const { post, html } = useLoaderData();
  console.log(post);
  
  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="my-6 border-b-2 text-center text-3xl">{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
}
