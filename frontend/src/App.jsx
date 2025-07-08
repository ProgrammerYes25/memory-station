import { useEffect, useState } from 'react';
import './styles/App.css'

function App() {
  const [message, setMessage] = useState("");

  useEffect(()=>{
    fetch("/backend/test")
      .then(res => res.text())
      .then( m=> setMessage(m))
  }, [])

  console.log("테스트")
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hi! {message}
        </p>
      </header>
    </div>
  );
}

export default App;
