/**
 * Created by Deyan Peychev on 10-May-17.
 */
function printDayOfWeek([day]) {
    day=day.toLowerCase();
    let weekdays = [
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday'
    ];

    let dayNum = weekdays.indexOf(day)+1 || 'error';
    console.log(dayNum);
}
printDayOfWeek(['Monday']);
printDayOfWeek(['Friday']);
printDayOfWeek(['usfgauisf']);