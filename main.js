
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
const activator = require('./activator')
const setMarker = require('./setMarker')


var FFI = require('ffi');
var applescript = require('applescript');

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


/**
 * BEGIN APP LOGIC
 */

app.on('ready',function(){

/**
 * First fetch stuff from flat file
 * then listen for GLOBAL keypress
 */

   //FILE STORAGE DATA VARIABLE
   let model = () =>{ 

      var store = new Store({
        configName: 'user-preferences',
        defaults:  { 
        }
      });

      try{ 
        let rawData = fs.readFileSync(store.path, 'utf8');
      }
          catch(error){
            console.log(error);
          }

    //Translate flat file data to JSON
      try{
        let model = JSON.parse(rawData);
      }
        catch(error){
          console.log(error)
      }
        return model;
  } 


var hotkeys = [];
var eachWindow = [];

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


/***
 * Logic for handling values received from view (render process; keycapture.js and marker.js)
 */

//Set a new marker hotkey
  ipc.on('markerAction', (keybind) => {
    setMarker(keybind);
    register();
  });//probably need to call a function here to instigate all this code

//Record hotkey captured from view into model 
ipc.on('hotkeyUpdate', setHotkey(event, args)); 


/**
 * Set global shortcuts to handle hotkey keypresses 
 */
//logic to register global shortcuts received 
register();


//
ipc.on('', activator(event, args));


 
/***
 * 
 * Bind the hotkeys in the user preferences file to show the key's associated window 
 * 
 * 
 */

  try{ 
    var rawData = fs.readFileSync(store.path, 'utf8');
  }
      catch(error){
        console.log(error);
      }



var keysVar = model.keys;

//Translate flat file data to JSON

    //if (markerModeFlag == 0){
      app.globalLimiter = 0;
      var globalLimiterVar = app.globalLimiter;

      let limiter = 0
      for (var key in model){
        limiter++;
      }

      //
      for (var key in model){ 
        if(model.assocWindows != 'null'){  
          var testy = (`model.${key} = ${model[key]}`);
          var testy2 = (model.keys);    //MandR being a placeholder for the 


          if (model.id != 'marker'){
            try {
              
  //            var shortcutWorked = 


              /**
               * 
               * 
               */
              globalShortcut.register(model.keys, (model, keysVar, limiter, globalLimiterVar) => {activator}

                activator;


               
            
            
            }
              catch(err) {

              };
            }
            else if (model.id == 'marker'){
  
              globalShortcut.register(model.keys, function() {
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
      //}
      //else if(markerModeFlag == 1){
        //we're in marker mode now, so now, we bind to setWindow
        for (var key in model){ 
          if(model.id != 'marker'){
            globalShortcut.register(model.keys, (model) => {

              
          var ref = require("ref");
          var FFI = require('ffi');

          //pull file, traverse to find hotkey
          

          if (process.platform === "win32"){


              function TEXT(text){
                return new Buffer(text, 'ucs2').toString('binary');
            }


              var user32 = new FFI.Library('user32', {
              'FindWindowW': ['int', ['string', 'string']],
            'ShowWindow': ['int', ['int', 'int']],
            'GetActiveWindow': ['int', ['int']]
              });

            //ffi.Library(libraryFile, { functionSymbol: [ returnType, [ arg1Type, arg2Type, ... ], ... ]);

            /**
             * TODO: I Need to get the Text of a "set" window
             */

            //add listener to recognize keypress- actually already done with main's global shortcut.register

              var activeWindow = user32.GetActiveWindow;



              var keyCombo = args;

              var rawData = fs.readFileSync(store.path);
              var modelHere = JSON.parse(rawData);
              //can also try var model = model;

              for (iter in modelHere){
                if (modelHere.keys == keyCombo){
                  modelHere.assocWindow.push = activeWindow;  //this might error out... we'll see. 
                }
              }

              var writer = JSON.stringify(modelHere);
              fs.writeFileSync(store.path, writer, 'utf8');

        }
        else if (process.platform === "darwin"){

            applescript.execString(script, function(err, rtn) {
                if (err) {
                  // Something went wrong!
                  var error = err;
                }
                if (Array.isArray(rtn)) {
                  rtn.forEach(function() {

                    //Work with script output here


                    console.log(songName);
                  });
                }
            
            });
            

        }
   });
}
                   
          else if (model.id == 'marker'){
            globalShortcut.register(model.keys, function() {
                if (markerModeFlag == 0){
                  markerModeFlag = 1;
                }
                else if (markerModeFlag == 1){
                    markerModeFlag = 0;
                  }
            });
          }
        }
      //}




  ipc.on('markerStart', function(event, args){


  });

});

export default model;