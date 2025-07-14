import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Test from './tests/Test';
import Home from './pages/HomePage'
import Goal from './pages/GoalPage'
import Login from './pages/LoginPage'
import Review from './pages/ReviewPage'
import Sigup from './pages/SignupPage'

function App() {
  console.log("테스트")
  return (
    <div className="App">
      <BrowserRouter basename='/frontend'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/goal" element={<Goal />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/review" element={<Review />}/>
          <Route path="/sigup" element={<Sigup />}/>
          <Route path="/test" element={<Test />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
