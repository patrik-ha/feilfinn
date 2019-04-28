function updateMisspellingQuery() {
    assignOutput(generateMisspellingQuery(userMisspellingInput(), userMisspellingOptions()), "output-misspelling-query");
}

function updateComboQuery() {
    assignOutput(generateCombinationQuery(userComboInput()), "output-combo-query");
}


function copyToClipboard(textId, buttonId) {
    //console.log(textId);
    let textArea = document.getElementById(textId);
    textArea.focus();
    textArea.select();
    //console.log(document.getElementById(textId));
    document.execCommand("copy");
    flashButton(buttonId);
}

function flashButton(id) {
    let button = document.getElementById(id);
    button.classList.remove("btn-primary");
    button.classList.add("btn-success");
    setTimeout(function() {
        button.classList.remove("btn-success");
        button.classList.add("btn-primary");
    }, 1000);
}