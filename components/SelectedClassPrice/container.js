import React, { Component } from "react";
import PropTypes from "prop-types";
import SelectedClassPrice from "./presenter";

class Container extends Component {
  render() {
    console.log("selectedclassitem");
    console.log(this.props);
    console.log(this.props.index);
    return (
      <SelectedClassPrice {...this.props} changeFormat={this._changeFormat} />
    );
  }
  _changeFormat = priceToChange => {
    return priceToChange.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
}

export default Container;
