let apikey="1e873da3b9e7433e2c98aefaa944e551";
      const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

      const searchBox = document.querySelector(".search input");
      const searchBtn = document.querySelector(".search button");
      const weatherIcon = document.querySelector(".weather-icon");



      async function checkWeather(city){
        const respoonse = await fetch(apiUrl+ city + `&appid=${apikey}`);
        
        if(respoonse.status== 404){
          document.querySelector(".error").style.display="block";
          document.querySelector(".weather").style.display="none";
        }
        else{

        
        
        var data = await respoonse.json();

        //console.log(data);


        document.querySelector(".city").innerHTML=data.name ;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
        document.querySelector(".wind").innerHTML=data.wind.speed + " km/h";

        if(data.weather[0].main=="Clouds"){
          weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main=="Clear"){
          weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main=="ain"){
          weatherIcon.src = "images/rain.png";
        }
        else if(data.weather[0].main=="Drizzle"){
          weatherIcon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main=="Mist"){
          weatherIcon.src = "images/mist.png";
        }

        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";

      }
      }

      searchBtn.addEventListener("click",()=>{
        checkWeather(searchBox.value);
      })
      