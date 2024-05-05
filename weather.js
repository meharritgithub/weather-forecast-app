let city = document.getElementById("city");
let type = document.getElementById("type");
let temp = document.getElementById("temp");
let image = document.getElementById("bx");
let input = document.getElementById("inp");
let API_key = "f00a9d4e67b2bd3fd6f412cab1760f6c";

const data = async function (search) {
        let getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&units=metric`);
        console.log(getData);
        let jsonData = await getData.json();
        console.log(jsonData);
        console.log(jsonData.name);

        if(jsonData.cod==400){
                alert("please enter a location");
                image.src= "error.png"
        }   
        city.innerHTML = jsonData.name;
        type.innerHTML = jsonData.weather[0].main;
        temp.innerHTML = Math.floor(jsonData.main.temp) + "°C";

        if (type.innerHTML == "Clouds") {
                image.src = "cloud.png"
        }
        else if (type.innerHTML == "Clear") {
                image.src = "sun.png"

        }
        else if (type.innerHTML == "Rain") {
                image.src = "rain.png"

        }
        else if (type.innerHTML == "Snow") {
                image.src = "snow.png"

        }
        else if (type.innerHTML == "Haze") {
                image.src = "haze.png"

        }
      
        input.value = "";
}
function myFun() {
        search = input.value;
        data(search);
}
