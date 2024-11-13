import invariant from "tiny-invariant";

export function getEnv() {
  invariant(process.env.ADMIN_EMAIL, "process.env.ADMIN_EMAIL not defined");
  invariant(
    process.env.SESSION_SECRET,
    "process.env.ESSION_SECRET not defined",
  );
  invariant(process.env.DATABASE_URL, "process.env.DATABASE_URL not defined");

  return {
    ADMIN_EMAIL: process.env.ADMIN_EMAIL,
    SESSION_SECRET: process.env.SESSION_SECRET,
    DATABASE_URL: process.env.DATABASE_URL,
  };
}

type ENV = ReturnType<typeof getEnv>;

// App puts these on
declare global {
  var ENV: ENV;
  interface Window {
    ENV: ENV;
  }
}
