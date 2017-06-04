/**
 * Created by Deyan Peychev on 03-Jun-17.
 */
function check(matrix) {

        function getFirstSum(row) {
            let sum = 0;
            for (let i = 0; i < row.length; i++) {
                sum+=row[i];
            }
            return sum;
        }


        let firstSum = getFirstSum(matrix[0]);
        let isMagic = true;
        let currSumRow = 0;
        let currSumCol = 0;

        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                currSumRow += matrix[i][j];
                currSumCol += matrix[j][i];
            }
            if(currSumRow!== firstSum || currSumCol!==firstSum){
                isMagic = false;
            }
            currSumRow=0;
            currSumCol=0
        }

        console.log(isMagic);
}
check([[1, 2, 3],
    [5, 0, 1],
    [0, 0, 6],
    [0, 6, 0],
    [0, 6, 0],
    [0, 6, 0]

]);


