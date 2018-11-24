import React, { Component } from "react";
import PropTypes from "prop-types";
import SearchScreen from "./presenter";

class Container extends Component {
  static propTypes = {
    cases: PropTypes.array,
    getFeed: PropTypes.func.isRequired
  };
  state = {
    isFetching: false
  };
  componentWillReceiveProps = nextProps => {
    if (nextProps.feed) {
      this.setState({
        isFetching: false
      });
    }
  };

  componentDidMount = () => {
    const { getFeed, isLoggedIn } = this.props;
    if (isLoggedIn) {
      getFeed();
    }
  };

  render() {
    console.log("feed");
    console.log(this.props.feed);
    return <SearchScreen {...this.props} {...this.state} />;
  }
}

export default Container;
