const { BrowserWindow, app } = require("electron");
const path = require("path");


let mainWindow = null;

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  // mainWindow.loadURL(`http://localhost:3600/`);
  // mainWindow.on("close", (event) => {
  //   mainWindow = null;
  // });

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
