/**
 * Created by Deyan Peychev on 14-Aug-17.
 */
let pageController = (() => {

    function displayCatalog(ctx) {
        auth.checkStatus(ctx);

        appService.getAllPosts()
            .then(function (posts) {
                let rank = 1;
                posts = posts.map(p => {
                    p.timePosted = appService.calcTime(p._kmd.ect);
                    p.rank = rank++;
                    p.isAuthor = p.author === localStorage.getItem('username');
                    return p;
                });

                ctx.publications = posts;

                body = '././templates/user/posts/view-posts/catalog.hbs';
                appService.commonPartials['post'] = '././templates/user/posts/view-posts/post.hbs';
                appService.commonPartials['body'] = body;
                ctx.loadPartials(appService.commonPartials).then(function () {
                    this.partial('././templates/page.hbs').then(function () {
                        $('a#deletePost').click(function (e) {
                            let postId = $(e.target).attr('data-id');
                            appService.deletePost(postId)
                                .then(function () {
                                    auth.showInfo('Post deleted.');
                                    displayCatalog(ctx);
                                })
                        })
                    })
                })
            })
            .catch(auth.handleError);
    }

    function getHome(ctx) {
        auth.checkStatus(ctx);
        let body = '';

        if (auth.isAuthed()) {
            displayCatalog(ctx);

        } else {
            body = '././templates/user/init.hbs';
            appService.commonPartials['body'] = body;
            ctx.loadPartials(appService.commonPartials).then(function () {

                this.partial('././templates/page.hbs')
            })
        }
    }

    function getSubmit(ctx) {
        auth.checkStatus(ctx);

        appService.commonPartials['body'] = '././templates/user/posts/submit.hbs';
        ctx.loadPartials(appService.commonPartials).then(function () {

            this.partial('././templates/page.hbs')
        })
    }

    function postSubmit(ctx) {
        let {url, title, image, comment} = ctx.params;

        let urlR = /http.*/g;
        if(url === '' || !urlR.test(url)){
            auth.showError('Invalid URL.');
            return;
        }

        if(title === ''){
            auth.showError('Invalid title.');
            return;
        }

        let req = {
            "author": localStorage.getItem('username'),
            "title": title,
            "description": comment,
            "url": url,
            "imageUrl": image
        };

        appService.postLink(req)
            .then(function (res) {
                auth.showInfo('Successfully posted the link.');
                ctx.redirect('#/catalog');
            })
            .catch(auth.handleError);
    }

    function displayComments(ctx, id, afterDelCom) {
        auth.checkStatus(ctx);

        let linkID = (ctx.params.id).substr(1);

        if(linkID === '' || afterDelCom === true){
            linkID = id;
        }

        appService.getSpecifiedPost(linkID)
            .then(function (post) {
                appService.getPostComments(linkID)
                    .then(function (comments) {
                        // handle post response
                        post.timePosted = appService.calcTime(post._kmd.ect);
                        post.isAuthor = post.author === localStorage.getItem('username');
                        ctx.publications = [post];

                        //handle comments response
                        comments = comments.map(c => {
                            c.timePosted = appService.calcTime(c._kmd.ect);
                            c.postIsAuthed = c.author === localStorage.getItem('username');
                            return c;
                        });
                        ctx.comments = comments;

                        //render page
                        appService.commonPartials['publication'] = '././templates/user/posts/view-comments/publication.hbs';
                        appService.commonPartials['body'] = '././templates/user/posts/view-comments/comments.hbs';
                        appService.commonPartials['comment'] = '././templates/user/posts/view-comments/comment.hbs';

                        ctx.loadPartials(appService.commonPartials).then(function () {
                            this.partial('././templates/page.hbs').then(function () {
                                $('a#deleteComment').click(function (e) {
                                    let commentId = $(e.target).attr('data-id');
                                   appService.deleteComment(commentId)
                                       .then(function (res) {
                                           auth.showInfo('Comment deleted.');
                                           displayComments(ctx, post._id, true);
                                       })
                                       .catch(auth.handleError);
                                });
                                $('a#deletePost').click(function (e) {
                                    let postId = $(e.target).attr('data-id');
                                    appService.deletePost(postId)
                                        .then(function () {
                                            auth.showInfo('Post deleted.');
                                            displayCatalog(ctx);
                                        })
                                })
                            })
                        });
                    })
                    .catch(auth.handleError);
            })
            .catch(auth.handleError);
    }

    function submitComment(ctx) {
        let postId = $('.post').attr('data-id');

        let content = ctx.params.content;

        if(content === ''){
            auth.showError('Invalid comment.');
            return;
        }

        let req = {
            "postId": postId,
            "content": ctx.params.content,
            "author": localStorage.getItem('username')
        };

        appService.postComment(req)
            .then(function (res) {
                auth.showInfo('Comment successfully posted.');
                displayComments(ctx, postId);
            })
            .catch(auth.handleError);
    }

    function login(req) {
        let {username, password} = req.params;
        console.log(username, password);
        auth.login(username, password)
            .then(function (res) {
                auth.showInfo('Logged in');
                auth.saveSession(res); // res === user info
                getHome(req);
            })
            .catch(auth.handleError);
    }

    function register(ctx) {
        let {username, password, repeatPass} = ctx.params;

        if(username.length <3){
            auth.showError('Invalid username. Username should be at least 3 symbols long.');
            return;
        }

        let usernameRegex = /[a-zA-Z]/g;
        if(!usernameRegex.test(username)){
            auth.showError('Invalid username. Username should contain only english alphabet letters.');
            return;
        }

        if(password.length <6 || repeatPass.length<6){
            auth.showError('Invaid password. Password should be at least 6 characters long.');
            return;
        }

        let passRegex = /[a-zA-Z0-9]/g;
        if(!passRegex.test(password) || !passRegex.test(repeatPass)){
            auth.showError('Invalid password. Password should contain only english alphabet letters and digits.');
            return;
        }

        if(password !== repeatPass){
            auth.showError('Passwords do not match.');
            return;
        }

        auth.register(username, password, repeatPass)
            .then(function (res) {
                auth.saveSession(res);
                auth.showInfo('Register successful');
                getHome(ctx);
            })
            .catch(auth.handleError);
    }

    function logout(ctx) {

        auth.logout()
            .then(function () {
                localStorage.clear();
                auth.showInfo('Logged out');
                getHome(ctx);
            })
            .catch(auth.handleError);
    }

    function displayEdit(ctx) {
        auth.checkStatus(ctx);
        let postId = (ctx.params.id).substr(1);
        appService.getSpecifiedPost(postId)
            .then(function (post) {

                ctx.editForms = [post];

                appService.commonPartials['body'] = '././templates/user/posts/edit-post/edit.hbs';
                appService.commonPartials['editForm'] = '././templates/user/posts/edit-post/edit-form.hbs';

                ctx.loadPartials(appService.commonPartials).then(function () {
                    this.partial('././templates/page.hbs');
                })
            })
    }

    function postEdit(ctx) {
        let postId = (ctx.params.id).substr(1);

        let url = ctx.params.url;
        let urlR = /http.*/g;
        if(url === '' || !urlR.test(url)){
            auth.showError('Invalid URL.');
            return;
        }

        let title = ctx.params.title;
        if(title === ''){
            auth.showError('Invalid title.');
            return;
        }


        let params = {
            author: localStorage.getItem('username'),
            title: ctx.params.title,
            description: ctx.params.description,
            url: ctx.params.url,
            imageUrl: ctx.params.image,
        };

        appService.updatePost(params, postId)
            .then(function (res) {
                auth.showInfo('Post edited');
                ctx.redirect('#/catalog');
            })
            .catch(auth.handleError);
    }

    function myPosts(ctx) {
        auth.checkStatus(ctx);

        appService.getMyPosts()
            .then(function (posts) {
                let rank = 1;
                posts = posts.map(p => {
                    p.timePosted = appService.calcTime(p._kmd.ect);
                    p.rank = rank++;
                    p.isAuthor = p.author === localStorage.getItem('username');
                    return p;
                });

                ctx.publications = posts;

                body = '././templates/user/posts/my-posts/posts.hbs';
                appService.commonPartials['post'] = '././templates/user/posts/my-posts/post.hbs';
                appService.commonPartials['body'] = body;
                ctx.loadPartials(appService.commonPartials).then(function () {

                    this.partial('././templates/page.hbs').then(function () {
                        $('a#deletePost').click(function (e) {
                            let postId = $(e.target).attr('data-id');
                            appService.deletePost(postId)
                                .then(function () {
                                    auth.showInfo('Post deleted.');
                                    displayCatalog(ctx);
                                })
                        })
                    })
                })
            })
            .catch(auth.handleError);
    }

    return {
        getHome,
        login,
        register,
        logout,
        displayCatalog,
        getSubmit,
        postSubmit,
        displayComments,
        submitComment,
        displayEdit,
        postEdit,
        myPosts
    }
})();