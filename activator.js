 var model, hotkey = require ('main');  //Object of JSON Hotkey data
 var hotkey = hotkeyValue; //value at key that is pressed


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

       var pruneLength = Object.keys(model).length;

         for (let i = 0; i < pruneLength-1; i++){
           if (Object.entries(model)[i][1] === hotkey){
             for(let j = 1; j <= model.assocWindows.length; j++){

               let associatedWindow = Object.entries(model)[i+1][j].toString();
                 let associatedWindowHandle = parseInt(associatedWindow);
               user32.ShowWindowAsync(associatedWindowHandle, 'SW_Hide');
               user32.BringWindowToTop(associatedWindowHandle[i+1][j]);
             }
           }
         }

      } 
else if(process.platform === "darwin"){

// TODO : 

//REPLACE THIS WHEN DONE

/*******
Retrieve data and load into an appleScript-recognized list variable
*******/

  let braces = {};

  let length = model.hotkeys.length;
     console.log("length is"+length);
  let ofInterest = model.hotkeys[length-1];
    console.log("ofInterest is" +ofInterest);
  let windows2ShowArray = ofInterest.assocWindows;

//console.log("windows2ShowArray length is:"windows2ShowArray.length);

  let converted = [];

   for(let i = 0; i <= windows2ShowArray.length-1; i++){
     converted[i] = `"${windows2ShowArray[i]}"`;
   }


  let appleScriptView = "{"+converted+"}";

      let script = `

      //for each application
        tell each item in ${appleScriptView} 
        activate 

       `;

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