
//Get DOM element of the most recently added 
var removeBind = document.getElementById("removeBind").addEventListener("click", () => {

inputFields=document.getElementsByClassName("bindInput");
last_element = inputFields[inputFields.length - 1];
document.removeChild(last_element);
})