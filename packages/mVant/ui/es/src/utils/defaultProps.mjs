const e = {
  modelValue: {
    type: [String, Number, Array],
    default: ""
  },
  customerType: {
    type: String,
    default: ""
  },
  placeholder: {
    type: String,
    default: ""
  },
  label: {
    type: String,
    default: ""
  },
  keyWord: {
    type: String,
    default: ""
  },
  labelWidth: {
    type: [String, Number],
    default: 90
  },
  columns: {
    type: Array,
    default: []
  },
  // 选择框形状
  shape: {
    type: String,
    default: "square"
  },
  required: {
    type: Boolean,
    default: !1
  },
  rules: {
    type: Array,
    default: () => []
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  scoped: {
    type: String,
    default: ""
  },
  attrs: {
    type: Object,
    default: () => ({})
  }
};
export {
  e as defaultProps
};
