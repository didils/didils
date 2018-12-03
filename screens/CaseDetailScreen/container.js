import React, { Component } from "react";
import PropTypes from "prop-types";
import CaseDetailScreen from "./presenter";

class Container extends Component {
  static propTypes = {};
  componentDidMount() {
    const {
      navigation: {
        state: {
          params: {
            cases: { identification_number }
          }
        }
      }
    } = this.props;
    console.log(this.props.navigation.state.params.cases.identification_number);
    this.props.getFile(identification_number);
  }
  render() {
    const {
      navigation: {
        state: {
          params: { cases }
        }
      }
    } = this.props;
    return <CaseDetailScreen cases={cases} {...this.props} />;
  }
}

export default Container;
