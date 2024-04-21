import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const handleClear = ()=>{
        setText('');
    }
    const handleCopy = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleUC = ()=>{
        // console.log("UpperCase was clicked: "+text)
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLC = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event)=>{
        // console.log("OnChange")
        setText(event.target.value);
    }
    const [text, setText] = useState('');
  return (
    <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10" ></textarea>
            </div>
            <button className="btn btn-primary btn-space" onClick={handleClear}>CLEAR</button>
            <button className="btn btn-primary btn-space" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary btn-space" onClick={handleUC}>Convert to UPPERCASE</button>
            <button className="btn btn-primary" onClick={handleLC}>Convert to lowercase</button>
        </div>
        <div className="container my-2">
            <h2>Text Summary</h2>
            <p>No. of characters: {text.length}</p>
            <p>No. of words: {text.split(/\n|\s/).length}</p>
        </div>
    </>
  )
}

TextForm.propTypes= {
    heading: PropTypes.string
}