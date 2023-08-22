'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const e = require('vue'),
  r = e.defineComponent({ name: 'EvInput' }),
  i = e.defineComponent({
    ...r,
    props: {
      modelValue: { type: String, default: '' },
      isInput: { type: Boolean, default: !0 }
    },
    emits: ['update:modelValue'],
    setup(n, { emit: u }) {
      const d = n,
        o = e.computed({
          get: () => d.modelValue,
          set: (t) => {
            u('update:modelValue', t);
          }
        });
      return (t, l) => {
        const s = e.resolveComponent('van-field');
        return (
          e.openBlock(),
          e.createBlock(
            s,
            e.mergeProps(t.$attrs, {
              modelValue: e.unref(o),
              'onUpdate:modelValue':
                l[0] || (l[0] = (a) => (e.isRef(o) ? (o.value = a) : null)),
              class: 'm-input'
            }),
            e.createSlots(
              {
                button: e.withCtx(() => [
                  e.renderSlot(t.$slots, 'button', {}, void 0, !0)
                ]),
                _: 2
              },
              [
                n.isInput
                  ? void 0
                  : {
                      name: 'input',
                      fn: e.withCtx(() => [
                        e.renderSlot(t.$slots, 'input', {}, void 0, !0)
                      ])
                    }
              ]
            ),
            1040,
            ['modelValue']
          )
        );
      };
    }
  });
exports.default = i;
