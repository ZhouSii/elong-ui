'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const e = require('vue'),
  C = require('../../input/index.js'),
  k = require('../../utils/defaultProps.js'),
  m = require('../../utils/core.js'),
  S = (n) => (e.pushScopeId('data-v-1b6223e9'), (n = n()), e.popScopeId(), n),
  w = S(() => e.createElementVNode('span', { class: 'vanCheck' }, null, -1)),
  g = { key: 0, class: 'toolbar' },
  E = { class: 'title' },
  N = { class: 'flex-1' },
  y = e.defineComponent({ name: 'EvSelect' }),
  q = e.defineComponent({
    ...y,
    props: {
      ...k.defaultProps,
      placeholder: { type: String, default: '请选择' }
    },
    emits: ['update:modelValue', 'onChange'],
    setup(n, { emit: i }) {
      const r = n,
        v = !!e.useSlots().search,
        { columns: u } = e.toRefs(r),
        a = e.ref(!1),
        d = e.ref(''),
        s = e.ref(null),
        c = e.computed({
          get: () => (
            (s.value = r.modelValue ? r.modelValue + '' : null),
            (d.value = r.modelValue ? r.modelValue + '' : ''),
            m.stringToArray(r.modelValue + '')
          ),
          set: (o) => {
            d.value = o[0];
          }
        }),
        p = e.computed(() =>
          m.selectDictLabels(u == null ? void 0 : u.value, c.value)
        ),
        f = () => {
          s.value !== d.value && ((s.value = d.value), i('onChange', s.value)),
            (a.value = !1);
        },
        h = ({ selectedOptions: o }) => {
          const l = o[0].value || '';
          s.value !== l &&
            ((s.value = l), i('update:modelValue', l), i('onChange', l)),
            (a.value = !1);
        };
      return (o, l) => {
        const V = e.resolveComponent('van-picker'),
          b = e.resolveComponent('van-popup');
        return (
          e.openBlock(),
          e.createElementBlock(
            e.Fragment,
            null,
            [
              e.createVNode(
                e.unref(C.EvInput),
                {
                  modelValue: e.unref(p),
                  'onUpdate:modelValue':
                    l[0] || (l[0] = (t) => (e.isRef(p) ? (p.value = t) : null)),
                  name: 'picker',
                  readonly: '',
                  label: o.label,
                  placeholder: n.placeholder,
                  required: o.required,
                  rules: o.rules,
                  type: 'textarea',
                  rows: 1,
                  autosize: !0,
                  'label-width': o.labelWidth,
                  clearable: o.attrs.clearable || !0,
                  onClick: l[1] || (l[1] = (t) => (a.value = !0))
                },
                { button: e.withCtx(() => [w]), _: 1 },
                8,
                [
                  'modelValue',
                  'label',
                  'placeholder',
                  'required',
                  'rules',
                  'label-width',
                  'clearable'
                ]
              ),
              e.createVNode(
                b,
                {
                  show: a.value,
                  'onUpdate:show': l[5] || (l[5] = (t) => (a.value = t)),
                  round: '',
                  position: 'bottom',
                  style: { height: '50%' },
                  teleport: o.attrs.teleport,
                  class: 'MCheckPicker flex-col overflow-hidden',
                  flex: '~'
                },
                {
                  default: e.withCtx(() => [
                    v
                      ? (e.openBlock(),
                        e.createElementBlock('div', g, [
                          e.createElementVNode(
                            'span',
                            {
                              class: 'cancel',
                              onClick: l[2] || (l[2] = (t) => (a.value = !1))
                            },
                            '取消'
                          ),
                          e.createElementVNode(
                            'div',
                            E,
                            e.toDisplayString(o.label),
                            1
                          ),
                          e.createElementVNode(
                            'span',
                            { class: 'confirm', onClick: f },
                            '确认'
                          )
                        ]))
                      : e.createCommentVNode('', !0),
                    e.renderSlot(o.$slots, 'search', {}, void 0, !0),
                    e.createElementVNode('div', N, [
                      e.createVNode(
                        V,
                        {
                          ref: 'picker',
                          modelValue: e.unref(c),
                          'onUpdate:modelValue':
                            l[3] ||
                            (l[3] = (t) => (e.isRef(c) ? (c.value = t) : null)),
                          title: o.label,
                          columns: e.unref(u),
                          'show-toolbar': !v,
                          onConfirm: h,
                          onCancel: l[4] || (l[4] = (t) => (a.value = !1))
                        },
                        null,
                        8,
                        ['modelValue', 'title', 'columns', 'show-toolbar']
                      )
                    ])
                  ]),
                  _: 3
                },
                8,
                ['show', 'teleport']
              )
            ],
            64
          )
        );
      };
    }
  });
exports.default = q;
