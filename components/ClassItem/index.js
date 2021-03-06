import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as productActions } from "../../redux/modules/product";

const mapStateToProps = (state, ownProps) => {
  const {
    product: { selectedProduct, search, selectedArray }
  } = state;
  return {
    selectedProduct,
    search,
    selectedArray
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
    },
    setClassifySelected: () => {
      dispatch(productActions.setClassifySelected());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
