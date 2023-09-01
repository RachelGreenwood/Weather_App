import { useEffect, useState } from 'react';
import './App.css';
import Form from "./components/Form";

function App() {

  const [myName, setMyName] = useState('');

  const callBackEnd = async () => {
    const response = await fetch(`http://localhost:8000/api/weather?city=${city}`);
    const data = await response.json();
    console.log(data.data.name);
    setMyName(data.name);
  }

  return (
    <div>
      <Form />
    </div>
  )
}

export default App;