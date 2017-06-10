/**
 * Created by Deyan Peychev on 10-Jun-17.
 */
function makeTable(input) { //array of JSONs
    function htmlEscape(text) {
        let map = {
            '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;'
        };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }

    let html = '<table>\n';
    for (let line of input) {
        // console.log(line);
        let obj = JSON.parse(line);
        html += `  <tr>\n    <td>${htmlEscape(obj.name)}</td>\n`;
        html += `    <td>${htmlEscape(obj.position)}</td>\n`;
        html += `    <td>${htmlEscape(obj.salary.toString())}</td>\n`;
        html += '  </tr>\n';
    }
    html += '</table>';
    console.log(html);
}
makeTable([
    '{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}',
]);