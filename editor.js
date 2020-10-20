let image = document.getElementById("theImage");
let btn = document.getElementById("btn");
let greetings = document.getElementById("greetings");
let myname = document.getElementById("myname");


const URL = 'https://randomuser.me/api/'


btn.addEventListener('click', getClicked);
greetings.addEventListener('mouseover', displaybtn);
document.addEventListener('DOMContentLoaded',getClicked);

function displaybtn(params) {
    
}
function getClicked (){
      fetch(URL)

        .then(function (response) {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json();
        })
        .then(function (responseAsJson) {
            name.innerHTML = responseAsJson.results[0].name.title;
            // myname.innerHTML = responseAsJson.results[0].name.first;
            myname.innerHTML = responseAsJson.results[0].name.last;
            image.src = responseAsJson.results[0].picture.large;
        })
        .catch(function (error) {
          console.log(error);
        })
    }

