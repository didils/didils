import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "../../redux/modules/user";
import { actionCreators as caseActions } from "../../redux/modules/cases";
import { actionCreators as productActions } from "../../redux/modules/product";

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
      dispatch(productActions.resetSelectedProduct());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
