/**
 * Created by Deyan Peychev on 05-Jun-17.
 */
function aggregateTable(input) {
    let regions = [];
    let sum = 0;
    for (let string of input) {
        let currRow = string.split('|').filter(word => word!=='');
        let region = currRow[0].trim();
        let income = Number(currRow[1].trim());
        regions.push(region);
        sum+=income;
    }
    console.log(regions.join(', '));
    console.log(sum);
}
/*
aggregateTable(['| Sofia           | 300',
                '| Veliko Tarnovo  | 500',
                '| Yambol          | 275'
               ]
);
*/
