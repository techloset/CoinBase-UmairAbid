import './App.css';
import React from 'react'
import LandingPage from './Components/LandingPage';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Blog from './Components/Blog';
import Discover from './Components/Discover';
import Contact from './Components/Contact';


function App() {
  return (
    <div>
    <BrowserRouter>
   <Navbar/>
      <Routes>
        <Route path='/' element={ <LandingPage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/discover' element={<Discover/>} />
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
      
    </BrowserRouter>
    </div>
  )
}

export default App
