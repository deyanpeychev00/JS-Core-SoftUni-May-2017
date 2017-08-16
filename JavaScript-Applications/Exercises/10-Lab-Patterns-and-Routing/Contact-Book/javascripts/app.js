const handlers = {

};

$(() => {

    Sammy('#main', function () {

        this.use('Handlebars', 'hbs');

        this.get('index.html', displayWelcome);
        this.get('/', displayWelcome);
        function displayWelcome() {
            console.log('in welcome');

            this.loadPartials({
                header: './templates/common/header.hbs',
                footer:'./templates/common/footer.hbs'
            }).then(function () {

                this.partial('./templates/welcome.hbs');
            })
        }

        this.get('#/register', function () {
            console.log('in register');
            this.loadPartials({
                header: './templates/common/header.hbs',
                footer:'./templates/common/footer.hbs'
            }).then(function () {

                this.partial('./templates/register.hbs');
            })
        });

        this.get('#/contacts', handlers.contactsController);

        this.get('#/profile', function () {
            console.log('profile edit');
            this.loadPartials({
                header: './templates/common/header.hbs',
                footer:'./templates/common/footer.hbs'
            }).then(function () {

                this.partial('./templates/profile.hbs');
            })
        });

        this.get('#/logout', function () {
            auth.logout()
                .then(() => {
                    localStorage.clear();
                    this.redirect('index.html');
                });
        });

        // POST
        this.post('#/login', function (context) {
            console.log('Logging in...');
            let username = context.params.username;
            let password = context.params.password;

            auth.login(username, password)
                .then( function(data){
                    auth.saveSession(data);
                    context.redirect('#/contacts')   ;
                });
        });

        this.post('#/register', function () {
            // handle register
        });

        this.post('#/profile', function () {
            // edit profile
        });

    }).run();


    /*     TODO:
     * user search
     * messages
    */

});