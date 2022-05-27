import React, {useState} from 'react'




function TextForm(props) {
    const handleUpClick = () => {
        setText("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);

    }
    const handleLowClick = () => {
        setText("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);

    }
    const handleOnChange = (event) =>{
        console.log("On Change");
        setText(event.target.value)
    }

    const [ text, setText ] = useState('Enter text here');

  return (
      <>
<div>
    <h1>{props.heading}</h1>
    <div className="mb-3">

     <textarea className="form-control" value = {text} onChange={handleOnChange} id="myText" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to upperCase</button>
    <button className="btn btn-primary mx-1" onClick={handleLowClick} >Convert to lowerCase</button>
</div>

<div className= "container my-2">
    <h1>Your text summary</h1>
    <p>{text.split(" ").length} words and {text.length} charachters</p>

    <p>{0.08 * text.split(" ").length} minutes read</p>

    <h2>Preview</h2>
    <p>{text}</p>
</div>
</>
  )
}

export default TextForm