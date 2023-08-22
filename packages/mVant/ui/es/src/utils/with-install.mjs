import { camelize as t } from "./format.mjs";
function l(e) {
  return e.install = (m) => {
    const { name: n } = e;
    n && (m.component(n, e), m.component(t(`-${n}`), e));
  }, e;
}
export {
  l as withInstall
};
