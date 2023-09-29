import { useEffect, useState } from 'react';

const Weather = ({ data, city, name }) => {
    // const handleGetRequest = () => {
    //     fetch(`http://localhost:8000/users`)
    //     .then((response) => response.json())
    //     .then((location) => {
    //         setCity(location);
    //         console.log('City fetched: ', location );
    //     })
    // };

    // useEffect(() => {handleGetRequest()}, []);

    // const getRequest = () => {
    //     fetch("http://localhost:8080/events")
    //     .then((response) => response.json())
    //     .then(events => {
    //       setEvents(events); 
    //       console.log('Events fetched...', events);
    //       });
    //   }

    const handlePostRequest = () => {
        const postData = { name, city };
        console.log("Inside the POST, ", data);
        fetch("http://localhost:8000/users", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postData)
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("Data sent to server, ", data);
        })
        .catch((err) => console.error("Error: ", err))
        }

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
                    <button onClick={handlePostRequest}>Save City</button>
                </div>
            </div>
        )
    }
}

export default Weather;