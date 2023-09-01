import { useSSRContext, defineComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    variant: {},
    disabled: { type: Boolean },
    big: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const isFilled = props.variant === "fill";
    const isStroked = props.variant === "stroke";
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        disabled: props.disabled,
        style: { height: props.big ? "64px" : "40px" },
        class: [{
          "bg-purple hover:bg-purpleHover active:bg-purpleActive disabled:bg-gray2 text-white": isFilled,
          "border border-purple active:border-purpleActive disabled:border-gray2 hover:text-purpleHover active:text-purpleActive disabled:text-gray2": isStroked
        }, "flex space-x-2 justify-center items-center px-6 py-[9px] rounded-sm transition"]
      }, _attrs))} data-v-c7c02cdd>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, "data-v-c7c02cdd-s");
      _push(`</button>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Button.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Button = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c7c02cdd"]]);

export { Button as B };
//# sourceMappingURL=Button-e9614dcb.mjs.map
