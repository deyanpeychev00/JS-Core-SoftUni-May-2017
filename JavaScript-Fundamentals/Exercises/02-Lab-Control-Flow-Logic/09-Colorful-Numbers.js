/**
 * Created by Deyan Peychev on 08-May-17.
 */
function colorfulNumbers(limit) {
    let html = "<ul>\n";
    for(let num=1; num<=limit; num++){
        let color = num % 2 === 0 ? "blue" : "green";
        html +=`\t<li><span style='color:${color}'>${num}</span></li>\n`;
    }
    html+="</ul>";
    console.log(html);
}
colorfulNumbers([10]);