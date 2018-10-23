import React, { Component } from "react";
import PropTypes from "prop-types";
import ClassItem from "./presenter";

class Container extends Component {
  render() {
    return <ClassItem {...this.props} />;
  }
}

export default Container;
