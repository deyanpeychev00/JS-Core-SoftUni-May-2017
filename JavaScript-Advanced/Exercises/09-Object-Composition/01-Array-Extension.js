/**
 * Created by Deyan Peychev on 06-Jul-17.
 */
// let arr = [1,2,3,6];

(function extendPrototype() {
    Array.prototype.last = function () {
        return this[this.length-1];
    };

    Array.prototype.skip = function (n) {
        return this.slice(n);
    };

    Array.prototype.take = function (n) {
        return this.slice(0,n);
    };

    Array.prototype.sum = function () {
        return this.reduce((a,b) => a+b);
    };

    Array.prototype.average = function () {
        return this.sum() / this.length;
    };
})();

// console.log(arr.last(2));
// console.log(arr.skip(2));
// console.log(arr.take(2));
// console.log(arr.sum());
// console.log(arr.average());