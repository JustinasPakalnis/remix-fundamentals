import { Outlet } from "@remix-run/react";
import { ErrorFallback } from "~/components";
export default function () {
  return <Outlet />;
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);

  return (
    <ErrorFallback>
      There was a problem. Sorry mister not working.
    </ErrorFallback>
  );
}
