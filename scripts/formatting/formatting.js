//pads each element with quotation-marks (for query)
//also format the casing to be more normal
function pad(permutations) {
    for(var i = 0; i < permutations.length; i++) {
        //if the permutation is not empty (can happen when combining searches and the next term is empty)
        if(permutations[i].length > 0) {
            //normalize case and pad
            permutations[i] = padSingle(normalizeCase(permutations[i]));            
        }
    }
    return permutations;
}
function padSingle(str) {
    return "\"" + str + "\"";
}

function normalizeCase(str) {
    //console.log(str);
    return str[0].toUpperCase() + str.slice(1, str.length).toLowerCase();
}