/**
 * Created by Deyan Peychev on 04-Jun-17.
 */
function extract(text) {
   let results = [];

   let startIndex = text.indexOf('(');

   while(startIndex !== -1){
       let lastindex = text.indexOf(')', startIndex);
       if (lastindex === -1){
           break;
       }
       let match = text.substring(startIndex+1, lastindex);
       results.push(match);
       startIndex = text.indexOf('(', lastindex+1);
   }
   console.log(results.join(', '));
}
extract('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');