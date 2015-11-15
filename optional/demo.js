/*!
 * (c) 2015 Christian Heyer
 * Licensed under MIT (http://opensource.org/licenses/MIT)
 */

// Handler for options menu
$('#options').click(function () {
    $('#optionsmenu').toggleClass('hidden');
    $('#options').toggleClass('white');
});

// Handler for update button
$('#update').click(function () {
    arr.push(getRandomFruit());
    list = createWordsObject(arr);
    $('#keywords').jQCloud('update', list);
});

// Handler for change color button
$('#changeColor').click(function () {
    $('#keywords').toggleClass('altcolor');
});

// returns random fruit
function getRandomFruit() {
    var fruits = ["Apple", "Banana", "Kiwi", "Lemon", "Grapes", "Mango", "Orange", "Pear", "Raspberry", "Strawberry"];
    var random = Math.floor((Math.random() * 10) + 0);
    var fruit = fruits[random];
    return fruit;
}