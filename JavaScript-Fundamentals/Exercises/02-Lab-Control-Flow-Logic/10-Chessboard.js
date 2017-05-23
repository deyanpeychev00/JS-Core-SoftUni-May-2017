/**
 * Created by Deyan Peychev on 08-May-17.
 */
function chessboard(size) {
    let html = '<div class="chessboard">\n';

    for(let row = 1; row<=size; row++){
        html += '  <div>\n';
        let color = (row%2===0) ? 'white': 'black';
        for(let col = 1; col<=size; col++){
            html+=`    <span class="${color}"></span>\n`;
            color = color === 'black' ? 'white' : 'black';
        }
        html+='  </div>\n';
    }
    html+='</div>';
    console.log(html);

}
// chessboard(['3']);
// chessboard(['4']);