/**
 * Created by Deyan Peychev on 12-Jul-17.
 */
class Request{
    constructor(method, uri, version, message, response = undefined, fulfilled = false){
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = response;
        this.fulfilled = fulfilled;
    }
}

let myData = new Request('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData);