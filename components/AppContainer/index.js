import { connect } from "react-redux";
import AppContainer from "./presenter";
import { actionCreators as caseAction } from "../../redux/modules/cases";

const mapStateToProps = (state, ownProps) => {
  const { user } = state;
  return {
    isLoggedIn: user.isLoggedIn,
    profile: user.profile
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    initApp: () => {
      dispatch(caseAction.getFeed());
    },
    resetFeed: () => {
      dispatch(caseAction.resetFeed());
    },
    setMainColor: () => {
      dispatch(caseAction.setMainColor());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
