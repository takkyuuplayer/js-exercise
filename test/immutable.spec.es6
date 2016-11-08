import assert from 'power-assert';
import Immutable from 'immutable';

describe("Immutable.Map", () => {
  describe('set', () => {
    const map1 = Immutable.Map({ a: 1, b:2, c:3 });
    const map2 = map1.set('b', 50);
    it('create new immutable object', () => {
      assert.equal(map1.get('b'), 2);
      assert.equal(map2.get('b'), 50);
    });
  });
});
describe('Immutable.List', () => {
  describe('of', () => {
    it('create immutable list', () => {
      const list1 = Immutable.List.of(1, 2);
      const list2 = list1.push(3, 4, 5);
      const list3 = list2.unshift(0);
      const list4 = list1.concat(list2, list3);

      assert.equal(list1.size ,2);
      assert.equal(list2.size ,5);
      assert.equal(list3.size ,6);
      assert.equal(list4.size ,13);
      assert.equal(list4.get(0), 1);
    });
  });
});
