const { BrowserWindow, app, ipcMain, dialog } = require("electron");
const path = require("path");
const fs = require("fs");

let mainWindow = null;

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      // nodeIntegration: false,
      // contextIsolation: true,
      // enableRemoteModule: false, // Defaults
      preload: path.join(__dirname, "preload.js"),
    },
  });
  mainWindow.loadFile("index.html");
}

app.on("ready", createMainWindow);
// app.whenReady().then(createMainWindow);

// Close the application when all windows are closed
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// When the application is activated create the main window if not exists
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createMainWindow();
  }
});

ipcMain.handle("saveAs", (event, code, extension) => {
  let options = {
    title: "Save",
    defaultPath: `Blockxy.${extension}`,
    buttonLabel: "Save",
    filters: [
      { name: "C code", extensions: ["c"] },
      { name: "Project file", extensions: ["xml"] },
      { name: "All Files", extensions: ["*"] },
    ],
  };
  dialog.showSaveDialog(options).then((filename) => {
    const { canceled, filePath } = filename;
    if (!canceled && filePath) {
      fs.writeFile(filePath, code, "utf8", (err) => {
        if (err) throw err;
        console.log(`${filePath} has been saved!`);
      });
    }
  });
});
