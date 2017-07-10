/**
 * Created by Deyan Peychev on 11-Jul-17.
 */
/**
 * Created by Deyan Peychev on 11-Jul-17.
 */
let expect = require('chai').expect;
let lookupChar = require('../export-functions').lookupChar;

describe('Char Lookup', function () {
    it('Program should be a function', function () {
        expect(typeof lookupChar).to.equal('function');
    });

    describe('Normal use case', function () {
        it('Should return correct char for correct params given', function () {
            expect(lookupChar('haha', 1)).to.equal('a');
        })
    });

    describe('Special case', function () {
        it('Should return undefined if first param is not string', function () {
            expect(lookupChar({nakov: 'bog'}, 15)).to.equal(undefined);
        });
        it('Should return undefined if second param is not integer', function () {
            expect(lookupChar('vald', '0invalid')).to.equal(undefined);
        });
        it('Should return undefined for incorrect params', function () {
            expect(lookupChar({nakov: 'bog'}, 'iBratMuKenov')).to.equal(undefined);
        });
        it('Should return "Incorrect index" if index is > string.length', function () {
            expect(lookupChar('haha', 10)).to.equal('Incorrect index');
        });
        it('Should return "Incorrect index" if index is < 0', function () {
            expect(lookupChar('haha', -3)).to.equal('Incorrect index');
        });
        it('Should return undefined if second param is fraction', function () {
            expect(lookupChar('vald', 3.5)).to.equal(undefined);
        })
    });
});
