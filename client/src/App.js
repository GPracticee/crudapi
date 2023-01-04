import React from 'react'
import Home from './Component/Home'
import Navbar from './Component/Navbar'
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import About from './Component/About'
import Contact from './Component/Contact'
import Login from './Auth/Login'
import Signup from './Auth/Signup'
import ErrorPage from './Component/ErrorPage'
// import Google from './Auth/Google'
const App = () => {
  return (
   <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route  path='/about' element={<About />}></Route>
          <Route  path='/contact' element={<Contact />}></Route>
          <Route  path='/login' element={<Login />}></Route>
          <Route  path='/signup' element={<Signup />}></Route>
          <Route  path='/error' element={<ErrorPage />}></Route>
          {/* <Route  path='/google' element={<Google />}></Route> */}
        </Routes>
      </Router>
   </>
  )
}

export default App