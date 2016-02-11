const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipcMain = electron.ipcMain;

app.on('ready', function() {

  //window
  var mainWindow = new BrowserWindow({
    title: 'Editor Framework Test Window',
    width: 640,
    height: 480,
    minWidth: 640,
    minHeight: 480,
    resizable: true
  });

  mainWindow.loadURL('file://' + __dirname + '/src/index.html');

  mainWindow.setMenu(null);
  mainWindow.toggleDevTools();
  mainWindow.center();

  mainWindow.on('closed', function() {
    mainWindow = null;
  });

});

app.on('will-quit', function(event, bWindow){

  mainWindow = null;

});
