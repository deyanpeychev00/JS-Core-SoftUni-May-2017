/**
 * Created by Deyan Peychev on 03-Jul-17.
 */
function solve(arr) {
    function aggregate(array, func) {
        let result = array[0];
        for (let nextEl of array.slice(1)){
            result = func(result, nextEl);

        }
        return result;
    }
    console.log('Sum = ' + aggregate(arr, (a, b) => a + b));
    console.log('Min = ' + aggregate(arr, (a, b) => a < b ? a : b));
    console.log('Max = ' + aggregate(arr, (a, b) => a > b ? a : b));
    console.log('Product = ' + aggregate(arr, (a, b) => a * b));
    console.log('Join = ' + aggregate(arr, (a, b) => '' + a + b));
}