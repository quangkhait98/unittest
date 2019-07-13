require('chai').should();
const plus = require('../../src/utils/plus.js');
describe("unit test function",()=>{
    it("-1 + 1 === 0",()=>{
        plus(-1,1).should.equal(0);
    })
    it("2 + 3 === 5",()=>{
        plus(2,3).should.equal(5);
    })

    it("'2' + 3 === throw",()=>{
     const err = ()=> plus('2',3);
     err.should.throw();
    })
})