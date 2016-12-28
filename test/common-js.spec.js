

const assert = require('power-assert');

describe('module.exports', () => {
  const Circle = require('./lib/circle');

  it('exports Circle', () => {
    const c1 = new Circle(5);
    assert.equal(c1.area(), 5 * Math.PI * Math.PI);
  });
});
