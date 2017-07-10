/**
 * Created by Deyan Peychev on 08-Jul-17.
 */
let expect = require('chai').expect;
let rgbToHexColor = require('../export-functions').rgbToHexColor;

describe('RGB to Hex', function () {
    it('Program should be a function', function () {
        expect(typeof rgbToHexColor).to.equal('function');
    });

    describe('Normal use case', function () {
        it('Function works as it should', function () {
            expect(rgbToHexColor(255,158,170)).to.equal('#FF9EAA');
        });
        it('Function formats output correctly', function () {
            expect(rgbToHexColor(12,13,14)).to.equal('#0C0D0E');
        });
        it('Function works with lowest border limit', function () {
            expect(rgbToHexColor(0,0,0)).to.equal('#000000');
        });
        it('Function works with highest border limit', function () {
            expect(rgbToHexColor(255,255,255)).to.equal('#FFFFFF');
        });
    });
    describe('Error cases', function () {
        it('Function should return undefined for negative first param', function () {
            expect(rgbToHexColor(-1,255,255)).to.equal(undefined);
        });
        it('Function should return undefined for negative second param', function () {
            expect(rgbToHexColor(255,-1,255)).to.equal(undefined);
        });
        it('Function should return undefined for negative third param', function () {
            expect(rgbToHexColor(255,255,-1)).to.equal(undefined);
        });
        it('Function should return undefined for >255 first param', function () {
            expect(rgbToHexColor(300 ,255, 255)).to.equal(undefined);
        });
        it('Function should return undefined for >255 second param', function () {
            expect(rgbToHexColor(255 ,300, 255)).to.equal(undefined);
        });
        it('Function should return undefined for >255 third param', function () {
            expect(rgbToHexColor(255 ,255, 300)).to.equal(undefined);
        });
        it('Function should return undefined for fractions', function () {
            expect(rgbToHexColor(3.3 ,5.5, 4.5)).to.equal(undefined);
        });
        it('Function should return undefined for invalid parameters', function () {
            expect(rgbToHexColor('kenov' ,new Date(), {nakov: "God"})).to.equal(undefined);
        });
        it('Function should return undefined if no params given', function () {
            expect(rgbToHexColor()).to.equal(undefined);
        });
    });
});