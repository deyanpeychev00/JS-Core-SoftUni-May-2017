/**
 * Created by Deyan Peychev on 03-Aug-17.
 */
$(() => {
    setGreeting();

    // app consts
    const appKey = 'kid_BJ-otPxD-';
    const appSecret = '0e80570c75894b08afaa6cda7c4ecf82';
    const baseURL = 'https://baas.kinvey.com/';

    // attach events on navigation menu buttons
    $('#linkHome').click(() => showView('home'));
    $('#linkLogin').click(() => showView('login'));
    $('#linkRegister').click(() => showView('register'));
    $('#linkListBooks').click(() => showView('listBooks'));
    $('#linkCreateBook').click(() => showView('createBook'));
    $('#linkLogOut').click(logout);

    // attach submit events on forms
    $('#viewLogin').find('form').submit(login); // login
    $('#viewRegister').find('form').submit(register); // register
    $('#viewCreate').find('form').submit(createBook); // create new book

    // set notifications
    $(document).on({
        ajaxStart: function () {
            $('#loadingBox').show();
        },
        ajaxStop: function () {
            $('#loadingBox').hide();
        }
    });

    // notifications hide when user clicks them
    $('#infoBox').click((e) => $(e.target).hide());
    $('#errorBox').click((e) => $(e.target).hide());

    // notification and error handling
    function showInfo(message) {
        $('#infoBox').text(message);
        $('#infoBox').show();
        setTimeout(() => $('#infoBox').fadeOut(), 1000);
    }
    function showError(message) {
        $('#errorBox').text(message);
        $('#errorBox').show();
    }

    function handleError(reason) {
        showError(reason.responseJSON.description);
    }

    // navigation and header
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
           case 'listBooks': {
               getBooks();
               $('#viewBooks').show();
               break;
           }
           case 'createBook': {
               $('#viewCreate').show();
               break;
           }
           case 'edit': {
               $('#viewEdit').show();
               break;
           }
       }
    }

    // user session and navigation edit
    function setGreeting() {
       let username = localStorage.getItem('username');
       if(username !== null){
           $('#loggedInUser').text(`Welcome, ${username}!`);
           // edit navigation
           $('#linkLogin').hide();
           $('#linkRegister').hide();
           $('#linkCreateBook').show();
           $('#linkListBooks').show();
           $('#linkLogOut').show();
       }else{
           // edit navigation
           $('#loggedInUser').text('');
           $('#linkLogin').show();
           $('#linkRegister').show();
           $('#linkCreateBook').hide();
           $('#linkListBooks').hide();
           $('#linkLogOut').hide();
       }
    }

    function setStorage(user) {
        localStorage.setItem('authtoken', user._kmd.authtoken);
        localStorage.setItem('username', user.username);
        localStorage.setItem('_id', user._id);
        $('#loggedInUser').text(`Welcome, ${user.username}!`);
        showView('listBooks');
        setGreeting();
    }

    function login(e) {
       e.preventDefault();
       let username = $('#logUsername').val();
       let password = $('#logPassword').val();

       let req = {
           url: baseURL + 'user/' + appKey + '/login',
           method: 'POST',
           headers: {
               'Authorization': 'Basic ' + btoa(appKey+':'+appSecret),
               'Content-Type': 'application/json'
           },
           data: JSON.stringify({
                username: username,
                password: password
           }),

           success: (data) => {
               showInfo('Login successful');
               setStorage(data);
           },
           error: handleError
       };
       $.ajax(req)
    }

    function register(e) {
        e.preventDefault();
        let username = $('#regUsername').val();
        let password = $('#regPassword').val();
        let confirmPassword = $('#regConfirmPassword').val();

        if(username.length === 0 ){
            showError('Username cannot be empty!');
            return;
        }
        if(password.length === 0){
            showError('Password cannot be empty!');
            return;
        }
        if(password !== confirmPassword){
            showError(`Passwords don't match!`);
            return;
        }

        let req = {
            url: baseURL + 'user/' + appKey,
            method: 'POST',
            headers: {
                'Authorization': 'Basic ' + btoa(appKey+':'+appSecret),
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({
                username: username,
                password: password
            }),

            success: (data) => {
                showInfo('Registration successful');
                setStorage(data);
            },
            error: handleError
        };
        $.ajax(req)
    }

    function logout() {
        let req = {
            url: baseURL + 'user/' + appKey + '/_logout',
            method: 'POST',
            headers: {
                'Authorization': 'Kinvey ' + localStorage.getItem('authtoken'),
            },

            success: logoutSuccess,
            error: handleError
        };
        $.ajax(req);

        function logoutSuccess() {
            localStorage.clear();
            setGreeting();
            showView('home');
        }
    }

    // catalog
    function getBooks() {
        $('#viewBooks').find('table').find('tbody').empty();

        let req = {
            url: baseURL + 'appdata/' + appKey + '/books',
            method: 'GET',
            headers: {
                'Authorization': 'Kinvey ' + localStorage.getItem('authtoken'),
                'Content-Type': 'application/json'
            },

            success: displayBooks,
            error: handleError
        };
        $.ajax(req);

    }

    function displayBooks(data) {
        $('#viewBooks').find('table').find('tbody').empty();
        for (let book of data) {
            let actions = [];
            if(book._acl.creator === localStorage.getItem('_id')){
                actions.push($('<button>&#9998;</button>').click(() => editBook(book)));
                actions.push($('<button>&#10006;</button>').click(() => deleteBook(book._id)));
            }

            let row = $('<tr>')
                .append($(`<td>${book.title}</td>`))
                .append($(`<td>${book.author}</td>`))
                .append($(`<td>${book.description}</td>`))
                .append($(`<td>`).append(actions));
            row.appendTo($('#viewBooks').find('table').find('tbody'));
        }
    }

    function createBook(e) {
        e.preventDefault();
        let title = $('#createTitle').val();
        let author = $('#createAuthor').val();
        let description = $('#createDescription').val();

        if(title.length === 0){
            showError('Title cannot be empty!');
            return;
        }
        if(author.length === 0){
            showError('Author cannot be empty!');
            return;
        }

        let req = {
            url: baseURL + 'appdata/' + appKey + '/books',
            method: 'POST',
            headers: {
                'Authorization': 'Kinvey ' + localStorage.getItem('authtoken'),
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({
                title,
                author,
                description
            }),

            success: createSuccess,
            error: handleError
        };

        $.ajax(req);

        function createSuccess(data) {
            $('#viewCreate').find('form').trigger('reset');
            showView('listBooks')
        }
    }

    function deleteBook(id) {

        let req = {
            url: baseURL + 'appdata/' + appKey + '/books/' + id,
            method: 'DELETE',
            headers: {
                'Authorization': 'Kinvey ' + localStorage.getItem('authtoken'),
            },

            success: deleteSuccess,
            error: handleError
        };

        $.ajax(req);

        function deleteSuccess(data) {
            showInfo('Successfully deleted the book.');
            showView('listBooks');
        }
    }

    function editBook(targetBook) {
        showView('edit');
        $('#editTitle').val(targetBook.title);
        $('#editAuthor').val(targetBook.author);
        $('#editDescription').val(targetBook.description);

        $('#viewEdit').find('form').submit(edit); // edit book

        function edit(e) {
            e.preventDefault();
            let book = {
                title:$('#editTitle').val(),
                author: $('#editAuthor').val(),
                description: $('#editDescription').val()
            };

            if(book.title.length === 0){
                showError('Title cannot be empty!');
                return;
            }
            if(book.author.length === 0){
                showError('Author cannot be empty!');
                return;
            }

            let req = {
                url: baseURL + 'appdata/' + appKey + '/books/' + targetBook._id,
                method: 'PUT',
                headers: {
                    'Authorization': 'Kinvey ' + localStorage.getItem('authtoken'),
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(book),

                success: editSuccess,
                error: handleError
            };

            $.ajax(req);

            function editSuccess(data) {
                showInfo('Book successfully edited');
                showView('listBooks');
            }
        }
    }
});