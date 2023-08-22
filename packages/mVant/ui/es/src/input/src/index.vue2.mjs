import { defineComponent as a, computed as m, resolveComponent as i, openBlock as f, createBlock as c, mergeProps as v, unref as V, isRef as _, createSlots as g, withCtx as l, renderSlot as u } from "vue";
const B = a({
  name: "EvInput"
}), I = /* @__PURE__ */ a({
  ...B,
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    isInput: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["update:modelValue"],
  setup(o, { emit: s }) {
    const d = o, t = m({
      get: () => d.modelValue,
      set: (e) => {
        s("update:modelValue", e);
      }
    });
    return (e, n) => {
      const p = i("van-field");
      return f(), c(p, v(e.$attrs, {
        modelValue: V(t),
        "onUpdate:modelValue": n[0] || (n[0] = (r) => _(t) ? t.value = r : null),
        class: "m-input"
      }), g({
        button: l(() => [
          u(e.$slots, "button", {}, void 0, !0)
        ]),
        _: 2
      }, [
        o.isInput ? void 0 : {
          name: "input",
          fn: l(() => [
            u(e.$slots, "input", {}, void 0, !0)
          ])
        }
      ]), 1040, ["modelValue"]);
    };
  }
});
export {
  I as default
};
