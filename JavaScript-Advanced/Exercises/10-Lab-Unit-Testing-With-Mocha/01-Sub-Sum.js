/**
 * Created by Deyan Peychev on 08-Jul-17.
 */
function subsum(array, startIndex, endIndex) {
    let sum = 0;

    if(!Array.isArray(array)){
        return NaN;
    }else{
        if(startIndex < 0){
            startIndex = 0;
        }
        if(endIndex >= array.length){
            endIndex = array.length-1;
        }
    }

    for (let i = startIndex; i <= endIndex; i++) {
        sum+=Number(array[i])
    }
    return sum;
}

console.log(subsum([10, 20, 30, 40, 50, 60], 3, 300));
console.log(subsum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(subsum([10, 'twenty', 30, 40], 0, 2));
console.log(subsum([], 1, 2));
console.log(subsum('text', 0, 2));
