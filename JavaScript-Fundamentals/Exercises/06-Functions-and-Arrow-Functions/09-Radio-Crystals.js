/**
 * Created by Deyan Peychev on 31-May-17.
 */
function solve(numArr) {
    function cut(crystal) {
        return crystal/4;
    }
    function lap(crystal) {
        crystal -=crystal*0.2;
        return crystal;
    }
    function grind(crystal) {
        return crystal-20;
    }
    function etch(crystal) {
        return crystal-2;
    }
    function xRay(crystal) {
        return ++crystal;
    }
    function transportAndWash(crystal) {
        return Math.floor(crystal);
    }
    
    
    let targetSize = numArr[0];
    let op = 'Cut';
    
    for (let i = 1; i < numArr.length; i++) {
        let microns = numArr[i];
        console.log(`Processing ${microns} microns`);
    }
}
solve([1375,5000]);