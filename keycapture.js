const {ipcRenderer} = require('electron');
const fs = require('fs')


require('devtron').install();
const marker = require('./marker.js')


/**********
When the window is loaded, record hotkey 
**********/
//var Mousetrap = require('mousetrap'); //Package set that helps with key binding
const Store = require('./preferencesManager.js')

let log = console.log;

class Keybind{
  
  constructor(ID, keys){
    this.id,
    this.keys,
    this.assocWindows
  }

}

document.getElementById("start").addEventListener("click", ()=> {
  ipcRenderer.send('startAction');

});

var input = document.getElementById("testInput");
var input = document.querySelectorAll(".bindInput");


Array.from(input).forEach(item => {
  item.addEventListener("focusin", keyListen);
})

    /**
     * Logic for updating and sending the hotkey in the marker field
     */
    var markerFlag = document.getElementById("markerHotkey");
        markerFlag.addEventListener("focusin", marker.addMarker);

//Add new hotkey input field when press the button
var newBind = document.getElementById("newBind").addEventListener("click", () => {

  var count = document.querySelectorAll('.bindInput').length;
  var countPlus = count + 1;
  var countElem = document.querySelectorAll('.bindInput');

    var countElemLast = countElem[count - 1];  //This variable will be crucial for grabbing and removing the last element

    var parent = document.getElementById("buttonContainer");
    //first create the node
        //which is countElemLast
    //then apply it
    var node = document.createElement("INPUT")
    var newElem = parent.appendChild(node)
    newElem.setAttribute("class", "bindInput");
    newElem.setAttribute("id", "hotkey_"+countPlus)
    newElem.setAttribute("type", "text")
    newElem.setAttribute("name", "hotkey_"+countPlus);
  
});

//Remove last hotkey input field when press the button
var removeBind = document.getElementById("removeBind").addEventListener("click", () => {

  inputFields=document.getElementsByClassName("bindInput");
  last_element = inputFields[inputFields.length - 1];
  document.removeChild(last_element);
});

  function keyListen() { 
   // let keyCount = {}
    let hotkey = [];  
    var current = document.activeElement; 
    var  hotkey_name = current.getAttribute('id'); //Should return a hotkey 

    //input.addEventListener("keydown", addKey);
    current.addEventListener("keydown", addKey);

      function addKey(ev) {
        let key = ev.key  //This gets us our actual key pressed
        console.log(key);
        hotkey.push(key);
        current.addEventListener("keyup", keyCancel, {once: true})

        console.log("hotkey length is:"+hotkey.length)
          //hotkey[key] = (hotkey[key] || 0) + 1
          
          //hotkey[key] = 1

        console.log("counts: ", hotkey)

        function keyCancel(ev){

          console.log("current is: "+current);
          let mouseKey = "";
          var  hotkey_name = current.getAttribute('id');
               for (var i = 0; i <= hotkey.length - 1; i++){
                  if(i == hotkey.length -1){
                   mouseKey += hotkey[i];
                 } else{
                   mouseKey += hotkey[i]+"+";
                 }
                }
        
            let keybind = new Keybind;

            keybind.id = hotkey_name;
            keybind.keys = mouseKey;

      console.log("Keybind is: "+ keybind);


      /***
       * Send gathered keybind to main process for handling 
       */
          ipcRenderer.send('invokeAction', keybind);
          current.blur();
          document.getElementsByName('hotkey_1')[0].placeholder=hotkey;
          current.value = "Key set at: " + mouseKey;
            
           return;
        }

      }  
    }
