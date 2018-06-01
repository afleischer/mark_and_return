
const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const globalShortcut = electron.globalShortcut
const os = require('os')
const fs = require('fs')
// Module to control application life.
//const app = electron.app;
// Module to create native browser window.
//const BrowserWindow = electron.BrowserWindow

var rebuild = require('electron-rebuild')

const path = require('path')
const url = require('url')
const ipc = electron.ipcMain
const Store = require('./preferencesManager.js')
const getsetWindow = require('./getSet.js')
const MandR = require('./markAndReturn.js')

/**
 * 
 * TEST TEST TEST GITHUB WORKED
 */

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

/**************
FROM QUICKSTART: Creating the window below
**************/


function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600})

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true

/* More code in this and sub functions*/

  }))


  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  globalShortcut.unregisterAll()
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.


/***
 * Terminology: 
 * 
 * Marker = Hotkey that initiates "mark" mode
 * Returner = Hotkey used to show windows tied to that hotkey and hide others
 * 
 */


// When our app is ready, we'll create our BrowserWindow

app.on('ready',function(){

/**
 * First fetch stuff from flat file
 * then listen for GLOBAL keypress
 */

 //class to handle flat file maintenance
    var store = new Store({
      configName: 'user-preferences',
      defaults:  { 
      }
    });
    var hotkeys = [];

  //Read in flat file
    try{ 
      var rawData = fs.readFileSync(store.path, 'utf8');
    }
        catch(error){
          console.log(error);
        }

  //Translate flat file data to JSON
  try{
    var prunedData = JSON.parse(rawData);
  }
    catch(error){
       console.log(error)
     }
 var eachWindow = [];

 //If the 
 for(var key in prunedData){
   if(prunedData.assocWindows != 'null'){
    
   }
 }


 /**
  * I need some flag to know if the marker is activated
  * 
  * markerModeFlag = 0  -> marker mode is not activated, pressing hotkey will 
  * hide and show windows
  * 
  * markerModeFlag = 1 -> marker mode activated, pressing hotkey will assign
  * active window to object
  * 
  * on application load, starts at 0
  */
let markerModeFlag = 0;



ipc.on('markerAction', function(event, args){ //When user adds marker key



});//probably need to call a function here to instigate all this code


function AssignKey(){

  if (markerModeFlag == 0){
    for (var key in prunedData){ 
      if(prunedData.assocWindows != 'undefined'){  //CHANGE: undefined to null if keep logic
        console.log(`prunedData.${key} = ${prunedData[key]}`);
        console.log(prunedData.keys);    //MandR being a placeholder for the 

        //"activator" hides and shows windows accordingly
        if (prunedData.id != 'marker'){
          globalShortcut.register(prunedData.keys, MandR.activator(prunedData, prunedData.keys));
          }
          else if (prunedData.id == 'marker'){

            globalShortcut.register(prunedData.keys, function() {
                if (markerModeFlag == 0){
                  markerModeFlag = 1;
                }
                else if (markerModeFlag == 1){
                    markerModeFlag = 0;
                  }
            });
          }
        }
      }
    }
    else if(markerModeFlag == 1){
      //we're in marker mode now, so now, we bind to setWindow
      for (var key in prunedData){ 
        if(prunedData.id != 'marker'){
          globalShortcut.register(prunedData.keys, MandR.setWindow(prunedData));
        }          
        else if (prunedData.id == 'marker'){
          globalShortcut.register(prunedData.keys, function() {
              if (markerModeFlag == 0){
                markerModeFlag = 1;
              }
              else if (markerModeFlag == 1){
                  markerModeFlag = 0;
                }
          });
        }
      }
    }

}
 



 
/**
* Handle marker entry
*/  
  ipc.on('markerAction', function(event, args){ //When user adds marker key
   
   //update hotkey in storage file
    getSet.setterFunction(event, args); //Adds key to user-preferences file, removes dupes

    //need to receive updated hotkey string

    //re-check 
      for (let key in prunedData){
      if(prunedData.assocWindows != 'undefined'){
        console.log(`prunedData.${key} = ${prunedData[key]}`);
        console.log(prunedData.keys);    //MandR being a placeholder for the 
        if (prunedData.id != 'marker'){
          globalShortcut.register(prunedData.keys, MandR.activator(prunedData));
          }
          else if (prunedData.id == 'marker'){
          globalShortcut.register(prunedData.keys, MandR.setWindow(prunedData));
  
          }
      }
    }

  });

  ipc.on('invokeAction', function(event, args){ //When user adds Returner hotkey to field in render
    console.log("RECEIVED IPC IN MAIN!");
    getSet.setterFunction(event, args); //Adds key to user-preferences file, removes dupes
  });

  ipc.on('markerStart', function(event, args){
    //prunedData.keys where it equals "marker" 
    /*
    
    if prunedData.hasOwnProperty('marker'){
      //set variable to equal 
        //might be able to inherit this from where I call this from renderer
      var markerKey = prunedData.keys;
    }
    
    
    */ 
  });

});


//mainWindow.loadURL('file://' + path.join(__dirname, 'index.html'));


//Database will save in the user's "app data" folder. 
/*
App data locations by OS:
Mac OS: ~/Library/Application Support/<Your App Name (taken from the name property in package.json)>
Windows: C:\Users\<you>\AppData\Local\<Your App Name>
Linux: ~/.config/<Your App Name>
*/