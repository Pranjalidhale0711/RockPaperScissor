import React from "react";
import "./playervscomp.css";
import Rock from "../../Assets/rock.png";
import Paper from "../../Assets/paper.png";
import Scissor from "../../Assets/scissor.png";
import Rock1 from "../../Assets/rockinv.png";
import Paper1 from "../../Assets/paperinv.png";
import Scissor1 from "../../Assets/scissorinv.png";
function Playervscomp() {
  const [url, setUrl] = React.useState();
  const [url2, setUrl2] = React.useState();
  const [inputuser, setinputuser] = React.useState();
  const [inputcomp, setinputcomp] = React.useState();
  const [message, setmessage] = React.useState("Nothing to Display");
  const [variableuser, setvariableuser] = React.useState(0);
  const [variablecomp, setvariablecomp] = React.useState(0);

  function handleclick1() {
    setUrl(Rock1);
    setinputuser(0);
  }
  function handleclick2() {
    setUrl(Paper1);
    setinputuser(1);
  }
  function handleclick3() {
    setUrl(Scissor1);
    setinputuser(2);
  }
  function setimg() {
    setUrl();
    setUrl2();
    setmessage("Nothing to Display");
   
  }
  function setimg2() {
    setUrl();
    setUrl2();
    setmessage("Nothing to Display");
    setvariablecomp(0);
    setvariableuser(0);
  }
  function comp() {
    const compinput = Math.floor(Math.random() * 3);
    // console.log(compinput)
    if (compinput === 0) {
      setUrl2(Rock);
      setinputcomp(0);
    } else if (compinput == 1) {
      setUrl2(Paper);
      setinputcomp(1);
    } else {
      setUrl2(Scissor);
      setinputcomp(2);
    }
    if (inputuser === 0 && compinput == 1) {
      setmessage("Winner is computer");
      setvariablecomp(variablecomp + 1);
    } else if (inputuser === 0 && compinput == 2) {
      setmessage("user is winner");
      setvariableuser(variableuser + 1);
    } else if (inputuser === 1 && compinput == 0) {
      setmessage("User is winner");
      setvariableuser(variableuser + 1);
    } else if (inputuser === 1 && compinput == 2) {
      setmessage("winner is computer");
      setvariablecomp(variablecomp + 1);
    } else if (inputuser === 2 && compinput == 0) {
      setmessage("winner is computer");
      setvariablecomp(variablecomp + 1);
    } else if (inputuser === 2 && compinput == 1) {
      setmessage("User is winner");
      setvariableuser(variableuser + 1);
    } else {
      setmessage("Its a tie");
    }
  }

  return (
    <>
      <div className="tittle">
        <div className="heading">Rock Paper Scissor</div>
      </div>

      <div className="list">
        <div className="p1">
         <div className="p1tittle">Player</div> 
         <img src={url} alt=""></img>
          <div> Total score    {variableuser}</div>
        </div>
        <div className="c1">
         <div className="p1tittle">Computer</div>
         <img src={url2} alt =""></img>
      
          <div>Total score    {variablecomp}</div>
          
        </div>
      </div>

      <div className="buttons">
        <button onClick={setimg}>Play</button>
        <button onClick={comp}>Generate Computers Response</button>
        <button onClick={setimg2}>Reset</button>
      </div>
      <div className="imgwin">
      <div className="imageprs">
        <img src={Rock} onClick={handleclick1} alt="Rock" />
        <img src={Paper} onClick={handleclick2} alt="Paper" />
        <img src={Scissor} onClick={handleclick3} alt="Scissor" />
      </div>
      <div className="winner">{message}</div>
      </div>
   
     
       
      
    </>
  );
}

export default Playervscomp;
