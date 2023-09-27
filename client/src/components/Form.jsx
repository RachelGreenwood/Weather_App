import { useState } from 'react';
import Weather from "./Weather";

const Form = () => {
    const [city, setCity] = useState("");
    const [data, setData] = useState("");

    const fetchWeather = async () => {
        const response = await fetch(
            `http://localhost:8000/api/weather?city=${city}`
        );
        const weatherData = await response.json();
        console.log("In the server", weatherData);
        setData(weatherData);
    };

    return (
        <div>
            <div>
                <input type="text" onChange={(e) => setCity(e.target.value)}></input>
                <button onClick={fetchWeather}>See Weather</button>
            </div>
            <Weather city={city} data={data} />
        </div>
    )
}

export default Form;