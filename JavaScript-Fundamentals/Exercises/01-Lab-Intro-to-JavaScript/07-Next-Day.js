/**
 * Created by Deyan Peychev on 06-May-17.
 */
function nextDay([year, month, day]) {

    let date = new Date(year, month-1, day);
    let oneDay = 24 * 60 * 60 * 1000; // milliseconds in 1 day
    let nextDate = new Date(date.getTime() + oneDay);

    console.log(nextDate.getFullYear() + "-" + (nextDate.getMonth() + 1) + '-' + nextDate.getDate());
}
nextDay(['2016', '9', '30']);