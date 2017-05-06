/**
 * Created by Deyan Peychev on 06-May-17.
 */
function letterOccurencesInString([str, letter]){
    let occurences = 0;
    for(let counter =0; counter<str.length; counter++){
        if(str[counter] === letter){
            occurences++;
        }
    }
    console.log(occurences);
}
letterOccurencesInString(['panther', 'n']);