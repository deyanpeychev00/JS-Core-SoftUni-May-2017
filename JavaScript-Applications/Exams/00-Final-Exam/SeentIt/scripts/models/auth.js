let auth = (() => {

    $(document).on({
        ajaxStart: () => $('#loadingBox').find('span').show(),
        ajaxStop: () => $('#loadingBox').find('span').fadeOut(),
    });

    function isAuthed() {
        return localStorage.getItem('authtoken') !== null;
    }

    function checkStatus(ctx) {
        ctx.loggedIn = localStorage.getItem('authtoken') !== null;
        ctx.username = localStorage.getItem('username');
    }

    function saveSession(userInfo) {
        let userAuth = userInfo._kmd.authtoken;
        localStorage.setItem('authtoken', userAuth);
        let userId = userInfo._id;
        localStorage.setItem('userId', userId);
        let username = userInfo.username;
        localStorage.setItem('username', username);
        let name = userInfo.name;
        localStorage.setItem('name', name);
    }

    // user/login
    function login(username, password) {
        let userData = {
            username,
            password
        };

        return requester.post('user', 'login', userData, 'basic');
    }

    // user/register
    function register(username, password) {
        let userData = {
            username,
            password,
        };

        return requester.post('user', '', userData, 'basic');
    }

    // user/logout
    function logout() {
        let logoutData = {
            authtoken: localStorage.getItem('authtoken')
        };

        return requester.post('user', '_logout', logoutData, 'kinvey');
    }

    function handleError(reason) {
        showError(reason.responseJSON.description);
    }

    function showInfo(message) {
        let infoBox = $('#infoBox').find('span');
        infoBox.text(message);
        infoBox.show();
        setTimeout(() => infoBox.fadeOut(), 2000);
    }

    function showError(message) {
        let errorBox = $('#errorBox').find('span');
        console.log(errorBox);
        errorBox.text(message);
        errorBox.show();
        setTimeout(() => errorBox.fadeOut(), 2000);
    }

    return {
        login,
        register,
        logout,
        saveSession,
        showInfo,
        showError,
        handleError,
        isAuthed,
        checkStatus
    }
})();