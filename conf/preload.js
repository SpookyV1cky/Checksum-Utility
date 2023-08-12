const {contextBridge, ipcRenderer} = require('electron')


const API = {
    sendFile: (checksum) => ipcRenderer.invoke('sendFile', checksum)
}


contextBridge.exposeInMainWorld('api', API);

