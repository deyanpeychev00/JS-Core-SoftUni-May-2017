/**
 * Created by Deyan Peychev on 03-Jul-17.
 */
function findMax(arr) {
    return Math.max.apply(null, arr);
}
console.log(findMax([10, 20, 5]));