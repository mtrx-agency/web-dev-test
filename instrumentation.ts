// import * as Sentry from "@sentry/nextjs";

export async function register() {
  if (
    ["nodejs", "edge"].includes(process.env.NEXT_RUNTIME || "browser") &&
    process.env.ENV !== "local"
  ) {
    // Sentry.init({
    //   dsn: "",
    //   environment: process.env.ENV,
    //   // Adjust this value in production, or use tracesSampler for greater control
    //   tracesSampleRate: 1,
    //   // Setting this option to true will print useful information to the console while you're setting up Sentry.
    //   debug: false,
    //   // Enable Spotlight (https://spotlightjs.com)
    //   spotlight: process.env.ENV === "local",
    // });
  }
}
