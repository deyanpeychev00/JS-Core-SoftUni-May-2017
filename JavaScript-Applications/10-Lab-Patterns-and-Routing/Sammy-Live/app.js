/**
 * Created by Deyan Peychev on 10-Aug-17.
 */
const app = Sammy('#main', function () {

    this.get('index.html', () => {
        this.swap('<h2>Home Page</h2>');
    });
    this.get('about', () => {
        this.swap('<h2>About Page</h2>');
    });
    this.get('contact', () => {
        this.swap('<h2>Contact Page</h2>');
    });
});

$(() => {
    app.run();
});