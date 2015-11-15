/*!
 * (c) 2015 Christian Heyer
 * Licensed under MIT (http://opensource.org/licenses/MIT)
 */

/*
 * Creates an object [{text:"",weight:""},...] in a format needed by jQCloud
 * Takes an array of words as input parameter
 */
function createWordsObject(input) {
    var words = [];
    var occurences = [];
    var result = [];
    var prev;

    input.sort();

    for (var i = 0; i < input.length; i++) {
        if (input[i] !== prev) {
            words.push(input[i]);
            occurences.push(1);
        } else {
            occurences[occurences.length - 1]++;
        }
        prev = input[i];
    }

    for (var i = 0; i < words.length; i++) {
        result.push({
            text: words[i],
            weight: occurences[i]
        });
    }
    /*
    console.log(input);
    console.log(words);
    console.log(occurences);
    console.log(result);
    */
    return result;
}

// Create String array and create WordsObject
var arr = ["Apple", "Banana", "Apple", "Grapes", "Apple"];
var list = createWordsObject(arr);

// Create jQCloud in div element (#keywords) with WordsObject list
$('#keywords').jQCloud(list, {
    autoResize: true
});