/**
 * Created by Deyan Peychev on 18-Jul-17.
 */
class TitleBar{
    constructor(title){
        this.title = title;
        this.links = [];
    }

    addLink(href, name){
        let link = $('<a>')
            .addClass('menu-link')
            .attr('href', href)
            .text(name);

        this.links.push(link);
    }

    appendTo(selector){
        let wrapper = $(selector);
        // Setting up the header
        let header = $('<header>')
            .addClass('header');

        let headerRow = $('<div>')
            .addClass('header-row')
            .appendTo(header);

        let button = $('<a>')
            .addClass('button')
            .html('&#9776;')
            .on('click', function () {
                $('div.drawer').toggle();
        })
            .appendTo(headerRow);

        let title = $('<span>')
            .addClass('title')
            .text(this.title)
            .appendTo(headerRow);

        // Setting up the drawer
        let drawer = $('<div>')
            .addClass('drawer')
            .appendTo(header);

        let nav = $('<nav>')
            .addClass('menu')
            .appendTo(drawer);

        for (let link of this.links) {
            $(link).appendTo(nav);
        }

        header.appendTo(selector);
    }
}