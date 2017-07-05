/**
 * Created by Deyan Peychev on 05-Jul-17.
 */
function solve(array) {
    let commandProcessor = (function () {
        let collection = [];
        function add(target) {
            collection.push(target);
        }

        function remove(target) {
            collection = collection.filter(val => val !== target);
        }

        function print() {
            console.log(collection.toString());
        }

        return { add, remove, print };
    })();

    for (let command of array) {
        let [cmdName, target] = command.split(' ');
        commandProcessor[cmdName](target);
    }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
solve(['add pesho', 'add gosho', 'add pesho', 'remove pesho','print']);