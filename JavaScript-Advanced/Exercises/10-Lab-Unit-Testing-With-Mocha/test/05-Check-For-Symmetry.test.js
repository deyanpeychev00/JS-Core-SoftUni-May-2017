/**
 * Created by Deyan Peychev on 08-Jul-17.
 */
let expect = require('chai').expect;
let isSymmetric = require('../export-functions').isSymmetric;

describe('Check for Symmetry', function () {
    it('Program should be a function', function () {
        expect(typeof isSymmetric).to.equal('function');
    });

    describe('Normal use case', function () {
        it('Returns true for symmetric array with odd length', function () {
            expect(isSymmetric([1,2,3,2,1])).to.equal(true);
        });
        it('Returns true for symmetric array with even length', function () {
            expect(isSymmetric([1,2,2,1])).to.equal(true);
        });
        it('Returns true for symmetric string array', function () {
            expect(isSymmetric(['pesho','gosho','gosho','pesho'])).to.equal(true);
        });
        it('Returns true for symmetric array with different types of values', function () {
            expect(isSymmetric([5,'hi',{a:5},new Date(),{a:5},'hi', 5])).to.equal(true);
        })
    });
    describe('Border cases', function () {
        it('Returns false for incorrect input type', function () {
            expect(isSymmetric("pesho")).to.equal(false);
            expect(isSymmetric(1,2,3,4,5)).to.equal(false);
        });
        it('Returns false for non-symmetric array', function () {
            expect(isSymmetric([1,2,3,4,5])).to.equal(false);
            expect(isSymmetric([5,'hi',{a:5},new Date(),{x:5},'hi', 5])).to.equal(false);
        });
        it('Returns true for one-element array', function () {
            expect(isSymmetric([0])).to.equal(true);
        });
        it('Returns false for non-symmetric array with different types of values', function () {
            expect(isSymmetric([5,'hi',{a:5},new Date(),{x:5},'hi', 5])).to.equal(false);
        })
    });
});
