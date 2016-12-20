const PI = Math.PI;

function Circle(radious) {
  this.radious = radious;
}

Circle.prototype.area = function area() {
  return this.radious * PI * PI;
};

Circle.prototype.circumference = function circumference() {
  return this.radious * 2 * PI;
};

module.exports = Circle;

