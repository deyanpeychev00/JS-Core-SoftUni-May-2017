/**
 * Created by Deyan Peychev on 09-May-17.
 */
function draw(n) {
    n=Number(n);
    let square = '';
    if(n%2===0){
        for(let i = 0; i<n-1; i++){
            if(i===0 || i===Math.floor(n/2)-1 || i===(n-1)-1){
                square+='+';
                square+='-'.repeat(n-2);
                square+='+';
                square+='-'.repeat(n-2);
                square+='+\n';
            }
            else{
                square+='|';
                square+=' '.repeat(n-2);
                square+='|';
                square+=' '.repeat(n-2);
                square+='|\n';
            }
        }
    }else{
        for(let i = 0; i<n; i++){
            if(i===0 || i===Math.floor(n/2) || i===(n-1)){
                square+='+';
                square+='-'.repeat(n-2);
                square+='+';
                square+='-'.repeat(n-2);
                square+='+\n';
            }
            else{
                square+='|';
                square+=' '.repeat(n-2);
                square+='|';
                square+=' '.repeat(n-2);
                square+='|\n';
            }
        }
    }
    console.log(square);
}
draw(['4']);
console.log('----------------------------------------------------');
draw(['7']);
console.log('----------------------------------------------------');
draw(['6']);
console.log('----------------------------------------------------');
draw(['9']);
