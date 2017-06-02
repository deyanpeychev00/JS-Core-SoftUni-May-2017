/**
 * Created by Deyan Peychev on 03-Jun-17.
 */
function findBiggestElement(matrix) {
    let max = matrix[0][0];
    for (let arr of matrix) {
        for (let el of arr) {
            if(el>max){
                max=el;
            }
        }
    }
    console.log(max);
}
// findBiggestElement([[20, 50, 10], [8, 33, 145]]);
// findBiggestElement([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]);