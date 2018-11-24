import React, { Component } from "react";
import PropTypes from "prop-types";
import FirstScreen from "./presenter";

class Container extends Component {
  static propTypes = {};
  state = {
    isSubmitting: false
  };
  componentWillMount = () => {
    const { setSearch, resetList, classify, resetCase } = this.props;
    setSearch([]);
    classify([]);
    resetList();
    resetCase();
  };

  render() {
    return (
      <FirstScreen
        submitCase={this._submitCase}
        {...this.props}
        {...this.state}
      />
    );
  }
  _submitCase = async () => {
    const {
      profile,
      uploadCase,
      navigation,
      designatedArray,
      products,
      applicantsArray,
      descriptions,
      navigation: {
        state: {
          params: { url }
        }
      }
    } = this.props;
    this.setState({
      isSubmitting: true
    });
    const uploadResult = await uploadCase(
      url,
      designatedArray,
      products,
      applicantsArray,
      descriptions
    );
    console.log("uploadresult");
    console.log(uploadResult);
    if (uploadResult) {
      navigation.goBack(null);
    }
  };
}

export default Container;
