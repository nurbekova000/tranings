import React from "react";
import Button from "../../components/ui/button/Button";
import topImg from "../../assets/images/line-dec.png";
import tabsIcon from "../../assets/images/tabs-first-icon.png";
import triningImg1 from "../../assets/images/training-image-01.jpg";
import triningImg2 from "../../assets/images/training-image-02.jpg";
import triningImg3 from "../../assets/images/training-image-03.jpg";
import triningImg4 from "../../assets/images/training-image-04.jpg";

import "./style/training.css";
const Training = () => {
  return (
    <div>
      <div id="training">
        <div className="container">
          <div className="training">
            <div className="training-top">
              <h1>Тренировка</h1>
              <img src={topImg} alt="" />
              <p>Здесь выберите для себя!</p>
            </div>
            <div className="training-bottom">{/* tabs */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
