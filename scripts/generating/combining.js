//str is a "list" of elements that are separated by commas
function generateCombinationQuery(str) {
    //if there are no elements (the string is empty), return empty query
    if(str.length <= 0) {
        return "";
    }
    //first, remove all spaces that are before and after commas (user might have inputted some)
    //do not remove spaces that aren't before or after commas
    str = str.replace(/\s*,\s*/g, ",");

    var targets = str.split(',');
    targets = pad(targets);
    return targets.join(" OR ");
}