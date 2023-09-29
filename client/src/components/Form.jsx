import { useState, useEffect } from 'react';
import Weather from "./Weather";

const Form = (props) => {
    const [city, setCity] = useState("");
    const [data, setData] = useState("");
    const [faveCity, setFaveCity] = useState("");
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
        .then((response) => {
            let match = response.filter(user => user["name"] === input.value);
            console.log(match[0].city);
            setFaveCity(match[0].city);
        })
    };

    useEffect(() => {handleGetRequest()}, []);
    // If the user's name is already in the database, get that user's id and set faveCity to their city
        // Bonus: If the user's name is already in the database, don't add the name to the DB

    return (
        <div>
            <div>
                <input type="text" onChange={(e) => setCity(e.target.value)}></input>
                <button onClick={fetchWeather}>See Weather</button>
            </div>
            <Weather city={city} data={data} name={name} faveCity={faveCity} />
        </div>
    )
}

export default Form;