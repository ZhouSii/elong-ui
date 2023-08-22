'use strict';
Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
const l = require('./format.js');
function r(e) {
  return (
    (e.install = (n) => {
      const { name: t } = e;
      t && (n.component(t, e), n.component(l.camelize(`-${t}`), e));
    }),
    e
  );
}
exports.withInstall = r;
