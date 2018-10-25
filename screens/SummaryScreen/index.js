import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as productActions } from "../../redux/modules/product";

const mapStateToProps = (state, ownProps) => {
  const {
    product: {
      classifiedSelected,
      selectedProduct,
      selectedArray,
      classifiedProduct,
      image
    },
    user: { profile }
  } = state;
  return {
    image,
    profile,
    selectedProduct,
    classifiedProduct,
    selectedArray,
    classifiedSelected
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    classify: search => {
      dispatch(productActions.setClassifySelected(search));
    },
    extract: product => {
      dispatch(productActions.extractProduct(product));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
