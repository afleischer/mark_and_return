<<<<<<< HEAD
 
var MandR = {};


/**
 * Given a hotkey and assocWindow pairing:
 * (this function already bound to key)
 * Just need to set the logic for hiding/showing windows on keypress
 * 
 * REMEMBER: assocWindow should be a HWND object
 */
 MandR.activator = function markAndReturn(hkey, assocWindow){
    //add our window to the 
    var FFI = require('ffi');


    var prunedData = args;  //Object of JSON Hotkey data
    var hotkey = prunedData.keys; //value at keys

    //Issue: there will likely be multiples of this object.  How will this work? 

    //fetch our data from the flat file

    //This array will hold 

         function TEXT(text){
           return new Buffer(text, 'ucs2').toString('binary');
        }

          var user32 = new FFI.Library('user32', {
         'FindWindowW': ['int', ['string', 'string']],
        'ShowWindow': ['int', ['int', 'int']],
        'enumWindows': ['int', ['int', 'int']]
         });

         var handle = user32.FindWindowW

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

      var openWindows = user32.enumWindows(windowFinder(handles));
         console.log("OpenWindows registered as:" + openWindows);

      function windowFinder(handles){
        {  //if the hotkey equals the one pressed HOW DO I GET THAT???

        }

        return false;
      }
         //for each open window in openWindows


     var handle = user32.FindWindowW(null, TEXT('Untitled - Notepad')); //this code is what selects the window; right now it searches by the name of the window

     console.log("Windows handle is:" + handle);
     user32.ShowWindow(handle, 0);

}


         //Need to get number of windows 
            //?? enumWindows function?? 
            // var openWindows = user32.enumWindows



            /**
             * When global hotkey is pressed
             *  use enumWindows to loop through each open window
             *  if this window has been "assigned" the tag associated with the hotkey 
             *  keep it open 
             *  if not, close it!
             */

        //for (var i; i < enumWindows.length; i++){      Wait, what's the .length for this? 


        //}
        
/**
 * The following function will be fired once
 * the user "marks" a window with a hotkey. 
 * The data it receives will be the current window
 * 
 *  
 * event will be the window data, args will be the hotkey
 */
MandR.setWindow = function setWindow(event, args){
  var ref = require("ref");
  var FFI = require('ffi');

  //pull file, traverse to find hotkey
  

  function TEXT(text){
    return new Buffer(text, 'ucs2').toString('binary');
 }

   var user32 = new FFI.Library('user32', {
  'FindWindowW': ['int', ['string', 'string']],
 'ShowWindow': ['int', ['int', 'int']],
 'GetActiveWindow': ['int', ['int', 'int']]
  });

//ffi.Library(libraryFile, { functionSymbol: [ returnType, [ arg1Type, arg2Type, ... ], ... ]);

/**
 * TODO: I Need to get the Text of a "set" window
 */

  var activeWindow = user32.GetActiveWindow();
    console.log(activeWindow);


  

      //let's make sure this works first...

//var handle = user32.FindWindowW(null, TEXT('Untitled - Notepad')); //this code is what selects the window; right now it searches by the name of the window



var window = event;  //Will we set this here???  Might as well...

console.log(handle);
user32.ShowWindow(handle, 0);

  var keyCombo = args;

  var rawData = fs.readFileSync(store.path);
  var prunedData = JSON.parse(rawData);

  for (iter in prunedData){
    if (prunedData.keys == keyCombo){
      prunedData.assocWindow.push = activeWindow;  //this might error out... we'll see. 
    }
  }

  var writer = JSON.stringify(prunedData);
  fs.writeFileSync(store.path, writer, 'utf8');
}

/**
 * The main event: this is where the windows are properly hidden and 
 * returned to
 */



MandR.activateMarkMode = function(args){
  //given hotkey object 
  var ref = require("ref");
  var FFI = require('ffi');
  
  var hkeyId = args.id;
  var hotkey = args.keys;
  var keyObject = args;

  /**
  Story: On marker press (listened for in Main) I start listening for keystrokes 
  **/

//..on marker press..
  //

  //windows native functions
   function TEXT(text){
    return new Buffer(text, 'ucs2').toString('binary');
 }

   var user32 = new FFI.Library('user32', {
  'FindWindowW': ['int', ['string', 'string']],
 'ShowWindow': ['int', ['int', 'int']],
 'GetActiveWindow': ['int', ['int', 'int']]
  });


  //if pressed again, end function
  for(iter in keyObject){
    if(hkeyId != "marker"){
      var n = keyObject.assocWindows.length;
       globalShortcut.register(hotkey,() =>{
        //Get window handle, then push 
        var activeWindow = user32.GetActiveWindow();
        keyObject.assocWindows[n] = activeWindow;
       });  //registered here so I can pass the full prunedData object

    }
  if(hkeyId == "marker"){
    globalShortcut.register(hotkey,() =>{
      process.kill(MandR.activateMarkMode);
       });
    }
  }

}

=======
 
var MandR = {};


/**
 * Given a hotkey and assocWindow pairing:
 * (this function already bound to key)
 * Just need to set the logic for hiding/showing windows on keypress
 * 
 * REMEMBER: assocWindow should be a HWND object
 */
 MandR.activator = function markAndReturn(hkey, assocWindow){
    //add our window to the 
    var FFI = require('ffi');


    var prunedData = args;  //Object of JSON Hotkey data
    var hotkey = prunedData.keys; //value at keys

    //Issue: there will likely be multiples of this object.  How will this work? 

    //fetch our data from the flat file

    //This array will hold 

         function TEXT(text){
           return new Buffer(text, 'ucs2').toString('binary');
        }

          var user32 = new FFI.Library('user32', {
         'FindWindowW': ['int', ['string', 'string']],
        'ShowWindow': ['int', ['int', 'int']],
        'enumWindows': ['int', ['int', 'int']]
         });

         var handle = user32.FindWindowW

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

      var openWindows = user32.enumWindows(windowFinder(handles));
         console.log("OpenWindows registered as:" + openWindows);

      function windowFinder(handles){
        {  //if the hotkey equals the one pressed HOW DO I GET THAT???

        }

        return false;
      }
         //for each open window in openWindows


     var handle = user32.FindWindowW(null, TEXT('Untitled - Notepad')); //this code is what selects the window; right now it searches by the name of the window

     console.log("Windows handle is:" + handle);
     user32.ShowWindow(handle, 0);

}


         //Need to get number of windows 
            //?? enumWindows function?? 
            // var openWindows = user32.enumWindows



            /**
             * When global hotkey is pressed
             *  use enumWindows to loop through each open window
             *  if this window has been "assigned" the tag associated with the hotkey 
             *  keep it open 
             *  if not, close it!
             */

        //for (var i; i < enumWindows.length; i++){      Wait, what's the .length for this? 


        //}
        
/**
 * The following function will be fired once
 * the user "marks" a window with a hotkey. 
 * The data it receives will be the current window
 * 
 *  
 * event will be the window data, args will be the hotkey
 */
MandR.setWindow = function setWindow(event, args){
  var ref = require("ref");
  var FFI = require('ffi');

  //pull file, traverse to find hotkey
  

  function TEXT(text){
    return new Buffer(text, 'ucs2').toString('binary');
 }

   var user32 = new FFI.Library('user32', {
  'FindWindowW': ['int', ['string', 'string']],
 'ShowWindow': ['int', ['int', 'int']],
 'GetActiveWindow': ['int', ['int', 'int']]
  });

//ffi.Library(libraryFile, { functionSymbol: [ returnType, [ arg1Type, arg2Type, ... ], ... ]);

/**
 * TODO: I Need to get the Text of a "set" window
 */

  var activeWindow = user32.GetActiveWindow();
    console.log(activeWindow);


  

      //let's make sure this works first...

//var handle = user32.FindWindowW(null, TEXT('Untitled - Notepad')); //this code is what selects the window; right now it searches by the name of the window



var window = event;  //Will we set this here???  Might as well...

console.log(handle);
user32.ShowWindow(handle, 0);

  var keyCombo = args;

  var rawData = fs.readFileSync(store.path);
  var prunedData = JSON.parse(rawData);

  for (iter in prunedData){
    if (prunedData.keys == keyCombo){
      prunedData.assocWindow.push = activeWindow;  //this might error out... we'll see. 
    }
  }

  var writer = JSON.stringify(prunedData);
  fs.writeFileSync(store.path, writer, 'utf8');
}

/**
 * The main event: this is where the windows are properly hidden and 
 * returned to
 */



MandR.activateMarkMode = function(args){
  //given hotkey object 
  var ref = require("ref");
  var FFI = require('ffi');
  
  var hkeyId = args.id;
  var hotkey = args.keys;
  var keyObject = args;

  /**
  Story: On marker press (listened for in Main) I start listening for keystrokes 
  **/

//..on marker press..
  //

  //windows native functions
   function TEXT(text){
    return new Buffer(text, 'ucs2').toString('binary');
 }

   var user32 = new FFI.Library('user32', {
  'FindWindowW': ['int', ['string', 'string']],
 'ShowWindow': ['int', ['int', 'int']],
 'GetActiveWindow': ['int', ['int', 'int']]
  });


  //if pressed again, end function
  for(iter in keyObject){
    if(hkeyId != "marker"){
      var n = keyObject.assocWindows.length;
       globalShortcut.register(hotkey,() =>{
        //Get window handle, then push 
        var activeWindow = user32.GetActiveWindow();
        keyObject.assocWindows[n] = activeWindow;
       });  //registered here so I can pass the full prunedData object

    }
  if(hkeyId == "marker"){
    globalShortcut.register(hotkey,() =>{
      process.kill(MandR.activateMarkMode);
       });
    }
  }

}

>>>>>>> 01cea2e1a0c74d48bc88c51871afdccca90904af
module.exports = MandR