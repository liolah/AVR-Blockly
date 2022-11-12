const { BrowserWindow, app, ipcMain } = require("electron");
require("@electron/remote/main").initialize();
const path = require("path");
const fs = require("fs");

let mainWindow = null;

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });
  // mainWindow.loadURL(`http://localhost:3600/`);
  // mainWindow.on("close", (event) => {
    //   mainWindow = null;
    // });
    // mainWindow.loadURL(
  //   url.format({
    //     pathname: path.join(__dirname, "\\index.html"),
    //     protocol: "file:",
    //     slashes: true,
    //   })
    // );
    require("@electron/remote/main").enable(mainWindow.webContents);
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

ipcMain.on("saveAs", (event, args) => {
  console.log(args);
  // fs.writeFile(`${args.fileName}.${args.extension}`, args.code, {
  //   encoding: "utf8",
  // });
  // event.sender.send("saveAs-reply", 200);
});
