import { _ as __nuxt_component_0 } from './nuxt-link-ae137144.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { B as Button } from './Button-e9614dcb.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'ufo';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'destr';
import 'h3';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
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

const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<nav${ssrRenderAttrs(_attrs)} data-v-4c6919f8><ul class="flex space-x-[50px]" data-v-4c6919f8><li data-v-4c6919f8>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "link",
    to: "/games/schedule"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("schedule"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("schedule")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-4c6919f8>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "link",
    to: "/archive"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("archive"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("archive")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-4c6919f8>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "link",
    to: "/games"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("games"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("games")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></nav>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Navbar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-4c6919f8"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "flex h-20 justify-between items-center" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("main"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("main")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Navbar, null, null, _parent));
      _push(ssrRenderComponent(Button, { variant: "fill" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0412\u043E\u0439\u0442\u0438`);
          } else {
            return [
              createTextVNode("\u0412\u043E\u0439\u0442\u0438")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</header>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Header = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-09eb4ce9.mjs.map
