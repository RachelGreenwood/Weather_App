const Weather = ({ data, city }) => {
    if (data && city) {
        return (
            <div>
                <h2>City: {data.name}</h2>
                <p>Description: {data.weather[0].description}</p>
                <img src={data.weather[0].icon} />
                <p>Temp: {data.main.temp}</p>
                <p>Feels Like: {data.main.feels_like}</p>
                <p>Humidity: {data.main.humidity}</p>
                <p>Wind Speed: {data.wind.speed}</p>
            </div>
        )
    }
}

export default Weather;