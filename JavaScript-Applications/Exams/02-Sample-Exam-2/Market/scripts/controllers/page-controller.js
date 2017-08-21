/**
 * Created by Deyan Peychev on 14-Aug-17.
 */
let pageController = (() => {

    function getHome(ctx) {
        auth.checkStatus(ctx);

        let body = '././templates/main/home.hbs';

        if (auth.isAuthed()) {
            body = '././templates/user/home.hbs';
        }

        appService.commonPartials['body'] = body;
        ctx.loadPartials(appService.commonPartials).then(function () {
            this.partial('././templates/page.hbs')
        })
    }

    // login controller
    function getLogin(ctx) {
        auth.checkStatus(ctx);
        appService.commonPartials['body'] = '././templates/user/login.hbs';

        this.loadPartials(appService.commonPartials).then(function () {
            this.partial('././templates/page.hbs');
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
        appService.commonPartials['body'] = '././templates/user/register.hbs';

        this.loadPartials(appService.commonPartials).then(function () {
            this.partial('././templates/page.hbs');
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

    function shop(ctx) {
        auth.checkStatus(ctx);
        appService.commonPartials['product'] = '././templates/user/shop/product.hbs';
        appService.commonPartials['body'] = '././templates/user/shop/shop.hbs';

        appService.getAllProducts()
            .then(function (products) {
                    products = appService.formatProducts(products);

                    ctx.products = products;
                    ctx.loadPartials(appService.commonPartials).then(function () {
                        this.partial('././templates/page.hbs').then(function () {
                            $('button#purchaseBtn').click((e) => {
                                let productId = $(e.target).attr('data-id');
                                appService.addToCart(productId);
                            });
                        });
                    })
                })
            .catch(auth.handleError);
    }

    function cart(ctx) {
        auth.checkStatus(ctx);

        appService.getUser()
            .then(function (user) {

                if(user.cart !== undefined){
                    Object.values(user.cart).forEach( p => {
                        p.product.price = Number(p.product.price).toFixed(2);
                    });
                }

                ctx.products = user.cart;

                appService.commonPartials['product'] = '././templates/user/cart/product.hbs';
                appService.commonPartials['body'] = '././templates/user/cart/cart.hbs';

                ctx.loadPartials(appService.commonPartials).then(function () {
                    this.partial('././templates/page.hbs').then(function () {
                        $('button#discardBtn').click((e) => {
                            let productId = $(e.target).attr('data-id');
                            appService.discardProduct(productId, ctx);
                        });
                    });
                })
            })
    }


    return {
        getHome,
        getLogin,
        postLogin,
        getRegister,
        postRegister,
        logout,
        shop,
        cart
    }
})();