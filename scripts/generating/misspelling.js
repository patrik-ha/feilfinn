//to and from are indices
function swapLetters(str, from, to) {
    let chars = [];
    //might be some way to use built-ins to do this
    for(var i = 0; i < str.length; i++) {
        if(i === from) {
            chars.push(str[to]);
        } else if(i === to) {
            chars.push(str[from]);
        } else {
            chars.push(str[i]);
        }
    }
    return chars.join('');
}
//swap one of the letters of the word with a letter that is nearby on a standard querty keyboard
function generateAllPermutationsOfNearbySwaps(str) {
    var permutations = [];
    for(var i = 0; i < str.length; i++) {
        //if there are some valid replacements
        if(nearbyLetters.hasOwnProperty(str[i].toLowerCase())) {
            for(var j = 0; j < nearbyLetters[str[i].toLowerCase()].length; j++) {
                permutations.push(str.slice(0, i) + nearbyLetters[str[i].toLowerCase()][j] + str.slice(i + 1, str.length));
            }
        }
    }
    return permutations;
}

//swap all letters that are next to each other
function generateAllPermutationsOfSwaps(str) {
    let permutations = [];
    for(var i = 0; i < str.length - 1; i++) {
        permutations.push(swapLetters(str, i, i + 1));
    }
    //console.log(permutations);    
    return permutations;
}
//take a string and generate all strings where letter i has been removed
function removeAllSingleLetters(str) {
    let permutations = [];
    for(var i = 0; i < str.length; i++) {
        var newStr = str.slice(0, i) + str.slice(i + 1, str.length);
        permutations.push(newStr);
    }
    return permutations;
}

//the word in query is valid if:
//it is not the original user input
//it is longer than two letters
function isValid(original, candidate) {
    return candidate.length > 2 && candidate != original;
}

//options is an array of booleans that indicates which of the options should be enabled
function generateMisspellingQuery(str, options) {
    var permutations = [];
    if(options[0]) {
        permutations = permutations.concat(generateAllPermutationsOfNearbySwaps(str));        
    }
    if(options[1]) {
        permutations = permutations.concat(removeAllSingleLetters(str));        
    }
    if(options[2]) {
        permutations = permutations.concat(generateAllPermutationsOfSwaps(str));        
    }
    //remove duplicates
    permutations = permutations.filter(function (element, index, array) { 
        return array.indexOf(element) == index; 
    });
    //remove non-valid strings
    var validPermutations = [];
    for(var i = 0; i < permutations.length; i++) {
        if(isValid(str, permutations[i])) {
            validPermutations.push(permutations[i]);
        }
    }
    validPermutations = pad(validPermutations);
    return validPermutations.join(" OR ");
}