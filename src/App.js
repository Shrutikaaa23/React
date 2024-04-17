import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import Contact from '../src/Components/Contact';
import Navbar from '../src/Components/Navbar';
// import About from '../src/Components/About';
// import Service from '../src/Components/Service';

function App(){


  return(
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          {/* <Route path="/Contact" element={<Contact/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Service" element={<Service/>}/> */}
        </Routes>
        
      </Router>
    </div>
  );
}
export default App;
