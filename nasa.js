// fetch data from NASA Image API using AJAX

let response = null;

document.getElementsByTagName("button")[0].addEventListener("click", () => {
  if (document.getElementsByTagName("input")[0].value == ""){
    alert("Input required");
  } else{
    searchImg(document.getElementsByTagName("input")[0].value);
  }
});

var searchImg = (image) => {
  fetch("https://images-api.nasa.gov/search?q=" + image)
    .then( r => r.json())
    .then( data => {
      response = data.collection.items;
      // console.log(response[0].links[0].href);
      assignVal();
    })
    .catch(err => console.log("error is: ", err)); 
};

var assignVal= () => {
  for (const key in response) {
    // console.log(response[key].links[0].href);
    let img = document.createElement("img");
    img.src = response[key].links[0].href;
    document.getElementById("results").append(img);
  }
};