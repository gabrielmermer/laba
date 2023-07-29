export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.9b7a2b14.js","app":"_app/immutable/entry/app.243125c6.js","imports":["_app/immutable/entry/start.9b7a2b14.js","_app/immutable/chunks/index.9e9cbcb3.js","_app/immutable/chunks/singletons.d8853a52.js","_app/immutable/chunks/index.4179f47e.js","_app/immutable/entry/app.243125c6.js","_app/immutable/chunks/index.9e9cbcb3.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
