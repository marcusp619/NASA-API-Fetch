// fetch data from NASA Image API using AJAX
let url = "https://api.nasa.gov/planetary/apod?api_key=9YJNsiQnROfo8qztvtdYRk1xFdoksXy0j7L8ryiJ";


document.getElementsByTagName("button")[0].addEventListener("click", () => {
  searchImg(document.getElementsByTagName("input")[0].value);
});

var searchImg = (image) => {
  fetch("https://images-api.nasa.gov/search?q=" + image)
    .then( r => r.json())
    .then(d => {
      console.log(d); // eslint-disable-line no-console
    }); 
};