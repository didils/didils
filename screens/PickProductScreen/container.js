import React, { Component } from "react";
import PropTypes from "prop-types";
import PickProductScreen from "./presenter";

class Container extends Component {
  componentWillMount = () => {
    const { setSearch, resetList, search, classify } = this.props;
    setSearch([]);
    classify([]);
    resetList();
  };
  static defaultProps = {
    search: []
  };
  static propTypes = {
    searchKeyword: PropTypes.func.isRequired
  };
  state = {
    searchingBy: ""
  };
  render() {
    return (
      <PickProductScreen
        {...this.state}
        {...this.props}
        submitSearch={this._submitSearch}
        changeText={this._changeText}
      />
    );
  }
  _changeText = text => {
    const { setSearch, classify } = this.props;
    this.setState({
      searchingBy: text
    });
    setSearch([]);
    classify([]);
  };

  _submitSearch = async () => {
    const { searchingBy } = this.state;
    const { searchKeyword } = this.props;

    if (!searchingBy == "") {
      searchResult = await searchKeyword(searchingBy);
      if (searchResult) {
        console.log("if state inside");
        console.log(this.props);
      }
    }
  };
}
export default Container;
