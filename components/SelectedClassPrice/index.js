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
    classify: search => {
      dispatch(productActions.setClassify(search));
    },
    extract: product => {
      dispatch(productActions.extractProduct(product));
    },
    extractArray: array => {
      dispatch(productActions.extractProductArray(array));
    },
    setClassifySelected: array => {
      dispatch(productActions.setClassifySelected(array));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
