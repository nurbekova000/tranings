import React from "react";
import "./style/map.css";
import Button from "../../components/ui/button/Button";

const Map = () => {
  return (
    <div id="map">
      <div className="map-content">
        <div className="map-rigth">
          <div className="input-group">
            <div className="inputs-top">
              <input type="text" placeholder="Your Name*" />
              <input type="text" placeholder="Your Email*" />
            </div>
            <div className="input-mid">
              <input type="text" placeholder="Subject" />
            </div>
            <div className="input-bottom">
              <input type="text" />
            </div>
            <Button>Send Message</Button>
          </div>
        </div>
      </div>
      <div className="conatiner">
        <div className="map">
          <p style={{ textAlign: "center", padding: "30px 0" }}>
            Copyright © 2020 Training Studio - Designed by{" "}
            <span>TemplateMo</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Map;
