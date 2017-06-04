/**
 * Created by Deyan Peychev on 03-Jun-17.
 */
function solve(arr) {
    let step = Number(arr.pop());

    for (let i = 0; i < arr.length; i+=step) {
        console.log(arr[i]);
    }
}

function read(arr){
    console.log(arr);
}

 read([5,20,31,4,20,2]);
 solve([1,2,3,4,5,6]);
 solve(['dsa', 'asd', 'test', 'test', 2]);