import { useState } from 'react';
import Form from './Form';

const Name = () => {
    const [name, setName] = useState("");
    const [input, setInput] = useState("");

    const handleInput = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        setName(input)
        console.log(name);
        console.log(input);
    }

    // TODO: Send name data to DB (with favorite city, or before?)

    return (
        <div>
            <div>
                <label>What's your name?</label>
                <input type='text' value={input} onChange={handleInput}></input>
                <button onClick={handleSubmit}>Save Name</button>
                {name && <Form />}
            </div>
        </div>
    )
}

export default Name;