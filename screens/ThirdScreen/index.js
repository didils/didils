import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as productActions } from "../../redux/modules/product";
import { actionCreators as caseActions } from "../../redux/modules/cases";

const mapStateToProps = (state, ownProps) => {
  const { user } = state;
  const {
    cases: {
      designatedArray,
      products,
      applicantsArray,
      descriptions,
      isProductsSelected,
      trademark_title
    },
    product: { activeClass, classifiedSelected, totalPrice }
  } = state;
  return {
    profile: user.profile,
    designatedArray,
    products,
    applicantsArray,
    descriptions,
    isProductsSelected,
    classifiedSelected,
    activeClass,
    totalPrice,
    trademark_title
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setSearch: blank => {
      dispatch(productActions.setSearch(blank));
    },
    resetList: () => {
      dispatch(productActions.resetSelectedProduct());
    },
    classify: search => {
      dispatch(productActions.setClassify(search));
    },
    resetCase: () => {
      dispatch(caseActions.resetCase());
    },
    setDescription: descriptions => {
      dispatch(caseActions.setDescription(descriptions));
    },
    setTrademarkTitle: trademark_title => {
      dispatch(caseActions.setTrademarkTitle(trademark_title));
    },
    uploadCase: (
      file,
      designatedArray,
      products,
      applicantsArray,
      descriptions,
      trademark_title
    ) => {
      return dispatch(
        caseActions.uploadCase(
          file,
          designatedArray,
          products,
          applicantsArray,
          descriptions,
          trademark_title
        )
      );
    },
    uploadCaseWithoutImage: (
      designatedArray,
      products,
      applicantsArray,
      descriptions,
      trademark_title
    ) => {
      return dispatch(
        caseActions.uploadCaseWithoutImage(
          designatedArray,
          products,
          applicantsArray,
          descriptions,
          trademark_title
        )
      );
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
