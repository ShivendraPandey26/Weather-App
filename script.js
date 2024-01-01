const apiKey = "4bedb45385f95853d18858a4e004d779";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon");

        async function checkWeather(City) {
            const response = await fetch(apiUrl + City + `&appid=${apiKey}`);

            if (response.status == 404) {
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
            }

            else {
                
                var data = await response.json();
                
                
                document.querySelector(".City").innerHTML = data.name;
                document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
                document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
                document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
                
                if (data.weather[0].main == "Clouds") {
                    weatherIcon.src = "./asset/clouds.png"
                } 
                
                else if (data.weather[0].main == "Clear") {
                    weatherIcon.src = "asset/clear.png"
                }
                
                else if (data.weather[0].main == "Rain") {
                    weatherIcon.src = "asset/rain.png"
                }
                
                else if (data.weather[0].main == "Drizzle") {
                    weatherIcon.src = "asset/drizzle.png"
                }
                
                else if (data.weather[0].main == "Mist") {
                    weatherIcon.src = "asset/mist.png"
                }
                
                document.querySelector(".weather").style.display = "block"
                document.querySelector(".error").style.display = "none";
            }
                console.log(data);
            }
            
            searchBtn.addEventListener("click", ()=>{
                
                checkWeather(searchBox.value);
                
            })