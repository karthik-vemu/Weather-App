const apiKey = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //  Replace this with your API Key

function getWeather() {
    let city = document.getElementById("cityInput").value;
    if (city.trim() === "") {
        alert("Please enter a city name!");
        return;
    }

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                document.getElementById("weatherInfo").innerHTML = `<p>City not found!</p>`;
                return;
            }

            let weatherHTML = `
                <h3>${data.name}, ${data.sys.country}</h3>
                <p>🌡️ Temperature: ${data.main.temp}°C</p>
                <p>🌬️ Wind Speed: ${data.wind.speed} m/s</p>
                <p>💧 Humidity: ${data.main.humidity}%</p>
                <p>☁️ Condition: ${data.weather[0].description}</p>
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather Icon">
            `;

            document.getElementById("weatherInfo").innerHTML = weatherHTML;
        })
        .catch(error => console.log("Error:", error));
}
