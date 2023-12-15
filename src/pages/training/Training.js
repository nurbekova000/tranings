import React from "react";
import topImg from "../../assets/images/line-dec.png";

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
            <div className="training-bottom"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
