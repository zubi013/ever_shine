const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.D33nUGvs.js","app":"_app/immutable/entry/app.DnVmS0Zm.js","imports":["_app/immutable/entry/start.D33nUGvs.js","_app/immutable/chunks/entry.CIlXG8dE.js","_app/immutable/chunks/runtime.BV8AclWA.js","_app/immutable/chunks/index-client.U0VCXxS_.js","_app/immutable/entry/app.DnVmS0Zm.js","_app/immutable/chunks/runtime.BV8AclWA.js","_app/immutable/chunks/render.DXeuPFt0.js","_app/immutable/chunks/disclose-version.D7tK6Xyz.js","_app/immutable/chunks/index-client.U0VCXxS_.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-DQivOx4S.js')),
			__memo(() => import('./chunks/1-CyzOeLG8.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set(["/"]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
