const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  saveAs: (code, extension) => {
    ipcRenderer.invoke("saveAs", code, extension);
  },
});
