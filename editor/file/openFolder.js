const {dialog} = require("electron")

function openFolder() {
    console.log(dialog.showOpenDialog({properties: ["openDirectory"]}));
}

module.exports = openFolder;
