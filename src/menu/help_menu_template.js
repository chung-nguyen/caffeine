export const helpMenuTemplate = {
    role: "help",
    submenu: [
        {
            label: "About",
            click() { 
                shell.openExternal("http://electron.atom.io") 
            }
        }
    ]
}