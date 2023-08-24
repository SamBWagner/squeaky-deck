loadPageScripts();

function loadPageScripts() {
   let inputWindow = document.getElementById("input");

    inputWindow.addEventListener("paste", function (event) {
        let modificationwindow = document.getElementById("modified");

        modificationwindow.innerHTML = event.clipboardData.getData("text"); 
    });
}

