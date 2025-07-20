const button = document.getElementById("submit")
async function fetchData(city) {
    const img = document.getElementById("pokemon")
    const card = document.getElementById("weatherCard")
    let cityName = card.querySelector("#cityName")
    let weatherIcon = card.querySelector(".weather-info").querySelector("#weatherIcon")
    let weatherTemp = card.querySelector(".weather-info").querySelector("#temperature")
    let description = card.querySelector("#description")
    let humidity = card.querySelector("#humidity")
    let wind = card.querySelector("#wind")

    
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=f7ec7cdf674942bfa9b213101251507 &q=${city.toLowerCase()}&aqi=yes`)
        
        
        if (!response.ok){
            throw Error("Could not fetch resource")
        }

        let data = await response.json()
        console.log(data)
        card.style.display = "flex"
        cityName.textContent = data.location.name
        weatherIcon.src = data.current.condition.icon
        weatherTemp.textContent = `${data.current.temp_c}°C`
        description.textContent = `${data.current.condition.text} sky`
        humidity.textContent = `Humidity: ${data.current.humidity}%`
        wind.textContent = `Wind: ${data.current.wind_kph}kp/h`
    }
    catch(error){
        console.error(error)
    }
}

button.addEventListener("click", (e)=>{
    const input = document.getElementById("input").value
    fetchData(String(input))
})