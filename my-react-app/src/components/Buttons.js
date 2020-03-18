import React from "react";


var buttonGroup= {
  textAlign: "center",
}

var buttonStyle= {
  display: "inline-block",
  padding: "20px",
  margin: "0 auto",
}

function Buttons() {
  return (
    <div className="container" style={buttonGroup}>
      <div style={buttonStyle}>
        <a class="btn btn-primary" href="https://www.linkedin.com/in/israel-harvin-7527a6138/" role="button">LinkedIn</a>
      </div>
      <div style={buttonStyle}>
        <a class="btn btn-primary" href="https://github.com/Izzyharvin" role="button">GitHub</a>
      </div>
    </div>
  );
}

export default Buttons;
