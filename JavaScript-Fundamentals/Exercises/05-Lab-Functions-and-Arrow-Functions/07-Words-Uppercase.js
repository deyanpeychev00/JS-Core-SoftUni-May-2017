/**
 * Created by Deyan Peychev on 10-May-17.
 */
function solve(arr) {

    var regex = /([aA-zZ])\w*/g;
    match = regex.exec(arr);
    let result =[];
    while (match !== null) {
        result.push(match[0].toUpperCase());
        match = regex.exec(arr);
    }
    console.log(result.join(", "));
}
/*solve(['Hi, how are you?']);
solve(['hello']);
solve(['Functions in JS can be nested, i.e. hold other functions']);*/
