// fetch data from NASA Image API using AJAX
let url = "https://api.nasa.gov/planetary/apod?api_key=9YJNsiQnROfo8qztvtdYRk1xFdoksXy0j7L8ryiJ";

let response = null;

document.getElementsByTagName("button")[0].addEventListener("click", () => {
  searchImg(document.getElementsByTagName("input")[0].value);
});

var searchImg = (image) => {
  fetch("https://images-api.nasa.gov/search?q=" + image)
    .then( r => r.json())
    .then(d => {
      response = d;
      console.log(d); // eslint-disable-line no-console
    }); 
};

var assignVal= () => {
  let {collection, item, description, title} = response;
  
};