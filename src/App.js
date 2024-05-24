import React from "react";

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MyNavbar from "./Component/Header/MyNavbar";
import Body1 from "./Component/Content/Body1";
import Contact from "./Component/Content/Contact";
import HomePage from "./Component/Content/HomePage";
import ErrorPage from "./Component/Content/ErrorPage";
import About from "./Component/Content/About";
import Projects from "./Component/Content/Projects";


function App() {
  return (
    <div>
      <Router>
        <MyNavbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path = '/body' element={<Body1/>}/>
          <Route path='/contact' element={<Contact/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/project' element={<Projects/>} />
          <Route path='*' element={<ErrorPage/>} />

        </Routes>
      </Router>
      </div>
    
  );
}

export default App;
