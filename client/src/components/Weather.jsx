import { useState } from 'react';

const Weather = ({ data, city, faveCity, name, handlePutRequest }) => {
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

    // const handlePutRequest = () => {
    //     setFaveCity(city);
    //     fetch(`http://localhost:8000/users/${city.id}`, {
    //         method: "PUT",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(city)
    //     })
    //     .then((response) => response.json())
    //     .catch((err) => {
    //         console.error("Error updating contact: ", err);
    //     })
    // }

    // const handleEditContact = () => {
    //     setEditedContact({...editedContact})
    //     fetch(`http://localhost:8080/contacts/${editedContact.id}`, {
    //         method: "PUT",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(editedContact)
    //     })
    //     .then((response) => response.json())
    //     .then(() => {
    //         //getRequest()
    //         setIsEditing(false);
    //     })
    //     .catch((err) => {
    //         console.error("Error updating contact: ", err);
    //     })
    // }

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
                    {/* TODO: Make it so that if they have a favorite city, the edit button shows. Otherwise, add button shows */}
                    <p>Your favorite city is currently {faveCity}. Change to this city?</p>
                    <button onClick={handlePutRequest}>Change Favorite City</button>
                    <p>If you don't have a favorite city, you can add this city</p>
                    <button onClick={handlePostRequest}>Add City</button>
                </div>
            </div>
        )
    }
}

export default Weather;