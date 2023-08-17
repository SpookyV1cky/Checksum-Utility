const {app, BrowserWindow, Menu} = require('electron')
const {ipcMain} = require('electron')
const path = require('path');
const {dialog} = require('electron');
const { generateMD5 } = require('./helpers/checksum');


const createWindow = () =>{
    const mainWindow = new BrowserWindow({
        width: 1300,
        height: 600,
        minWidth: 400,
        minHeight: 200,
        titleBarStyle:'hidden',
        webPreferences:{
            preload: path.join(__dirname, '/conf/preload.js')
        }
    });
    Menu.setApplicationMenu(null);
    mainWindow.loadFile('public/index.html');
}
console.log(__dirname);

app.whenReady().then(()=>{
    createWindow();
    ipcMain.handle('sendFile', async(event, filePath)=>{
        let {filePaths} = await dialog.showOpenDialog((fileName) =>{
            if(fileName === undefined || fileName === NULL){
                console.log('no file');
                return;
            }

        });
        const hashes = generateMD5(filePaths[0]);
        return hashes;
    })
});


