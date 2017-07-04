/**
 * Created by Deyan Peychev on 04-Jul-17.
 */
function argInfo() {
    let summary = {};

    for (let object of arguments) {
        let element = object;
        let elType = typeof element;
        console.log(elType + ": " + element);

        !summary[elType] ? summary[elType] = 1 : summary[elType]++;

    }

    let result = [];
    for (let currentType in summary) {
       result.push([currentType, summary[currentType]]);
    }
    for (let kvp of result.sort((a,b) => b[1] - a[1])) {
        console.log(`${kvp[0]} = ${kvp[1]}`);
    }
}
argInfo('cat', 42, function () { console.log('Hello world!'); });