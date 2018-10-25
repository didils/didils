import React, { Component } from "react";
import PropTypes from "prop-types";
import SummaryScreen from "./presenter";

class Container extends Component {
  componentWillMount = () => {
    const { classify, selectedArray } = this.props;
    classify(selectedArray);
  };

  static propTypes = {};

  render() {
    console.log(this.props);
    return <SummaryScreen {...this.props} />;
  }
}

export default Container;
