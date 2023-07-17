import React from 'react'
import {BrowserRouter, Route,Routes} from "react-router-dom"
import Playervscomp from './components/playervscomp/playervscomp'
import Playervsplayer from './components/playervsplayer/playervsplayer'
import Mainpage from './components/MainPage/Mainpage'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Mainpage/>} />  
          <Route exact path="/playervscomp" element={<Playervscomp />} />  
          <Route exact path="/playervsplayer" element={<Playervsplayer />} />  
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App