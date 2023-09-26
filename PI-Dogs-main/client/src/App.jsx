import Home from "./views/Home/Home";
import Landing from "./views/LandingPage/LandingPage";
import Detail from "./views/Detail/Detail";
import Nav from "./components/Nav/Nav";
import Create from "./views/Create/Create";

import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

import './App.css';

function App() {
  const location = useLocation();
  const isLogin = location.pathname === "/";
  const excludeDetailPage = location.pathname.startsWith("/detail");

  return (
    <div className="App">
      {!isLogin && !excludeDetailPage && <Nav />} 
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Create/>}/>
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
