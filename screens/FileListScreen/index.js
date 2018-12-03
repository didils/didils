import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as caseFileActions } from "../../redux/modules/caseFiles";

const mapStateToProps = (state, ownProps) => {
  const {
    caseFiles: { casefiles }
  } = state;
  return {
    casefiles
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getFile: () => {
      dispatch(caseFileActions.getFile());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
