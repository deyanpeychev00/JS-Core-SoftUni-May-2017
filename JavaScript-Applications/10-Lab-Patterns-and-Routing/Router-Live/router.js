/**
 * Created by Deyan Peychev on 10-Aug-17.
 */
$(() => {

    const content = {
        home: '<h2>Home Page</h2>',
        about: '<h2>About Page</h2>',
        contact: '<h2>Contact Page</h2>'
    };
    const main = $('#main');

    $(window).on('hashchange', loadContent);

    function loadContent() {
        let hash = location.hash.substr(2);

        if (hash === ''){
            hash = 'home';
            location.hash = '#/' + hash;
        }

        if(content.hasOwnProperty((hash))){
            main.html(content[hash]);
        }else{
            main.html('<h2>404: Nout Found</h2>');
        }
    }

});