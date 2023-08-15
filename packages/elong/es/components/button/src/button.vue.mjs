import { defineComponent as e, computed as m, openBlock as b, createElementBlock as f, normalizeClass as k, unref as _, renderSlot as g } from "vue";
import "../styles/index.css";
import { Props as y, Emits as C } from "./button.mjs";
const h = ["type", "autofocus", "disabled"], B = e({
  name: "ELongButton"
}), L = /* @__PURE__ */ e({
  ...B,
  props: y,
  emits: C,
  setup(s, { emit: n }) {
    const i = s, l = m(() => {
      const { type: o, size: t, round: a, plain: c, circle: d, disabled: u, loading: p } = i;
      return [
        {
          [`br-button--${o}`]: o,
          [`br-button--${t}`]: t,
          "is-disabled": u,
          "is-loading": p,
          "is-round": a,
          "is-plain": c,
          "is-circle": d
        }
      ];
    });
    function r(o) {
      n("click", o);
    }
    return (o, t) => (b(), f("button", {
      class: k(["br-button", _(l)]),
      type: o.nativeType,
      autofocus: o.autoFocus,
      disabled: o.disabled || o.loading,
      onClick: r
    }, [
      g(o.$slots, "default")
    ], 10, h));
  }
});
export {
  L as default
};
