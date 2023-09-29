import { useState, useEffect } from 'react';
import Weather from "./Weather";

const Form = (props) => {
    const [city, setCity] = useState("");
    const [data, setData] = useState("");
    const { name } = props;

    const fetchWeather = async () => {
        const response = await fetch(
            `http://localhost:8000/api/weather?city=${city}`
        );
        const weatherData = await response.json();
        console.log("In the server", weatherData);
        setData(weatherData);
    };

    const handleGetRequest = () => {
        fetch(`http://localhost:8000/users`)
        .then((response) => response.json())
        .then((location) => {
            setCity(location);
            console.log('City fetched: ', location );
        })
    };

    useEffect(() => {handleGetRequest()}, []);

    return (
        <div>
            <div>
                <input type="text" onChange={(e) => setCity(e.target.value)}></input>
                <button onClick={fetchWeather}>See Weather</button>
            </div>
            <Weather city={city} data={data} name={name} />
        </div>
    )
}

export default Form;