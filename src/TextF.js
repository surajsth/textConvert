import React from 'react';
import { useState } from 'react';
import './TextF.css';
export default function TextF() {
    const handleUpper = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnchange = (e)=>{
        setText(e.target.value);
    }
    const handleLower = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClear = ()=>{
        let newText = " ";
        setText(newText);
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
      const Copy= ()=>{
        var textC = document.getElementById("box");
        textC.select();
        navigator.clipboard.writeText(textC.value);
      }
      const handleSpace = ()=>{
        let space = text.split(/[ ]+/);
        setText(space.join(" "));
      }
      
    const [text, setText] = useState("Enter your text");

  return (
    <div className='container'>
        <div className="mt-4">
            <textarea onChange={handleOnchange} id='box' value={text}  cols="75" rows="9"></textarea>
        </div>
        <button onClick={handleUpper} className='btn btn-primary'>Convert to Uppercase</button>
        <button onClick={handleLower} className='btn btn-primary mx-2'>Convert to Lowercase</button>
        <button onClick={handleClear} className='btn btn-primary mx-2'>Clear Text</button>
        <button onClick={speak} className='btn btn-primary mx-2'>Speak Text</button><br />
        <button onClick={Copy} className='btn btn-primary my-2 mx-2'>Copy Text</button>
        <button onClick={handleSpace} className='btn btn-primary mx-2'>Remove space</button>
        

        <div className="conatiner my-4">
            <h1>Your Text summary</h1>
            <p>{text.split("").length} words and {text.length} characters</p>
            <p>{0.008* text.split("").length} minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </div>
  )
}
