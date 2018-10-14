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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);