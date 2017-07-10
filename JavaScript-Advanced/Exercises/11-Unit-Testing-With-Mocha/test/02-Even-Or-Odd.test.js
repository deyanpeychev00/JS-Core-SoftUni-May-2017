/**
 * Created by Deyan Peychev on 11-Jul-17.
 */
let expect = require('chai').expect;
let isOddOrEven = require('../export-functions').isOddOrEven;

describe('Even/Odd', function () {
    it('Program should be a function', function () {
       expect(typeof isOddOrEven).to.equal('function');
    });

    describe('Normal use case', function () {
        it('Should return even for string with even length', function () {
            expect(isOddOrEven('haha')).to.equal('even');
        });
        it('Should return odd for string with odd length', function () {
            expect(isOddOrEven('nakov')).to.equal('odd');
        });
    });

    describe('Special case', function () {
        it('Should return undefined for number parameter', function () {
            expect(isOddOrEven(10)).to.equal(undefined);
        });
        it('Should return undefined for object parameter', function () {
            expect(isOddOrEven({nakov: 'God'})).to.equal(undefined);
        })
    });
});
