const { expect } = require('chai');
const { add } = require('../common');

describe('Common module', function () {
  it('Should add 2 ints', () => {
    expect(add(1, 1)).to.eq(2);
  });
});
