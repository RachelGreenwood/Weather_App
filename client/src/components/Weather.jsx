const Weather = ({ data, city }) => {
    if (data && city) {
        return (
            <div>
                <h2>City: {data.name}</h2>
                <p>Description: {data.weather[0].description}</p>
            </div>
        )
    }
}

export default Weather;