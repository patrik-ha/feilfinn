function userMisspellingInput() {
    return document.getElementById("user-misspelling-query").value;
}
function userMisspellingOptions() {
    return [getSingleOption("enableNearby"), getSingleOption("enableRemoveSingle"), getSingleOption("enableSwap")];
}
function getSingleOption(elementId) {
    return document.getElementById(elementId).checked;
}
function userComboInput() {
    return document.getElementById("user-combo-query").value;
}
function assignOutput(text, elementId) {
    document.getElementById(elementId).innerHTML = text;
}