/**
 * Created by Deyan Peychev on 05-Jun-17.
 */
function validate(email) {
    let regex = new RegExp('^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$', 'g');
    console.log(regex.exec(email) ? 'Valid' : 'Invalid');
}
// validate('valid@email.bg');
// validate('invalid@emai1.bg');