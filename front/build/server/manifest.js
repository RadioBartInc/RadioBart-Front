const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["albums.json","favicon.ico","logotipo.png"]),
	mimeTypes: {".json":"application/json",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.DDIT8zcY.js","app":"_app/immutable/entry/app.oVeKYF3K.js","imports":["_app/immutable/entry/start.DDIT8zcY.js","_app/immutable/chunks/entry.XM5ONYRv.js","_app/immutable/chunks/scheduler.Cz3TSd7V.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/entry/app.oVeKYF3K.js","_app/immutable/chunks/scheduler.Cz3TSd7V.js","_app/immutable/chunks/index.DKOtY3uX.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-DCUDl7q8.js')),
			__memo(() => import('./chunks/1-cVIxNIIB.js')),
			__memo(() => import('./chunks/2-Bratdbmk.js')),
			__memo(() => import('./chunks/3-DJAiTlgW.js')),
			__memo(() => import('./chunks/4-BUPj8-OJ.js')),
			__memo(() => import('./chunks/5-BM96Uf7l.js')),
			__memo(() => import('./chunks/6-X5z_77yy.js')),
			__memo(() => import('./chunks/7-BcmuYSlQ.js')),
			__memo(() => import('./chunks/8-CjbvzJC9.js')),
			__memo(() => import('./chunks/9-Bd0Bnd2T.js')),
			__memo(() => import('./chunks/10-BOT7vdtL.js')),
			__memo(() => import('./chunks/11-CcPecq7v.js')),
			__memo(() => import('./chunks/12-BVoVZLSo.js')),
			__memo(() => import('./chunks/13-D6-ishmu.js'))
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
