/**
 * Created by Deyan Peychev on 08-Jul-17.
 */
let expect = require('chai').expect;
let sum = require('../export-functions').sum;

describe('Sum of Numbers', function () {

    describe('Normal use case', function () {
        it('Should return 3 for [1,2]', function () {
            expect(sum([1, 2])).to.equal(3);
        });
        it('Should return 1 for [1]', function () {
            expect(sum([1])).to.equal(1);
        });
    });

    describe('Special case', function () {
        it('Should return 0 for []', function () {
            expect(sum([])).to.equal(0);
        });
        it('Should return NaN', function () {
            expect(sum(['pesho',2,3])).to.be.NaN;
        });
        it('Should return NaN for invalid data', function () {
            expect(sum("invalid")).to.be.NaN;
        });
        it('Should return 3.3', function () {
            expect(sum([1.1,1.1,1.1])).to.be.closeTo(3.3, 0.0001);
        });
        it('Should return 3 for [1.5,2.5,-1]', function () {
            expect(sum([1.5,2.5,-1])).to.equal(3);
        });
        it('Should work with negative numbers', function () {
            expect(sum([-1.5,-2.5,-1])).to.equal(-5);
        });
    });
});
