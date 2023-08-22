'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const e = require('./src/index.js'),
  i = require('./src/input/index.js'),
  u = require('./src/select/index.js'),
  r = {
    install: (t) => {
      for (const n in e) t.use(e[n]);
    }
  };
exports.EvInput = i.EvInput;
exports.EvSelect = u.EvSelect;
exports.default = r;
