function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
   if(Client.checkForName(formText)){
    console.log("::: Form Submitted :::")
    postData(formText)}
    else{
      document.getElementById('results').innerHTML =  'Invalid URL';
    }

}

export { handleSubmit }


async function postData(data){
    const response = await fetch('http://localhost:8081/api', {
    method: 'POST', 
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },    
    body: JSON.stringify({data}), 
  });
    
    try {
      const newData = await response.json();
      let pOne = document.createElement("p");
      let pTwo = document.createElement("p");
      let pthree = document.createElement("p");
      let pfour = document.createElement("p");
      let pfive = document.createElement("p");
      pOne.innerHTML = "polarity:  "+newData.polarity;
      document.getElementById("results").appendChild(pOne);
      pTwo.innerHTML = "subjectivity:  "+newData.subjectivity;
      document.getElementById("results").appendChild(pTwo);
      pthree.innerHTML = "polarity_confidence:  "+newData.polarity_confidence;
      document.getElementById("results").appendChild(pthree);
      pfour.innerHTML = "subjectivity_confidence:  "+newData.subjectivity_confidence;
      document.getElementById("results").appendChild(pfour);
      pfive.innerHTML = "text:  "+newData.text;
    }catch(error) {
    console.log("error", error);
    }
}
