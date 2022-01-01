import React ,{useState } from 'react'

export default function Textform(props) {
    const handleUpClick = () =>{
       // console.log("uppercase was clicked");
        setText("You have clicked on handleUpClick")
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to uppercase!" , "success");
    }
    const handleLoClick = () =>{
        // console.log("uppercase was clicked");
        // setText("You have clicked on handleUpClick")
         let newtext = text.toLowerCase();
         setText(newtext);
         props.showAlert("Converted to lowercase!" , "success");
     }
     const handleClearClick = () =>{
       
         let newtext = "";
         setText(newtext);
         props.showAlert("Cleared!" , "success");
     }
    const handleonChange = (event) =>{
      //  console.log("onChange was clicked");
        setText(event.target.value);
    }
    const [text, setText] = useState("");
   const handleCopy = ()=> {
       console.log("copied");
       var text = document.getElementById("mybox");
       text.select();
       text.setSelectionRange(0,9999);
       navigator.clipboard.writeText(text.value);
       props.showAlert("Text copied!" , "success");
   }
   const handleExtraSpaces = ()=> {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "))
    props.showAlert("Extra spaces are cleared!" , "success");
    }
    return (
        <> 
    <div className ="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}} >
        <h1 >{props.heading} </h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor: props.mode === 'dark' ? '#161616' : 'white' , color: props.mode === 'dark' ? 'white' : 'black'}} id="mybox" rows="8"></textarea>
           
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear screen</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}> Clear Extra Spaces</button>
    </div>
    
    <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters </p>
        <p><b>{0.008 *text.split(" ").length } Minutes read </b></p>
        <h3>Preview</h3>
        <p>{text.length>0? text : "Enter Something to preview."}</p>
    </div>
    </>
    )
}
