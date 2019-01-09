import React from "react";
import {
  LandingCounterContainer,
  LandingSlider,
  LandingContainer
} from "../LandingSlider/LandingSlider";
import { Link } from "react-router-dom";
import "./style.scss";
const LandingTemplate = props => {
  console.log("@@@@@", props);
  return (
    <div className="LandingTemplate">
      <div className="top-container">
        <div className="leftContainer">
          <div className="title">
            <h1>Beta GALLERY</h1>
          </div>
          <div className="content">
            {/* <LandingCounterContainer /> */}
            <span className="LandingCounter">{props.count}</span>
          </div>
          <div className="line" />
          <div className="btnContainer">
            <Link className="btn s" to="/gallery">
              GALLERY
            </Link>
            <div className="btn p">NEWS {props.count}</div>
          </div>
        </div>
        <LandingContainer>
          <div className="title">
            HELLO
            <br />
            WORLD
          </div>
          <div className="slideContainer">
            <LandingSlider />
          </div>
        </LandingContainer>
      </div>
      <div className="bottom-container">
        <div className="leftContainer" />
        <div className="rightContainer">
          <div className="feature">
            <div className="title">
              <h1>Features</h1>
            </div>
            <div className="content">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="to">
              <a href="#">next</a>
            </div>
          </div>

          <div className="next s">
            <span>hello world</span>
          </div>

          <div className="p-next s">hello world</div>
        </div>
      </div>
    </div>
  );
};

export default LandingTemplate;
