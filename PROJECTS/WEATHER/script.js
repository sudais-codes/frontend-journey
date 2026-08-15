async function getWeather() {

    let city = document.getElementById("city").value;

    if (city == "") {
        document.getElementById("error").innerText = "Enter a city name";
        return;
    }

    try {

        let location = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
        );

        let data = await location.json();

        if (!data.results) {
            document.getElementById("error").innerText = "City not found";
            return;
        }

        let lat = data.results[0].latitude;
        let lon = data.results[0].longitude;

        let weather = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`
        );

        let result = await weather.json();
        let current = result.current;

        document.getElementById("place").innerText =
            data.results[0].name;

        document.getElementById("temp").innerText =
            Math.round(current.temperature_2m) + "°C";

        document.getElementById("humidity").innerText =
            current.relative_humidity_2m + "%";

        document.getElementById("wind").innerText =
            Math.round(current.wind_speed_10m) + " km/h";

        showWeather(current.weather_code);

        document.getElementById("error").innerText = "";

    } catch (error) {

        document.getElementById("error").innerText =
            "Something went wrong";

    }
}


function showWeather(code) {

    let icon = document.getElementById("icon");
    let status = document.getElementById("status");

    if (code == 0) {
        icon.innerText = "☀️";
        status.innerText = "Clear Sky";
    }
    else if (code <= 3) {
        icon.innerText = "🌤️";
        status.innerText = "Cloudy";
    }
    else if (code <= 48) {
        icon.innerText = "🌫️";
        status.innerText = "Foggy";
    }
    else if (code <= 67) {
        icon.innerText = "🌧️";
        status.innerText = "Rainy";
    }
    else if (code <= 77) {
        icon.innerText = "❄️";
        status.innerText = "Snowy";
    }
    else {
        icon.innerText = "⛈️";
        status.innerText = "Stormy";
    }
}