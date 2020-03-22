import React from "react";


var style = {
    backgroundColor: "black",
    textAlign: "center",
    padding: "10px",
    // position: "fixed",
    left: "0",
    bottom: "0",
    height: "50px",
    width: "100%",
    color: "white",
}

var phantom = {
    display: 'block',
    padding: '20px',
    height: '60px',
    width: '100%',
}

function Footer ({ children }) {
    return (
        <div>
            <div style={phantom} />
            <div style={style}>
              { children }
              <h4>Copyright</h4>
            </div>
        </div>
    );
}

export default Footer;