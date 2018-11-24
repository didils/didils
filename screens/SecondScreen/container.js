import React, { Component } from "react";
import PropTypes from "prop-types";
import SecondScreen from "./presenter";

class Container extends Component {
  static defaultProps = {
    search: []
  };
  static propTypes = {
    searchKeyword: PropTypes.func.isRequired
  };
  state = {
    searchingBy: ""
  };
  render() {
    return (
      <SecondScreen
        {...this.state}
        {...this.props}
        submitSearch={this._submitSearch}
        changeText={this._changeText}
        pickClassifiedProduct={this._pickClassifiedProduct}
        makeProductString={this._makeProductString}
      />
    );
  }
  _changeText = text => {
    const { setSearch, classify } = this.props;
    this.setState({
      searchingBy: text
    });
    setSearch([]);
    classify([]);
  };

  _submitSearch = async () => {
    const { searchingBy } = this.state;
    const { searchKeyword } = this.props;

    if (!searchingBy == "") {
      searchResult = await searchKeyword(searchingBy);
      if (searchResult) {
      }
    }
  };

  _pickClassifiedProduct = classifiedSelected => {
    resultArray = [];
    for (i in classifiedSelected) {
      if (classifiedSelected[i].classArray.length != 0) {
        productsInClassArray = classifiedSelected[i].classArray.map(
          item => item.product
        );
        productsInClass = this._makeProductString(productsInClassArray);
        resultArray.push({
          class: classifiedSelected[i].class,
          products: productsInClass
        });
      }
    }
    return resultArray;
  };

  _makeProductString = selectedProduct => {
    resultProduct = "";

    for (i = 0; i < selectedProduct.length - 1; i++) {
      resultProduct += selectedProduct[i];
      resultProduct += ", ";
    }
    resultProduct += selectedProduct[selectedProduct.length - 1];
    return resultProduct;
  };
}

export default Container;
