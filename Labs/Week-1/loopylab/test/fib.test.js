import { expect } from 'chai';
import { fib } from '../loop';

describe('fib', () => {
  function test(n, ans) {
    expect(fib(n)).to.equal(ans);
  }

  it('handles 1', () => {
    test(1, 0);
  });

  it('handles 2', () => {
    test(2, 1);
  });

  it('handles 3', () => {
    test(3, 1);
  });

  it('handles 4', () => {
    test(4, 2);
  });

  it('handles 5', () => {
    test(5, 3);
  });

  it('handles 13', () => {
    test(13, 144);
  });
});

