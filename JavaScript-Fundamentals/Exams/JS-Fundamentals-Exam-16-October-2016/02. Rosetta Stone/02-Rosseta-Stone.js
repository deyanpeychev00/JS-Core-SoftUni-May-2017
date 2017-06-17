/**
 * Created by Deyan Peychev on 14-Jun-17.
 */
function solve(encodedMessage) {
    encodedMessage = encodedMessage.map(e => {
        return e.split(' ').map(Number);
    });
    let templateMatrixLength = encodedMessage.shift()[0];
    // console.log(templateMatrixLength);
    let templateMatrix = [];

    for (let i = 0; i < templateMatrixLength; i++) {
        // console.log(encodedMessage[i]);
         templateMatrix.push(encodedMessage.shift());
    }
    // console.log(templateMatrixLength);
    // console.log(templateMatrix);
    //  console.log(encodedMessage);
    let templateMatrixCols = templateMatrix[0].length;
    for (let encodedRow = 0; encodedRow < encodedMessage.length; encodedRow+=templateMatrixLength) {
        let currentRow = encodedMessage[encodedRow];
        // console.log(currentRow);
        for (let encodedCol = 0; encodedCol < currentRow.length; encodedCol+=templateMatrixCols) {
            let currentEncodedNumber = encodedMessage[encodedRow][encodedCol];
            // console.log(currentEncodedNumber);
            for (let templateRow = 0; templateRow < templateMatrix.length; templateRow++) {
                let currentTemplateRow = templateMatrix[templateRow];
                for (let templateCol = 0; templateCol < templateMatrix[templateRow].length; templateCol++) {
                    let currentTemplateNumber = templateMatrix[templateRow][templateCol];
                    let targetRow = encodedRow + templateRow;
                    let targetCol = encodedCol + templateCol;

                    if(targetCol < encodedMessage[encodedRow].length && targetRow<encodedMessage.length){
                            let summedNumber = encodedMessage[targetRow][targetCol] + templateMatrix[templateRow][templateCol];
                            summedNumber %= 27;
                            if(summedNumber === 0){
                                encodedMessage[targetRow][targetCol] = ' ';
                            }else{
                                encodedMessage[targetRow][targetCol] = String.fromCharCode(64+summedNumber);
                            }
                    }
                }
            }
        }
    }
    console.log(encodedMessage.map(e => e.join('')).join('').trim());
}
solve([
    '2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22'
]);
/*solve(
   [
       '1',
       '1 3 13',
       '12 22 14 13 25 0 4 24 23',
       '18 24 2 25 22 0 0 11 18',
       '8 25 6 26 8 23 13 4 14',
       '14 3 14 10 6 1 6 16 14',
       '11 12 2 10 24 2 13 24 0',
       '24 24 10 14 15 25 18 24 12',
       '4 24 0 8 4 22 19 22 14',
       '0 11 18 26 1 19 18 13 15',
       '8 15 14 26 24 14 26 24 14'
   ]

);*/
