import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as productActions } from "../../redux/modules/product";
import { actionCreators as caseActions } from "../../redux/modules/cases";

const mapStateToProps = (state, ownProps) => {
  const {
    product: {
      selectedArray,
      search,
      selectedProduct,
      classifiedProduct,
      classifiedSelected
    }
  } = state;
  return {
    search,
    selectedProduct,
    classifiedProduct,
    classifiedSelected,
    selectedArray
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
    },
    setDesignatedArray: designatedArray => {
      dispatch(caseActions.setDesignatedArray(designatedArray));
    },
    setProduct: products => {
      dispatch(caseActions.setProduct(products));
    },
    setApplicantsArray: applicantArray => {
      dispatch(caseActions.setApplicantsArray(applicantArray));
    },
    setDescription: descriptions => {
      dispatch(caseActions.setDescription(descriptions));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
