/**
 * Created by Deyan Peychev on 06-May-17.
 */
function figureArea([w,h,W,H]) {
    let firstArea = Number(w) * Number(h);
    let secondArea = Number(W) * Number(H);
    let commonArea = Math.min(Number(w), Number(W)) * Math.min(Number(h), Number(H));

    let figureArea = firstArea + secondArea - commonArea;
    console.log(figureArea);
}
figureArea(['13', '2', '5', '8']);