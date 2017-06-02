/**
 * Created by Deyan Peychev on 03-Jun-17.
 */
let solve = arr => arr.filter((e,i) => i %2 !== 0).map(e => e*2).reverse().join(' ');

console.log(solve([10, 15, 20, 25]));
console.log(solve([3, 0, 10, 4, 7, 3]));