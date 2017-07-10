/**
 * Created by Deyan Peychev on 11-Jul-17.
 */
let expect = require('chai').expect;

let list = (function(){
    let data = [];
    return {
        add: function(item) {
            data.push(item);
        },
        delete: function(index) {
            if (Number.isInteger(index) && index >= 0 && index < data.length) {
                return data.splice(index, 1)[0];
            } else {
                return undefined;
            }
        },
        toString: function() {
            return data.join(", ");
        }
    };
})();


describe('Add/Delete', function() {

    it("Test empty list", function() {
        expect(list.toString()).to.equal('');
    });

    it('Should add item correctly', function () {
        list.add(10);
        expect(list.toString()).to.equal('10');
    });
    it('Should work with multiple adding invocations',function () {
        list.add(10);
        list.add(20);
        list.add(30);
        expect(list.toString()).to.equal('10, 20, 30');
    });

    it('Should return undefined for incorrect input params', function () {
        let result = list.delete('invalid');
        expect(result).to.be.undefined;
    });
    it('Should return undefined for empty list', function () {
        let result = list.delete(0);
        expect(result).to.be.undefined;
    });
    it('Should return undefined for fraction input params', function () {
        let result = list.delete(5.5);
        expect(result).to.be.undefined;
    });
    it('Should not delete items for fraction input params', function () {
        list.add(10);
        list.delete(5.5);
        expect(list.toString()).to.equal('10');
    });
    it('Should return undefined for <0 index param', function () {
        let result = list.delete(-5);
        expect(result).to.be.undefined;
    });
    it('Should return undefined for >list.length index param', function () {
        list.add(10); // list.length: 1
        let result = list.delete(2);  // undefined
        expect(result).to.be.undefined;
    });
    it('Should delete values correctly for correct index param', function () {
        list.add(10); // list.length: 1
        list.add(20); // list.length: 2
        list.delete(1); // remove 20
        expect(list.toString()).to.equal('10');
    });
    it('Should delete the correct item for correct index param', function () {
        list.add(10); // list.length: 1
        list.add(20); // list.length: 2
        expect(list.delete(1)).to.equal(20);
    });
});
