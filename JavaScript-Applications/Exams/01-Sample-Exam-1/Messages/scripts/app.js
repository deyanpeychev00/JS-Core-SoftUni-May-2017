/**
 * Created by Deyan Peychev on 16-Aug-17.
 */
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

        this.get('#/messages', pageController.showMessages);
        this.get('#/archive', pageController.showArchive);

        this.get('#/send', pageController.getSendMessage);
        this.post('#/send', pageController.postSendMessage);

        this.get('#/logout', pageController.logout);
    });

    app.run();
});