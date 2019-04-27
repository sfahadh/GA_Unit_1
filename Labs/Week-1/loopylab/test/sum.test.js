import { expect } from 'chai';
import { sumToN } from '../loop';

describe('sumToN', () => {

  function test(n, ans) {
    expect(sumToN(n)).to.equal(ans);
  }

  it('handles 1', () => {
    test(1, 1);
  });

  it('handles 3', () => {
    test(3, 6);
  });

  it('handles 12', () => {
    test(12, 78);
  });

  it('handles 23', () => {
    test(23, 276)
  });
});

