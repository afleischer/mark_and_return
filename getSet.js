const electron = require('electron');
const path = require('path');
const fs = require('fs');

const Store = require('./preferencesManager.js')
var getSet = {};

// getSet.js
// ========

/***
 * This file adds updated keystrokes to flat file,
 * Then removes any duplicates in the file.
 * 
 * This file does NOT tie window logic in. 
 * That will be done in markAndReturn.js's setWindow function
 */

getSet.setterFunction = function(event, args){

  var StoreArray = [];
  //Push existing data into a store array

  /****
   * Load existing data
   */
   
   //shouldn't be necessary if in main
  //const Store = require('./preferencesManager.js') 

  const store = new Store({
    configName : 'user-preferences'
  });
  
  /* --OLD--
  ({ //create a new getting and setting logic
    //We'll call our data file 'user-preferences'
    configName: 'user-preferences'

    //Once we'v e derived our newly-created object called "store", we will modify the constructor opts to write to the file below...
  });
     --OLD-- */ 


  /**
   * load existing data from flat 'user preferences.json' file
   */
  var rawDataInitial = fs.readFileSync(store.path);
    try{
      var cleanedDataInitial = JSON.parse(rawDataInitial);
    }
   catch(e){
      fs.writeFileSync(store.path, "");
    }
   StoreArray.push(cleanedDataInitial); 


  console.log("Setter firing!");

  /**
   * Add new input
   */
    var keybind = args;  //args being the new 
    var keybindFormatted = JSON.stringify(keybind);
      StoreArray.push(keybindFormatted); //I'm not doing anything with the storearray... I need to compare the two objects

    //Write to the file
    fs.writeFileSync(store.path, keybindFormatted, 'utf8');

   
    //Read in and Check for duplicate ID values in the file 

    /**
     * Check for duplicates and clean up!
     */
    var rawData = fs.readFileSync(store.path);
    var cleanedData = JSON.parse(rawData);

    //Loop through the StoreArray 
    StoreArray.forEach(function(obj) {
      
  })
  //source: https://stackoverflow.com/questions/39885893/how-to-find-duplicate-values-in-a-javascript-array-of-objects-and-output-only-u
  let unique = StoreArray.filter((set => f => !set.has(f.id) && set.add(f.id))(new Set));
  console.log(unique);  //Issue- this code will return the earlier version.  I'll need to retool it to return the later.
 
}
module.exports = getSet

