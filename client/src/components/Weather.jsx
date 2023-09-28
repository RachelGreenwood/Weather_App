const Weather = ({ data, city, name }) => {
    // Pass data.name and name to server
    if (data && city) {
        return (
            <div>
                <div>
                    <h2>City: {data.name}</h2>
                    <p>Description: {data.weather[0].description}</p>
                    <img src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`} />
                    {/* Converts Kelvin to Fahrenheit */}
                    <p>Temp: {Math.floor((data.main.temp - 273.15) * (9 / 5) + 32)}</p>
                    <p>Feels Like: {Math.floor((data.main.feels_like - 273.15) * (9 / 5) + 32)}</p>
                    <p>Humidity: {data.main.humidity}</p>
                    <p>Wind Speed: {data.wind.speed}</p>
                </div>
                <div>
                    <p>Is this your favorite city?</p>
                    <button>Save City</button>
                </div>
            </div>
        )
    }
}

export default Weather;