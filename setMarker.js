
var model, fileWrite = require('main');

/**
 * Set the 
 */

 

let model = {
    "hotkeys": 
  [

        {
        "id": "foo",
        "key": "b+a+r",
        "assocWindows": 
            [
            "iTunes", "Safari", "Stickies"
            ]
        },
        {
        "id": "marker",
        "key": "a+s+d+f",
        "assocWindows": 
          [
           "Spotify", "Chrome"
          ]
        }

   ]
 }

console.log("prior to passing we have:"+model);

//first add the marker after looping through the object  -- --

class setMarker {
  constructor(model){
    //this.keybind = keybind;
    this.model = model;
  }
  
    //first add the marker after looping through the object
    //let lastElement = model.hotkeys[] - 
  newData(model){
    
      console.log("Model received is:"+model);
      console.log("received keys asre:"+model.hotkeys);
      console.log("first hotkey is:"+model.hotkeys[0].value);
    //-
    
        let newArray = model.hotkeys.filter(function(element){
            return element.id !== "marker"
        });
      //add the new hotkeys back
      let toAddBack = {"hotkeys" : newArray}
        console.log("newArray is:" +toAddBack);

        let length = newArray.hotkeys.length - 1;
        let lastElem = newArray.hotkeys[length];
        lastElem = {"id":"marker", "key":"TESTTESTTEST", "assocWindows": "TEST"};

        return lastElem;

  }
  
  foo(x){
    return x;
  }
  
  fileWrite(model){
    model.fileWrite(setMarker);
  }
}

let setMarkerInstance = new setMarker;
let newThing = setMarkerInstance.newData(model);


console.log("Corrected, the new thing is:"+newThing.newData);
// - 
                       
export default setMarker;