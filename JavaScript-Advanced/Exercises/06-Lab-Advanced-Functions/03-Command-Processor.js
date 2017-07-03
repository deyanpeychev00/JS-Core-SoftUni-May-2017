/**
 * Created by Deyan Peychev on 03-Jul-17.
 */
function processCommands(commands) {
    let result = '';

    function processor(commands) {
        for (let token of commands) {
            let tokens = token.split(' ');
            let command = tokens[0];
            let value = tokens[1];

            switch (command){
                case 'append':{
                    result+=value;
                    break;
                }
                case 'removeStart':{
                    result = result.slice(Number(value));
                    break;
                }
                case 'removeEnd':{
                    result = result.slice(0, result.length - Number(value));
                    break;
                }
                case 'print':{
                    console.log(result);
                }
            }
        }
    }
    return processor(commands);
}
processCommands(
    ['append 123',
        'append 45',
        'removeStart 2',
        'removeEnd 1',
        'print']

);