import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as productActions } from "../../redux/modules/product";

const mapStateToProps = (state, ownProps) => {
  const {
    product: { image }
  } = state;
  return {
    image
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setImg: image => {
      dispatch(productActions.setImage(image));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
