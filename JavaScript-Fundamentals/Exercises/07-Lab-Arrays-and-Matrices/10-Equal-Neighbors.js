/**
 * Created by Deyan Peychev on 03-Jun-17.
 */
function solve(matrix) {
    let pairs = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {

            let currentEl = matrix[i][j];

            if(i<matrix.length-1){
                if(currentEl === matrix[i+1][j]){
                    pairs++;
                }
            }
            if(i>0){
                if(currentEl === matrix[i-1][j]){
                    pairs++;
                }
            }
            if(j<matrix[i].length){
                if(currentEl === matrix[i][j+1]){
                    pairs++;
                }
            }
            if(j>0){
                if(currentEl === matrix[i][j-1]){
                    pairs++;
                }
            }
        }
    }
    console.log(pairs/2);
}
/*
solve([['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]
);
solve([['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]
);*/
