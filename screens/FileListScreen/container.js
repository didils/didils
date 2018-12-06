import React, { Component } from "react";
import PropTypes from "prop-types";
import FileListScreen from "./presenter";

class Container extends Component {
  static propTypes = {};
  render() {
    const {
      navigation: {
        state: {
          params: { cases, case_title }
        }
      }
    } = this.props;
    return (
      <FileListScreen cases={cases} {...this.props} case_title={case_title} />
    );
  }
}

export default Container;
