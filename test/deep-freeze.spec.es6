import assert from 'power-assert';
import deepFreeze from 'deep-freeze';

describe("freeze", () => {
  const list = [{
    a: 1
  }];
  Object.freeze(list);

  it('can freeze object properties', () => {
    try {
      list.push(0);
      assert(false);
    } catch (e) {
      assert('Exception to update freezed object');
    };
  });
  it('can not freeze inner objects', () => {
    try {
      list[0].a = 100;
      assert('cannot freeze!');
    } catch (e) {
      assert(false);
    };
  });
});

describe("deepFreeze", () => {
  const list = [{
    a: 1
  }];
  deepFreeze(list);

  it('can freeze object properties', () => {
    try {
      list.push(0);
      assert(false);
    } catch (e) {
      assert('Freezed');
    };
  });
  it('can freeze inner objects', () => {
    try {
      list[0].a = 100;
      assert(false);
    } catch (e) {
      assert('Freezed');
    };
  });
});
