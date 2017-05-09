/**
 * Created by Deyan Peychev on 09-May-17.
 */
function calendar([day, month, year]) {
    [day, month, year]=[day, month, year].map(Number);

    let today = new Date(year, month-1, day);
    let firstDay = new Date(year, month-1, 1);
    let firstDateOfCalendar = new Date(firstDay);
    firstDateOfCalendar.setDate(firstDateOfCalendar.getDate() - firstDateOfCalendar.getDay());

    let lastDayOfCalendar = new Date(firstDay);
    lastDayOfCalendar.setMonth(lastDayOfCalendar.getMonth()+1);
    lastDayOfCalendar.setDate(0);

    lastDayOfCalendar.setDate(lastDayOfCalendar.getDate() + 6 - lastDayOfCalendar.getDay());

    let html = '<table>\n';
    html+= '  <tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n';

    for (let i = firstDateOfCalendar; i<=lastDayOfCalendar; i.setDate(i.getDate()+1)){
        if(i.getDay() === 0){
            html+='  <tr>';
        }
        if(i.getFullYear() < firstDay.getFullYear() || (i.getMonth() < firstDay.getMonth() && i.getFullYear() === firstDay.getFullYear() )){
            html+=`<td class="prev-month">${i.getDate()}</td>`;

        }else if(i.getFullYear() > firstDay.getFullYear() || (i.getMonth() > firstDay.getMonth() && i.getFullYear() === firstDay.getFullYear() )){
            html+=`<td class="next-month">${i.getDate()}</td>`;

        }else if(i.getDate() === today.getDate()){
            html+=`<td class="today">${i.getDate()}</td>`;

        }else{
            html+=`<td>${i.getDate()}</td>`;

        }
        // console.log(i.getDate());
        if(i.getDay() === 6){
            html+='</tr>\n';
        }
    }

    html+='</table>';

    return html;
}