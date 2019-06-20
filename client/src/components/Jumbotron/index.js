import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => 
    <div
      style={{  
                clear: "both", 
                paddingTop: 120, 
                textAlign: "center",
                backgroundImage: 'url(' + props.backgroundImage + ')'
              }}

      className="jumbotron"
    >
      {props.children}
    </div>

export default Jumbotron;
