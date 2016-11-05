import editor from "../editor";

export const fileMenuTemplate = {
    label: "File",
    submenu: [
        {
            label: "Open Folder...",
            click(item, focusedWindow) {
                editor.openFolder();
            }
        },
        {
            label: "Save"
        },
        {
            label: "Save As..."
        },
        {
            type: "separator"
        },
        {
            role: "quit"
        }
    ],
};
