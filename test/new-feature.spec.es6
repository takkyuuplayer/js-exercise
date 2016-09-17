import assert from 'power-assert'

describe('Constant', () => {
  const PI = 3.1415;
  it('constant', () => {
    assert.equal(PI, 3.1415);
  });
});
describe('Scope', () => {
  describe('let', () => {
    let callbacks = [];
    for (let i = 0; i < 3; i++) {
      callbacks[i] = () => { return i * 2 };
    }
    it('has block scope', () => {
      assert.equal(callbacks[0](), 0);
      assert.equal(callbacks[1](), 2);
      assert.equal(callbacks[2](), 4);
    });
  });
  describe('Block Scope', () => {
    {
        function foo () { return 1 }
        it('1st time', () => {
          assert.equal(foo(), 1);
        });
        {
          function foo () { return 2 }
          it('2nd time', () => {
            assert.equal(foo(), 2);
          });
        }
        it('does not overwrite 1st time', () => {
          assert.equal(foo(), 1);
        });
    }
  });
});
describe('Allow functions', () => {
  let evens = [0, 2, 4];

  describe('functions', () => {
    it('pass to map', () => {
      let odds  = evens.map(v => v + 1);
      assert.deepEqual(odds, [1,3,5]);
    });

    it('passed to map with ()', () => {
      let pairs = evens.map(v => ({even: v, odd: v + 1 }));
      assert.deepEqual(pairs, [{even: 0, odd: 1}, {even: 2, odd: 3}, {even: 4, odd: 5}] );
    });
    it('is passed to map', () => {
      let nums  = evens.map((v, index) => {
        return v + index
      });
      assert.deepEqual(nums, [0, 3, 6]);
    });
  });

  describe('this object', () => {
    let self = this;
    it('this object will not changed', () => {
      evens.forEach( (v) => {
        assert.equal(self, this);
      });
    });
  });
});

describe('Parameter handling arguments', () => {
  describe('Default parameter for function', () => {
    function f (x, y = 7, z = 42) {
          return x + y + z
    }
    it('can be set', () => {
      assert.equal(f(1), 50);
    });
  });
  describe('Rest parameters for function', () => {
    function f (x, y, ...rests) {
          return (x + y) * rests.length
    }
    it('can be retrieve by ...hoge', () => {
      assert.equal(f(1, 2, "hello", true, 7), 9);
    });
  });
  describe('Spread operator: ...', () => {
    var params = [ "hello", true, 7 ];

    it('can expand array', () => {
      assert.deepEqual([ 1, 2, ...params ], [1,2, 'hello', true, 7]);
    });

    it('can be passed to function', () => {
      function f (x, y, ...rests) {
            return (x + y) * rests.length
      }
      assert.deepEqual(f(1, 2, ...params), 9);
    });
  });
});

describe('Template Literals', () => {
  describe('String Interpolation', () => {
    let customer = { name: "Foo" };
    let string = `Hello ${customer.name}.
Nice to meet you!`;
    it('can generate template string with multiple line', () => {
      assert.equal(string, 'Hello Foo.\nNice to meet you!');
    });
  });
  describe('Custom Interpolation', () => {
    function test (a, b, c) {
      it('expand parameters', () => {
        assert.deepEqual(a, [ "http://example.com/foo?bar=", "&quux=", "" ]);
        assert.deepEqual(b, 3);
        assert.deepEqual(c, 'quux');
      });
    }
    let bar = 1;
    let baz = 2;
    let quux = 'quux';
    test `http://example.com/foo?bar=${bar + baz}&quux=${quux}`;
  });
  describe('Raw String Access', () => {
    function test (strings, val1) {
      it('raw access', () => {
        assert.deepEqual(strings, ["foo\n", "bar"]);
        assert.equal(strings.raw[0], 'foo\\n');
        assert.equal(strings.raw[1], 'bar');
        assert.equal(val1, 42);
      });
    }
    test `foo\n${ 42 }bar`;

    it('String.raw can show raw string', () => {
      assert.equal(String.raw `foo\n${ 42 }bar`, "foo\\n42bar");
    });
  });
});
