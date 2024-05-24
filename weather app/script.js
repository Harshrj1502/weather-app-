const apikey="e2c73f96d0280f33622266cf624b1948";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox=document.querySelector(".search input")
const searchbtn=document.querySelector(".search span")
const weathericon=document.querySelector(".weathericon")

async function checkweather(city){
    const response =await fetch(apiurl +city+`&appid=${apikey}`);

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
       
    var data =await response.json();
    console.log(data)


    document.querySelector(".weather").style.display="block";



    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".humidity").innerHTML= data.main.humidity+"%";
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) +"°C";
    document.querySelector(".wind").innerHTML= data.wind.speed +"Km/H";
    document.querySelector(".temp-max").innerHTML= data.main.temp_max + "°C";
    document.querySelector(".temp-min").innerHTML= data.main.temp_min + "°C";
    document.querySelector(".pressure").innerHTML= data.main.pressure +"";
    document.querySelector(".feels-like").innerHTML= data.main.feels_like +"°C";
    }
}


searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
})