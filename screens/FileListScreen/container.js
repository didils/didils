import React, { Component } from "react";
import PropTypes from "prop-types";
import FileListScreen from "./presenter";

class Container extends Component {
  static propTypes = {};
  render() {
    console.log(this.props);
    console.log("props");
    const {
      navigation: {
        state: {
          params: { cases }
        }
      }
    } = this.props;
    return <FileListScreen cases={cases} {...this.props} />;
  }
}

export default Container;
