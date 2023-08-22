function s(e, t) {
  return e ? e.split(t || ",") : [];
}
function l(e, t, r) {
  if (!e.length || !t.length)
    return "";
  const n = [], u = r === void 0 ? "," : r;
  return t.some((c) => {
    Object.keys(e).some((i) => {
      "" + e[i].value == "" + c && n.push(e[i].text + u);
    });
  }), n.join("").substring(0, n.join("").length - 1);
}
export {
  l as selectDictLabels,
  s as stringToArray
};
