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
    feed,
    isLoggedIn: user.isLoggedIn
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    userLogOut: () => {
      dispatch(userActions.logOut());
      dispatch(caseActions.resetFeed());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
