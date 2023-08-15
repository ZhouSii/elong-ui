const t = {
  type: {
    type: String,
    default: () => "default",
    validator(e) {
      return ["default", "primary", "success", "info", "danger", "warning"].includes(e);
    }
  },
  size: {
    type: String,
    validator(e) {
      return ["default", "medium", "small", "mini", "tiny"].includes(
        e
      );
    }
  },
  plain: {
    type: Boolean,
    default: () => !1
  },
  round: {
    type: Boolean,
    default: () => !1
  },
  circle: {
    type: Boolean,
    default: () => !1
  },
  loading: {
    type: Boolean,
    default: () => !1
  },
  disabled: {
    type: Boolean,
    default: () => !1
  },
  icon: {
    type: String,
    default: () => ""
  },
  autoFocus: {
    type: Boolean,
    default: () => !1
  },
  nativeType: {
    type: String,
    default: () => "button",
    validator(e) {
      return ["button", "submit", "reset"].includes(e);
    }
  }
}, a = {
  click: (e) => e
};
export {
  a as Emits,
  t as Props
};
