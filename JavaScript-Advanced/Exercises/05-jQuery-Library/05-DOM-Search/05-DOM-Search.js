/**
 * Created by Deyan Peychev on 03-Jul-17.
 */
function domSearch(selector, isCaseSensitive) {

    let mainContainer = $(selector);
    // add controls
    let addControls = $('<div class="add-controls"></div>');
    let enterTextLabel = $('<label>Enter text: </label>');
    let enterTextField = $('<input type="text" id="enterTextField" />');
    let addButton = $('<a class="button">Add</a>');

    // search controls
    let searchControls = $('<div class="search-controls"></div>');
    let searchTextLabel = $('<label>Search: </label>');
    let searchTextField = $('<input type="text" id="searchTextField" />');

    // result controls
    let resultControls = $('<div class="result-controls"></div>');
    let resultList = $('<ul class="items-collection"></ul>');

    // append controls to main container
    addControls.appendTo(mainContainer);
    searchControls.appendTo(mainContainer);
    resultControls.appendTo(mainContainer);

    //append to result controls
    resultList.appendTo(resultControls);

    //append to add controls
    enterTextLabel.appendTo(addControls);
    enterTextField.appendTo(addControls);
    addButton.on('click', function () {
       let itemVal = enterTextField.val();
       let itemAnchor = $('<a class="button">X</a>');
       itemAnchor.on('click', function () {
           $(this).parent().remove();
       });

       let listItem = $(`<li class="list-item"></li>`)
           .append(itemAnchor);

       let itemText = $(`<strong>${itemVal}</strong>`);
       itemText.appendTo(listItem);

       listItem.appendTo(resultList);
    }).appendTo(addControls);

    //append to search controls
    searchTextLabel.appendTo(searchControls);
    searchTextField.on('change', function () {
       let searchVal = searchTextField.val();

       if(isCaseSensitive === true){
           $(`ul.items-list li:not(:contains(${searchVal}))`)
               .each((index, element) => $(element).css('display', 'none'));

           $(`ul.items-list li:contains(${searchVal})`)
               .each((index, element) => $(element).css('display', 'block'));

       }else{
          $(`ul.items-list li strong`)
               .each((index, element) => {
               if((($(element).text()).toString().toLowerCase()).indexOf(searchVal.toLowerCase()) === -1){
                   $(element).parent().css('display', 'none');
               }else{
                   $(element).parent().css('display', 'block');
               }
           });
       }
    });
    searchTextField.appendTo(searchControls);

}