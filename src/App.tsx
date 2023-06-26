import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './component/Home/Home';
import Navbar from './component/Navbar';
import Contact from './component/Contact/Contact';
import Menu from "./component/Menu/Menu";
import Groups from "./component/Groups/Groups";
import Footer from "./component/Footer";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/menu" element={<Menu/>}/>
                    <Route path="/groups" element={<Groups/>}/>
                </Routes>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
