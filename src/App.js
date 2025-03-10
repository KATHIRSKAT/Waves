
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";

import Workshops from "./Pages/Workshops/Workshops";
import Hackathon from './Pages/Hackathon/Hackathon';

function App() {
  return (

    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/hackathon" element={<Hackathon/>} />
          <Route path="/workshop" element={<Workshops />} />
        </Routes>
    </Router>
  );
}

export default App;
