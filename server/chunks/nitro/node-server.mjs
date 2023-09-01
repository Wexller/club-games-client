globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseStatus, setResponseHeader, getRequestHeaders, createError, readBody, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { klona } from 'klona';
import defu, { defuFn } from 'defu';
import { hash } from 'ohash';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage, prefixStorage } from 'unstorage';
import unstorage_47drivers_47fs from 'unstorage/drivers/fs';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, relative, join } from 'pathe';
import { generateJSON } from '@intlify/bundle-utils';
import gracefulShutdown from 'http-graceful-shutdown';

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {
    "strapi": {
      "url": "http://80.249.149.128:1337",
      "prefix": "/api",
      "version": "v4",
      "cookie": {},
      "auth": {},
      "cookieName": "strapi_jwt",
      "devtools": false
    },
    "i18n": {
      "experimental": {
        "jsTsFormatResource": false
      },
      "baseUrl": ""
    }
  },
  "i18n": {
    "precompile": {
      "strictMessage": true,
      "escapeHtml": false
    }
  },
  "strapi": {
    "url": "http://localhost:1337",
    "prefix": "/api",
    "version": "v4",
    "cookie": {},
    "auth": {},
    "cookieName": "strapi_jwt",
    "devtools": false
  }
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('i18n', unstorage_47drivers_47fs({"driver":"fs","base":"/Users/dmitriy/WebstormProjects/club-games-client/.nuxt/i18n","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function trapUnhandledNodeErrors() {
  {
    process.on(
      "unhandledRejection",
      (err) => console.error("[nitro] [unhandledRejection] " + err)
    );
    process.on(
      "uncaughtException",
      (err) => console.error("[nitro]  [uncaughtException] " + err)
    );
  }
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  event.node.res.end(await res.text());
});

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-n8egyE9tcb7sKGr/pYCaQ4uWqxI\"",
    "mtime": "2023-09-01T18:02:42.921Z",
    "size": 4286,
    "path": "../public/favicon.ico"
  },
  "/_nuxt/Button.0108aab6.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3e-XZXkbCRkOiwiS9UDzTQ1f1WwdTQ\"",
    "mtime": "2023-09-01T18:02:42.919Z",
    "size": 62,
    "path": "../public/_nuxt/Button.0108aab6.css"
  },
  "/_nuxt/Button.0bd7e268.js": {
    "type": "application/javascript",
    "etag": "\"2f6-GL/oqB7/h1djS8FT6rvdY1Wn5UU\"",
    "mtime": "2023-09-01T18:02:42.919Z",
    "size": 758,
    "path": "../public/_nuxt/Button.0bd7e268.js"
  },
  "/_nuxt/GameEnrollmentsTable.vue.10131d2c.js": {
    "type": "application/javascript",
    "etag": "\"7b5d-LaYaiMFjAiLFWoQhexER9Z67Pp0\"",
    "mtime": "2023-09-01T18:02:42.918Z",
    "size": 31581,
    "path": "../public/_nuxt/GameEnrollmentsTable.vue.10131d2c.js"
  },
  "/_nuxt/_id_.7f4f8d6d.js": {
    "type": "application/javascript",
    "etag": "\"81-+zKxaFd4oUuoFpfNA5ln98g73Ws\"",
    "mtime": "2023-09-01T18:02:42.917Z",
    "size": 129,
    "path": "../public/_nuxt/_id_.7f4f8d6d.js"
  },
  "/_nuxt/_id_.fb7753c2.js": {
    "type": "application/javascript",
    "etag": "\"81-+zKxaFd4oUuoFpfNA5ln98g73Ws\"",
    "mtime": "2023-09-01T18:02:42.917Z",
    "size": 129,
    "path": "../public/_nuxt/_id_.fb7753c2.js"
  },
  "/_nuxt/auth.ca887f28.js": {
    "type": "application/javascript",
    "etag": "\"15e-gLyYtHhH2GeU5A30EIsyakxFZyU\"",
    "mtime": "2023-09-01T18:02:42.917Z",
    "size": 350,
    "path": "../public/_nuxt/auth.ca887f28.js"
  },
  "/_nuxt/background.8e8efb4b.svg": {
    "type": "image/svg+xml",
    "etag": "\"f5490-JkCmvhzQkCKzfkijIJGqRa2zNiM\"",
    "mtime": "2023-09-01T18:02:42.916Z",
    "size": 1004688,
    "path": "../public/_nuxt/background.8e8efb4b.svg"
  },
  "/_nuxt/background.a8a215dc.js": {
    "type": "application/javascript",
    "etag": "\"f4fae-bEtLw6sJhnk0wxSRFMyyXZnXM64\"",
    "mtime": "2023-09-01T18:02:42.915Z",
    "size": 1003438,
    "path": "../public/_nuxt/background.a8a215dc.js"
  },
  "/_nuxt/default.89df3bf4.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"43-Kci6PqbUJrLS3g1xUH3ljUsBIhU\"",
    "mtime": "2023-09-01T18:02:42.913Z",
    "size": 67,
    "path": "../public/_nuxt/default.89df3bf4.css"
  },
  "/_nuxt/default.db61a93d.js": {
    "type": "application/javascript",
    "etag": "\"426-aM1w2KaKTazijc9yBYoC63ap1Tk\"",
    "mtime": "2023-09-01T18:02:42.913Z",
    "size": 1062,
    "path": "../public/_nuxt/default.db61a93d.js"
  },
  "/_nuxt/empty-image.6650d1e0.js": {
    "type": "application/javascript",
    "etag": "\"21e-pXpfwPpHWAtQDwrEDl60IcnqU4g\"",
    "mtime": "2023-09-01T18:02:42.912Z",
    "size": 542,
    "path": "../public/_nuxt/empty-image.6650d1e0.js"
  },
  "/_nuxt/empty-image.8bd3ba09.svg": {
    "type": "image/svg+xml",
    "etag": "\"16b-B4DcxV+x+ER8xDmGuGBgL770BC4\"",
    "mtime": "2023-09-01T18:02:42.912Z",
    "size": 363,
    "path": "../public/_nuxt/empty-image.8bd3ba09.svg"
  },
  "/_nuxt/entry.2f4e81be.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2aaa-+wUs9lkJFRppXM+U7sJQkghRaE4\"",
    "mtime": "2023-09-01T18:02:42.911Z",
    "size": 10922,
    "path": "../public/_nuxt/entry.2f4e81be.css"
  },
  "/_nuxt/entry.d3828d14.js": {
    "type": "application/javascript",
    "etag": "\"398fd-Crn7isYhxqqM4h4hbFY3koIO3Rc\"",
    "mtime": "2023-09-01T18:02:42.910Z",
    "size": 235773,
    "path": "../public/_nuxt/entry.d3828d14.js"
  },
  "/_nuxt/error-404.790b91dd.js": {
    "type": "application/javascript",
    "etag": "\"8cd-vFL5v/XUU4ce3eI4TogExWQb+cA\"",
    "mtime": "2023-09-01T18:02:42.909Z",
    "size": 2253,
    "path": "../public/_nuxt/error-404.790b91dd.js"
  },
  "/_nuxt/error-404.8bdbaeb8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e70-jl7r/kE1FF0H+CLPNh+07RJXuFI\"",
    "mtime": "2023-09-01T18:02:42.909Z",
    "size": 3696,
    "path": "../public/_nuxt/error-404.8bdbaeb8.css"
  },
  "/_nuxt/error-500.50717e13.js": {
    "type": "application/javascript",
    "etag": "\"751-vh7YyE7Zaj6hNvqEAg8SQnygnGo\"",
    "mtime": "2023-09-01T18:02:42.908Z",
    "size": 1873,
    "path": "../public/_nuxt/error-500.50717e13.js"
  },
  "/_nuxt/error-500.b63a96f5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7e0-loEWA9n4Kq4UMBzJyT6hY9SSl00\"",
    "mtime": "2023-09-01T18:02:42.907Z",
    "size": 2016,
    "path": "../public/_nuxt/error-500.b63a96f5.css"
  },
  "/_nuxt/error-component.3419528d.js": {
    "type": "application/javascript",
    "etag": "\"478-O+W5D9o2AkoiY7RTWFXsJ7iFQ5M\"",
    "mtime": "2023-09-01T18:02:42.907Z",
    "size": 1144,
    "path": "../public/_nuxt/error-component.3419528d.js"
  },
  "/_nuxt/game-schedule-background.46713c64.svg": {
    "type": "image/svg+xml",
    "etag": "\"2af7b2-XSzRd816q++fxgVNzj3Qy1FGs6U\"",
    "mtime": "2023-09-01T18:02:42.906Z",
    "size": 2815922,
    "path": "../public/_nuxt/game-schedule-background.46713c64.svg"
  },
  "/_nuxt/game-schedule-background.adb4afcb.js": {
    "type": "application/javascript",
    "etag": "\"2af11e-aCEZtsveRrVwDlyEnJjVrHPhu1k\"",
    "mtime": "2023-09-01T18:02:42.903Z",
    "size": 2814238,
    "path": "../public/_nuxt/game-schedule-background.adb4afcb.js"
  },
  "/_nuxt/index.26feb042.js": {
    "type": "application/javascript",
    "etag": "\"a8-b01nIGppBQ2o+Bfv8v0qvs7IwDo\"",
    "mtime": "2023-09-01T18:02:42.901Z",
    "size": 168,
    "path": "../public/_nuxt/index.26feb042.js"
  },
  "/_nuxt/index.2908d102.js": {
    "type": "application/javascript",
    "etag": "\"a6-SGx43ylrlFO+kgWUlgGQMzPYpgk\"",
    "mtime": "2023-09-01T18:02:42.900Z",
    "size": 166,
    "path": "../public/_nuxt/index.2908d102.js"
  },
  "/_nuxt/index.a0d89d87.js": {
    "type": "application/javascript",
    "etag": "\"1156-lFvuPGya/4ujgxlRYUC0qb/AiqA\"",
    "mtime": "2023-09-01T18:02:42.900Z",
    "size": 4438,
    "path": "../public/_nuxt/index.a0d89d87.js"
  },
  "/_nuxt/nuxt-link.4d886be7.js": {
    "type": "application/javascript",
    "etag": "\"10e1-1lGYLQVb2PD8HpeqOAi3uF+RCzM\"",
    "mtime": "2023-09-01T18:02:42.900Z",
    "size": 4321,
    "path": "../public/_nuxt/nuxt-link.4d886be7.js"
  },
  "/_nuxt/photo.869cb5d2.js": {
    "type": "application/javascript",
    "etag": "\"8723-bDGg20nnojIoRbhWSMXHvhwwQXo\"",
    "mtime": "2023-09-01T18:02:42.899Z",
    "size": 34595,
    "path": "../public/_nuxt/photo.869cb5d2.js"
  },
  "/_nuxt/photo.ac1798b9.svg": {
    "type": "image/svg+xml",
    "etag": "\"86a0-YLS7C7EIdDBDJWOJlLP8yc+xXsM\"",
    "mtime": "2023-09-01T18:02:42.899Z",
    "size": 34464,
    "path": "../public/_nuxt/photo.ac1798b9.svg"
  },
  "/_nuxt/plus.92f561ee.svg": {
    "type": "image/svg+xml",
    "etag": "\"112-aJZcc2yycaRZCPZjrT/tEApVGa4\"",
    "mtime": "2023-09-01T18:02:42.899Z",
    "size": 274,
    "path": "../public/_nuxt/plus.92f561ee.svg"
  },
  "/_nuxt/plus.aaa932f7.js": {
    "type": "application/javascript",
    "etag": "\"166-XdquaYKgWUVukczQcndGqw1PdgU\"",
    "mtime": "2023-09-01T18:02:42.898Z",
    "size": 358,
    "path": "../public/_nuxt/plus.aaa932f7.js"
  },
  "/_nuxt/profile.bbf5f008.js": {
    "type": "application/javascript",
    "etag": "\"8c-9wvj8yJe7JSLnOYM7eH5aFtobUk\"",
    "mtime": "2023-09-01T18:02:42.898Z",
    "size": 140,
    "path": "../public/_nuxt/profile.bbf5f008.js"
  },
  "/_nuxt/schedule.e41d0426.js": {
    "type": "application/javascript",
    "etag": "\"1d3-qBTFwNsU9S7gIGlzrkV+MRSoaWc\"",
    "mtime": "2023-09-01T18:02:42.897Z",
    "size": 467,
    "path": "../public/_nuxt/schedule.e41d0426.js"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    if (!event.handled) {
      event.node.res.statusCode = 304;
      event.node.res.end();
    }
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    if (!event.handled) {
      event.node.res.statusCode = 304;
      event.node.res.end();
    }
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const BASE_KEY = "i18n";
const CONFIG_KEY = "config";
const configStorage = prefixStorage(useStorage(), BASE_KEY);
const PRECOMPILED_LOCALE_KEY = "i18n:locales";
const localeStorage = prefixStorage(useStorage(), PRECOMPILED_LOCALE_KEY);
const resolveKey = (key) => `${key}.js`;
const localeKey = (locale, hash) => `${locale}-${hash}`;
const configKey = (hash) => `${CONFIG_KEY}-${hash}`;
const _uMJ7C1 = defineEventHandler(async (event) => {
  const body = await readBody(event);
  validate(body);
  const cacheCode = await getCacheCode(body);
  if (cacheCode) {
    await setResponseHeader(event, "content-type", "text/javascript");
    return cacheCode.toString();
  }
  const [code, errors] = generateCode(body);
  if (errors.length > 0) {
    throw createError({ statusMessage: errors.join("|"), statusCode: 400 });
  }
  await setCacheCode(code, body);
  await setResponseHeader(event, "content-type", "text/javascript");
  return code;
});
function validate(body) {
  if (!body.type) {
    throw createError({ statusMessage: `require the 'type'`, statusCode: 400 });
  }
  if (body.type === "locale") {
    if (!body.locale) {
      throw createError({ statusMessage: `require the 'locale'`, statusCode: 400 });
    }
  }
  if (!body.hash) {
    throw createError({ statusMessage: `require the 'hash'`, statusCode: 400 });
  }
  if (!body.resource) {
    throw createError({ statusMessage: `require the 'resource'`, statusCode: 400 });
  }
}
async function getCacheCode({ type, locale, hash }) {
  if (type === "locale") {
    return await localeStorage.getItem(resolveKey(localeKey(locale, hash)));
  } else if (type === "config") {
    return await configStorage.getItem(resolveKey(configKey(hash)));
  } else {
    return null;
  }
}
function generateCode(body) {
  const errors = [];
  const {
    i18n: {
      precompile: { strictMessage, escapeHtml }
    }
  } = useRuntimeConfig();
  const env = "production";
  let gen = "";
  if (body.type === "locale") {
    const { code } = generateJSON(JSON.stringify(body.resource), {
      env,
      strictMessage,
      escapeHtml,
      onError: (error) => {
        errors.push(error);
      }
    });
    gen = code;
  } else if (body.type === "config") {
    gen += `export default {
`;
    const codes = [];
    Object.keys(body.resource).reduce((codes2, key) => {
      const { code } = generateJSON(JSON.stringify(body.resource[key]), {
        type: "bare",
        env,
        strictMessage,
        escapeHtml,
        onError: (error) => {
          errors.push(error);
        }
      });
      codes2.push(`  ${JSON.stringify(key)}: ${code},
`);
      return codes2;
    }, codes);
    gen += codes.join("");
    gen += `}
`;
  }
  return [gen, errors];
}
async function setCacheCode(code, { type, locale, hash }) {
  if (type === "locale") {
    await localeStorage.setItem(resolveKey(localeKey(locale, hash)), code);
  } else if (type === "config") {
    await configStorage.setItem(resolveKey(configKey(hash)), code);
  }
}

/*!
  * shared v9.3.0-beta.17
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
/**
 * Original Utilities
 * written by kazuya kawaguchi
 */
const isFunction = (val) => typeof val === 'function';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isObject = (val) => val !== null && typeof val === 'object';

const _zlnX3i = defineEventHandler(async (event) => {
  const hash = event.context.params?.hash;
  if (hash == null) {
    throw createError({ statusMessage: `require the 'hash'`, statusCode: 400 });
  }
  const i18nMeta = await getI18nMeta();
  const [filename] = hash.split(".");
  const target = i18nMeta[filename];
  const loadPath = await resolveModule(target.path);
  const loader = await import(loadPath).then((m) => m.default || m);
  if (target.type === "locale") {
    if (target.locale == null) {
      throw createError({ statusMessage: `not found locale`, statusCode: 500 });
    }
    const resource = await loader(target.locale);
    const code = await precompileLocale(target.locale, filename, resource);
    await setResponseHeader(event, "content-type", "text/javascript");
    return code;
  } else if (target.type === "config") {
    const config = isFunction(loader) ? await loader() : isObject(loader) ? loader : {};
    const messages = config.messages || {};
    const code = await precompileConfig(filename, messages);
    await setResponseHeader(event, "content-type", "text/javascript");
    return code;
  } else {
    throw new Error("Invalid type");
  }
});
async function getI18nMeta() {
  return await useStorage().getItem("build:dist:server:i18n-meta.json");
}
async function resolveModule(path) {
  const storage = await useStorage();
  const rootMount = await storage.getMount("root");
  const root = rootMount.driver.options.base;
  const rootRelative = relative(new URL(globalThis._importMeta_.url).pathname, root);
  return join(rootRelative, "dist/server", path);
}
async function precompileLocale(locale, filename, messages) {
  return await $fetch("/__i18n__/precompile", {
    method: "POST",
    body: {
      locale,
      type: "locale",
      hash: filename,
      resource: messages
    }
  });
}
async function precompileConfig(filename, messages) {
  return await $fetch("/__i18n__/precompile", {
    method: "POST",
    body: {
      type: "config",
      hash: filename,
      resource: getNeedPrecompileMessages(messages)
    }
  });
}
function deepCopy(src, des, predicate) {
  for (const key in src) {
    if (isObject(src[key])) {
      if (!isObject(des[key]))
        des[key] = {};
      deepCopy(src[key], des[key], predicate);
    } else {
      if (predicate) {
        if (predicate(src[key], des[key])) {
          des[key] = src[key];
        }
      } else {
        des[key] = src[key];
      }
    }
  }
}
function getNeedPrecompileMessages(messages) {
  const needPrecompileMessages = {};
  const predicate = (src) => !isFunction(src);
  for (const [locale, message] of Object.entries(messages)) {
    const dest = needPrecompileMessages[locale] = {};
    deepCopy(message, dest, predicate);
  }
  return needPrecompileMessages;
}

const _lazy_xOf38v = () => import('../handlers/renderer.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_xOf38v, lazy: true, middleware: false, method: undefined },
  { route: '/__i18n__/precompile', handler: _uMJ7C1, lazy: false, middleware: false, method: "post" },
  { route: '/__i18n__/prerender/:hash', handler: _zlnX3i, lazy: false, middleware: false, method: "get" },
  { route: '/**', handler: _lazy_xOf38v, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || {};
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: $fetch });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

function getGracefulShutdownConfig() {
  return {
    disabled: !!process.env.NITRO_SHUTDOWN_DISABLED,
    signals: (process.env.NITRO_SHUTDOWN_SIGNALS || "SIGTERM SIGINT").split(" ").map((s) => s.trim()),
    timeout: Number.parseInt(process.env.NITRO_SHUTDOWN_TIMEOUT, 10) || 3e4,
    forceExit: !process.env.NITRO_SHUTDOWN_NO_FORCE_EXIT
  };
}
function setupGracefulShutdown(listener, nitroApp) {
  const shutdownConfig = getGracefulShutdownConfig();
  if (shutdownConfig.disabled) {
    return;
  }
  gracefulShutdown(listener, {
    signals: shutdownConfig.signals.join(" "),
    timeout: shutdownConfig.timeout,
    forceExit: shutdownConfig.forceExit,
    onShutdown: async () => {
      await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          console.warn("Graceful shutdown timeout, force exiting...");
          resolve();
        }, shutdownConfig.timeout);
        nitroApp.hooks.callHook("close").catch((err) => {
          console.error(err);
        }).finally(() => {
          clearTimeout(timeout);
          resolve();
        });
      });
    }
  });
}

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const listener = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const addressInfo = listener.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${addressInfo.family === "IPv6" ? `[${addressInfo.address}]` : addressInfo.address}:${addressInfo.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
trapUnhandledNodeErrors();
setupGracefulShutdown(listener, nitroApp);
const nodeServer = {};

export { useRuntimeConfig as a, getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
