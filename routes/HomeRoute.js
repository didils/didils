import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "react-navigation";
import FeedScreen from "../screens/FeedScreen";
import sharedRoutes, { sharedOptions } from "./sharedRoutes";

const HomeRoute = createStackNavigator(
  {
    Home: {
      screen: FeedScreen,
      navigationOptions: {
        header: null
      }
    },
    ...sharedRoutes
  },
  {
    ...sharedOptions
  }
);

export default HomeRoute;
