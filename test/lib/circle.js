module.exports = Circle;

var PI = Math.PI;

function Circle(radious) {
  this.radious = radious;
}

Circle.prototype.area = function() {
  return this.radious * PI * PI;
}

Circle.prototype.circumference = function() {
  return this.radious * 2 * PI;
}
