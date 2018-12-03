import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "../../redux/modules/user";
import { actionCreators as caseActions } from "../../redux/modules/cases";
import { actionCreators as caseFileActions } from "../../redux/modules/caseFiles";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getFeed: () => {
      dispatch(caseActions.getFeed());
    },
    getFile: identification_number => {
      dispatch(caseFileActions.getFile(identification_number));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Container);
