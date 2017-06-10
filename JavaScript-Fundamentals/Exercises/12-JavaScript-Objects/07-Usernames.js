/**
 * Created by Deyan Peychev on 10-Jun-17.
 */
function usernames(input) {
    let catalogue = new Set();

    for (let line of input) {
        catalogue.add(line);
    }
    function sort(a,b) {
        let lengthA = a.length;
        let lengthB = b.length;
        if(lengthA > lengthB){
            return 1;
        }else if(lengthB > lengthA){
            return -1;
        }else if ( a > b){
            return 1;
        }else if ( a < b){
            return -1;
        }else{
            return 0;
        }
    }
    console.log([...catalogue].sort((a,b) => sort(a,b)).join('\n'));
}
usernames([
    'Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston',
]);