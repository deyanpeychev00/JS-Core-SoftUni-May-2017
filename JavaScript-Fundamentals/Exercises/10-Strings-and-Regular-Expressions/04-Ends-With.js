/**
 * Created by Deyan Peychev on 07-Jun-17.
 */
function check(mainString, substring) {
    console.log(mainString.substr(-substring.length) === substring);
}
// check('The new iPhone has no headphones jack.', 'o headphones jack.');
// check('This is Houston, we have…', 'We have…');

