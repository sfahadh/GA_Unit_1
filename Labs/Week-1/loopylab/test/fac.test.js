import { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { factorial } from '../loop';


describe('factorial', function() {
  function test(n, ans) {
    expect(factorial(n)).to.equal(ans);

  }
  it('computes factorial of 1', () => {
    test(1, 1);
  });

  it('handles 2', () => {
    test(2, 2);
  });

  it('handles 5', () => {
    test(5, 120);
  });

  it('handles 6', () => {
    test(6, 720);
  })
});
