import __nuxt_component_0 from './game-schedule-background-66901f99.mjs';
import { defineComponent, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$7, a as _sfc_main$1 } from './GameEnrollmentsTable-d218a0b2.mjs';
import './Button-e9614dcb.mjs';
import '../server.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "schedule",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SvgoGameScheduleBackground = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_SvgoGameScheduleBackground, { class: "bg-svg" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$7, { heading: "\u0421\u0435\u0433\u043E\u0434\u043D\u044F, 23 \u0438\u044E\u043B\u044F" }, {
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
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/games/schedule.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=schedule-6dca1053.mjs.map
