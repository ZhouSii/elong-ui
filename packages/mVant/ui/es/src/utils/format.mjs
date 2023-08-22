const a = /-(\w)/g, p = (e) => e.replace(a, (o, c) => c.toUpperCase());
export {
  p as camelize
};
