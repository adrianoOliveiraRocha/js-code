const { app, BrowserWindow } = require('electron');
const { ipcMain } = require('electron');
const path = require('path');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });
  let msg = 'I create the function ping in the front end and '
  +'I am reading in the back end';
  ipcMain.handle('ping', () => msg);
  ipcMain.handle('anotherFunction', () => 'Yes! I get it');
  win.loadFile('index.html');
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});