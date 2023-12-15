import React from "react";
import "./style/map.css";
import Button from "../../components/ui/button/Button";

const Map = () => {
  return (
    <div id="map">
      <div className="map-content">
        <div className="map-left">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.6700155182357!2d74.58255517652367!3d42.87980860210664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec9ba3daadfbb%3A0x4e7a5fa037f5fd93!2sMotion%20Web%20IT%20academy!5e0!3m2!1sru!2skg!4v1702664213145!5m2!1sru!2skg"
            width="1000"
            height="550"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
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
