const assert = require('power-assert');

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getAge() {
    return this.age;
  }
}

describe('Person', () => {
  const alice = new Person('alice', 3);
  it('#getAge', () => {
    assert(alice.getAge() === 3);
  });
  it('#name', () => {
    assert(alice.name === 'alice');
  });
});
