import assert from 'power-assert';
import deepFreeze from 'deep-freeze';

describe('freeze', () => {
  const list = [{
    a: 1,
  }];

  it('should return freezed object', () => {
    assert.deepStrictEqual(Object.freeze(list), list);
  });

  it('can freeze object properties', () => {
    assert.throws(() => { list.push(0); });
  });
  it('can not freeze inner objects', () => {
    assert.doesNotThrow(() => { list[0].a = 100; });
  });
});

describe('deepFreeze', () => {
  const list = [{
    a: 1,
  }];
  it('shoudl return freezed object', () => {
    assert.deepStrictEqual(deepFreeze(list), list);
  });

  it('can freeze object properties', () => {
    assert.throws(() => { list.push(0); });
  });
  it('can freeze inner objects', () => {
    assert.throws(() => { list[0].a = 100; });
  });
});
