import React, { Component } from "react";
import PropTypes from "prop-types";
import ThirdScreen from "./presenter";

class Container extends Component {
  static propTypes = {};

  render() {
    return (
      <ThirdScreen
        submitCase={this._submitCase}
        changeFormat={this._changeFormat}
        {...this.props}
        {...this.state}
        submitCaseWithoutImage={this._submitCaseWithoutImage}
      />
    );
  }
  _changeFormat = priceToChange => {
    return priceToChange.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  _submitCase = async url => {
    const {
      profile,
      uploadCase,
      navigation,
      designatedArray,
      products,
      applicantsArray,
      descriptions,
      trademark_title
    } = this.props;
    this.setState({
      isSubmitting: true
    });
    const uploadResult = await uploadCase(
      url,
      designatedArray,
      products,
      applicantsArray,
      descriptions,
      trademark_title
    );
    if (uploadResult) {
      navigation.goBack(null);
    }
  };

  _submitCaseWithoutImage = async () => {
    const {
      profile,
      uploadCase,
      uploadCaseWithoutImage,
      navigation,
      designatedArray,
      products,
      applicantsArray,
      descriptions,
      trademark_title
    } = this.props;
    this.setState({
      isSubmitting: true
    });
    const uploadResult = await uploadCaseWithoutImage(
      designatedArray,
      products,
      applicantsArray,
      descriptions,
      trademark_title
    );
    if (uploadResult) {
      navigation.goBack(null);
    }
  };
}

export default Container;