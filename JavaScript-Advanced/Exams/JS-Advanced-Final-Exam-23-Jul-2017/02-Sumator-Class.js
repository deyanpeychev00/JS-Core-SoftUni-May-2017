/**
 * Created by Deyan Peychev on 23-Jul-17.
 */
let expect = require('chai').expect;

class Sumator {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    sumNums() {
        let sum = 0;
        for (let item of this.data)
            if (typeof (item) === 'number')
                sum += item;
        return sum;
    }
    removeByFilter(filterFunc) {
        this.data = this.data.filter(x => !filterFunc(x));
    }
    toString() {
        if (this.data.length > 0)
            return this.data.join(", ");
        else
            return '(empty)';
    }
}

describe("Sumator Class", function() {
    let obj;
    beforeEach(function () {
        obj = new Sumator();
    });
    describe('Initial tests', function () {
        it('Should have valid instance', function () {
           expect(obj).to.be.instanceof(Sumator);
        });
        it('Should be a class', function () {
            expect(typeof obj).to.equal('object');
        });
        it('Should have data constructor', function () {
            expect(obj.data.toString()).to.equal('');
        });
        it('Should have data constructor', function () {
            expect(typeof obj.data).to.equal('object');
        });
        it('Should have data constructor', function () {
            expect(obj.hasOwnProperty('data')).to.be.true;
        });
        it('add func', function () {
            expect(typeof obj.add).to.equal('function');
        });
        it('add func', function () {
            expect(obj.hasOwnProperty('add')).to.be.false;
        });
        it('sumNums func', function () {
            expect(typeof obj.sumNums).to.equal('function');
        });
        it('removeByFilter func', function () {
            expect(typeof obj.removeByFilter).to.equal('function');
        });
        it('toString func', function () {
            expect(typeof obj.toString).to.equal('function');
        });
    });

    describe('add tests', function () {
        it('Should add 1 item correctly', function () {
            obj.add('pesho');
            expect(obj.data.toString()).to.equal('pesho');
        });
        it('Should add many items correctly', function () {
            obj.add('pesho');
            obj.add('gosho');
            obj.add('sasho');
            expect(obj.data.toString()).to.equal('pesho,gosho,sasho');
        });
        it('Should work with no parameters', function () {
            obj.add();
            expect(obj.data.toString()).to.equal('');
        });
        it('Should add different kinds of params', function () {
            obj.add(5);
            obj.add([]);
            obj.add({test:'hi'});
            expect(obj.data.toString()).to.equal('5,,[object Object]');
        });
    });
    describe('sumNums tests', function () {
        it('initial sum should be 0', function () {
            expect(obj.sumNums()).to.equal(0);
        });
        it('should ignore strings', function () {
            obj.add('pesho');
            expect(obj.sumNums()).to.equal(0);
        });
        it('should sum num array correctly', function () {
            obj.add(6);
            obj.add(5);
            obj.add(5);
            expect(obj.sumNums()).to.equal(16);
        });
        it('should work with fractions', function () {
            obj.add(6.3);
            obj.add(5);
            obj.add(5.5);
            expect(obj.sumNums()).to.be.closeTo(16.8, 1.0000);
        });
        it('fractions border case', function () {
            obj.add(1.1);
            obj.add(1.1);
            obj.add(1.1);
            expect(obj.sumNums()).to.be.closeTo(3.3, 1.0000);
        });
        it('should extract only numbers from the array', function () {
            obj.add(1);
            obj.add(2);
            obj.add("three");
            obj.add({});
            obj.add(4);
            expect(obj.sumNums()).to.equal(7);
        });
    });
    describe('toString tests', function () {
        it('empty array tests', function () {
            expect(obj.toString()).to.equal('(empty)');
        });
        it('filled array tests', function () {
            obj.add(1);
            obj.add(2);
            obj.add("three");
            obj.add(4);
            expect(obj.toString()).to.equal('1, 2, three, 4');
        });
        it('print different kinds of params', function () {
            obj.add(5);
            obj.add([]);
            obj.add({test:'hi'});
            expect(obj.toString()).to.equal('5, , [object Object]');
        });
    });
    describe('removeByFilter tests', function () {
        it('odd numbers func tests', function () {
            obj.add(1);
            obj.add(2);
            obj.add(3);
            obj.add(4);
            obj.add(5);
            obj.removeByFilter(x => x % 2 === 0);
            expect(obj.toString()).to.equal('1, 3, 5');
        });
        it('odd fractions func tests', function () {
            obj.add(1);
            obj.add(2.2);
            obj.add(3.5);
            obj.add(4);
            obj.add(5);
            obj.removeByFilter(x => x % 2 === 0);
            expect(obj.toString()).to.equal('1, 2.2, 3.5, 5');
        });
        it('even numbers func tests', function () {
            obj.add(1);
            obj.add(2);
            obj.add(3);
            obj.add(4);
            obj.add(5);
            obj.removeByFilter(x => x % 2 !== 0);
            expect(obj.toString()).to.equal('2, 4');
        });
        it('even fractions func tests', function () {
            obj.add(1);
            obj.add(2.2);
            obj.add(3.5);
            obj.add(4);
            obj.add(5);
            obj.removeByFilter(x => x % 2 !== 0);
            expect(obj.toString()).to.equal('4');
        });
        it('undefined tests', function () {
            obj.removeByFilter(x => x % 2 !== 0);
            expect(obj.toString()).to.equal('(empty)');
            expect(obj.data.toString()).to.equal('');
        });
        it('positive numbers func tests', function () {
            obj.add(1);
            obj.add(2.2);
            obj.add(3.5);
            obj.add(4);
            obj.add(5);
            obj.add(0);
            obj.removeByFilter(x => x < 0);
            expect(obj.toString()).to.equal('1, 2.2, 3.5, 4, 5, 0');
        });
        it('positive numbers func tests', function () {
            obj.add(1);
            obj.add(2.2);
            obj.add(3.5);
            obj.add(4);
            obj.add(5);
            obj.removeByFilter(x => x > 0);
            expect(obj.data.toString()).to.equal('');
        });
        it('positive numbers func tests toString', function () {
            obj.add(1);
            obj.add(2.2);
            obj.add(3.5);
            obj.add(4);
            obj.add(5);
            obj.removeByFilter(x => x > 0);
            expect(obj.toString()).to.equal('(empty)');
        });
        it('should return empty', function () {
            obj.add(1);
            obj.add(2.2);
            obj.add(3.5);
            obj.add(4);
            obj.add(5);
            obj.removeByFilter(x => true);
            expect(obj.toString()).to.equal('(empty)');
        });
        it('should return empty', function () {
            obj.add(1);
            obj.add(2);
            obj.add(3);
            obj.add(4);
            obj.add(5);
            obj.removeByFilter(x => true);
            expect(obj.toString()).to.equal('(empty)');
        });
        it('should return all', function () {
            obj.add(1);
            obj.add(2);
            obj.add('pesho');
            obj.add(4);
            obj.add(5);
            obj.removeByFilter(x => false);
            expect(obj.toString()).to.equal('1, 2, pesho, 4, 5');
        });
    })
});

