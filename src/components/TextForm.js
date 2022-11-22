import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleOnUpClick = (event) => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase successfully", "succes");
  };

  const handleOnLoClick = (event) => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase successfully", "succes");
  };

  const handleClear = () => {
    setText("");
    props.showAlert("Text cleared successfully", "succes");
  };

  const handleCopy = () => {
    let text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard successfully", "succes");
  };

  const removeExtraSpace = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
  };

  return (
    <div style={{ color: props.mode === `light` ? `black` : `white` }}>
      <div className="container" style={{ color: props.mode === `light` ? `black` : `white` }}>
        {/* <label htmlFor="mybox" className="form-label">
            {props.heading}
          </label> */}
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === `light` ? `white` : `#042743`,
              color: props.mode === `light` ? `black` : `white`,
            }}
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleOnUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleOnLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={removeExtraSpace}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-2">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
      </div>
    </div>
  );
}
