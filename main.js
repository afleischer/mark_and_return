
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





 
//ipc.on('startAction', function(event,args){

  //load "user preferences" flat file containing the existing hotkeys

  try{ 
    var rawData = fs.readFileSync(store.path, 'utf8');
  }
      catch(error){
        console.log(error);
      }

      var keysVar = prunedData.keys;

//Translate flat file data to JSON
try{
  var prunedData = JSON.parse(rawData);
}
  catch(error){
     console.log(error)
   }

    //if (markerModeFlag == 0){
      app.globalLimiter = 0;
      var globalLimiterVar = app.globalLimiter;

      let limiter = 0
      for (var key in prunedData){
        limiter++;
      }

      for (var key in prunedData){ 
        if(prunedData.assocWindows != 'undefined'){  //CHANGE: undefined to null if keep logic
          var testy = (`prunedData.${key} = ${prunedData[key]}`);
          var testy2 = (prunedData.keys);    //MandR being a placeholder for the 

          //"activator" hides and shows windows accordingly
          if (prunedData.id != 'marker'){
            try {
              
              var shortcutWorked = 

              globalShortcut.register(prunedData.keys, (prunedData, keysVar, limiter, globalLimiterVar) => {
              const electron = require('electron')
              const app = electron.app;
            
              var count = limiter;
            
              var apptest = globalLimiterVar;
            
              if (apptest <= count){
                app.GlobalLimiter++;
                return;
              }
            
                  //if this is the first x number of times fired, 
            
                if (!markAndReturn.iterChecker){
                    markAndReturn.iterChecker = 0;
                    return;
                }else if (markAndReturn.iterChecker <=limiter.length){
                    markAndReturn.iterChecker++;
                    return;
                  }
            
            
                //add our window to the 
                var FFI = require('ffi');
                var applescript = require('applescript');
               // var getWindow = require('direct_window');
            
                //let WindowsShow = require('window_retrieval_test');
                //var testWindow = WindowsShow('Calculator');
            
            
                var prunedData = objectIn;  //Object of JSON Hotkey data
                var hotkey = hotkeyValue; //value at key that is pressed
            
                //Issue: there will likely be multiples of this object.  How will this work? 
            
                //fetch our data from the flat file
            
                //This array will hold 
            
                //Do frontslash and backslash version
            
                if (process.platform === "win32"){
            
                
            
            
                    function TEXT(text){
                  return new Buffer(text, 'ucs2').toString('binary');
                }
            
            
                    var user32path = 'C:\\Windows\\System32\\user32.dll';
            
                    //var user32path = "/c/Windows/System32/user32.dll";
            
                        function TEXT(text){
                          return new Buffer(text, 'ucs2').toString('binary');
                        }
            
                        //was previously 'user32'
                        //next: try FindWindow
                          var user32 = new FFI.Library(user32path, {
                        'FindWindowW': ['int', ['string', 'string']],
                        'ShowWindow': ['int', ['int', 'int']],
                        'ShowWindowAsync': ['int', ['int', 'int']],
                        //'GetClassNameW': ['int'['int', 'string','int']]
                        'FindWindowExW': ['int', ['int', 'int', 'string', 'string']],
                        'BringWindowToTop': ['int', ['int']],
                        'GetActiveWindow': ['int', ['int']]
            
                        //Add setForegroundWindow ???
            
                        //'enumWindows': ['int', ['int', 'int']]   The issue is here!!!!!
                        });
            
                        //var handle = user32.FindWindowW(null, TEXT('Calculator'));
                        // var handle = user32.FindWindowExW(0, 0, null, TEXT('Calculator'));
            
                        var handle = user32.FindWindowW(null,TEXT("Calculator ‎- Calculator"));
            
                        var activeHandle = user32.GetActiveWindow(null);
            
                        //var handle = user32.FindWindowEx(FindWindowEx(0, 0, "Untitled - Notepad", 0));
                        //see what value handle is equal to
                        //handle value is equal to 0 sometimes, but not other times 
                /**
                 * if HWND object matches the passed-in HWND
                 * then show
                 * if not
                 * then hide
                 * 
                 * --OR--
                 * 
                 * Get the TEXT('Untitled - Notepad') of a window
                 */
            
                user32.ShowWindow(handle, 'SW_MINIMIZE');
            
                //test
                user32.ShowWindowAsync(activeHandle, 'SW_MINIMIZE');
            
                var pruneLength = Object.keys(prunedData).length;
            
                  for (let i = 0; i < pruneLength-1; i++){
                    if (Object.entries(prunedData)[i][1] === hotkey){
                      for(let j = 1; j <= prunedData.assocWindows.length; j++){
            
                        let associatedWindow = Object.entries(prunedData)[i+1][j].toString();
                          let associatedWindowHandle = parseInt(associatedWindow);
                        user32.ShowWindowAsync(associatedWindowHandle, 'SW_Hide');
                        user32.BringWindowToTop(associatedWindowHandle[i+1][j]);
                      }
                    }
                  }
            
            } 
              else if(process.platform === "darwin"){
                /**Mac Mark&Return 
                 * Uses npm-applescript, 
                */
            
                
            
                //wither frontAppName or windowTitle will be our handle 
            
                applescript.execString(script,function(err, rtn) {
                  if (err) {
                    // Something went wrong!
                  }
                  if (Array.isArray(rtn)) {
                    rtn.forEach(function(songName) {
                      console.log(songName);
                    });
                  }
                });  //buffers output into a callback function 
                //create a native .cpp file to 
            
            
              }
            
            /**
             * And the coup de grace- hide any windows not associated with the activator
             */
            
            
             });

            /* End Activator */ 
            
            
            }
              catch(err) {

              };
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
      //}
      //else if(markerModeFlag == 1){
        //we're in marker mode now, so now, we bind to setWindow
        for (var key in prunedData){ 
          if(prunedData.id != 'marker'){
            globalShortcut.register(prunedData.keys, (prunedData) => {

              
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

            //var handle = user32.FindWindowW(null, TEXT('Untitled - Notepad')); //this code is what selects the window; right now it searches by the name of the window

            //var window = event; 


              var keyCombo = args;

              var rawData = fs.readFileSync(store.path);
              var prunedDataHere = JSON.parse(rawData);
              //can also try var prunedData = prunedData;

              for (iter in prunedDataHere){
                if (prunedDataHere.keys == keyCombo){
                  prunedDataHere.assocWindow.push = activeWindow;  //this might error out... we'll see. 
                }
              }
              /**
               * if the above loop isn't working as expected, can try:
               * 
               * for (let [id, keys, assocWindow] of prunedData){
               *    if ()
               * }
               */

              var writer = JSON.stringify(prunedDataHere);
              fs.writeFileSync(store.path, writer, 'utf8');

        }
        else if (process.platform === "darwin"){

            //remember: we have our variable hotkey with the hotkey info

      /*
            var script = ' 
            global frontApp, frontAppName, windowTitle

              set windowTitle to ""
              tell application "System Events"
                  set frontApp to first application process whose frontmost is true
                  set frontAppName to name of frontApp
                  set windowTitle to "no window"
                  tell process frontAppName
                      if exists (1st window whose value of attribute "AXMain" is true) then
                          tell (1st window whose value of attribute "AXMain" is true)
                              set windowTitle to value of attribute "AXTitle"
                          end tell
                      end if
                  end tell
              end tell

              return {frontAppName, windowTitle}

            ';

            */

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
      //}

//});



 
/**
* Handle marker entry
*/  
 // ipc.on('markerAction', function(event, args){ //When user adds marker key
   
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

  //});

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