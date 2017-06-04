/**
 * Created by Deyan Peychev on 03-Jun-17.
 */
function solve(arr) {
    let resArr = [];
    let initNum = 0;

    for (let command of arr) {
        initNum++;
        switch(command){
            case 'add':{
                resArr.push(initNum);
                break;
            }
            case 'remove':{
                resArr.pop();
                break;
            }
        }
    }
    console.log(resArr.length>0 ? resArr.join('\n') : "Empty");
}
// solve(['add', 'add','remove', 'add', 'add']);