//image change section
let myImage = document.querySelector('img');

myImage.onclick = function(){
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/test-image.jpg') {
  myImage.setAttribute('src','images/test-image-2.jpg');
  console.log('True');
  } else {
  myImage.setAttribute('src','images/test-image.jpg');
  console.log('False');
  }
}

//Set user name section
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName){
    setUserName();
  } else{
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Hi, ' + myName;  
  }
}

myButton.onclick = function() {
  setUserName();
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hi, ' + storedName;
}