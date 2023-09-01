import { defineComponent, mergeProps, useSSRContext, unref, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderSlot, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { B as Button } from './Button-e9614dcb.mjs';
import { format, addHours } from 'date-fns';
import __nuxt_component_0 from './empty-image-cb94229b.mjs';

const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Section",
  __ssrInlineRender: true,
  props: {
    heading: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "pt-[100px] pb-[60px]" }, _attrs))}>`);
      if (props.heading) {
        _push(`<h3 class="mb-10">${ssrInterpolate(props.heading)}</h3>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</section>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Section.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "DateCell",
  __ssrInlineRender: true,
  props: {
    date: {}
  },
  setup(__props) {
    const props = __props;
    const dateFormatted = format(props.date, "dd.MM.yyyy");
    const timeStart = format(props.date, "HH:mm");
    const timeEnd = format(addHours(props.date, 3), "HH:mm");
    const cellValue = `${dateFormatted} 
 ${timeStart} - ${timeEnd}`;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({ class: "whitespace-pre-line" }, _attrs))}>${ssrInterpolate(cellValue)}</span>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/game-enrollments-table/DateCell.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "HostCell",
  __ssrInlineRender: true,
  props: {
    host: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex space-x-2 items-center" }, _attrs))}><img${ssrRenderAttr("src", props.host.image)} alt="\u0424\u043E\u0442\u043E \u0432\u0435\u0434\u0443\u0449\u0435\u0433\u043E" class="rounded-full w-10 h-10 object-cover"><span>${ssrInterpolate(props.host.username)}</span></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/game-enrollments-table/HostCell.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ParticipantsCounter",
  __ssrInlineRender: true,
  props: {
    participants: {},
    maxParticipants: {}
  },
  setup(__props) {
    const { participants, maxParticipants } = __props;
    const participantsCount = participants.length;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex space-x-1 items-center" }, _attrs))}><span class="px-2 py-1 rounded-md bg-purpleLight text-purple">${ssrInterpolate(`${unref(participantsCount)} / ${_ctx.maxParticipants}`)}</span><span class="text-gray">`);
      if (unref(participantsCount) < _ctx.maxParticipants) {
        _push(`<!--[--> \u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C ${ssrInterpolate(_ctx.maxParticipants - unref(participantsCount))} \u043C\u0435\u0441\u0442 <!--]-->`);
      } else {
        _push(`<!---->`);
      }
      if (unref(participantsCount) === _ctx.maxParticipants) {
        _push(`<!--[--> \u0432\u0441\u0435 \u043C\u0435\u0441\u0442\u0430 \u0437\u0430\u043D\u044F\u0442\u044B <!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</span></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/game-enrollments-table/ParticipantsCounter.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ParticipantsImagesRow",
  __ssrInlineRender: true,
  props: {
    participants: {}
  },
  setup(__props) {
    const props = __props;
    const getImageStyle = (index) => ({
      left: `${index * (32 - 8)}px`,
      position: index ? "absolute" : "static"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SvgoEmptyImage = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex relative" }, _attrs))}><!--[-->`);
      ssrRenderList(props.participants, (participant, index) => {
        _push(`<!--[-->`);
        if (index < 5) {
          _push(`<!--[-->`);
          if (participant.image) {
            _push(`<img${ssrRenderAttr("src", participant.image)}${ssrRenderAttr("alt", `\u0424\u043E\u0442\u043E \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0430 ${participant.username}`)} class="rounded-full w-[32px] h-[32px] object-cover overflow-hidden" style="${ssrRenderStyle(getImageStyle(index))}">`);
          } else {
            _push(ssrRenderComponent(_component_SvgoEmptyImage, {
              class: "w-8 h-8",
              style: getImageStyle(index)
            }, null, _parent));
          }
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        if (props.participants.length > 5) {
          _push(`<div class="absolute left-[120px] rounded-full border border-white text-purple font-bold w-[32px] h-[32px] flex items-center justify-center bg-purpleLight">${ssrInterpolate(`+${props.participants.length - 5}`)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/game-enrollments-table/ParticipantsImagesRow.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TableBody",
  __ssrInlineRender: true,
  props: {
    rowsData: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<tbody${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><!--[-->`);
      ssrRenderList(props.rowsData, (row, index) => {
        _push(`<tr class="bg-table-bodyRowBg mt-3 rounded-lg px-3 py-4 space-x-3 backdrop-blur-sm [&amp;&gt;td]:px-3 [&amp;&gt;td]:py-4 body2"><td class="w-[150px]">`);
        _push(ssrRenderComponent(_sfc_main$6, {
          date: row.date
        }, null, _parent));
        _push(`</td><td class="w-[180px]">`);
        _push(ssrRenderComponent(_sfc_main$5, {
          host: row.host
        }, null, _parent));
        _push(`</td><td class="w-[234px]">${ssrInterpolate(row.game.title)}</td><td class="w-[269px]"><span class="whitespace-pre-line">${ssrInterpolate(`${row.location.title} 
 ${row.location.address}`)}</span></td><td class="w-[115px]">${ssrInterpolate(`${row.price} \u20BD`)}</td><td class="w-[180px] space-y-2 flex flex-col body3">`);
        _push(ssrRenderComponent(_sfc_main$3, {
          participants: row.participants
        }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$4, {
          participants: row.participants,
          "max-participants": row.maxParticipants
        }, null, _parent));
        _push(`</td><td class="w-[136px] flex items-center">`);
        if (row.participants.length < row.maxParticipants) {
          _push(ssrRenderComponent(Button, {
            variant: "fill",
            onClick: () => console.log(row.id)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`\u042F \u043F\u043E\u0439\u0434\u0443`);
              } else {
                return [
                  createTextVNode("\u042F \u043F\u043E\u0439\u0434\u0443")
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (row.participants.length === row.maxParticipants) {
          _push(`<button class="text-purple body2 text-left"> \u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u044B\u0435 </button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</td></tr>`);
      });
      _push(`<!--]--></tbody>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/game-enrollments-table/TableBody.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TableHeader",
  __ssrInlineRender: true,
  props: {
    columnsData: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<thead${ssrRenderAttrs(mergeProps({ class: "bg-table-headRowBg px-3 rounded-lg text-gray" }, _attrs))}><tr class="divide-x divide-solid space-x-3 body2 backdrop-blur-sm"><!--[-->`);
      ssrRenderList(props.columnsData, (column) => {
        _push(`<th class="border-table-headerDivider font-medium px-3 py-4" style="${ssrRenderStyle({ width: column.size + "px" })}">${ssrInterpolate(column.title)}</th>`);
      });
      _push(`<!--]--></tr></thead>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/game-enrollments-table/TableHeader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "GameEnrollmentsTable",
  __ssrInlineRender: true,
  setup(__props) {
    const gameEnrollmentsData = [
      {
        id: 1,
        date: /* @__PURE__ */ new Date(),
        host: {
          username: "\u041A\u043E\u043D\u0441\u0442\u0430\u043D\u0442\u0438\u043D",
          image: "http://80.249.149.128:1337/uploads/thumbnail_360_F_224869519_a_Rae_Lneq_A_Lf_PN_Bzg0xx_MZ_Xghtv_B_Xkf_IA_09b42d8679.jpg"
        },
        game: {
          title: "\u041E\u0447\u0435\u043D\u044C \u041E\u0447\u0435\u043D\u044C \u041E\u0447\u0435\u043D\u044C \u041A\u0440\u0443\u0442\u0430\u044F \u043C\u0430\u0444\u0438\u044F \u0432 2 \u0441\u0442\u0440\u043E\u0447\u043A\u0438"
        },
        location: {
          title: "\u041A\u0430\u043B\u044C\u044F\u043D\u043D\u0430\u044F \xAB\u041F\u0443\u043F\u0435\u0440\u0421\u0443\u043F\u0435\u0440\xBB",
          address: "(\u041A\u043E\u043B\u043E\u0442\u0443\u0448\u043A\u0438\u043D\u0441\u043A\u0430\u044F \u0443\u043B\u0438\u0446\u0430, \u043F\u043B., 9, \u0434.2)"
        },
        price: "10 500",
        participants: [
          {
            username: "\u041E\u043B\u0435\u0433",
            image: "http://80.249.149.128:1337/uploads/thumbnail_2_d236d21640.jpg"
          },
          { username: "\u0421\u0435\u0440\u0433\u0435\u0439", image: "" },
          {
            username: "\u0412\u043B\u0430\u0434\u0438\u043C\u0438\u0440",
            image: "http://80.249.149.128:1337/uploads/thumbnail_3_2287a7ea53.jpeg\n"
          },
          {
            username: "\u0410\u0440\u0442\u0435\u043C",
            image: "http://80.249.149.128:1337/uploads/thumbnail_1_bff1055cf7.jpg"
          },
          { username: "\u041D\u0438\u043A\u0438\u0442\u0430", image: "" },
          { username: "\u0414\u0438\u0430\u043D\u0430", image: "" },
          { username: "\u0410\u043B\u0435\u043D\u0430", image: "" },
          { username: "\u0418\u0433\u043E\u0440\u044C", image: "" }
        ],
        maxParticipants: 15,
        completed: false
      },
      {
        id: 2,
        date: /* @__PURE__ */ new Date(),
        host: {
          username: "\u041A\u043E\u043D\u0441\u0442\u0430\u043D\u0442\u0438\u043D",
          image: "http://80.249.149.128:1337/uploads/thumbnail_360_F_224869519_a_Rae_Lneq_A_Lf_PN_Bzg0xx_MZ_Xghtv_B_Xkf_IA_09b42d8679.jpg"
        },
        game: {
          title: "\u041E\u0447\u0435\u043D\u044C \u041E\u0447\u0435\u043D\u044C \u041E\u0447\u0435\u043D\u044C \u041A\u0440\u0443\u0442\u0430\u044F \u043C\u0430\u0444\u0438\u044F \u0432 2 \u0441\u0442\u0440\u043E\u0447\u043A\u0438"
        },
        location: {
          title: "\u041A\u0430\u043B\u044C\u044F\u043D\u043D\u0430\u044F \xAB\u041F\u0443\u043F\u0435\u0440\u0421\u0443\u043F\u0435\u0440\xBB",
          address: "(\u041A\u043E\u043B\u043E\u0442\u0443\u0448\u043A\u0438\u043D\u0441\u043A\u0430\u044F \u0443\u043B\u0438\u0446\u0430, \u043F\u043B., 9, \u0434.2)"
        },
        price: "10 500",
        participants: [
          {
            username: "\u041E\u043B\u0435\u0433",
            image: "http://80.249.149.128:1337/uploads/thumbnail_2_d236d21640.jpg"
          },
          { username: "\u0421\u0435\u0440\u0433\u0435\u0439", image: "" },
          {
            username: "\u0412\u043B\u0430\u0434\u0438\u043C\u0438\u0440",
            image: "http://80.249.149.128:1337/uploads/thumbnail_3_2287a7ea53.jpeg\n"
          },
          {
            username: "\u0410\u0440\u0442\u0435\u043C",
            image: "http://80.249.149.128:1337/uploads/thumbnail_1_bff1055cf7.jpg"
          },
          { username: "\u041D\u0438\u043A\u0438\u0442\u0430", image: "" },
          { username: "\u0414\u0438\u0430\u043D\u0430", image: "" },
          { username: "\u0410\u043B\u0435\u043D\u0430", image: "" },
          { username: "\u0418\u0433\u043E\u0440\u044C", image: "" }
        ],
        maxParticipants: 8,
        completed: false
      },
      {
        id: 2,
        date: /* @__PURE__ */ new Date(),
        host: {
          username: "\u041A\u043E\u043D\u0441\u0442\u0430\u043D\u0442\u0438\u043D",
          image: "http://80.249.149.128:1337/uploads/thumbnail_360_F_224869519_a_Rae_Lneq_A_Lf_PN_Bzg0xx_MZ_Xghtv_B_Xkf_IA_09b42d8679.jpg"
        },
        game: {
          title: "\u041E\u0447\u0435\u043D\u044C \u041E\u0447\u0435\u043D\u044C \u041E\u0447\u0435\u043D\u044C \u041A\u0440\u0443\u0442\u0430\u044F \u043C\u0430\u0444\u0438\u044F \u0432 2 \u0441\u0442\u0440\u043E\u0447\u043A\u0438"
        },
        location: {
          title: "\u041A\u0430\u043B\u044C\u044F\u043D\u043D\u0430\u044F \xAB\u041F\u0443\u043F\u0435\u0440\u0421\u0443\u043F\u0435\u0440\xBB",
          address: "(\u041A\u043E\u043B\u043E\u0442\u0443\u0448\u043A\u0438\u043D\u0441\u043A\u0430\u044F \u0443\u043B\u0438\u0446\u0430, \u043F\u043B., 9, \u0434.2)"
        },
        price: "10 500",
        participants: [
          {
            username: "\u041E\u043B\u0435\u0433",
            image: "http://80.249.149.128:1337/uploads/thumbnail_2_d236d21640.jpg"
          },
          { username: "\u0421\u0435\u0440\u0433\u0435\u0439", image: "" },
          {
            username: "\u0412\u043B\u0430\u0434\u0438\u043C\u0438\u0440",
            image: "http://80.249.149.128:1337/uploads/thumbnail_3_2287a7ea53.jpeg\n"
          },
          {
            username: "\u0410\u0440\u0442\u0435\u043C",
            image: "http://80.249.149.128:1337/uploads/thumbnail_1_bff1055cf7.jpg"
          },
          { username: "\u041D\u0438\u043A\u0438\u0442\u0430", image: "" },
          { username: "\u0414\u0438\u0430\u043D\u0430", image: "" },
          { username: "\u0410\u043B\u0435\u043D\u0430", image: "" },
          { username: "\u0418\u0433\u043E\u0440\u044C", image: "" }
        ],
        maxParticipants: 10,
        completed: false
      }
    ];
    const columnsData = [
      {
        title: "\u0414\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F",
        size: 150
      },
      {
        title: "\u0412\u0435\u0434\u0443\u0449\u0438\u0439",
        size: 180
      },
      {
        title: "\u0418\u0433\u0440\u0430",
        size: 234
      },
      {
        title: "\u041C\u0435\u0441\u0442\u043E",
        size: 269
      },
      {
        title: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C",
        size: 115
      },
      {
        title: "\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438",
        size: 180
      },
      {
        title: "\u0417\u0430\u043F\u0438\u0441\u044C \u043D\u0430 \u0438\u0433\u0440\u0443",
        size: 136
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<table${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$1, { "columns-data": columnsData }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, { "rows-data": gameEnrollmentsData }, null, _parent));
      _push(`</table>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/game-enrollments-table/GameEnrollmentsTable.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$7 as _, _sfc_main as a };
//# sourceMappingURL=GameEnrollmentsTable-d218a0b2.mjs.map
