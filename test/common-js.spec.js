'use strict';
var assert = require('power-assert');

describe('module.exports', function() {
  var Circle = require('./lib/circle');

  it('exports Circle', function() {
    var c1 = new Circle(5);
    assert.equal(c1.area(), 5 * Math.PI * Math.PI);
  });
});
