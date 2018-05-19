<<<<<<< HEAD

//Get DOM element of the most recently added 
var removeBind = document.getElementById("removeBind").addEventListener("click", () => {

inputFields=document.getElementsByClassName("bindInput");
last_element = inputFields[inputFields.length - 1];
document.removeChild(last_element);
=======

//Get DOM element of the most recently added 
var removeBind = document.getElementById("removeBind").addEventListener("click", () => {

inputFields=document.getElementsByClassName("bindInput");
last_element = inputFields[inputFields.length - 1];
document.removeChild(last_element);
>>>>>>> 01cea2e1a0c74d48bc88c51871afdccca90904af
})