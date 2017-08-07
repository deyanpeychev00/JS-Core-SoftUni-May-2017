function startApp() {
    //DOM elements
    const adsDIV = $('#ads');

    // display navigation
    $('header').find('a').show();

    // display home page
    $('#viewHome').show();

/*    function navigate(e){
        $('section').hide();
        let target = $(e.target).attr('data-target');
        $('#' + target).show();
    }*/

    function showView(name) {
        $('section').hide();

        switch (name){
            case 'home': {
                $('#viewHome').show();
                break;
            }
            case 'login': {
                $('#viewLogin').show();
                break;
            }
            case 'register': {
                $('#viewRegister').show();
                break;
            }
            case 'ads': {
                loadAds();
                $('#viewAds').show();
                break;
            }
            case 'create': {
                $('#viewCreateAd').show();
                break;
            }
            case 'edit': {
                $('#viewEditAd').show();
                break;
            }
        }
    }

    // attach event listeners
    $('#linkHome').click(() => showView('home'));
    $('#linkLogin').click(() => showView('login'));
    $('#linkListAds').click(() => showView('ads'));
    $('#linkRegister').click(() => showView('register'));
    $('#linkCreateAd').click(() => showView('create'));
    $('#linkLogout').click(logout);

    $('#buttonLoginUser').click(login);
    $('#buttonRegisterUser').click(register);
    $('#buttonCreateAd').click(createAd);

    // notification and error handling
    $(document).on({
        ajaxStart: () => $('#loadingBox').show(),
        ajaxStop: () => $('#loadingBox').fadeOut()
    });

    $('#infoBox').click((e) => $(e.target).fadeOut());
    $('#errorBox').click((e) => $(e.target).fadeOut());

    function showInfo(message) {
        $('#infoBox').text(message);
        $('#infoBox').show();
        setTimeout(() => $('#infoBox').fadeOut(), 2000);
    }
    function showError(message) {
        $('#errorBox').text(message);
        $('#errorBox').show();
    }

    function handleError(reason) {
        showError(reason.responseJSON.description);
    }



    let requester = (() => {
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
            req.data = data;
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

    if(localStorage.getItem('authtoken') !== null &&
        localStorage.getItem('username') !== null){
        userLoggedIn();
    }else{
        userLoggedOut();
    }

    // user session
    function userLoggedIn() {
        $('#loggedInUser').text('Welcome, ' + localStorage.getItem('username') + '!');
        $('#loggedInUser').show();
        $('#linkLogin').hide();
        $('#linkRegister').hide();
        $('#linkLogout').show();
        $('#linkListAds').show();
        $('#linkCreateAd').show();
    }
    function userLoggedOut() {
        $('#loggedInUser').text('');
        $('#loggedInUser').hide();
        $('#linkLogin').show();
        $('#linkRegister').show();
        $('#linkLogout').hide();
        $('#linkListAds').hide();
        $('#linkCreateAd').hide();
    }

    function saveSession(data) {
        localStorage.setItem('username', data.username);
        localStorage.setItem('id', data._id);
        localStorage.setItem('authtoken', data._kmd.authtoken);
        userLoggedIn()
    }

    async function login() {
        let form = $('#formLogin');
        let username = form.find('input[name="username"]').val();
        let password = form.find('input[name="passwd"]').val();

        try{
            saveSession(await requester.post('user', 'login', {username, password}, 'basic'));
            showView('ads');
            showInfo('Successful login!');
        }catch(err){
            handleError(err);
        }
    }
    
    async function register() {
        let form = $('#formRegister');
        let username = form.find('input[name="username"]').val();
        let password = form.find('input[name="passwd"]').val();

        try{
            saveSession(await requester.post('user', '', {username, password}, 'basic'));
            showView('ads');
            showInfo('Successfully registered!');
        }catch(err){
            handleError(err);
        }
    }
    
    async function logout() {
        let res = await requester.post('user', '_logout', {authtoken: localStorage.getItem('authtoken')});

        try{
            localStorage.clear();
            userLoggedOut();
            showView('home');
            showInfo('Logged out.');
        }catch(err){
            handleError(err);
        }
    }

    // ads

    async function loadAds() {
        let data = await requester.get('appdata', 'ads');
        $(adsDIV).empty();

        if(data.length === 0){
            adsDIV.append('<p>No ads in database</p>');
            return;
        }

        for (let ad of data) {
            let html = $('<div>').addClass('ad-box');

            let title = $(`<div class="ad-title">${ad.title}</div>`);
            let deleteBtn = $('<button>&#10006;</button>').addClass('ad-control delete').click(() => deleteAd(ad._id));
            let editBtn = $('<button>&#9998;</button>').addClass('ad-control edit').click(() => openEditAd(ad));
            if(ad._acl.creator === localStorage.getItem('id')){
                title.append(deleteBtn);
                title.append(editBtn);
            }
            html.append(title);
            html.append(`<div><img src="${ad.imageURL}"></div>`);
            html.append(`<div>Price: ${Number(ad.price).toFixed(2)} | By: ${ad.publisher}</div>`);


            adsDIV.append(html);
        }
    }

    async function createAd() {
        let form = $('#formCreateAd');

        let title = form.find('input[name="title"]').val();
        let description = form.find('textarea[name="description"]').val();
        let price = form.find('input[name="price"]').val();
        let imageURL = form.find('input[name="image"]').val();

        let publishDate = (new Date()).toString('yyyy-MM-dd');
        let publisher = localStorage.getItem('username');

        if (title.length === 0) {
            showError('Title cannot be empty!');
            return;
        }
        if (price.length === 0) {
            showError('Price cannot be empty!');
            return;
        }

        let newAd = {
            title, description, price, imageURL, publishDate, publisher
        };

        try {
            await requester.post('appdata', 'ads', newAd);
            showView('ads');
            showInfo('Successfully created the advertisement!');
        }catch(err){
            handleError(err);
        }
    }

    async function deleteAd(id) {
        try{
            await requester.remove('appdata', 'ads/'+id);
            showView('ads');
            showInfo('Ad deleted');
        }catch(err){
            handleError(err);
        }
    }

    async function openEditAd(ad) {
        let form = $('#formEditAd');
        form.find('input[name="title"]').val(ad.title);
        form.find('textarea[name="description"]').val(ad.description);
        form.find('input[name="price"]').val(ad.price);
        form.find('input[name="image"]').val(ad.imageURL);

        let publishDate = ad.publishDate;
        let publisher = ad.publisher;
        let id = ad._id;

        showView('edit');
        form.find('#buttonEditAd').click(() => editAd(publishDate, publisher, id));

        async function editAd(publishDate, publisher, id) {
            let form = $('#formEditAd');
            let title = form.find('input[name="title"]').val();
            let description = form.find('textarea[name="description"]').val();
            let price = form.find('input[name="price"]').val();
            let imageURL = form.find('input[name="image"]').val();

            if (title.length === 0) {
                showError('Title cannot be empty!');
                return;
            }
            if (price.length === 0) {
                showError('Price cannot be empty!');
                return;
            }

            let editedAd = {
                title, description, price, imageURL, publishDate, publisher
            };

            try {

                await requester.update('appdata', 'ads/' + id, editedAd);
                showView('ads');
                showInfo('Successfully edited the advertisement!');
            }catch(err){
                handleError(err);
            }
        }
    }

}