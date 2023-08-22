'use strict';
Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
function u(e, t) {
  return e ? e.split(t || ',') : [];
}
function l(e, t, n) {
  if (!e.length || !t.length) return '';
  const r = [],
    s = n === void 0 ? ',' : n;
  return (
    t.some((c) => {
      Object.keys(e).some((i) => {
        '' + e[i].value == '' + c && r.push(e[i].text + s);
      });
    }),
    r.join('').substring(0, r.join('').length - 1)
  );
}
exports.selectDictLabels = l;
exports.stringToArray = u;
