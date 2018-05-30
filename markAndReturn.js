 
var MandR = {};


/**
 * Given a hotkey and assocWindow pairing:
 * (this function already bound to key)
 * Just need to set the logic for hiding/showing windows on keypress
 * 
 * REMEMBER: assocWindow should be a HWND object
 */
 MandR.activator = function markAndReturn(objectIn, hotkeyValue){
    //add our window to the 
    var FFI = require('ffi');
   // var getWindow = require('direct_window');

    //let WindowsShow = require('window_retrieval_test');
    //var testWindow = WindowsShow('Calculator');


    var prunedData = objectIn;  //Object of JSON Hotkey data
    var hotkey = hotkeyValue; //value at key that is pressed

    //Issue: there will likely be multiples of this object.  How will this work? 

    //fetch our data from the flat file

    //This array will hold 

    //Do frontslash and backslash version

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
        'BringWindowToTop': ['int', ['int']]

        //'enumWindows': ['int', ['int', 'int']]   The issue is here!!!!!
         });

         //var handle = user32.FindWindowW(null, TEXT('Calculator'));
        // var handle = user32.FindWindowExW(0, 0, null, TEXT('Calculator'));

         var handle = user32.FindWindowW(null,TEXT("Calculator ‎- Calculator"));

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
user32.ShowWindowAsync(handle, 'SW_Hide');



for ([id, keys, assocWindow] of prunedData){
  if (keys == hotkey){
    for(let i = 0; i <= assocWindow.length; i++){
      user32.ShowWindowAsync(assocWindow[i], 'SW_RESTORE');
      user32.BringWindowToTop(assocWindow[i]);
    }
  }
}



//var className = user32.GetClassName(handle);

      //var openWindows = user32.enumWindows(windowFinder(handles));
        // console.log("OpenWindows registered as:" + openWindows);




    /****
     * The following is under construction
     */

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

/* End Activator */




/**
 * Fetches a handle to the current active window, 
 * Binds the stored window to the associated hotkey 
 */

//TODO: Verify hotkey is passed in from main
//!! should receive as 'args' the Keybind object
  //Notice- I need to populate prunedData with the hotkey 

MandR.setWindow = function setWindow(prunedData, args){
  var ref = require("ref");
  var FFI = require('ffi');

  //pull file, traverse to find hotkey
  

  function TEXT(text){
    return new Buffer(text, 'ucs2').toString('binary');
 }


   var user32 = new FFI.Library('user32', {
  'FindWindowW': ['int', ['string', 'string']],
 'ShowWindow': ['int', ['int', 'int']],
 'GetActiveWindow': ['int', ['null']]
  });

//ffi.Library(libraryFile, { functionSymbol: [ returnType, [ arg1Type, arg2Type, ... ], ... ]);

/**
 * TODO: I Need to get the Text of a "set" window
 */

 //add listener to recognize keypress- actually already done with main's global shortcut.register

  var activeWindow = user32.GetActiveWindow();



//var handle = user32.FindWindowW(null, TEXT('Untitled - Notepad')); //this code is what selects the window; right now it searches by the name of the window



var window = event;  //Will we set this here???  Might as well...


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

  //other programs can reference this file to get the info

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

 /*
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
module.exports = MandR;