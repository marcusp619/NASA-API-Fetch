// fetch data from NASA Image API using AJAX
let url = "https://api.nasa.gov/planetary/apod?api_key=9YJNsiQnROfo8qztvtdYRk1xFdoksXy0j7L8ryiJ";

fetch(url)
  .then( r => r.json())
  .then(d => {
    console.log(d); // eslint-disable-line no-console
  });