import React, { Component } from "react";
import PropTypes from "prop-types";
import ThirdScreen from "./presenter";

class Container extends Component {
  static propTypes = {};
  state = {
    isSubmitting: false
  };

  render() {
    return (
      <ThirdScreen
        submitCase={this._submitCase}
        changeFormat={this._changeFormat}
        {...this.props}
        {...this.state}
        submitCaseWithoutImage={this._submitCaseWithoutImage}
        submitCaseWithoutTitle={this._submitCaseWithoutTitle}
        changeToSubmit={this._changeToSubmit}
      />
    );
  }
  _changeFormat = priceToChange => {
    return priceToChange.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  _changeToSubmit = () => {
    this.setState({
      ...this.state,
      isSubmitting: true
    });
  };

  _submitCase = async url => {
    const {
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
      navigation.navigate("Tabs");
    }
  };

  _submitCaseWithoutImage = async () => {
    const {
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
      navigation.navigate("Tabs");
    }
  };

  _submitCaseWithoutTitle = async url => {
    const {
      uploadCaseWithoutTitle,
      navigation,
      designatedArray,
      products,
      applicantsArray,
      descriptions
    } = this.props;
    this.setState({
      isSubmitting: true
    });
    const uploadResult = await uploadCaseWithoutTitle(
      url,
      designatedArray,
      products,
      applicantsArray,
      descriptions
    );
    if (uploadResult) {
      navigation.navigate("Tabs");
    }
  };
}

export default Container;
