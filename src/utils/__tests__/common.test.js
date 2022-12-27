const { expect } = require('chai');
const { add, convetToNumber } = require('../common');

describe('Common module', function () {
  describe('add fn', function () {
    it('Should add 2 numbers', () => {
      expect(add(1, 1)).to.eq(2);
    });

    it('Should not add 2 non-numbers', () => {
      expect(add('a', 'a')).to.be.NaN;
    });
  });

  describe('convetToNumber fn', function () {
    it('Should convert to number', () => {
      expect(convetToNumber('1')).to.eq(1);
    });

    it('Should convert to NaN', () => {
      expect(convetToNumber('a')).to.be.NaN;
    });
  });
});
