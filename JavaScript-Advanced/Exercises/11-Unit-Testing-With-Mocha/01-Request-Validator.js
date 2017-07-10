/**
 * Created by Deyan Peychev on 10-Jul-17.
 */
function validateRequest(obj) {
    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    };

    let method = obj.method;
    let uri = obj.uri;
    let version = obj.version;
    let message = obj.message;
    let properties = {
        method: false,
        uri: false,
        version: false,
        message: false
    };

    // test object properties presence
    for (let prop in obj) {
        properties[prop] = true;
    }
    for (let prop in properties) {
        if (properties[prop] === false){
            if(prop.toString() !== 'uri'){
                throw new Error(`Invalid request header: Invalid ${prop.toString().capitalize()}`);
            }else{
                throw new Error(`Invalid request header: Invalid ${prop.toString().toUpperCase()}`);
            }
        }
    }

    // test method
    if(method !== 'GET' && method !== 'POST' && method !== 'DELETE' && method !== 'CONNECT'){
        throw new Error('Invalid request header: Invalid Method');
    }

    //test uri
    let uriRegex = /(^[A-Za-z0-9\.]+$)|(^\*$)/g;
    if(!uriRegex.test(uri) || uri === ''){
        throw new Error(`Invalid request header: Invalid URI`);
    }

    //test version
    if(version !== 'HTTP/0.9' && version !== 'HTTP/1.0' && version !== 'HTTP/1.1' && version !== 'HTTP/2.0'){
        throw new Error(`Invalid request header: Invalid Version`);
    }
    //test message
    let messageRegex = /^[^<>\\&'"]*$/g;
    if(!messageRegex.test(message)){
        throw new Error(`Invalid request header: Invalid Message`);
    }
    return obj;
}

console.log(validateRequest({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/0.9',
    message: ''
}));
