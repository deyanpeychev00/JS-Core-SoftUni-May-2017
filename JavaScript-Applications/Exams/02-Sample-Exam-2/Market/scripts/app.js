$(() => {

    const app = Sammy('#app', function () {
        this.use('Handlebars', 'hbs');

        this.get('index.html', pageController.getHome);
        this.get('#', pageController.getHome);
        this.get('/', pageController.getHome);

        this.get('#/login', pageController.getLogin);
        this.post('#/login', pageController.postLogin);


        this.get('#/register', pageController.getRegister);
        this.post('#/register', pageController.postRegister);

        this.get('#/logout', pageController.logout);

        this.get('#/shop', pageController.shop);
        this.get('#/cart', pageController.cart);
    });

    app.run();

});
