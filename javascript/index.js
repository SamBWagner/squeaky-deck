loadPageScripts();
getRandomSwearWord();

function loadPageScripts() {
   let inputWindow = document.getElementById("input");

    inputWindow.addEventListener("paste", function (event) {
        let modificationwindow = document.getElementById("output");

        modificationwindow.innerHTML = cleaseDecklist(event.clipboardData.getData("text"));
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
    const swears = ["Fuck", "Frick", "Screw", "Shitify", "Cock-Up", "Explode", "Root"];
    let randomNumber = Math.floor(Math.random() * (swears.length - 1));
    console.log(swears.length);
    console.log(randomNumber);

    let swearOnPage = document.getElementById("swear")
    swearOnPage.innerHTML = swears[randomNumber];

}

