function getArticleGenerator(articles) {
    return function () {
        if(articles.length >0 ){
            let article = $('<article></article>');
            article.append(`<p>${articles.shift()}</p>`);
            $('#content').append(article);
        }
    }
}
