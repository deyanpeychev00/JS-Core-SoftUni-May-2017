/**
 * Created by Deyan Peychev on 08-Jun-17.
 */
function JSONtoHTML(input) {
    function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }

    let objects = JSON.parse(input);
    // console.log(objects);
    let tableHeadings = Object.keys(objects[0]);
    // console.log(tableHeadings);
    let html = '<table>\n  <tr>';
    for (let heading of tableHeadings) {
        html+=`<th>${heading}</th>`;
    }
    html+='</tr>\n';
    for (let obj of objects) {
        let tableRows = Object.values(obj);
        html+='  <tr>';
        for (let row of tableRows) {
            html+=`<td>${htmlEscape(row.toString())}</td>`;
        }
        html+='</tr>\n';
        // console.log(tableRows);
    }
    html+='</table>';
     console.log(html);
}
// JSONtoHTML('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]');
// JSONtoHTML('[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]');