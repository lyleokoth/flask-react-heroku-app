import logo from './logo.svg';
import './App.css';
import { useState, useEffect} from 'react'
import axios from "axios";

function App() {

  const [currentTime, setCurrentTime] = useState(0)
  useEffect(() => {
    const fetchTime = async () => {
      const resp = await axios.get('http://127.0.0.1:5000/api/time');
      console.log(resp.data.time)
      setCurrentTime(resp.data.time);
    };
    fetchTime();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>The current time is {currentTime}</p>
      </header>
    </div>
  );
}

export default App;
