import React from "react";
import { connect } from "react-redux";
import LandingTemplate from "../../../components/landing/LandingTemplate";

const LandingTemplateContainer = props => {
  return <LandingTemplate {...props} />;
};
// const mapStateToProps = (state, ownProps) => {
//   const { count } = state.slider;
//   return {
//     count
//   };
// };

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     onIncrease: () => {
//       dispatch(sliderActions.increase());
//     },
//     onDecrease: () => {
//       dispatch(sliderActions.decrease());
//     }
//   };
// };

// const LandingCounterContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(LandingCounter);

// LandingSlider = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(LandingSlider);

// export { LandingCounterContainer, LandingContainer, LandingSlider };
export default connect(
  state => {
    const { count } = state.slider;
    return { count: count };
  },
  dispatch => ({})
)(LandingTemplateContainer);
