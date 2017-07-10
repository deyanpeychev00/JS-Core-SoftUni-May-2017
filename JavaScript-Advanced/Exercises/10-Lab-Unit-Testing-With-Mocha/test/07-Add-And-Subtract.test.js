/**
 * Created by Deyan Peychev on 08-Jul-17.
 */
let expect = require('chai').expect;
const createCalculator = require('../export-functions').createCalculator;

describe('Add/Subtract', function () {
    let calc;
    beforeEach(function () {
       calc = createCalculator();
    });

    it('Program should be a function', () =>{
        expect(typeof createCalculator).to.equal('function');
    });

    describe('Normal use case', function () {
        it('Program should return object', function () {
            expect(typeof calc).to.equal('object');
        });

        it('Zero value on initialize', function () {
            expect(calc.get()).to.equal(0);
        });
        it('Normal add() functionality', function () {
            calc.add(33);
            calc.add(36);
            expect(calc.get()).to.equal(69);
        });
        it('Normal subtract() functionality', function () {
            calc.subtract(33);
            calc.subtract(36);
            expect(calc.get()).to.equal(-69);
        });
        it('Calculator works with fractions', function () {
            calc.add(5.15);
            calc.subtract(2.13);
            expect(calc.get()).to.be.closeTo(3.02, 0.0001);
        });
        it('Calculator works with negative numbers', function () {
            calc.add(-2);
            calc.subtract(-3);
            expect(calc.get()).to.equal(1);
        });
        it('Calculator works with string numbers', function () {
            calc.add('-2');
            calc.subtract('-3');
            expect(calc.get()).to.equal(1);
        });
    });

    describe('Error cases', function () {
        it('Calculator should not add NaNs', function () {
            calc.add('69nakov');
            expect(calc.get()).to.be.NaN;
        });
        it('Calculator should not subtract NaNs', function () {
            calc.add('69kenov');
            expect(calc.get()).to.be.NaN;
        });
    })
});