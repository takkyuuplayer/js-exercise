const PI = Math.PI;

function Circle(radious) {
  this.radious = radious;
}

Circle.prototype.area = () => this.radious * PI * PI;

Circle.prototype.circumference = () => this.radious * 2 * PI;

module.exports = Circle;

