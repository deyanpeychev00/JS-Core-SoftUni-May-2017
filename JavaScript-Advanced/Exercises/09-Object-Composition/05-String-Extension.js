/**
 * Created by Deyan Peychev on 06-Jul-17.
 */
(function modifyProperties() {
    String.prototype.ensureStart = function (str) {
        let start = this.slice(0,str.length);
        if(start !== str){
            return str + this.toString();
        }else{
            return this.toString();
        }
    };

    String.prototype.ensureEnd = function (string) {
        let end = this.toString().substr(-string.length);
        if(end !== string){
            return this.toString() + string;
        }else{
            return this.toString();
        }
    };

    String.prototype.isEmpty = function () {
        return this.toString().length === 0;
    };

    String.prototype.truncate = function (n) {
        if (this.toString().length < n){
            return this.toString();
        }else{
            let result = '';

            let parts = this.toString().split(' ');
            for (let part of parts) {
                if((result + part).length <= n-3){
                    if(result === ''){
                        result = part;
                    }else{
                        result = result + ' ' + part;
                    }
                }else{
                    break;
                }
            }
            result += '...';
            return result.substring(0,n);
        }
    };

    String.format = function (string) {
        let regex = /\{(\d+)\}/g;
        let match;
        while(match = regex.exec(string)){
            let index = +match[1];
            if(index < arguments.length-1){
                string = string.replace(match[0], arguments[index+1]);
            }
        }
        return string;
    };

})();
let testString = 'the quick brown fox jumps over the lazy dog';
testString.truncate(10);
console.log(testString);