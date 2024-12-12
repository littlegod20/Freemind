String.prototype.capitalize = function () {
  const first = this[0].toUpperCase();
  const rest = this.slice(1).toLowerCase();
  return first + rest;
};
