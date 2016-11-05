const {dialog} = require("electron")

const openFolder = () => {
    console.log(dialog.showOpenDialog({properties: ["openDirectory"]}));
}

export default openFolder;
