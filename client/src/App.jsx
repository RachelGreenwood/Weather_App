import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [myName, setMyName] = useState('');

  const callBackEnd = async () => {
    const response = await fetch('http://localhost:8000/api/myname');
    const data = await response.json();
    console.log(data);
    setMyName(data.name);
  }

  useEffect(() => {
    callBackEnd();
  }, [])

  return (
    <div>
      <h1>Hello Techtonica!</h1>
      {myName}
    </div>
  )
}

export default App;