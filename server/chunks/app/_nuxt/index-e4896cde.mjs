import __nuxt_component_0 from './background-0847f7f8.mjs';
import { defineComponent, withCtx, createVNode, createTextVNode, useSSRContext, watchEffect, ref, toRef, getCurrentInstance, onServerPrefetch, unref } from 'vue';
import { a as useStrapiAuth, b as useCookie, u as useNuxtApp, d as useStrapiClient, e as useStrapiVersion, c as createError } from '../server.mjs';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { B as Button } from './Button-e9614dcb.mjs';
import { _ as _sfc_main$7, a as _sfc_main$1 } from './GameEnrollmentsTable-d218a0b2.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'destr';
import 'h3';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'ufo';
import 'cookie-es';
import 'ohash';
import 'qs';
import '@intlify/core-base';
import 'is-https';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'unstorage';
import 'unstorage/drivers/fs';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import '@intlify/bundle-utils';
import 'http-graceful-shutdown';
import 'date-fns';
import './empty-image-cb94229b.mjs';

const getDefault = () => null;
function useAsyncData(...args) {
  var _a, _b, _c, _d, _e;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  options.server = (_a = options.server) != null ? _a : true;
  options.default = (_b = options.default) != null ? _b : getDefault;
  options.lazy = (_c = options.lazy) != null ? _c : false;
  options.immediate = (_d = options.immediate) != null ? _d : true;
  const nuxt = useNuxtApp();
  const getCachedData = () => nuxt.isHydrating ? nuxt.payload.data[key] : nuxt.static.data[key];
  const hasCachedData = () => getCachedData() !== void 0;
  if (!nuxt._asyncData[key]) {
    nuxt._asyncData[key] = {
      data: ref((_e = getCachedData()) != null ? _e : options.default()),
      pending: ref(!hasCachedData()),
      error: toRef(nuxt.payload._errors, key)
    };
  }
  const asyncData = { ...nuxt._asyncData[key] };
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    if (nuxt._asyncDataPromises[key]) {
      if (opts.dedupe === false) {
        return nuxt._asyncDataPromises[key];
      }
      nuxt._asyncDataPromises[key].cancelled = true;
    }
    if ((opts._initial || nuxt.isHydrating && opts._initial !== false) && hasCachedData()) {
      return getCachedData();
    }
    asyncData.pending.value = true;
    const promise = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxt));
        } catch (err) {
          reject(err);
        }
      }
    ).then((_result) => {
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      let result = _result;
      if (options.transform) {
        result = options.transform(_result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
    }).catch((error) => {
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      asyncData.error.value = error;
      asyncData.data.value = unref(options.default());
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = createError(asyncData.error.value);
      }
      delete nuxt._asyncDataPromises[key];
    });
    nuxt._asyncDataPromises[key] = promise;
    return nuxt._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxt.hook("app:created", () => promise);
    }
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
const useAuth = () => {
  const { setToken } = useStrapiAuth();
  const cookie = useCookie("jwt", { maxAge: 5 * 60 });
  watchEffect(() => {
    if (cookie.value) {
      setToken(cookie.value);
    }
  });
  return !!cookie.value;
};
const useStrapi4 = () => {
  const client = useStrapiClient();
  const version = useStrapiVersion();
  if (version !== "v4") {
    console.warn("useStrapi4 is only available for v4");
  }
  const find = (contentType2, params) => {
    return client(`/${contentType2}`, { method: "GET", params });
  };
  const findOne = (contentType2, id, params) => {
    if (typeof id === "object") {
      params = id;
      id = void 0;
    }
    const path = [contentType2, id].filter(Boolean).join("/");
    return client(path, { method: "GET", params });
  };
  const create = (contentType2, data) => {
    return client(`/${contentType2}`, { method: "POST", body: { data } });
  };
  const update = (contentType2, id, data) => {
    if (typeof id === "object") {
      data = id;
      id = void 0;
    }
    const path = [contentType2, id].filter(Boolean).join("/");
    return client(path, { method: "PUT", body: { data } });
  };
  const _delete = (contentType2, id) => {
    const path = [contentType2, id].filter(Boolean).join("/");
    return client(path, { method: "DELETE" });
  };
  return {
    find,
    findOne,
    create,
    update,
    delete: _delete
  };
};
const useStrapi = () => {
  return useStrapi4();
};
const contentType = "games";
const useGames = () => {
  const { find, findOne, update, create } = useStrapi();
  const findGames = async () => {
    const res = await useAsyncData("games", () => find(contentType));
    return res;
  };
  const findOneGame = async (gameId) => {
    const res = await useAsyncData(`games/${gameId}`, () => find(contentType));
    return res;
  };
  return {
    findGames,
    findOneGame
  };
};
const slogan = "\u0421\u043E\u0431\u0438\u0440\u0430\u0439 \u0434\u0440\u0443\u0437\u0435\u0439 \n \u0438 \u043F\u043E\u0431\u0435\u0436\u0434\u0430\u0439\u0442\u0435 \u0432\u043C\u0435\u0441\u0442\u0435";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useAuth();
    useGames();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SvgoBackground = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_SvgoBackground, { class: "bg-svg" }, null, _parent));
      _push(`<h1 class="text-center whitespace-pre-line mt-[169px]">${ssrInterpolate(slogan)}</h1><p class="body1 text-center mt-4"> \u0417\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u0443\u0439 \u043C\u0435\u0441\u0442\u043E \u043D\u0430 \u043D\u0430\u0448\u0443 \u043D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u0443\u044E \u0438\u0433\u0440\u0443 \u043F\u0440\u044F\u043C\u043E \u0441\u0435\u0439\u0447\u0430\u0441! </p>`);
      _push(ssrRenderComponent(_sfc_main$7, {
        class: "mt-[203px]",
        heading: "\u0418\u0433\u0440\u0430\u044E\u0442 \u0441\u0435\u0439\u0447\u0430\u0441"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$7, { heading: "\u0411\u043B\u0438\u0436\u0430\u0439\u0448\u0438\u0435 \u0438\u0433\u0440\u044B" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex flex-col items-center justify-center mt-[145px]"><h2>\u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439 \u043D\u043E\u0432\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 \u043E\u0431\u0449\u0435\u043D\u0438\u044F</h2><div class="flex items-center space-x-[37px]"><span class="whitespace-pre-line">${ssrInterpolate("\u0412\u044B\u0431\u0435\u0440\u0438 \u0443\u0434\u043E\u0431\u043D\u043E\u0435 \u0434\u043B\u044F \u0442\u0435\u0431\u044F \n \u0432\u0440\u0435\u043C\u044F \u0432 \u043D\u0430\u0448\u0435\u043C \u0440\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0438")}</span><h2>\u043E\u043A\u0443\u043D\u0443\u0432\u0448\u0438\u0441\u044C \u0432 <b>\u043C\u0438\u0440 \u0438\u0433\u0440</b></h2></div>`);
      _push(ssrRenderComponent(Button, {
        class: "mt-10 w-[440px]",
        variant: "fill",
        big: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u041F\u043E\u043B\u043D\u043E\u0435 \u0440\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435`);
          } else {
            return [
              createTextVNode("\u041F\u043E\u043B\u043D\u043E\u0435 \u0440\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-e4896cde.mjs.map
