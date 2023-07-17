import React from "react";
import Rock from "../../Assets/rock.png";
import Paper from "../../Assets/paper.png";
import Scissor from "../../Assets/scissor.png";
import Rock1 from "../../Assets/rockinv.png";
import Paper1 from "../../Assets/paperinv.png";
import Scissor1 from "../../Assets/scissorinv.png";
import  "./playervsolayer.css"
function Playervsplayer() {
  const [url, setUrl] = React.useState();
  const [url2, setUrl2] = React.useState();
  const [inputuser, setinputuser] = React.useState();
  const [inputcomp, setinputcomp] = React.useState();
  const [message, setmessage] = React.useState("Nothing to Display");
  const [variableuser, setvariableuser] = React.useState(0);
  const [variablecomp, setvariablecomp] = React.useState(0);
  const[playersturn,setplayersturn]=React.useState(0);
  const[messageturn,setmessageturn]=React.useState("Player 1 turn ")

  function handleclick1() {
    setUrl(Rock1);
     setplayersturn(1);
     setmessageturn("Player 2 Turn")
    setinputuser(0);
  }
  function handleclicked1() {
  
    setUrl2(Rock);
    setplayersturn(0);
    setinputcomp(0);
    setmessageturn("Player 1 Turn")
  }
  
  function handleclick2() {
    setUrl(Paper1);
    setplayersturn(1);
    setmessageturn("Player 2 Turn")
    setinputuser(1);
    
  }
  function handleclicked2() {
   
    setUrl2(Paper);
    setplayersturn(0);
    setinputcomp(1);
    setmessageturn("Player 1 Turn")
    
  }
  function handleclick3() {
    setUrl(Scissor1);
    setinputuser(2);
    setmessageturn("Player 2 Turn")
    setplayersturn(1);
   
   
    
  }
  function handleclicked3() {
  
    setinputcomp(2);
    setUrl2(Scissor);
    setplayersturn(0);
    setmessageturn("Player 1 Turn")
    
  }
  function setimg() {
    setUrl();
    setUrl2();
    setplayersturn(0);
    setmessage("Nothing to Display");
    setmessageturn("Player 1 Turn")
   
  }
  function setimg2() {
    setUrl();
    setUrl2();
    setmessage("Nothing to Display");
    setvariablecomp(0);
    setplayersturn(0);
    setvariableuser(0);
    setmessageturn("Player 1 Turn")
  }
  function comp() {
    const compinput = url2;
    // console.log(compinput)
    // if (compinput === 0) {
      
    //   setinputcomp(0);
    // } else if (compinput == 1) {
      
    //   setinputcomp(1);
    // } else {
     
    //   setinputcomp(2);
    // }
    if (inputuser === 0 && inputcomp === 1) {
      setmessage("Player2 is winner");
      setvariablecomp(variablecomp + 1);
    } else if (inputuser === 0 && inputcomp === 2) {
      setmessage("Player1 is winner");
      setvariableuser(variableuser + 1);
    } else if (inputuser === 1&& inputcomp === 0) {
      setmessage("Player1 is winner");
      setvariableuser(variableuser + 1);
    } else if (inputuser === 1 &&inputcomp === 2) {
      setmessage("winner is Player2");
      setvariablecomp(variablecomp + 1);
    } else if (inputuser === 2&& inputcomp === 0) {
      setmessage("winner is Player2");
      setvariablecomp(variablecomp + 1);
    } else if (inputuser === 2&& inputcomp  === 1) {
      setmessage("Player1 is winner");
      setvariableuser(variableuser + 1);
    } else {
      setmessage("Its a tie");
    }
  }

  return (
    <>
   
     <div className="tittle">
        <div className="heading">Rock Paper Scissor</div>
        <div className="turn">{messageturn}</div>
      </div>
    
      

      <div className="list">
        <div className="p1">
         <div className="p1tittle">Player1</div> 
         <img src={url} alt=""></img>
          <div> Total score    {variableuser}</div>
        </div>
        <div className="c1">
         <div className="p1tittle">Player2</div>
         <img src={url2} alt =""></img>
      
          <div>Total score{variablecomp}</div>
          
        </div>
      </div>

      <div className="buttons">
        <button onClick={setimg}>Play</button>
        <button onClick={comp}>Generate  Response</button>
        <button onClick={setimg2}>Reset</button>
      </div>
      <div className="imgwin">
      <div className="imageprs">
      {playersturn === 0 ? (
            <>
              <img src={Rock} onClick={handleclick1} alt="Rock" />
              <img src={Paper} onClick={handleclick2} alt="Paper" />
              <img src={Scissor} onClick={handleclick3} alt="Scissor" />
            </>
          ) : (
            <>
              <img src={Rock} onClick={handleclicked1} alt="Rock" />
              <img src={Paper} onClick={handleclicked2} alt="Paper" />
              <img src={Scissor} onClick={handleclicked3} alt="Scissor" />
            </>
          )}
    
       </div>
        
       
      
      <div className="winner">{message}</div>
      </div>
   
     
       
      
    </>
  );
}

export default Playervsplayer;
