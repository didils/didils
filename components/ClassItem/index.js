import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as productActions } from "../../redux/modules/product";

const mapStateToProps = (state, ownProps) => {
  const {
    product: { selectedProduct, search }
  } = state;
  return {
    selectedProduct,
    search
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    append: product => {
      dispatch(productActions.addProduct(product));
    },
    appendArray: array => {
      dispatch(productActions.addProductArray(array));
    },
    classify: search => {
      dispatch(productActions.setClassify(search));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
