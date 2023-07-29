import * as server from '../entries/pages/_page.server.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.3ee85ba9.js","_app/immutable/chunks/index.9e9cbcb3.js","_app/immutable/chunks/index.4179f47e.js"];
export const stylesheets = [];
export const fonts = [];
