import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as sliderActions from "../../../redux/modules/slider";
import "./style.scss";

// 카운트에 따른 그림 보여주는 컴포넌트 (1) children에 (2) 가 들어있음.
class LandingContainer extends Component {
  render() {
    const { children, count } = this.props;
    return (
      <div className="rightContainer">
        <div className={"slides fade bg1 " + (count === 1 ? "block" : "")} />
        <div className={"slides fade bg2 " + (count === 2 ? "block" : "")} />
        <div className={"slides fade bg3 " + (count === 3 ? "block" : "")} />
        {children}
      </div>
    );
  }
}

// 화살표로 왼쪽 오른쪽 이동하는 컴포넌트 (2)
class LandingSlider extends Component {
  render() {
    const { onIncrease, onDecrease } = this.props;
    return (
      <Fragment>
        <div
          className="slide-btn s"
          onClick={() => {
            onDecrease();
          }}
        >
          &lt;
        </div>
        <div
          className="slide-btn p"
          onClick={() => {
            onIncrease();
          }}
        >
          &gt;
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { count } = state.slider;
  return {
    count
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onIncrease: () => {
      dispatch(sliderActions.increase());
    },
    onDecrease: () => {
      dispatch(sliderActions.decrease());
    }
  };
};

LandingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingContainer);

LandingSlider = connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingSlider);

export { LandingContainer, LandingSlider };
