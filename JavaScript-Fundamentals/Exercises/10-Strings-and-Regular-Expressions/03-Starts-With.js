/**
 * Created by Deyan Peychev on 07-Jun-17.
 */
function check(mainString, substring) {
    console.log(mainString.substring(0, substring.length) === substring);
}
// check('Marketing Fundamentals, starting 19/10/2016', 'Marketing Fundamentals, sta');
// check('How have you been?', 'how');