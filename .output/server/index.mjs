globalThis.__nitro_main__ = import.meta.url;
import { i as serve, r as NodeResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
import { i as toEventHandler, n as defineHandler, o as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { i as withoutTrailingSlash, n as joinURL, r as withLeadingSlash, t as decodePath } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-09-02T18:54:44.177Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/assets/arrow-right-sK4TF_wo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-FaCGjlvQpeQsd/yGUW7nH1ifI0w\"",
		"mtime": "2026-09-02T18:54:43.960Z",
		"size": 154,
		"path": "../public/assets/arrow-right-sK4TF_wo.js"
	},
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-09-02T18:54:44.177Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/assets/contact-B_qSHMwc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c77-US1tBDhb1iU3xUc3wiu9iCjV4CA\"",
		"mtime": "2026-09-02T18:54:43.960Z",
		"size": 7287,
		"path": "../public/assets/contact-B_qSHMwc.js"
	},
	"/assets/gallery-nature-1-D-Ujjanc.jpg": {
		"type": "image/jpeg",
		"etag": "\"16652-N9GwNUx6XawNOmL6TZIW5YqoOMg\"",
		"mtime": "2026-09-02T18:54:43.961Z",
		"size": 91730,
		"path": "../public/assets/gallery-nature-1-D-Ujjanc.jpg"
	},
	"/assets/gallery-nature-2-CmoDE1KJ.jpg": {
		"type": "image/jpeg",
		"etag": "\"1e188-BghC0IP3DhlHwIZ0T419pixPXC4\"",
		"mtime": "2026-09-02T18:54:43.961Z",
		"size": 123272,
		"path": "../public/assets/gallery-nature-2-CmoDE1KJ.jpg"
	},
	"/assets/gallery-festival-1-BZ7UEmgk.jpg": {
		"type": "image/jpeg",
		"etag": "\"36946-Vdeb9ouig+nl7m/0MgldaOa5vEE\"",
		"mtime": "2026-09-02T18:54:43.961Z",
		"size": 223558,
		"path": "../public/assets/gallery-festival-1-BZ7UEmgk.jpg"
	},
	"/assets/gallery-festival-2-DRH4lEXB.jpg": {
		"type": "image/jpeg",
		"etag": "\"2f4bb-uOHcH4gyXmy2Fe3IyEpaaCoqxhE\"",
		"mtime": "2026-09-02T18:54:43.961Z",
		"size": 193723,
		"path": "../public/assets/gallery-festival-2-DRH4lEXB.jpg"
	},
	"/assets/beetopia-garden-SRbdKeDt.jpg": {
		"type": "image/jpeg",
		"etag": "\"7078a-8VZChMxu5FW8zHj3MSugDVDyQbQ\"",
		"mtime": "2026-09-02T18:54:43.961Z",
		"size": 460682,
		"path": "../public/assets/beetopia-garden-SRbdKeDt.jpg"
	},
	"/assets/gallery-festival-3-BkVbiJJL.jpg": {
		"type": "image/jpeg",
		"etag": "\"44d46-eP8ov2rgiohGAwTCgJOaiX2Ru2U\"",
		"mtime": "2026-09-02T18:54:43.961Z",
		"size": 281926,
		"path": "../public/assets/gallery-festival-3-BkVbiJJL.jpg"
	},
	"/assets/hawn-creek-volunteers-0M_lVy9v.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"314-r943uNdBjqWhcRZPS0e9WtvMqD8\"",
		"mtime": "2026-09-02T18:54:43.961Z",
		"size": 788,
		"path": "../public/assets/hawn-creek-volunteers-0M_lVy9v.js"
	},
	"/assets/hawn-creek-park-Bvb3lLyq.jpg": {
		"type": "image/jpeg",
		"etag": "\"1fa7e-T7U9Fx7BBpTk+bjSE3uCYS45vqQ\"",
		"mtime": "2026-09-02T18:54:43.966Z",
		"size": 129662,
		"path": "../public/assets/hawn-creek-park-Bvb3lLyq.jpg"
	},
	"/assets/gallery-nature-3-eYg4h15y.jpg": {
		"type": "image/jpeg",
		"etag": "\"6f650-tATDnmRUOn/acPZM3EJYv6oPtRI\"",
		"mtime": "2026-09-02T18:54:43.961Z",
		"size": 456272,
		"path": "../public/assets/gallery-nature-3-eYg4h15y.jpg"
	},
	"/assets/hawn-creek-volunteers-C6TC3POh.jpg": {
		"type": "image/jpeg",
		"etag": "\"26db7-GkWddTu2lD1GiwbYkDXZix93VoQ\"",
		"mtime": "2026-09-02T18:54:43.966Z",
		"size": 159159,
		"path": "../public/assets/hawn-creek-volunteers-C6TC3POh.jpg"
	},
	"/assets/gallery-volunteers-2-LrPsisTx.jpg": {
		"type": "image/jpeg",
		"etag": "\"45441-HYIhg8aoFjXofT29QKzRuaAoQs0\"",
		"mtime": "2026-09-02T18:54:43.966Z",
		"size": 283713,
		"path": "../public/assets/gallery-volunteers-2-LrPsisTx.jpg"
	},
	"/assets/index-Dz--ssvM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6840a-AWFcdCfj1O2nT6jHCAkyathV4Eo\"",
		"mtime": "2026-09-02T18:54:43.960Z",
		"size": 427018,
		"path": "../public/assets/index-Dz--ssvM.js"
	},
	"/assets/home-bumblebee-CdO-hNQE.jpg": {
		"type": "image/jpeg",
		"etag": "\"5b034-s+mZ9QHGa9ybg4JEggSVs1GcUiw\"",
		"mtime": "2026-09-02T18:54:43.966Z",
		"size": 372788,
		"path": "../public/assets/home-bumblebee-CdO-hNQE.jpg"
	},
	"/assets/routes-DrsAlgH9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4708-J6w6bWg082br+ybXA8hgImNKZiM\"",
		"mtime": "2026-09-02T18:54:43.961Z",
		"size": 18184,
		"path": "../public/assets/routes-DrsAlgH9.js"
	},
	"/assets/project-meadow-DL9d-SWK.jpg": {
		"type": "image/jpeg",
		"etag": "\"1624f-j6N7V5A0eufTNg4mOXbRlDF3XKw\"",
		"mtime": "2026-09-02T18:54:43.966Z",
		"size": 90703,
		"path": "../public/assets/project-meadow-DL9d-SWK.jpg"
	},
	"/assets/project-school-Bzvm413b.jpg": {
		"type": "image/jpeg",
		"etag": "\"1b016-UrrnKkQyUOGfPR8uGRdptkNZpjY\"",
		"mtime": "2026-09-02T18:54:43.966Z",
		"size": 110614,
		"path": "../public/assets/project-school-Bzvm413b.jpg"
	},
	"/assets/photos-B0N6xeZx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e02-MOL+ssmPxFDq5geC33h7/apP24M\"",
		"mtime": "2026-09-02T18:54:43.961Z",
		"size": 7682,
		"path": "../public/assets/photos-B0N6xeZx.js"
	},
	"/assets/styles-Cze7D63S.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"15241-HZa55HLRkKdAxNM1Y42KDBaHP5E\"",
		"mtime": "2026-09-02T18:54:43.967Z",
		"size": 86593,
		"path": "../public/assets/styles-Cze7D63S.css"
	},
	"/assets/hero-butterfly-pEVE7-R6.jpg": {
		"type": "image/jpeg",
		"etag": "\"7e579-IL/Bnx9+LMpJRkFg94nxhkGdmiA\"",
		"mtime": "2026-09-02T18:54:43.966Z",
		"size": 517497,
		"path": "../public/assets/hero-butterfly-pEVE7-R6.jpg"
	},
	"/assets/gallery-volunteers-1-BTezOjAq.jpg": {
		"type": "image/jpeg",
		"etag": "\"3e42b-werNslDRyunLtkcVDYevInDz8+0\"",
		"mtime": "2026-09-02T18:54:43.963Z",
		"size": 255019,
		"path": "../public/assets/gallery-volunteers-1-BTezOjAq.jpg"
	},
	"/assets/our-projects-CZ5VSKNN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1891-5Qh+xRFAUMM7irNImU/t/X05fWs\"",
		"mtime": "2026-09-02T18:54:43.961Z",
		"size": 6289,
		"path": "../public/assets/our-projects-CZ5VSKNN.js"
	},
	"/assets/volunteer-camille-B0uezEMm.jpg": {
		"type": "image/jpeg",
		"etag": "\"14254-JcNQpfzxRK5KTTIWumLoGrisj0g\"",
		"mtime": "2026-09-02T18:54:43.967Z",
		"size": 82516,
		"path": "../public/assets/volunteer-camille-B0uezEMm.jpg"
	}
};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_Mbwsir = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_Mbwsir
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(static_default)].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~middleware"].push(...globalMiddleware);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		middleware.push(...h3App["~middleware"]);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
//#endregion
//#region #nitro/virtual/tracing
var tracingSrvxPlugins = [];
//#endregion
//#region node_modules/nitro/dist/presets/node/runtime/node-server.mjs
var _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
var port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
var host = process.env.NITRO_HOST || process.env.HOST;
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var nitroApp = useNitroApp();
serve({
	port,
	hostname: host,
	tls: cert && key ? {
		cert,
		key
	} : void 0,
	fetch: nitroApp.fetch,
	plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
var node_server_default = {};
//#endregion
export { node_server_default as default };
