'use strict';
Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
const c = /-(\w)/g,
  a = (e) => e.replace(c, (l, t) => t.toUpperCase());
exports.camelize = a;
