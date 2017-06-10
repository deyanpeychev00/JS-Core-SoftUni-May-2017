/**
 * Created by Deyan Peychev on 10-Jun-17.
 */
function findUniqueSequences(input) {
    let uniqueSequence = [];
    for (let dataRow of input) {
        let numArr = JSON.parse(dataRow).map(Number);
        let currSum = numArr.reduce((a,b) => a+b);

        if(!uniqueSequence.find(arr => arr.reduce((a,b) => a+b) === currSum)){
            uniqueSequence.push(numArr.sort((a,b) => b-a));
        }
    }
    for (let sequence of uniqueSequence.sort((a,b) => b.length < a.length)) {
        console.log(`[${sequence.join(', ')}]`);
    }
}
/*
findUniqueSequences([
        '[7.14, 7.180, 7.339, 80.099]',
        '[7.339, 80.0990, 7.140000, 7.18]',
        '[7.339, 7.180, 7.14, 80.099]',
]);*/
