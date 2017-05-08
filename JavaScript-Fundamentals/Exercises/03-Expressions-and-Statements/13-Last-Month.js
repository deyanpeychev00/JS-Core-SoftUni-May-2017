/**
 * Created by Deyan Peychev on 08-May-17.
 */
function lastMonth([day, month, year]) {
    [day, month, year] = [day, month, year].map(Number);

    let date = new Date(year, month-1, day);
    date.setDate(0);

    console.log(date.getDate());
}
lastMonth(['17','3','2002']);
lastMonth(['13','12','2004']);