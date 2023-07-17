import React from 'react'
import './Mainpage.css'

function Mainpage() {
    function handleClick1(){
        window.location.href="/playervscomp"
    }
    function handleClick2(){
        window.location.href="/playervsplayer"
    }
  return (
    <>
    <div className="first">
    <div className="initialflex">
    <div className="initialmode">Choose Mode of Playing</div>
    <div className="mode">
    <button id="btn1"onClick={handleClick1}>PlayervsComp</button>
    <button id="btn2" onClick={handleClick2}>PlayervsPlayer</button>
    </div>
    </div>
    </div>
    
  
 
    </>

  )
}

export default Mainpage