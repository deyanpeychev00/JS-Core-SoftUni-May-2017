/**
 * Created by Deyan Peychev on 02-Jun-17.
 */
function solve(n,k) {
    let resArr = [1];

    function getSum(arr) {
        let sum = 0;
        for (let el of arr) {
            sum+=el;
        }
        return sum;
    }

    for (let i = 0; i < n-1; i++) {
        let sumArr =0;
        let seq = resArr.slice(-k);
        sumArr = getSum(seq);
        resArr.push(sumArr);
    }
    console.log(resArr);
}
// solve(6,3);
// solve(8,2);