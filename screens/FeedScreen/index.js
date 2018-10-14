import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "../../redux/modules/user";
import { actionCreators as caseActions } from "../../redux/modules/cases";

const mapStateToProps = (state, ownProps) => {
    const { cases: { feed } } = state;
    return {
        feed
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getFeed: () => {
            dispatch(caseActions.getFeed());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);