/**
 * Created by Deyan Peychev on 21-Jul-17.
 */
let expect = require('chai').expect;

function createList() {
    let data = [];
    return {
        add: function (item) {
            data.push(item)
        },
        shiftLeft: function () {
            if (data.length > 1) {
                let first = data.shift();
                data.push(first);
            }
        },
        shiftRight: function () {
            if (data.length > 1) {
                let last = data.pop();
                data.unshift(last);
            }
        },
        swap: function (index1, index2) {
            if (!Number.isInteger(index1) || index1 < 0 || index1 >= data.length ||
                !Number.isInteger(index2) || index2 < 0 || index2 >= data.length ||
                index1 === index2) {
                return false;
            }
            let temp = data[index1];
            data[index1] = data[index2];
            data[index2] = temp;
            return true;
        },
        toString: function () {
            return data.join(", ");
        }
    };
}

describe("Add / Swap / Shift Left / Right in List", function() {
    let list;
    beforeEach(function () {
        list = createList();
    });
    describe("Initial Tests", function() {
        it('Program should be a function', function () {
           expect(typeof createList).to.equal('function');
        });
        it('Program should return an object', function () {
            expect(typeof list).to.equal('object');
        });
        it('Return object should have add function', function () {
            expect(list.hasOwnProperty('add')).to.equal(true);
        });
        it('Return object should have shiftLeft function', function () {
            expect(list.hasOwnProperty('shiftLeft')).to.equal(true);
        });
        it('Return object should have shiftRight function', function () {
            expect(list.hasOwnProperty('shiftRight')).to.equal(true);
        });
        it('Return object should have swap function', function () {
            expect(list.hasOwnProperty('swap')).to.equal(true);
        });
        it('Return object should have toString function', function () {
            expect(list.hasOwnProperty('toString')).to.equal(true);
        });
        it('Type of add should be function', function () {
            expect(typeof list.add).to.equal('function');
        });
        it('Type of shiftLeft should be function', function () {
            expect(typeof list.shiftLeft).to.equal('function');
        });
        it('Type of shiftRight should be function', function () {
            expect(typeof list.shiftRight).to.equal('function');
        });
        it('Type of swap should be function', function () {
            expect(typeof list.swap).to.equal('function');
        });
        it('Type of toString should be function', function () {
            expect(typeof list.toString).to.equal('function');
        });
        it('List should be empty on initialisation', function(){
            expect(list.toString()).to.equal('');
        })
    });
    describe("add function tests",function () {
        it('Should push elements correctly', function () {
            list.add('pesho');
            list.add('gosho');
            expect(list.toString()).to.equal('pesho, gosho');
        });
        it('Should work with different parameters types', function () {
            list.add('pesho');
            list.add(3);
            list.add({});
            expect(list.toString()).to.equal('pesho, 3, [object Object]');
        });
    });
    describe("shiftLeft tests", function () {
        it('Should work correctly for one-element array', function () {
            list.add(5);
            list.shiftLeft();
            expect(list.toString()).to.equal('5');
        });
        it('Should work correctly for multi-element array', function () {
            list.add(5);
            list.add(6);
            list.add(7);
            list.shiftLeft();
            expect(list.toString()).to.equal('6, 7, 5');
        });
        it('Should work correctly for different typed, multi-element array', function () {
            list.add(5);
            list.add('pesho');
            list.add({});
            list.shiftLeft();
            expect(list.toString()).to.equal('pesho, [object Object], 5');
        });
        it('Should work correctly with an empty array', function () {
            list.shiftLeft();
            expect(list.toString()).to.equal('');
        });
    });
    describe("shiftRight tests", function () {
        it('Should work correctly for one-element array', function () {
            list.add(5);
            list.shiftRight();
            expect(list.toString()).to.equal('5');
        });
        it('Should work correctly for multi-element array', function () {
            list.add(5);
            list.add(6);
            list.add(7);
            list.shiftRight();
            expect(list.toString()).to.equal('7, 5, 6');
        });
        it('Should work correctly for different typed, multi-element array', function () {
            list.add(5);
            list.add('pesho');
            list.add({});
            list.shiftRight();
            expect(list.toString()).to.equal('[object Object], 5, pesho');
        });
        it('Should work correctly with an empty array', function () {
            list.shiftRight();
            expect(list.toString()).to.equal('');
        });
    });
    describe("toString tests", function () {
        it('Should work correctly for an empty array', function () {
            expect(list.toString()).to.equal('');
        });
        it('Should work correctly for a single-element array', function () {
            list.add(5);
            expect(list.toString()).to.equal('5');
        });
        it('Should work correctly for a multi-element array', function () {
            list.add(5);
            list.add(5);
            expect(list.toString()).to.equal('5, 5');
        });
        it('Should work correctly for different typed, multi-element array', function () {
            list.add(5);
            list.add({});
            expect(list.toString()).to.equal('5, [object Object]');
        });
    });
    describe("swap tests", function () {
        it('Function should work with integers only', function () {
            list.add(5);
            list.add(6);
            list.add(7);
            list.add(8);
            list.add(9);
            expect(list.swap(1.0,3)).to.equal(true);
        });
        it('Function should return false for two invalid params', function () {
            list.add(5);
            list.add(6);
            list.add(7);
            list.add(8);
            list.add(9);
            expect(list.swap(1.5,{status: 'invalid'})).to.equal(false);
        });
        it('Function should return false for 1st invalid param', function () {
            list.add(5);
            list.add(6);
            list.add(7);
            list.add(8);
            list.add(9);
            expect(list.swap(1,{status: 'invalid'})).to.equal(false);
        });
        it('Function should return false for 2nd invalid param', function () {
            list.add(5);
            list.add(6);
            list.add(7);
            list.add(8);
            list.add(9);
            expect(list.swap({status: 'invalid'},1)).to.equal(false);
        });
        it('Function should return false for negative params', function () {
            list.add(5);
            list.add(6);
            list.add(7);
            list.add(8);
            list.add(9);
            list.add(10);
            expect( list.swap(-2,-4)).to.equal(false);
        });
        it('Function should return false for params equal to list.length', function () {
            list.add(5);
            list.add(6);
            list.add(7);
            list.add(8);
            list.add(9);
            list.add(10);
            expect( list.swap(2,6)).to.equal(false);
        });
        it('Function should return false if no params given', function () {
            list.add(5);
            list.add(6);
            list.add(7);
            list.add(8);
            list.add(9);
            expect(list.swap()).to.equal(false);
        });
        it('Function should return false if only 1 param is given', function () {
            list.add(5);
            list.add(6);
            list.add(7);
            list.add(8);
            list.add(9);
            expect(list.swap(1)).to.equal(false);
        });
        it('index1 should be >= 0', function () {
            list.add(5);
            list.add(6);
            list.add(7);
            list.add(8);
            list.add(9);
            expect(list.swap(-2,2)).to.equal(false);
        });
        it('index1 should be < list.length', function () {
            list.add(5);
            list.add(6);
            list.add(7);
            list.add(8);
            list.add(9);
            expect(list.swap(26,2)).to.equal(false);
        });
        it('index2 should be >= 0', function () {
            list.add(5);
            list.add(6);
            list.add(7);
            list.add(8);
            list.add(9);
            expect(list.swap(2,-2)).to.equal(false);
        });
        it('index2 should be < list.length', function () {
            list.add(5);
            list.add(6);
            list.add(7);
            list.add(8);
            list.add(9);
            expect(list.swap(2,26)).to.equal(false);
        });
        it('Indexes should not be the same', function () {
            list.add(5);
            list.add(6);
            list.add(7);
            list.add(8);
            list.add(9);
            expect(list.swap(2,2)).to.equal(false);
        });
        it('Should return false for empty array', function () {
           expect(list.swap(1,2)).to.equal(false);
        });
        it('Function should return false for 2 integers params, but 1st invalid', function () {
            list.add(5);
            list.add(6);
            list.add(7);
            list.add(8);
            list.add(9);
            expect(list.swap(-2,2)).to.equal(false);
        });
        it('Function should return false for 2 integers params, but 2nd invalid', function () {
            list.add(5);
            list.add(6);
            list.add(7);
            list.add(8);
            list.add(9);
            expect(list.swap(2,-2)).to.equal(false);
        });
        it('Function should swap elements correctly on border indexes', function () {
            list.add(5);
            list.add(6);
            list.add(7);
            list.add(8);
            list.add(9);
            list.swap(0,4);
            expect(list.toString()).to.equal('9, 6, 7, 8, 5');
        });
        it('Function should swap elements correctly on border indexes', function () {
            list.add(5);
            list.add(6);
            list.add(7);
            list.add(8);
            list.add(9);
            list.swap(4,0);
            expect(list.toString()).to.equal('9, 6, 7, 8, 5');
        });
        it('Function should swap elements correctly on regular indexes', function () {
            list.add(5);
            list.add(6);
            list.add(7);
            list.add(8);
            list.add(9);
            list.add(10);
            list.swap(2,4);
            expect(list.toString()).to.equal('5, 6, 9, 8, 7, 10');
        });
    });
});