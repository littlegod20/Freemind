String.prototype.capitalize = function () {
  const first = this[0].toUpperCase();
  const rest = this.slice(1).toLowerCase();
  return first + rest;
};


String.prototype.camelCase = function(){
  return this.split(' ').map((word, index) => {
    if(index === 0) return word.toLowerCase();
    return word.capitalize();
  }).join('');
}