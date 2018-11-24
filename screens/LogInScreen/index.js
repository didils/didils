import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "../../redux/modules/user";
import { actionCreators as caseActions } from "../../redux/modules/cases";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: (username, password) => {
      return dispatch(userActions.login(username, password));
    },
    fbLogin: () => {
      return dispatch(userActions.facebookLogin());
    },
    getFeed: () => {
      dispatch(caseActions.getFeed());
    },
    resetFeed: () => {
      dispatch(caseActions.resetFeed());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Container);
