import { Link, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";

export default function AdminIndex() {
  return (
    <p>
      <Link to="new" className="text-blue-600 underline">
        Create a New Post
      </Link>
      <p>Admin emailas: {ENV.ADMIN_EMAIL}</p>
      <p>secret: {ENV.SESSION_SECRET}</p>
      <p>URL: {ENV.DATABASE_URL}</p>
    </p>
  );
}
