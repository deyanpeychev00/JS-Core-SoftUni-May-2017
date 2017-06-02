/**
 * Created by Deyan Peychev on 03-Jun-17.
 */
function sum(matrix) {
    let count = matrix[0].length;
    let sumfirst = 0, sumSecond = 0;
    let sumArr = [];
    for (let row = 0, col=0; row < count, col<count; row++, col++) {
        sumfirst+=matrix[row][col];
    }
    sumArr.push(sumfirst);
    for (let row = count-1, col = 0; row>0, col<count; row--, col++){
        sumSecond+=matrix[row][col];
    }
    sumArr.push(sumSecond);

    console.log(sumArr.join(' '));

}
// sum([[20, 40], [10, 60]]);
// sum([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);