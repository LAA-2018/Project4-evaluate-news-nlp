function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
  var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
  if(regex .test(inputText)) {
   return true;
  } else {
    return false;
  }
}

export { checkForName }
