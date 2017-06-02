/**
 * Created by Deyan Peychev on 28-May-17.
 */
function solve(numStr) {
    numStr = numStr.toString();

    function findAverage(numStr) {
        let sum = 0;
        for (let char of numStr) {
            sum+=Number(char);
        }
        return sum/numStr.length;
    }

    let average = findAverage(numStr);

    while (average<=5){
        numStr += '9';
        average = findAverage(numStr);

    }

    console.log(numStr);
}
/*
solve(101);
solve(5835);*/

