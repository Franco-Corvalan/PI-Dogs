import Home from "./views/Home/Home";
import Landing from "./views/LandingPage/LandingPage";

import { Routes, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App" >
      <Routes>
        <Route path='/' element={<Landing/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
    </div>
    
  );
}

export default App;
