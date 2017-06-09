/**
 * Created by Deyan Peychev on 08-Jun-17.
 */
function scoreToHTML(input) {
    let objects = JSON.parse(input);

    function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }

    let html = '<table>\n';
    html += '  <tr><th>name</th><th>score</th></tr>\n';

    for (let obj of objects) {
        html+=`  <tr><td>${htmlEscape(obj.name)}</td><td>${Number(obj.score)}</td></tr>\n`;
    }
    html +='</table>';
    // console.log(objects);
    console.log(html);
}
// scoreToHTML('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]');
// scoreToHTML('[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]');