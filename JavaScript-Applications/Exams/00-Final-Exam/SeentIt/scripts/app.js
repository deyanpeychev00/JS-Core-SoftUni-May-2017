$(() => {

    const app = Sammy('#app', function () {
        this.use('Handlebars', 'hbs');

        this.get('index.html', pageController.getHome);
        this.get('#', pageController.getHome);
        this.get('/', pageController.getHome);


        this.get('index.html', pageController.getHome);
        this.get('#', pageController.getHome);
        this.get('/', pageController.getHome);

        this.post('#/login', pageController.login);
        this.post('#/register', pageController.register);
        this.get('#/logout', pageController.logout);

        this.get('#/catalog', pageController.displayCatalog);
        this.get('#/my-posts', pageController.myPosts);

        this.get('#/submit', pageController.getSubmit);
        this.post('#/submit', pageController.postSubmit);

        this.get('#/comments:id', pageController.displayComments);

        this.get('#/edit:id', pageController.displayEdit);
        this.post('#/edit:id', pageController.postEdit);

        this.post('#/submit-comment:id', pageController.submitComment)
    });

    app.run();
});