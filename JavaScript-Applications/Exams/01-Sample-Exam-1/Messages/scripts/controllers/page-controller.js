/**
 * Created by Deyan Peychev on 14-Aug-17.
 */
let pageController = (() => {

    function getHome(ctx) {
        auth.checkStatus(ctx);

        let body = '././templates/views/main/app-home.hbs';

        if (auth.isAuthed()) {
            body = '././templates/views/user/home.hbs';
        }

        appService.commonPartials['body'] = body;
        ctx.loadPartials(appService.commonPartials).then(function () {
            this.partial('././templates/views/main.hbs')
        })
    }

    // login controller
    function getLogin(ctx) {
        auth.checkStatus(ctx);
        appService.commonPartials['body'] = '././templates/views/user/login.hbs';

        this.loadPartials(appService.commonPartials).then(function () {
            this.partial('././templates/views/main.hbs');
        })
    }
    function postLogin(req) {
        let {username, password} = req.params;
        auth.login(username, password)
            .then(function (res) {
                auth.showInfo('Logged in');
                auth.saveSession(res); // res === user info
                getHome(req);
            })
            .catch(auth.handleError);
    }

    // register controller
    function getRegister(ctx) {
        auth.checkStatus(ctx);
        appService.commonPartials['body'] = '././templates/views/user/register.hbs';

        this.loadPartials(appService.commonPartials).then(function () {
            this.partial('././templates/views/main.hbs');
        })
    }
    function postRegister(req) {
        let {username, password, name} = req.params;
        auth.register(username, password, name)
            .then(function (res) {
                auth.saveSession(res);
                auth.showInfo('Register successful');
                getHome(req);
            })
            .catch(auth.handleError);
    }

    // show messages controller
    function showMessages(ctx) {
        auth.checkStatus(ctx);

        appService.commonPartials.body = '././templates/views/user/messages/my-messages/messages.hbs';
        appService.commonPartials.message = '././templates/views/user/messages/my-messages/message.hbs';

        ctx.loadPartials(appService.commonPartials).then(function () {
            ctx.partials = this.partials;

            ctx.partial('././templates/views/main.hbs')
                .then(function () {
                    appService.getAllMessages()
                        .then((messages) => {
                            messages.forEach(m => m.timestamp = appService.formatDate(m._kmd.lmt));
                            ctx.messages = messages;

                            ctx.render('././templates/views/user/messages/my-messages/message-list.hbs')
                                .then(function () {
                                    this.replace('#myMessages');
                                });
                        })
                        .catch(auth.handleError);
                });
        });
    }

    // show archive controller
    function showArchive(ctx) {
        auth.checkStatus(ctx);
        appService.commonPartials['body'] = '././templates/views/user/messages/archive-sent/archive.hbs';

        appService.requestArchive()
            .then(function (res) {
                res.forEach(m => m.timestamp = appService.formatDate(m._kmd.lmt));
                ctx.messages = res;
                ctx.loadPartials(appService.commonPartials).then(function () {
                    this.partial('././templates/views/main.hbs').then(function () {
                        $('button').click((e) => {
                            let messageId = $(e.target).attr('data-id');
                            appService.deleteMessage(messageId)
                                .then(function () {
                                    auth.showInfo('Message deleted');
                                    showArchive(ctx);
                                })
                                .catch(auth.handleError);
                        });
                    });
                });
            })
            .catch(auth.handleError);
    }

    // send message controller
    function getSendMessage(ctx) {
        auth.checkStatus(ctx);
        appService.commonPartials['body'] = '././templates/views/user/messages/send-message/send-message.hbs';

        appService.getAllUsers()
            .then(userList => {
                ctx.userList = userList;
                ctx.loadPartials(appService.commonPartials).then(function () {
                    ctx.partials = this.partials;
                    ctx.partial('././templates/views/main.hbs');
                })
            })
            .catch(auth.handleError);
    }
    function postSendMessage(req) {
        let data = {
            sender_username: localStorage.getItem('username'),
            sender_name: localStorage.getItem('name'),
            recipient_username: req.params.recipient,
            text: req.params.text
        };
        appService.sendMessage(data)
            .then(function (res) {

                auth.showInfo('Message sent');
                showArchive(req);
            })
            .catch(auth.handleError);
    }

    // logout controller
    function logout(ctx) {

        auth.logout()
            .then(function () {
                localStorage.clear();
                auth.showInfo('Logged out');
                getHome(ctx);
            })
            .catch(auth.handleError);
    }

    return {
        getHome,
        getLogin,
        postLogin,
        getRegister,
        postRegister,
        showMessages,
        showArchive,
        getSendMessage,
        postSendMessage,
        logout
    }
})();