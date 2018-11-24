import React, { Component } from "react";
import PropTypes from "prop-types";
import SelectedClassItem from "./presenter";

class Container extends Component {
  render() {
    return <SelectedClassItem {...this.props} />;
  }
}

export default Container;
