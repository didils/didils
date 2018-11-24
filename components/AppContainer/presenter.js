import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, StatusBar, StyleSheet, Dimensions } from "react-native";
import LoggedOutNavigation from "../../navigation/LoggedOutNavigation";
import RootNavigation from "../../navigation/RootNavigation";

class AppContainer extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    initApp: PropTypes.func.isRequired
  };

  componentWillMount() {
    const { isLoggedIn, resetFeed } = this.props;
    if (!isLoggedIn) {
      resetFeed();
    }
  }

  componentDidMount() {
    const { isLoggedIn, initApp } = this.props;
    if (isLoggedIn) {
      initApp();
    }
  }
  render() {
    const { isLoggedIn, profile } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar hidden={false} />
        <RootNavigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

export default AppContainer;
