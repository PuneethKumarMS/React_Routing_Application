import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import About from "./components/About";

import './App.css';

const App = () => {

  return(
    <Router>
      <div>
        <Navbar/>
        <div style={{padding: '20px'}}>
          <Routes>
            <Route path = "/" element={<Home/>}/>
            <Route path = "/About" element={<About/>}/>
            <Route path = "/Contact" element={<Contact/>}/>
          </Routes>

        </div>
      </div>
    </Router>

  );
};
export default App;