/**
 * Created by Deyan Peychev on 04-Jun-17.
 */
function solve([rows, cols, x,y]) {
    [rows, cols, x,y] = [rows, cols, x,y].map(Number);

    let matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix.push('0'.repeat(cols).split('').map(Number));
    }
    let num = 1;

    matrix[x][y] = num;
    let counter = 1;
    let currentRow = x;
    let currentCol = y;

    while(true){
        let isFilled = false;
        num++;
        let startRow = Math.max(0, currentRow - counter);
        let endRow = Math.min(matrix.length-1, currentRow+counter);
        let startCol = Math.max(0, currentCol - counter);
        let endCol = Math.min(matrix[0].length-1, currentCol+ counter);

        for (let row = startRow; row <= endRow; row++) {
            for (let col = startCol; col <= endCol; col++) {
                if(matrix[row][col] === 0){
                    matrix[row][col] = num;
                    isFilled = true;
                }
            }
        }
        counter++;
        if(!isFilled){
            break;
        }
    }
    console.log(matrix.map(row=>row.join(' ')).join('\n'));
}
// solve([4,4,0,0]);
// solve([5, 5, 2, 2]);
// solve([3, 3, 2, 2]);