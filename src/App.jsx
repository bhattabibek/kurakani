import React from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Signuppage from './pages/Signuppage';
import Loginpage from './pages/Loginpage';
import Homepage from './pages/Homepage';
import Profilepage from './pages/Profilepage';
import Settingpage from './pages/Settingpage'
import Footer from './components/Footer';
import {Routes,Route} from "react-router-dom";


function App() {
  

  return (
    <>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/signup' element={<Signuppage/>}/>
    <Route path='/login' element={<Loginpage/>}/>
    <Route path='/setting' element={<Settingpage/>}/>
    <Route path='/profilepage' element={<Profilepage/>}/>
    
  </Routes>
  <Footer/>

    </>
  )
}

export default App
