/**
 * Created by Deyan Peychev on 07-Jun-17.
 */
function match(line) {
    let regex = /(-?\d+)\s*\*\s*(-?\d+(\.\d+)?)/g;

    text = line.replace(regex, (match, num1, num2) => Number(num1) * Number(num2));
    console.log(text);
}
// match('My bill: 2*2.50 (beer)');