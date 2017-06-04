/**
 * Created by Deyan Peychev on 04-Jun-17.
 */
function solve(arr) {
    function sumDiagonals(matrix) {
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

        return sumArr; //firstD - 0; secondD - 1
    }
    function printSpecificMatrix(matrix) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if(row !== col && col !== matrix.length-1-row){
                    matrix[row][col] = primaryDiagonalSum;
                }
            }
        }
        console.log(matrix.map(row => row.join(' ')).join('\n'));
    }

    let matrix = [];
    for (let i = 0; i < arr.length; i++) {
        matrix.push(arr[i].split(' ').map(Number));
    }
    // console.log(matrix);
    let primaryDiagonalSum = sumDiagonals(matrix)[0];
    let secondaryDiagonalSum = sumDiagonals(matrix)[1];

    // console.log(primaryDiagonalSum);
    // console.log(secondaryDiagonalSum);

    if(primaryDiagonalSum === secondaryDiagonalSum){
        printSpecificMatrix(matrix);
    }else{
        console.log(matrix.map(row => row.join(' ')).join('\n'));
    }
}
/*
solve(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);
console.log('---------------------');
solve(['1 1 1',
    '1 1 1',
    '1 1 0']
);*/
