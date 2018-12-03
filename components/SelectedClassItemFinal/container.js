import React, { Component } from "react";
import SelectedClassItemFinal from "./presenter";

class Container extends Component {
  render() {
    return <SelectedClassItemFinal {...this.props} />;
  }
}

export default Container;
