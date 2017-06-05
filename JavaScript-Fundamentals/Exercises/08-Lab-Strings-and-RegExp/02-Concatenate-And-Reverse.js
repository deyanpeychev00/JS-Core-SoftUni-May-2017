/**
 * Created by Deyan Peychev on 04-Jun-17.
 */
function concAndRev(arr) {
    console.log(arr.reduce((a,b) => a+b).split("").reverse().join(""));
}
// concAndRev(['I', 'am', 'student']);