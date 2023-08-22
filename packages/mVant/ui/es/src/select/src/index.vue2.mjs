import { defineComponent as g, useSlots as q, toRefs as N, ref as m, computed as b, resolveComponent as V, openBlock as C, createElementBlock as k, Fragment as P, createVNode as f, unref as i, isRef as w, withCtx as S, createElementVNode as r, toDisplayString as U, createCommentVNode as B, renderSlot as D, pushScopeId as L, popScopeId as R } from "vue";
import { EvInput as _ } from "../../input/index.mjs";
import { defaultProps as z } from "../../utils/defaultProps.mjs";
import { stringToArray as A, selectDictLabels as F } from "../../utils/core.mjs";
const M = (a) => (L("data-v-1b6223e9"), a = a(), R(), a), T = /* @__PURE__ */ M(() => /* @__PURE__ */ r("span", { class: "vanCheck" }, null, -1)), W = {
  key: 0,
  class: "toolbar"
}, j = { class: "title" }, G = { class: "flex-1" }, H = g({
  name: "EvSelect"
}), X = /* @__PURE__ */ g({
  ...H,
  props: {
    ...z,
    placeholder: {
      type: String,
      default: "请选择"
    }
  },
  emits: ["update:modelValue", "onChange"],
  setup(a, { emit: c }) {
    const n = a, h = !!q().search, { columns: u } = N(n), t = m(!1), d = m(""), s = m(null), p = b({
      get: () => (s.value = n.modelValue ? n.modelValue + "" : null, d.value = n.modelValue ? n.modelValue + "" : "", A(n.modelValue + "")),
      set: (l) => {
        d.value = l[0];
      }
    }), v = b(() => F(u == null ? void 0 : u.value, p.value)), y = () => {
      s.value !== d.value && (s.value = d.value, c("onChange", s.value)), t.value = !1;
    }, E = ({ selectedOptions: l }) => {
      const e = l[0].value || "";
      s.value !== e && (s.value = e, c("update:modelValue", e), c("onChange", e)), t.value = !1;
    };
    return (l, e) => {
      const I = V("van-picker"), $ = V("van-popup");
      return C(), k(P, null, [
        f(i(_), {
          modelValue: i(v),
          "onUpdate:modelValue": e[0] || (e[0] = (o) => w(v) ? v.value = o : null),
          name: "picker",
          readonly: "",
          label: l.label,
          placeholder: a.placeholder,
          required: l.required,
          rules: l.rules,
          type: "textarea",
          rows: 1,
          autosize: !0,
          "label-width": l.labelWidth,
          clearable: l.attrs.clearable || !0,
          onClick: e[1] || (e[1] = (o) => t.value = !0)
        }, {
          button: S(() => [
            T
          ]),
          _: 1
        }, 8, ["modelValue", "label", "placeholder", "required", "rules", "label-width", "clearable"]),
        f($, {
          show: t.value,
          "onUpdate:show": e[5] || (e[5] = (o) => t.value = o),
          round: "",
          position: "bottom",
          style: { height: "50%" },
          teleport: l.attrs.teleport,
          class: "MCheckPicker flex-col overflow-hidden",
          flex: "~"
        }, {
          default: S(() => [
            h ? (C(), k("div", W, [
              r("span", {
                class: "cancel",
                onClick: e[2] || (e[2] = (o) => t.value = !1)
              }, "取消"),
              r("div", j, U(l.label), 1),
              r("span", {
                class: "confirm",
                onClick: y
              }, "确认")
            ])) : B("", !0),
            D(l.$slots, "search", {}, void 0, !0),
            r("div", G, [
              f(I, {
                ref: "picker",
                modelValue: i(p),
                "onUpdate:modelValue": e[3] || (e[3] = (o) => w(p) ? p.value = o : null),
                title: l.label,
                columns: i(u),
                "show-toolbar": !h,
                onConfirm: E,
                onCancel: e[4] || (e[4] = (o) => t.value = !1)
              }, null, 8, ["modelValue", "title", "columns", "show-toolbar"])
            ])
          ]),
          _: 3
        }, 8, ["show", "teleport"])
      ], 64);
    };
  }
});
export {
  X as default
};
