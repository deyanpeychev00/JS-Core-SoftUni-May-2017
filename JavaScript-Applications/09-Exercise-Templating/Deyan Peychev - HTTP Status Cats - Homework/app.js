$(() => {

    // templates and context storage
    const templates = {};
    const context = {
        cats: []
    };

    // get cats data from window
    context.cats = window.cats;

    // DOM elements
    const catsList = $('#allCats');

    loadTemplates();

    async function loadTemplates() {

        // get all templates needed
        const [catsList, cat] =
            await Promise.all([
                $.get('./templates/cats-list.hbs'),
                $.get('./templates/cat.hbs'),
            ]);

        // set partials and main templates
        Handlebars.registerPartial('cat', cat);
        templates.catsList = Handlebars.compile(catsList);

        renderCatTemplate();
    }

    function renderCatTemplate() {
       catsList.html(templates.catsList(context));

       attachEventHandlers();
    }

    function attachEventHandlers() {

        catsList.children().find('#infoBtn').click( (e) => {
            $(e.target)
                .closest('.card-block')
                .find('.status-info')
                .toggle();
        });
    }



});
