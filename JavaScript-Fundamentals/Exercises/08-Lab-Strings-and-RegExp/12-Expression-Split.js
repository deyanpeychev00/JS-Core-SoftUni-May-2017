/**
 * Created by Deyan Peychev on 05-Jun-17.
 */
function split(expression) {
    let splitPattern = /\(|\)|,|;|\.|\s/g;

    let split = expression.split(splitPattern);
    console.log(split.filter(e=> e!=='').join('\n'));
}
// split('let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}');
// split('let sum = 4 * 4,b = "wow";');