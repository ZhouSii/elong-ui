import * as o from "./src/index.mjs";
import { EvInput as f } from "./src/input/index.mjs";
import { EvSelect as p } from "./src/select/index.mjs";
const r = {
  install: (t) => {
    for (const e in o)
      t.use(o[e]);
  }
};
export {
  f as EvInput,
  p as EvSelect,
  r as default
};
