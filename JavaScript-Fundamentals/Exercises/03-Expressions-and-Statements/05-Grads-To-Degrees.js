/**
 * Created by Deyan Peychev on 08-May-17.
 */
function convert(grads) {
    grads = Number(grads);
    grads %=400;
    if(grads<0){
        grads+=400;
    }
    /*grads%=400;
    grads+=400;
    grads%=400;*/
    let degrees = 0.9*grads;
    console.log(degrees);
}
convert(['-50']);
convert(['850']);
convert(['400']);
convert(['100']);
convert(['0']);