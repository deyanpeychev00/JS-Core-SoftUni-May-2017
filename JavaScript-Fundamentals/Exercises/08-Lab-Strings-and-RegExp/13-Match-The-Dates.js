/**
 * Created by Deyan Peychev on 05-Jun-17.
 */
function match(input) {
    let regex = /\b([0-9]{1,2})-([A-Z][a-z]{2})-([0-9]{4})\b/g;
    let result = regex.exec(input);

    while(result !== null){
        let [date, day, month, year] = result;
        console.log(`${date} (Day: ${day}, Month: ${month}, Year: ${year})`);
        result = regex.exec(input);
    }
}
 // match(['I am born on 30-Dec-1994.', 'This is not date: 512-Janu-1996.', 'My father is born on the 29-Jul-1955.']);

/*match(['1-Jan-1999 is a valid date.',
 'So is 01-July-2000.',
 'I am an awful liar, by the way – Ivo, 30-Sep-2016.'
 ]);*/
