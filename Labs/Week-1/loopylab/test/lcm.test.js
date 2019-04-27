import { expect } from 'chai';
import { leastCommonMult } from '../loop';

describe('leastCommonMult', () => {

  function test(a, b, ans) {
    expect(leastCommonMult(a, b)).to.equal(ans);
  }

  it('handles 2 and 3', () => {
    test(2, 3, 6);
  });

  it('handles 8 and 4', () => {
    test(8, 4, 16);
  });

  it('handles 4 and 10', () => {
    test(4, 10, 20);
  });

  it('handles 7 and 3', () => {
    test(7, 3, 21);
  });

  it('handles 22 and 43', () => {
    test(22, 42, 462);
  });
});


