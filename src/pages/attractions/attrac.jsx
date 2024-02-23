import React, { useContext } from "react";
import "./attrac.css";

import "./style.css";
import product1 from "./thumbnails/pic1.jpeg";
import product2 from "./thumbnails/pic2.jpeg";
import product3 from "./thumbnails/pic3.jpeg";
import product4 from "./thumbnails/pic4.jpeg";
import product5 from "./thumbnails/pic5.jpeg";
import product6 from "./thumbnails/pic6.jpeg";
import product7 from "./thumbnails/pic7.jpeg";
import product8 from "./thumbnails/pic8.jpeg";
export const Attrac = () => {
  return (
    <div>
      <h3>Attractions</h3>
      <div className="video-grid">
        <div className="video-preview">
          <div className="thumbnail-row">
            <img className="thumbnail" src={product2} />
          </div>
          <div className="video-info-grid">
            <div className="video-info">
              <p className="video-title">1. Amber Palace</p>
            </div>
          </div>
        </div>
        <div className="video-preview">
          <div className="thumbnail-row">
            <img className="thumbnail" src={product1} />
          </div>
          <div className="video-info-grid">
            <div className="video-info">
              <p className="video-title">1. Amber Palace</p>
            </div>
          </div>
        </div>
        <div className="video-preview">
          <div className="thumbnail-row">
            <img className="thumbnail" src={product2} />
          </div>
          <div className="video-info-grid">
            <div className="video-info">
              <p className="video-title">2. Amber Palace</p>
            </div>
          </div>
        </div>
        <div className="video-preview">
          <div className="thumbnail-row">
            <img className="thumbnail" src={product3} />
          </div>
          <div className="video-info-grid">
            <div className="video-info">
              <p className="video-title">3. Amber Palace</p>
            </div>
          </div>
        </div>
        <div className="video-preview">
          <div className="thumbnail-row">
            <img className="thumbnail" src={product4} />
          </div>
          <div className="video-info-grid">
            <div className="video-info">
              <p className="video-title">4. Amber Palace</p>
            </div>
          </div>
        </div>
        <div className="video-preview">
          <div className="thumbnail-row">
            <img className="thumbnail" src={product5} />
          </div>
          <div className="video-info-grid">
            <div className="video-info">
              <p className="video-title">5. Amber Palace</p>
            </div>
          </div>
        </div>
        <div className="video-preview">
          <div className="thumbnail-row">
            <img className="thumbnail" src={product6} />
          </div>
          <div className="video-info-grid">
            <div className="video-info">
              <p className="video-title">6. Amber Palace</p>
            </div>
          </div>
        </div>
        <div className="video-preview">
          <div className="thumbnail-row">
            <img className="thumbnail" src={product7} />
          </div>
          <div className="video-info-grid">
            <div className="video-info">
              <p className="video-title">7. Amber Palace</p>
            </div>
          </div>
        </div><div className="video-preview">
          <div className="thumbnail-row">
            <img className="thumbnail" src={product8} />
          </div>
          <div className="video-info-grid">
            <div className="video-info">
              <p className="video-title">8. Amber Palace</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
