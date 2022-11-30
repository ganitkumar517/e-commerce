import "./App.css";
import React from 'react';
import Nav from './Nav';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Footer from './component/Footer';
import Signup from "./component/Singup";
function App(){
    return(
    <div className='page'>
    <BrowserRouter>
    <Nav/>
    <Routes>
        <Route path="/" element={<h1>home page</h1>}/>
        <Route path="/add" element={<h1>add page</h1>}/>
        <Route path="/update" element={<h1>update page</h1>}/>
        <Route path="/log-out" element={<h1>log page</h1>}/>
        <Route path="/profile" element={<h1>profile page</h1>}/>
        <Route path="/signup" element={<><Signup/></>}/>
    </Routes>
    </BrowserRouter>

    <Footer/>
    </div>
    )
}
export default App;