$(() => {
    const app = Sammy('#main', function () {
        this.use('Handlebars', 'hbs');

        // home controller
        this.get('index.html', pageController.displayHome);
        this.get('#/home', pageController.displayHome);

        // about controller
        this.get('#/about', pageController.displayAbout);

        // login controller
        this.get('#/login', pageController.getLogin);
        this.post('#/login', pageController.postLogin);

        // logout controller
        this.get('#/logout', pageController.logout);

        // register controller
        this.get('#/register', pageController.getRegister);
        this.post('#/register', pageController.postRegister);

        // catalog
        this.get('#/catalog', pageController.getCatalog);

        // team create controller
        this.get('#/create', pageController.getCreateTeam);
        this.post('#/create', pageController.postCreateTeam);

        // team details controller
        this.get('#/catalog/:id', pageController.getTeamDetails);

        // join team controller
        this.get('#/join/:id', pageController.joinTeam);
        this.get('#/leave', pageController.leaveTeam);

        // edit team info controller
        this.get('#/edit/:id', pageController.getTeamEdit);
        this.post('#/edit/:id', pageController.postTeamEdit);
    });

    app.run();
});