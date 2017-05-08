/**
 * Created by Deyan Peychev on 08-May-17.
 */
function composeTag([fileLocation, alternateText]) {
    console.log(`<img src="${fileLocation}" alt="${alternateText}">`)
}
composeTag(['smiley.gif', 'Smiley Face']);