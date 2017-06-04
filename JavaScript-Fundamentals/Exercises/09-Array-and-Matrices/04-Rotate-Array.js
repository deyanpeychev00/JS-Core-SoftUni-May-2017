/**
 * Created by Deyan Peychev on 03-Jun-17.
 */
function rotate(arr) {
    let count = Number(arr.pop()) % arr.length;
    for(let x = 0; x < count; x++){
        let lastEl = arr.pop();
        arr.unshift(lastEl)
    }
    console.log(arr.join(' '));
}
// rotate(['Banana', 'Orange', 'Coconut', 'Apple', '15']);