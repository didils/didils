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
      isProductsSelected
    },
    product: { classifiedSelected }
  } = state;
  return {
    profile: user.profile,
    designatedArray,
    products,
    applicantsArray,
    descriptions,
    isProductsSelected,
    classifiedSelected
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
    uploadCase: (
      file,
      designatedArray,
      products,
      applicantsArray,
      descriptions
    ) => {
      return dispatch(
        caseActions.uploadCase(
          file,
          designatedArray,
          products,
          applicantsArray,
          descriptions
        )
      );
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
