import React, { useState } from 'react'

function Myui() {
    const [text,setText]=useState ("type here")

    const handleUpClick=()=>{
        // setText=("hello bhai kase ho")
        let newText=text.toUpperCase();
        setText(newText);
    }

    const handleloClick=()=>{
        let newt=text.toLocaleLowerCase();
        setText(newt);
    }
    const handleClearClick=()=>{
        let newtext="";
        setText(newtext);
    }
    const handleCopyClick=()=>{
        let text=document.getElementById("mybox")
        text.select();
       navigator.clipboard.writeText(text.value);
    }
    const handleSpaceClick=()=>{
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(" "))
    }


    const handleOnChange=(event)=>{
      
        setText(event.target.value);
    }

  return (
   <>
    <div className="container py-3 rounded">
    <h2 className='text-center text-success'><strong>Text Analyzer</strong></h2>
    <p className='px-4'>Text Analyzer is a simple free online tool for SEO web content analysis that helps you find most frequent phrases and words, number of characters, words, sentences and paragraphs, and estimated read and speak time of your content.</p>
    </div>
    <div className="container d-flex justify-content-around my-3  mh-100">
        <div className="container-fluid rounded text-center px-2 shadow-lg bt">
            <h4>Select tools</h4>
            <button disabled={text.length===0} className="btn btn-success mx-1 my-2  w-75"onClick={handleUpClick}>To UpperCase</button> 
            <button disabled={text.length===0} className="btn btn-success mx-1 my-2  w-75"onClick={handleloClick}>To Lowercase</button> 
            <button disabled={text.length===0} className="btn btn-success mx-1 my-2  w-75"onClick={handleSpaceClick}>Remove Spaces</button> 
            <button disabled={text.length===0} className="btn btn-success mx-1 my-2  w-75"onClick={handleClearClick}>clear All text</button>
             <button disabled={text.length===0} className="btn btn-success mx-1 my-2 w-75">charecters : {text.length}</button> 
             <button disabled={text.length===0} className="btn btn-success mx-1 my-2 w-75"> Words : {text.split(" ").filter((elem)=>{return elem.length!=0}).length}</button> 
             <button disabled={text.length===0} className="btn btn-success mx-1 my-2 w-75">sentence : {text.split(".").filter((elem)=>{return elem.length!=0}).length}</button> 
             <button disabled={text.length===0} className="btn btn-success mx-1 my-2 w-75"onClick={handleCopyClick}>Copy All</button> 
            </div>  
        <div className="container d-flex justify-content-center overflow-auto"> 
        <textarea className="form-control shadow-lg " id="exampleFormControlTextarea1" rows="18" value={text} onChange={handleOnChange}></textarea>
        <div className="px-3 w-50 mx-3 rounded shadow-lg  d-none d-lg-block"><h3 className="text-center">preview</h3>
        <p>{text}</p>
        
        </div>    
        </div>  
    </div>
    </>
  )
}

export default Myui