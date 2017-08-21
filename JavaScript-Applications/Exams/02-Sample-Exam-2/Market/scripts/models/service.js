let appService = (() => {

    let commonPartials = {
        header: '././templates/main/header.hbs',
        footer: '././templates/main/footer.hbs',
    };

    function getAllProducts() {
        return requester.get('appdata', 'products');
    }

    function formatProducts(products) {
        return products.map(p => {
            p.price = Number(p.price).toFixed(2);
            return p;
        });
    }

    function getUser() {
        return requester.get('user', localStorage.getItem('userId'));
    }

    function checkCart(user) {
        if (user.cart === undefined) {
            return {};
        } else {
            return user.cart;
        }
    }

    function getProduct(id) {
        return requester.get('appdata', 'products/' + id);
    }

    function updateUser(user) {
        return requester.update('user', localStorage.getItem('userId'), 'kinvey', user);
    }

    function addToCart(productId) {
        getUser()
            .then(function (user) {
                let cart = checkCart(user);

                getProduct(productId)
                    .then(function (product) {

                        if (cart.hasOwnProperty(productId)) {

                            cart[productId] = {
                                _id: productId,
                                quantity: Number(cart[`${productId}`].quantity) + 1,
                                product: {
                                    name: product.name,
                                    description: product.description,
                                }
                            };

                            cart[productId].product.price = Number(product.price) * Number(cart[productId].quantity);

                        } else {
                            cart[productId] = {
                                _id: productId,
                                quantity: 1,
                                product: {
                                    name: product.name,
                                    description: product.description,
                                    price: product.price
                                }
                            };

                        }

                        user.cart = cart;
                        updateUser(user)
                            .then(function () {
                                auth.showInfo('Product added to cart.')
                            })
                            .catch(auth.handleError);
                    })
                    .catch(auth.handleError);
            })
            .catch(auth.handleError);
    }

    function discardProduct(id, ctx) {
        getUser()
            .then(function (user) {

                delete user.cart[id];
                updateUser(user)
                    .then(function (res) {
                        auth.showInfo('Product removed from cart.');
                        pageController.cart(ctx);
                    })
                    .catch(auth.handleError);
            })
            .catch(auth.handleError);
    }

    return {
        commonPartials,
        getAllProducts,
        formatProducts,
        addToCart,
        getUser,
        discardProduct
    }
})();