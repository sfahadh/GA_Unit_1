import { countDown } from '../loop';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { manyEvens, manyOdds } from '../loop';

chai.use(sinonChai);
const expect = chai.expect;

describe("countDown", () => {
  beforeEach(() => {
    sinon.spy(console, "log");
  });
  afterEach(() => {
    console.log.restore();
  });

  it('handles 1', () => {
    countDown(1);
    const args = console.log.args;
    expect(args).to.deep.equal([[1]]);
  });

  it('handles 2', () => {
    countDown(2);
    const args = console.log.args;
    expect(args).to.deep.equal([[2], [1]]);
  });

  it('handles 11', () => {
    countDown(11);
    const args = console.log.args;
    expect(args[0][0]).to.equal(11);
    expect(args[3][0]).to.equal(8);
    expect(args[10][0]).to.equal(1);
    expect(args).to.have.length(11);
    expect(args[args.length - 1]).not.to.deep.include(0);
  });
});
