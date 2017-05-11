/**
 * Created by Deyan Peychev on 10-May-17.
 */
function printTriangle([size]) {
    function printRow(row) {
        console.log('*'.repeat(row));
    }

    for(let i =1; i<size; i++){
        printRow(i);
    }
    for(let i =size; i>=1; i--){
        printRow(i);
    }
}
printTriangle(['5']);