/**
 * Created by Deyan Peychev on 07-Jun-17.
 */
function capture(arr) {
    let regex = /\d+/g;
    arr = arr.reduce((a,b) => a+b);
    console.log(arr.match(regex).join(' '));
}
/*
capture(['The300',
    'What is that?',
    'I think it’s the 3rd movie.',
    'Lets watch it at 22:45']);*/
