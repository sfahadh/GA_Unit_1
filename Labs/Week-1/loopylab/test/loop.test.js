import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { manyEvens, manyOdds } from '../loop';

chai.use(sinonChai);
const expect = chai.expect;

describe("manyEvens", () => {
  before(() => {
    sinon.spy(console, "log");
  });
  after(() => {
    console.log.restore();
  });

  it ('should log 2', () => {
    manyEvens();
    expect(console.log.args).to.deep.include([2]);
  });

  it ('should log 100', () => {
    expect(console.log.args).to.deep.include([100]);
  })

  it ('should log first hundred evens', () => {
    manyEvens();

    [4, 16, 54, 96].forEach(n => expect(console.log).to.have.been.calledWith(n));
    [1, 3, 51, 77, 1, 0, 102].forEach(n => expect(console.log).not.to.have.been.calledWith(n));
  });
})

describe("manyOdds", () => {
  let args;
  before(() => {
    sinon.spy(console, 'log');
    manyOdds();
    args = console.log.args;
  });

  after(() => {
    console.log.restore();
  });

  it ('should log 3 and 103', () => {
    expect(args).to.deep.include([3]);
    expect(args).to.deep.include([103]);
  });

  it('should not log 1 or 105', () => {
    expect(args).not.to.deep.include([1]);
    expect(args).not.to.deep.include([105]);
  })

  it('should log higher odds', () => {
    [
      97, 
      55, 
      79,
      101,
      33
    ].forEach(n => expect(args).to.deep.include([n]));
  });
});
