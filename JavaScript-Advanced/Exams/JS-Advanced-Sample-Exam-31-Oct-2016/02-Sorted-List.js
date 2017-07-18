/**
 * Created by Deyan Peychev on 18-Jul-17.
 */
let expect = require('chai').expect;

class SortedList {
    constructor() {
        this.list = [];
    }

    add(element) {
        this.list.push(element);
        this.sort();
    }

    remove(index) {
        this.vrfyRange(index);
        this.list.splice(index, 1);
    }

    get(index) {
        this.vrfyRange(index);
        return this.list[index];
    }

    vrfyRange(index) {
        if (this.list.length == 0) throw new Error("Collection is empty.");
        if (index < 0 || index >= this.list.length) throw new Error("Index was outside the bounds of the collection.");
    }

    sort() {
        this.list.sort((a, b) => a - b);
    }

    get size() {
        return this.list.length;
    }
}

describe('Sorted List', function () {
    let obj;
    beforeEach(function () {
        obj = new SortedList;
    });
    describe('Initial tests', function () {
        it('Should be a class', function () {
            expect(typeof SortedList).to.equal('function');
        });
        it('Has function add', function () {
            expect(SortedList.prototype.hasOwnProperty('add')).to.equal(true);
        });
        it('Has function remove', function () {
            expect(SortedList.prototype.hasOwnProperty('remove')).to.equal(true);
        });
        it('Has function get', function () {
            expect(SortedList.prototype.hasOwnProperty('get')).to.equal(true);
        });
        it('Has function vrfyRange', function () {
            expect(SortedList.prototype.hasOwnProperty('vrfyRange')).to.equal(true);
        });
        it('Has function sort', function () {
            expect(SortedList.prototype.hasOwnProperty('sort')).to.equal(true);
        });
        it('Has getter size', function () {
            expect(SortedList.prototype.hasOwnProperty('size')).to.equal(true);
        });
    });

    describe('add(element) tests', function () {
        it('Function should add elements correctly', function () {
            obj.add(10);
            expect(obj.list.join(',')).to.equal('10');
        });
        it('Function should sort the added elements correctly', function () {
            obj.add(10);
            obj.add(3);
            expect(obj.list.join(',')).to.equal('3,10');
        });
        it('Function should work with fractions correctly', function () {
            obj.add(10.5);
            obj.add(3.8);
            expect(obj.list.join(',')).to.equal('3.8,10.5');
        });
        it('Function should not sort strings', function () {
            obj.add('q');
            obj.add('a');
            expect(obj.list.join(',')).to.equal('q,a');
        });
    });
    describe('remove(index) tests', function () {
        it('Function should remove element from one-element array correctly', function () {
            obj.add(10);
            obj.remove(0);
            expect(obj.list.join(',')).to.equal('');
        });
        it('Function should remove element from multi-element array correctly', function () {
            obj.add(10);
            obj.add(20);
            obj.add(30);
            obj.remove(1);
            expect(obj.list.join(',')).to.equal('10,30');
        });
        it('Should throw error for <0 index', function () {
            obj.add(10);
            expect(() => obj.remove(-3)).throw(Error, "Index was outside the bounds of the collection.");
        });
        it('Should throw error for too big index', function () {
            obj.add(10);
            expect(() => obj.remove(5)).throw(Error, "Index was outside the bounds of the collection.");
        });
        it('Should work with fraction index', function () {
            obj.add(10);
            obj.remove(0.2);
            expect(obj.list.join(',')).to.equal('');
        });
        it('Should throw error for empty list', function () {
            expect(() => obj.remove(2)).throw(Error, "Collection is empty.");
        });
        it('Should remove the 1st element if no params given', function () {
            obj.add(10);
            obj.add(20);
            obj.remove();
            expect(obj.list.join(',')).to.equal('20');
        })
    });
    describe('get(index) tests', function () {
        it('Function should get element from one-element array correctly', function () {
            obj.add(10);
            expect(obj.get(0)).to.equal(10);
        });
        it('Function should get element from multi-element array correctly', function () {
            obj.add(10);
            obj.add(20);
            obj.add(30);
            expect(obj.get(1)).to.equal(20);
        });
        it('Should throw error for <0 index', function () {
            obj.add(10);
            expect(() => obj.get(-3)).throw(Error, "Index was outside the bounds of the collection.");
        });
        it('Should throw error for too big index', function () {
            obj.add(10);
            expect(() => obj.get(5)).throw(Error, "Index was outside the bounds of the collection.");
        });
        it('Should return undefined for fraction index', function () {
            obj.add(10);
            expect(obj.get(0.2)).to.be.undefined;
        });
        it('Should throw error for empty list', function () {
            expect(() => obj.get(2)).throw(Error, "Collection is empty.");
        });
    });
    describe('size getter tests', function () {
        it('Getter should work correctly for multi-element list', function () {
            obj.add(10);
            obj.add(20);
            expect(obj.size).to.equal(2);
        });
        it('Getter should work correctly for one-element list', function () {
            obj.add(10);
            expect(obj.size).to.equal(1);
        });
        it('Getter should work correctly for empty list', function () {
            expect(obj.size).to.equal(0);
        });
    })
});