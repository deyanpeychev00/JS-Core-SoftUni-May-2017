/**
 * Created by Deyan Peychev on 08-May-17.
 */
function leapYear([year]) {
    console.log((Number(year) % 4 === 0 && Number(year) % 100 !== 0) || (Number(year) % 400 === 0) ? "yes" : "no");
}
leapYear(['1999']);
leapYear(['1900']);
leapYear(['2000']);