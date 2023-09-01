const Weather = ({ data, city }) => {
    if (data && city) {
        return (
            <div>
                <h2>City: {data.name}</h2>
                <p>Description: {data.weather[0].description}</p>
                <img src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`} />
                <p>Temp: {Math.floor((data.main.temp - 273.15) * (9 / 5) + 32)}</p>
                <p>Feels Like: {Math.floor((data.main.feels_like - 273.15) * (9 / 5) + 32)}</p>
                <p>Humidity: {data.main.humidity}</p>
                <p>Wind Speed: {data.wind.speed}</p>
            </div>
        )
    }
}

export default Weather;