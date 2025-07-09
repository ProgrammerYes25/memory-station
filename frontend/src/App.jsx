import { useEffect, useState } from 'react';
import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Test from './pages/Test';

function App() {
  // const [message, setMessage] = useState("");

  // useEffect(()=>{
  //   fetch("/backend/test")
  //     .then(res => res.text())
  //     .then( m=> setMessage(m))
  // }, [])

  console.log("테스트")
  return (
    <div className="App">
      <BrowserRouter basename='/frontend'>
        <Routes>
          <Route path="/test" element={<Test />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
