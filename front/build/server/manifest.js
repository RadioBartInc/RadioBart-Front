const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["albums.json","favicon.ico","tpab.json"]),
	mimeTypes: {".json":"application/json"},
	_: {
		client: {"start":"_app/immutable/entry/start.Da5fSFKX.js","app":"_app/immutable/entry/app.D7Ig7zjY.js","imports":["_app/immutable/entry/start.Da5fSFKX.js","_app/immutable/chunks/entry.CM5afHCU.js","_app/immutable/chunks/scheduler.Cz3TSd7V.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/entry/app.D7Ig7zjY.js","_app/immutable/chunks/scheduler.Cz3TSd7V.js","_app/immutable/chunks/index.DKOtY3uX.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-DCUDl7q8.js')),
			__memo(() => import('./chunks/1-DVX7dUMZ.js')),
			__memo(() => import('./chunks/2-DR0Ipt-f.js')),
			__memo(() => import('./chunks/3-C_q-mxM8.js')),
			__memo(() => import('./chunks/4-DJEQCTle.js')),
			__memo(() => import('./chunks/5-lxm6wK_o.js')),
			__memo(() => import('./chunks/6-Cbuu_RiW.js')),
			__memo(() => import('./chunks/7-DMNCrBV4.js')),
			__memo(() => import('./chunks/8-DcsEwS93.js')),
			__memo(() => import('./chunks/9-BQknTZWL.js')),
			__memo(() => import('./chunks/10-DO0VEAKr.js')),
			__memo(() => import('./chunks/11-COixgOsB.js')),
			__memo(() => import('./chunks/12-B41Ky9fK.js')),
			__memo(() => import('./chunks/13-HJWvmRjJ.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/addArtist",
				pattern: /^\/addArtist\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/albums",
				pattern: /^\/albums\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/album/[id]",
				pattern: /^\/album\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/artistas",
				pattern: /^\/artistas\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/artista/[id]",
				pattern: /^\/artista\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/artista/[id]/addAlbum",
				pattern: /^\/artista\/([^/]+?)\/addAlbum\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/reviews",
				pattern: /^\/reviews\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/review/[id]",
				pattern: /^\/review\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/usuario/[id]",
				pattern: /^\/usuario\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
