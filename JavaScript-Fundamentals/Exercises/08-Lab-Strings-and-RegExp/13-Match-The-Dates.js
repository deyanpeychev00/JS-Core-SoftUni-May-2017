/**
 * Created by Deyan Peychev on 05-Jun-17.
 */
function match(input) {
    let regex = /\b([0-9]{1,2})-([A-Z][a-z]{2})-([0-9]{4})\b/;
    let matchedDates = [];
    for (let line of input) {
        let match = line.match(regex);
        matchedDates.push(match);
    }
    for (let arr of matchedDates.filter(el=>el!==null)) {
        if(Number(arr[1]) >=1 && Number(arr[1]<=31))
            console.log(`${arr[0]} (Day: ${arr[1]}, Month: ${arr[2]}, Year: ${arr[3]})`)
    }
}
// match(['I am born on 30-Dec-1994.', 'This is not date: 512-Jan-1996.', 'My father is born on the 29-Jul-1955.']);

/*match(['1-Jan-1999 is a valid date.',
 'So is 01-July-2000.',
 'I am an awful liar, by the way – Ivo, 30-Sep-2016.'
 ]);*/
