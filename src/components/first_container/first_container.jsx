import "./style.css";
import React from "react";

function FirstContainer() {
  return (
    <React.Fragment>
      <h2 className="view">View Our Menu</h2>;
      <div className="img-container">
        <div>
          <img src="https://assets.nicepagecdn.com/11a8ddce/4267640/images/delicious-pizza-isolated-white.jpg" />
          <h2>HOT PIZZA</h2>
          <button> READ MORE</button>
        </div>
        <div>
          <img src="https://assets.nicepagecdn.com/11a8ddce/4267640/images/high-angle-shot-vegetable-salad-white-bowl.jpg" />
          <h2>SALADS</h2>
          <button> READ MORE</button>
        </div>
        <div>
          <img src="https://assets.nicepagecdn.com/11a8ddce/4267640/images/pexels-photo-3681641.jpeg" />
          <h2>DESSERT</h2>
          <button> READ MORE</button>
        </div>
        <div>
          <img src="https://assets.nicepagecdn.com/11a8ddce/4267640/images/pexels-photo-3939602.jpeg" />
          <h2>DRINKS</h2>
          <button> READ MORE</button>
        </div>
      </div>
      <div className="contact-container">
        <div>
          <h2>Keep up to date with us</h2>
          <a href="#">+1(234)567-8910</a>
        </div>
      </div>
    </React.Fragment>
  );
}
export default FirstContainer;
