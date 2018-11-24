import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "../../redux/modules/user";
import { actionCreators as caseActions } from "../../redux/modules/cases";

const mapStateToProps = (state, ownProps) => {
  const {
    cases: { feed }
  } = state;
  const { user } = state;
  return {
    isLoggedIn: user.isLoggedIn,
    profile: user.profile,
    feed
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getFeed: () => {
      dispatch(caseActions.getFeed());
    },
    resetCase: () => {
      dispatch(caseActions.resetCase());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
