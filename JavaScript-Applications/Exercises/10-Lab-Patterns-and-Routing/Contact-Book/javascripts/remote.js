/**
 * Created by Deyan Peychev on 10-Aug-17.
 */
let remote = (() => {
    // database info
    const appKey = 'kid_H1Oz41Lv-';
    const appSecret = 'e279a419454b48e2b04ac042b811a8cb';
    const baseURL = 'https://baas.kinvey.com/';

    function makeAuth(type) {
        if(type === 'basic'){
            return 'Basic ' + btoa(appKey+':'+appSecret);
        }else{
            return 'Kinvey ' + localStorage.getItem('authtoken');
        }
    }

    function get(module, url, auth) {
        return $.ajax(makeRequest('GET', module, url, auth));
    }

    function post(module, url, data, auth) {
        let req = makeRequest('POST', module, url, auth);
        req.data = JSON.stringify(data);
        return $.ajax(req);
    }

    function update(module, url, data, auth) {
        let req = makeRequest('PUT', module, url, auth);
        req.data = JSON.stringify(data);
        return $.ajax(req);
    }

    function remove(module, url, auth) {
        return $.ajax(makeRequest('DELETE', module, url, auth));
    }

    function makeRequest(method, module, url, auth) {
        return req = {
            url: baseURL + module + '/' + appKey + '/' + url,
            method: method,
            headers: {
                'Authorization': makeAuth(auth),
                'Content-Type': 'application/json'
            }
        };
    }

    return {
        get, post, update, remove
    }
})();