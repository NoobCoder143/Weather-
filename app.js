const apikey="77c52479f8698094f1e2659bcb654557";
const cityname= document.querySelector(".search input");
let img=document.querySelector(".display img");
const btn=document.querySelector("button");

btn.addEventListener("click",async function weather_data(){
    const apiurl=`https://api.openweathermap.org/data/2.5/weather?q=${cityname.value}&appid=${apikey}&units=metric`;
    let response= await fetch(apiurl);
    let data= await response.json();

    let city=document.querySelector(".city");
    city.innerText=data.name;
    let temp=document.querySelector(".temp");
    temp.innerText=Math.round(data.main.temp)+"°C";
    let humidity=document.querySelector(".humidity");
    humidity.innerText=data.main.humidity+"%";
    let windspeed=document.querySelector(".wind");
    windspeed.innerText=data.wind.speed + "km/h"; 

    if (data.weather[0].main=="Clouds"){
      img.src="clouds.png";
    }
   else if (data.weather[0].main=="Clear"){
        img.src="clear.png";
      }
      else if (data.weather[0].main=="Drizzle"){
        img.src="drizze.png";
      }
     else if (data.weather[0].main=="Humidity"){
        img.src="humidity.png";
      }
     else if (data.weather[0].main=="Mist"){
        img.src="mist.png";
      }
     else if (data.weather[0].main=="Rain"){
        img.src="rain.png";
      }else if (data.weather[0].main=="Snow"){
        img.src="snow.png";
      }
});

