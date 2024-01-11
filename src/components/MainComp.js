import React, {useState} from "react";


export default function MainComp(props) {
  const [text, setText] = useState("");
  const [dtext, setdText] = useState("");

  if(document.getElementsByClassName('App')){}
  const handleUpClick=()=>{
    var res = text.toUpperCase();
    setdText(res);
  }
  const handleLowClick=()=>{
    var res = text.toLowerCase();
    setdText(res);
  }
  const handleClearClick=()=>{
    if(text.length===0){
      
    }
    setdText("");
    setText("");
  }

  const handleOnChange=(e)=>{
      setText(e.target.value);
  }

  return (
    <div>
      <div className="form-group">
      <h2>Enter the text</h2>
        <textarea className="container form-control" value={text} onChange={handleOnChange}
        style={{color : props.mode ==='dark'?'white' : 'black',
        backgroundColor : props.mode ==='dark' ? '#1b1b1b' : 'white'}} id="exampleFormControlTextarea1" rows="3"
        placeholder="Enter text here"></textarea>
        <button type="button" disabled={text.length===0} className="btn btn-warning mx-2 my-2" onClick={handleUpClick}>UpperCase</button>
        <button type="button" disabled={text.length===0}className="btn btn-warning mx-2 my-2 mx-2" onClick={handleLowClick}>LowerCase</button>
        <button type="button" className="btn btn-warning my-2 mx-2" onClick={handleClearClick}>Clear Text</button>
      </div>
      <h4>Your text summary</h4>
      <p>{text.length} characters, {text.split(/\s+/).filter((element)=>{ return element.length!==0}).length} words</p>
      <h4>Text preview</h4>
      <p>{dtext.length>0?dtext:"Nothing to preview"}</p>
    </div>
  );
}
