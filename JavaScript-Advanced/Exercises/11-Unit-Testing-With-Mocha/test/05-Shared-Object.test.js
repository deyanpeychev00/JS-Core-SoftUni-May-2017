/**
 * Created by Deyan Peychev on 11-Jul-17.
 */
let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');
let sharedObject = require('../export-functions').sharedObject;

document.body.innerHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Shared Object</title>
</head>
<body>
    <div id="wrapper">
        <input type="text" id="name">
        <input type="text" id="income">
    </div>
</body>
</html>
`;

describe('Shared Object', function () {

    it('Program type should be a function', function () {
       expect(typeof sharedObject).to.equal('object');
    });

    describe('Initial values tests', function () {
        it('Initial name value should be null', function () {
            expect(sharedObject.name).to.be.null;
        });
        it('Initial income value should be null', function () {
            expect(sharedObject.income).to.be.null;
        });
    });
    
    describe('changeName tests', function () {
        it('Should return null for empty string input', function () {
            sharedObject.changeName('');
            expect(sharedObject.name).to.be.null;
        });
        it('Should work correctly for correct input', function () {
            sharedObject.changeName('Pesho');
            expect(sharedObject.name).to.equal('Pesho', 'Name did not changed correctly!');
        });

        describe('HTML input name tests', function () {
            it('Should return null for empty string input', function () {
                sharedObject.changeName('Nakov');
                sharedObject.changeName('');
                let nameVal = $('#name');
                expect(nameVal.val()).to.be.equal('Nakov');
            });
            it('Should work correctly for correct input', function () {
                sharedObject.changeName('Pesho');
                let nameVal = $('#name');
                expect(nameVal.val()).to.equal('Pesho', 'Name did not changed correctly!');
            });
        });
    });

    describe('changeIncome tests', function () {
        it('Should not change income for string input', function () {
            sharedObject.changeIncome('invalid');
            expect(sharedObject.income).to.be.null;
        });
        it('Should work correctly with correct values', function () {
            sharedObject.changeIncome(10);
            sharedObject.changeIncome(5);
            expect(sharedObject.income).to.be.equal(5);
        });

        it('Should work with fractions', function () {
            sharedObject.changeIncome(10);
            sharedObject.changeIncome(5.5);
            expect(sharedObject.income).to.be.equal(10);
        });
        it('Should work with negative numbers', function () {
            sharedObject.changeIncome(10);
            sharedObject.changeIncome(-5);
            expect(sharedObject.income).to.be.equal(10);
        });
        it('Should work with zero', function () {
            sharedObject.changeIncome(10);
            sharedObject.changeIncome(0);
            expect(sharedObject.income).to.be.equal(10);
        });

        describe('HTML changeIncome tests', function () {
            it('Should not change income for string input', function () {
                sharedObject.changeIncome(10);
                sharedObject.changeIncome('invalid');
                let income = $('#income');
                expect(income.val()).to.equal('10');
            });
            it('Should work correctly with correct values', function () {
                sharedObject.changeIncome(10);
                sharedObject.changeIncome(5);
                let income = $('#income');
                expect(income.val()).to.be.equal('5');
            });
            it('Should work with fractions', function () {
                sharedObject.changeIncome(10);
                sharedObject.changeIncome(5.5);
                let income = $('#income');
                expect(income.val()).to.be.equal('10');
            });
            it('Should work with negative numbers', function () {
                sharedObject.changeIncome(10);
                sharedObject.changeIncome(-5);
                let income = $('#income');
                expect(income.val()).to.be.equal('10');
            });
            it('Should work with zero', function () {
                sharedObject.changeIncome(10);
                sharedObject.changeIncome(0);
                let income = $('#income');
                expect(income.val()).to.be.equal('10');
            });
        });
    });

    describe('updateName tests', function () {
        it('Should not change name for empty string input', function () {
            sharedObject.changeName('Pesho');
            lat = nameEl = $('#name');
            nameEl.val('');
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal('Pesho');
        });
        it('Should change name for string input', function () {
            sharedObject.changeName('Pesho');
            lat = nameEl = $('#name');
            nameEl.val('Nakov');
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal('Nakov');
        });
    });

    describe('updateIncome tests', function () {
       it('Should not change income for string input', function () {
           sharedObject.changeIncome(10);
           let income = $('#income');
           income.val('invalid');
           sharedObject.updateIncome();
           expect(sharedObject.income).to.be.equal(10);
       });
        it('Should work with fractions', function () {
            sharedObject.changeIncome(10);
            let income = $('#income');
            income.val('5.5');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(10);
        });
        it('Should work with negative numbers', function () {
            sharedObject.changeIncome(10);
            let income = $('#income');
            income.val('-5');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(10);
        });
        it('Should work with zero', function () {
            sharedObject.changeIncome(10);
            let income = $('#income');
            income.val('0');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(10);
        });
        it('Should work correctly with correct params', function () {
            sharedObject.changeIncome(10);
            let income = $('#income');
            income.val('5');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(5);
        });
    });
});