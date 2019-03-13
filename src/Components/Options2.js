import React, { Component } from "react";
import "./Tasks.css";

const Options2 =function(props){

    return (
      <div className="Tasks">
          <div className="Card">
            <div className="Task" onClick={props.param2.bind(this,"Today")}>
            Today  
            </div>
            <div className="Task" onClick={props.param2.bind(this,"Tomorrow")}>
            Tomorrow
            </div>
            <div className="Task" onClick={props.param2.bind(this,"Someday")}>
            Someday
            </div>
          </div>
       
      </div>
    );
  }

export default Options2;
