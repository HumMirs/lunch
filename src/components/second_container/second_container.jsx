import React from "react";
import "./style.css";

function SecondContainer() {
  return (
    <React.Fragment>
      <div className="first_img">
        <h3>OUR RESTAURANT</h3>
        <h2>A culinary adventure for all the senses</h2>
        <button>READ MORE</button>
      </div>

      <div className="blog-container">
        <h1>Check Our Blog</h1>
        <div className="headline">
          <div>
            <h2>POST 6 HEADLINE</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <button>READ MORE</button>
          </div>
          <div>
            <h2>POST 5 HEADLINE</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <button>READ MORE</button>
          </div>
          <div>
            <h2>POST 4 HEADLINE</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <button>READ MORE</button>
          </div>
          <div>
            <h2>POST 3 HEADLINE</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <button>READ MORE</button>
          </div>
        </div>
      </div>
      <div className="second_img">
        <h3>OUR RESTAURANT</h3>
        <h2>The magic of the kitchen</h2>
        <button>READ MORE</button>
      </div>
      <div className="contact-container2">
        <div>
          <h2>Keep up to date with us</h2>
          <input type="text" placeholder="Enter a valid email address.." />{" "}
          <button>SUBMIT</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SecondContainer;
