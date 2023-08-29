loadPageScripts();
getRandomSwearWord();

function loadPageScripts() {
   let inputWindow = document.getElementById("input");

    inputWindow.addEventListener("paste", function (event) {
        let modificationwindow = document.getElementById("output");
        let clipboardData = event.clipboardData;

        if (clipboardData == null || clipboardData == undefined) {
            return;
        }

        let data = clipboardData.getData("text");

        if (data == null || data == undefined) {
            return;
        }

        modificationwindow.innerHTML = cleaseDecklist(data);
    });

    inputWindow.addEventListener("blur", function (event) {
        let modificationwindow = document.getElementById("output");
        let clipboardData = event.clipboardData;

        if (clipboardData == null || clipboardData == undefined) {
            return;
        }

        let data = clipboardData.getData("text");

        if (data == null || data == undefined) {
            return;
        }

        modificationwindow.innerHTML = cleaseDecklist(data);
    });
}

function cleaseDecklist(decklist) {
    let decklistArray = decklist.split('\n');
    let outputArr = [];

    for (let index = 0; index < decklistArray.length; index++) {
        const line = decklistArray[index];

        if (!(typeof(line) == 'string')) {
            continue;
        }

        if (parseInt(line.charAt(0))) {
            outputArr.push(line);
        }
    }

    return outputArr.join('\n');
}

function copyToClipboard() {
    let text = document.getElementById("output").value;

    navigator.clipboard.writeText(text);
}

function getRandomSwearWord() {
    const swears = [
        "Fuck", 
        "Frick", 
        "Screw", 
        "Shitify", 
        "Cock-Up", 
        "Explode", 
        "Root",
        "Mangle",
        "Gunk",
        "Scramble",
        "Wonk",
        "Warp",
        "Clutter",
        "Crunch"
    ];
    let randomNumber = Math.floor(Math.random() * (swears.length - 1));

    let swearOnPage = document.getElementById("swear")
    swearOnPage.innerHTML = swears[randomNumber];

}

