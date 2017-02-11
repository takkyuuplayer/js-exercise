// http://es6-features.org/
import assert from 'power-assert';

describe('Constant', () => {
  const PI = 3.1415;
  it('constant', () => {
    assert.equal(PI, 3.1415);
  });
});
describe('Scope', () => {
  describe('let', () => {
    const callbacks = [];
    for (let i = 0; i < 3; i += 1) {
      callbacks[i] = () => i * 2;
    }
    it('has block scope', () => {
      assert.equal(callbacks[0](), 0);
      assert.equal(callbacks[1](), 2);
      assert.equal(callbacks[2](), 4);
    });
  });
});
describe('Allow functions', () => {
  const evens = [0, 2, 4];

  describe('functions', () => {
    it('pass to map', () => {
      const odds = evens.map(v => v + 1);
      assert.deepEqual(odds, [1, 3, 5]);
    });

    it('passed to map with ()', () => {
      const pairs = evens.map(v => ({ even: v, odd: v + 1 }));
      assert.deepEqual(pairs, [{ even: 0, odd: 1 }, { even: 2, odd: 3 }, { even: 4, odd: 5 }]);
    });
    it('is passed to map', () => {
      const nums = evens.map((v, index) => v + index);
      assert.deepEqual(nums, [0, 3, 6]);
    });
  });

  describe('this object', () => {
    const self = this;
    it('this object will not changed', () => {
      evens.forEach(() => {
        assert.equal(self, this);
      });
    });
  });
});

describe('Parameter handling arguments', () => {
  describe('Default parameter for function', () => {
    function f(x, y = 7, z = 42) {
      return x + y + z;
    }
    it('can be set', () => {
      assert.equal(f(1), 50);
    });
  });
  describe('Rest parameters for function', () => {
    function f(x, y, ...rests) {
      return (x + y) * rests.length;
    }
    it('can be retrieve by ...hoge', () => {
      assert.equal(f(1, 2, 'hello', true, 7), 9);
    });
  });
  describe('Spread operator: ...', () => {
    const params = ['hello', true, 7];

    it('can expand array', () => {
      assert.deepEqual([1, 2, ...params], [1, 2, 'hello', true, 7]);
    });

    it('can be passed to function', () => {
      function f(x, y, ...rests) {
        return (x + y) * rests.length;
      }
      assert.deepEqual(f(1, 2, ...params), 9);
    });
  });
});

describe('Template Literals', () => {
  describe('String Interpolation', () => {
    const customer = { name: 'Foo' };
    const string = `Hello ${customer.name}.
Nice to meet you!`;
    it('can generate template string with multiple line', () => {
      assert.equal(string, 'Hello Foo.\nNice to meet you!');
    });
  });
});

describe('Enhanced Object Properties', () => {
  const a = 1;
  const b = 2;
  it('can be written in shortly', () => {
    const obj = { a, b };
    assert.deepEqual(obj, { a: 1, b: 2 });
  });
  it('can set key with computation', () => {
    const obj = { [a + b]: 'test' };
    assert.deepEqual(obj, { 3: 'test' });
  });
  it('can set method', () => {
    const obj = {
      sum(x, y) {
        return x + y;
      },
    };
    assert.equal(obj.sum(5, 8), 13);
  });
});
describe('Destructuring Assignment', () => {
  describe('Array', () => {
    const list = [1, 2, 3];
    let [a, , b] = list;

    it('can be destructed into indivisual variables', () => {
      assert.equal(a, 1);
      assert.equal(b, 3);
    });

    it('switching values', () => {
      [b, a] = [a, b];
      assert.equal(a, 3);
      assert.equal(b, 1);
    });

    it('can have default values for destruction', () => {
      const [x = 10, y = 11, z = 12, l = 14, m] = list;
      assert.equal(x, 1);
      assert.equal(y, 2);
      assert.equal(z, 3);
      assert.equal(l, 14);
      assert.equal(m, undefined);
    });
  });

  describe('Object', () => {
    it('can be destructed into indivisual variables', () => {
      const { a, b, c } = { a: 1, b: 2, c: 3 };
      assert.equal(a, 1);
      assert.equal(b, 2);
      assert.equal(c, 3);
    });
    it('can be destructed deeply ', () => {
      const { op: a, lhs: { op: b }, rhs: c } = { op: 1, lhs: { op: 2 }, rhs: 3 };
      assert.equal(a, 1);
      assert.equal(b, 2);
      assert.equal(c, 3);
    });
  });
  describe('Function', () => {
    it('can bind array params into indivisual variables', () => {
      function f([name, val]) {
        assert.equal(name, 'key');
        assert.equal(val, 'value');
      }
      f(['key', 'value']);
    });
    it('can bind object params into indivisual variables', () => {
      function f({ name: n, val: v }) {
        assert.equal(n, 'key');
        assert.equal(v, 'value');
      }
      f({ name: 'key', val: 'value' });
    });
    it('can bind shorthand notated object into indivisual variables', () => {
      function f({ name, val }) {
        assert.equal(name, 'key');
        assert.equal(val, 'value');
      }
      f({ name: 'key', val: 'value' });
    });
  });
});
