/**
 * Created by Deyan Peychev on 10-Aug-17.
 */
let auth = (() => {
    function saveSession(data) {
        localStorage.setItem('username', data.username);
        localStorage.setItem('id', data._id);
        localStorage.setItem('authtoken', data._kmd.authtoken);
    }

    function login(username, password) {
        return remote.post('user', 'login', {username, password}, 'basic');
    }

    async function register(username, password) {
        return remote.post('user', '', {username, password}, 'basic');

    }

    async function logout() {
        return remote.post('user', '_logout', {authtoken: localStorage.getItem('authtoken')});
    }

    return {
        saveSession,
        login,
        register,
        logout
    }
})();