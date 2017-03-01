import assert from 'power-assert';
import React from 'react';

describe('React', () => {
  describe('.isValidElement', () => {
    it('should return true only for react element', () => {
      assert(React.isValidElement(<div />));
      assert(React.isValidElement(<a>test</a>));

      assert(!React.isValidElement('<a />'));
      assert(!React.isValidElement(true));
    });
  });
});
