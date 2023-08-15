import * as e from "./components.mjs";
import { version as r } from "./package.json.mjs";
const s = function(o) {
  Object.entries(e).forEach(([n, t]) => {
    o.component(n, t);
  });
}, i = {
  install: s,
  version: r
};
export {
  i as default
};
