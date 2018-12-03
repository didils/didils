import React, { Component } from "react";
import PickApplicantScreen from "./presenter";

class Container extends Component {
  render() {
    return <PickApplicantScreen {...this.props} {...this.state} />;
  }
}

export default Container;
