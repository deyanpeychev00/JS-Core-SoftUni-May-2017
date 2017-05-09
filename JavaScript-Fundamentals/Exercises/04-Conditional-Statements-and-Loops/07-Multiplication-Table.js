/**
 * Created by Deyan Peychev on 09-May-17.
 */
function makeTable([n]){
    n=Number(n);

    let html = '<table border="1">\n';
    html +='  <tr><th>x</th>';

    for(let i =1; i<=n; i++){
        html+=`<th>${i}</th>`;
    }

    html+='</tr>\n';

    for(let i =1; i<=n; i++){
        html+=`  <tr><th>${i}</th>`;

        for(let j=1; j<=n; j++){
            html+=`<td>${i*j}</td>`;
        }
        html+='</tr>\n';
    }

    html+='</table>';

    console.log(html);
}
makeTable(['5']);
makeTable(['10']);


/* EXAMPLE FOR N=5:
<table border="1">
    <tr><th>x</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr>
    <tr><th>1</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
    <tr><th>2</th><td>2</td><td>4</td><td>6</td><td>8</td><td>10</td></tr>
    <tr><th>3</th><td>3</td><td>6</td><td>9</td><td>12</td><td>15</td></tr>
    <tr><th>4</th><td>4</td><td>8</td><td>12</td><td>16</td><td>20</td></tr>
    <tr><th>5</th><td>5</td><td>10</td><td>15</td><td>20</td><td>25</td></tr>
</table>
*/
