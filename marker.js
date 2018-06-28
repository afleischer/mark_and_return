

const keybind = require ('./keycapture.js');
//listener already added for focus

var marker = {};

marker.addMarker = function addMarker(){
    var hotkey = [];
    //document.getElementById("markerHotkey");
    var current = document.activeElement; 
    current.addEventListener("keydown", addMarkerKey);

    function addMarkerKey(ev) {
        let key = ev.key  //This gets us our actual key pressed
        console.log(key);
        hotkey.push(key);
        current.addEventListener("keyup", keyCancel, {once: true})

        console.log("marker length is:"+hotkey.length)   

        console.log("counts: ", hotkey)

        function keyCancel(ev){

          console.log("current is: "+current);
          let mouseKey = "";
            var markerName = "marker";
          for (var i = 0; i <= hotkey.length - 1; i++){
                  if(i == hotkey.length -1){
                   mouseKey += hotkey[i];
                 } else{
                   mouseKey += hotkey[i]+"+";
                 }
                }
        
            let keybind = new Keybind;

            keybind.id = markerName;
            keybind.keys = mouseKey;

            
      console.log("Keybind is: "+ keybind)
          ipcRenderer.send('markerAction', keybind);
          current.blur();
          current.value = "Marker hotkey set at: " + mouseKey;
            
           return;
        }
    }
}
module.exports = marker;