/**
 * Created by Deyan Peychev on 06-Jul-17.
 */
function solve(commands) {
    let processor = (function () {
        let objects = new Map();

        function create(objName, param, parent) {
            if (param) {
                inherit(objName, parent);
            } else {
                objects.set(objName, {});
            }
        }

        function inherit(objName, parent) {
            objects.set(objName, Object.create(objects.get(parent)));
        }

        function set(target, propName, value) {
            objects.get(target)[propName] = value;
        }

        function print(target) {
            let properties = [];
            current = objects.get(target);
            for (let prop in current) {
                properties.push(`${prop}:${current[prop]}`);
            }

            console.log(properties.join(', '));
        }

        return {
            create,
            inherit,
            set,
            print
        }
    })();

    for (let command of commands) {
        let params = command.split(' ');
        processor[params[0]](params[1], params[2], params[3]);
    }
}
solve(['create c1', 'create c2 inherit c1', 'set c1 color red', 'set c2 model new', 'print c1', 'print c2']);
