import React, { Component } from "react";
import PropTypes from "prop-types";
import SelectedClassPrice from "./presenter";

class Container extends Component {
  render() {
    return <SelectedClassPrice {...this.props} />;
  }
}

export default Container;
