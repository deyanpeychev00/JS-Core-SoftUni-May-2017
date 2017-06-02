/**
 * Created by Deyan Peychev on 03-Jun-17.
 */
function findSmallest(input) {
    let resArr = [];
    for (let i = 0; i < 2; i++) {
        let min = input[0];
        for (let el of input) {
            if (el < min){
                min=el;
            }
        }
        resArr.push(min);
        input.splice(input.indexOf(min),1);
    }
    console.log(resArr.join(' '));
}
findSmallest([30, 15, 50, 5]);