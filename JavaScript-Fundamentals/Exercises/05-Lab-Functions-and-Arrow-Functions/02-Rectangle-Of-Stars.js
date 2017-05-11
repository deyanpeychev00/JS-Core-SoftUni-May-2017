/**
 * Created by Deyan Peychev on 10-May-17.
 */
function printRectangle([size]) {
    function printRow(row) {
        console.log('* '.repeat(row));
    }

    for(let i =1; i<=size; i++){
        printRow(size);
    }
}
// printRectangle(['10']);