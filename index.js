const electron = require('electron');
const url = require('url');
const path = require('path');
const fs = require('fs');

const { app, BrowserWindow, Menu, ipcMain } = electron;

let appWindow;

app.on('ready', () => {
    appWindow = new BrowserWindow({
        height: 900,
        width: 1600,
        minHeight:900,
        minWidth: 1200,
        webPreferences: {
            enableRemoteModule: true,
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    appWindow.loadURL(url.format({
        pathname: path.join(__dirname, './mainWindow.html'),
        protocol: 'file:',
        slashes: true,
    }));
    //const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    //Menu.setApplicationMenu(mainMenu);
});