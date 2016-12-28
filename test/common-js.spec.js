const assert = require('power-assert');
const Circle = require('./lib/circle');

describe('module.exports', () => {
  it('exports Circle', () => {
    const c1 = new Circle(5);
    assert.equal(c1.area(), 5 * Math.PI * Math.PI);
  });
});
