/**
 * Created by Deyan Peychev on 10-May-17.
 */
function check([str]) {
    let strRev = str.split("").reverse().join("");

    console.log(str === strRev);
}
// check(['hahah']);