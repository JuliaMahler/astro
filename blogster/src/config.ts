// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Julia Mahler";
export const SITE_DESCRIPTION =
  "Hier erfährst du alles über mich.";
export const MY_NAME = "Julia Mahler";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
