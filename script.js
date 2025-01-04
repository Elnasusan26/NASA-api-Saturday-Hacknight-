var date = document.querySelector(".date"); 
var image = document.querySelector(".image"); 
var explanation = document.querySelector(".explanation"); 
var link = document.querySelector(".link"); 
var apiKey = "z8XunkhoMAoBeln426S1zeto9WTKHTmyKbWynRbE"; 
var url = "https://api.nasa.gov/planetary/apod?api_key=" + apiKey; 

fetch(url)
  .then(function(response) {
    return response.json(); 
  })
  .then(function(data) {
    date.textContent = data.date; 
    image.src = data.url; 
    explanation.textContent = data.explanation;
    link.href = data.hdurl; 
    link.textContent = data.title; 
  })
  .catch(function(error) {
    console.log(error);
  });