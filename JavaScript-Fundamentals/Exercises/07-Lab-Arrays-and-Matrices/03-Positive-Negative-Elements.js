/**
 * Created by Deyan Peychev on 02-Jun-17.
 */
function refactor(arr) {
    let resArr = [];
    for (let el of arr) {
        if (el<0){
            resArr.unshift(el);
        }else{
            resArr.push(el);
        }
    }
    return resArr;
}
// console.log(refactor([7, -2, 8, 9]));