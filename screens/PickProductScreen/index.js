import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as productActions } from "../../redux/modules/product";

const mapStateToProps = (state, ownProps) => {
  const {
    product: { search, selectedProduct, classifiedProduct, classifiedSelected }
  } = state;
  return {
    search,
    selectedProduct,
    classifiedProduct,
    classifiedSelected
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    searchKeyword: keyword => {
      return dispatch(productActions.searchByKeyword(keyword));
    },
    setSearch: blank => {
      dispatch(productActions.setSearch(blank));
    },
    resetList: () => {
      dispatch(productActions.resetSelectedProduct());
    },
    classify: search => {
      dispatch(productActions.setClassify(search));
    },
    extract: product => {
      dispatch(productActions.extractProduct(product));
    },
    extractArray: array => {
      dispatch(productActions.extractProductArray(array));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
