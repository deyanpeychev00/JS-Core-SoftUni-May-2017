/**
 * Created by Deyan Peychev on 05-Jun-17.
 */
function generateUsernames(input) {
    let usernames = [];

    let separatedInputk = input.map(el => el.split('@'));

    for (let obj of separatedInput) {
        let username = '';

        username = obj[0] + '.';
        obj[1].split('.').forEach(e => username += e[0]);
        usernames.push(username);
    }

    console.log(usernames.join(', '));
}
// generateUsernames(['peshooo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);