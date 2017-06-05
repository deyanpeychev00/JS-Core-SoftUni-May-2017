/**
 * Created by Deyan Peychev on 05-Jun-17.
 */
function escape(elements) {
    let html = '<ul>\n';
    for (let el of elements) {
        el = el.replace(/&/g, '&amp;');
        el = el.replace(/</g, '&lt;');
        el = el.replace(/>/g, '&gt;');
        el = el.replace(/"/g, '&quot;');

        html+=`  <li>${el}</li>\n`;
    }

    html+='</ul>';
    console.log(html);
}
// escape(['<b>unescaped text</b>', 'normal text']);
// escape(['<div style=\"color: red;\">Hello, Red!</div>', '<table><tr><td>Cell 1</td><td>Cell 2</td><tr>']);