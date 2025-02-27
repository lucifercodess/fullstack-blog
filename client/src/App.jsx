import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import SignIn from './pages/SignIn'
import About from './pages/About'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Header from './components/Header'
import {Toaster} from 'react-hot-toast';
import Footer from './components/Footer'
import FooterComp from './components/Footer'
const App = () => {
  return (
    <div>
      <div><Toaster/></div>
      <Header/>
      <Routes>
        <Route path = "/" element= {<Home/>}/>
        <Route path = "/about" element= {<About/>}/>
        <Route path= "/sign-in" element= {<SignIn/>}/>
        <Route path= "/dashboard" element= {<Dashboard/>}/>
        <Route path = "/sign-up" element= {<SignUp/>}/>
        <Route path = "/projects" element= {<Projects/>}/>
      </Routes>
      <FooterComp/>
    </div>
  )
}

export default App