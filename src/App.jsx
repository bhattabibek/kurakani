import React from 'react';
import './App.css'
import {useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Signuppage from './pages/Signuppage';
import Loginpage from './pages/Loginpage';
import Homepage from './pages/Homepage';
import Profilepage from './pages/Profilepage';
import Settingpage from './pages/Settingpage'
import Footer from './components/Footer';
import {Routes,Route} from "react-router-dom";
import { useAuthStore } from './store/useAuthStore';
import {Loader} from 'lucide-react';
import {Toaster} from 'react-hot-toast';

function App() {
  const Navigate = useNavigate();
  
  const { authUser, isCheckingAuth, checkAuth } = useAuthStore();
useEffect(()=>{
  checkAuth()
},[checkAuth])
if (isCheckingAuth && !authUser) {
  return (
    <div className='flex items-center justify-center h-screen'>
      <Loader className="size-10 animate-spin" />
    </div>
  );
}



  return (
    <>
      <Toaster position='top-right' reverseOrder={false}/>
  <Navbar/>
  <Routes>

    <Route path='/' element={authUser?<Homepage/>:<Navigate to='/login'/>}/>
    <Route path='/signup' element={!authUser?<Signuppage/>:<Navigate to="/"/>}/>
    <Route path='/login' element={!authUser?<Loginpage/>:<Navigate to='/'/>}/>
    <Route path='/setting' element={<Settingpage/>}/>
    <Route path='/profilepage' element={authUser?<Profilepage/>:<Navigate to='/'/>}/>
    
  </Routes>
  <Footer/>

    </>
  )
}

export default App
