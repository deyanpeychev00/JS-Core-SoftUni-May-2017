/**
 * Created by Deyan Peychev on 14-Jun-17.
 */
function solve(input){
    input = input.map(Number);
    let biggestProd = Number.MIN_SAFE_INTEGER;
    for (let index = 0; index < input.length; index++) {
        let currentNumber = input[index];
        if(currentNumber >=0 && currentNumber<10){
            let currentProduct = 1;
            for (let innerIndex = index+1; innerIndex <= index+currentNumber; innerIndex++) {
                currentProduct *=input[innerIndex];
            }
            if(currentProduct > biggestProd){
                biggestProd = currentProduct;
            }
        }
    }
    console.log(biggestProd);
}
solve([
    '10',
    '20',
    '2',
    '30',
    '44',
    '3',
    '56',
    '20',
    '24'
]);
solve([
    '100',
    '200',
    '2',
    '3',
    '2',
    '3',
    '2',
    '1',
    '1'
]);
