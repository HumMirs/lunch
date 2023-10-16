import { Fragment } from "react";
import "./style.css";
import React from "react";

function Main() {
  return (
    <React.Fragment>
      <div>
        <ul className="list-container">
          <li>HOME</li>
          <li>LANDING</li>
          <li>ABOUT</li>
          <li>MENU</li>
          <li>TEAM</li>
          <li>CONTACT</li>
        </ul>
      </div>
      <div className="main-container">
        <div className="round">
          <h1>40%</h1>
          <h3>
            BUSINESS <br /> LUNCH
          </h3>
        </div>
        <h2>
          Where every ingredient <br /> tells a story
        </h2>
        <button>READ MORE</button>
      </div>
    </React.Fragment>
  );
}
export default Main;
