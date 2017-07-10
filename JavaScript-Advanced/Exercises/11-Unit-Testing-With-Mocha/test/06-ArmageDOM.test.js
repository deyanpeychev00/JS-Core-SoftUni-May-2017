/**
 * Created by Deyan Peychev on 11-Jul-17.
 */
let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');
let nuke = require('../export-functions').nuke;

describe('ArmageDOM', function () {
    let targetHTML;
    beforeEach(function () {
        document.body.innerHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>ArmageDOM</title>
</head>
<body>
<div id="target">
    <div class="nested target">
        <p>This is some text</p>
    </div>
    <div class="target">
        <p>Empty div</p>
    </div>
    <div class="inside">
        <span class="nested">Some more text</span>
        <span class="target">Some more text</span>
    </div>
</div>
</body>
</html>`;
        targetHTML = $('#target');
    });

    it('Should work correctly with correct selector', function () {
        let selector1 = $('.nested');
        let selector2 = $('.target');
        let oldValue = targetHTML.html();
        nuke(selector1, selector2);
        expect(targetHTML.html()).to.not.equal(oldValue);
    });
    it('Should work correctly with invalid selector', function () {
        let selector1 = $('.nested');
        let selector2 = 'invalid';
        let oldHTML = selector1.html();
        nuke(selector1, selector2);
        expect(selector1.html()).to.be.equal(oldHTML);
    });
    it('Should work correctly with equal selector', function () {
        let selector1 = $('.inside');
        let oldHTML = targetHTML.html();
        nuke(selector1, selector1);
        expect(targetHTML.html()).to.be.equal(oldHTML);
    });
    it('Should work correctly with valid selector which do not delete anything', function () {
        let selector1 = $('.nested');
        let selector2 = $('.inside');
        let oldValue = targetHTML.html();
        nuke(selector1, selector2);
        expect(targetHTML.html()).to.be.equal(oldValue);
    })
});