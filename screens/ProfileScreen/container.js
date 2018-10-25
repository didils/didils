import React, { Component } from "react";
import PropTypes from "prop-types";
import ProfileScreen from "./presenter";

class Container extends Component {
  static propTypes = {};
  render() {
    return <ProfileScreen {...this.props} {...this.state} />;
  }
}

export default Container;
