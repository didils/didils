import React, { Component } from "react";
import PropTypes from "prop-types";
import CaseDetailScreen from "./presenter";

class Container extends Component {
  static propTypes = {};
  render() {
    const {
      navigation: {
        state: {
          params: { cases }
        }
      }
    } = this.props;
    console.log(cases);
    return <CaseDetailScreen cases={cases} />;
  }
}

export default Container;
