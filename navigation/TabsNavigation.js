import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import HomeRoute from "../routes/HomeRoute";
import SearchRoute from "../routes/SearchRoute";
import CartScreen from "../screens/CartScreen";
import ProfileRoute from "../routes/ProfileRoute";
import { MaterialIcons } from "@expo/vector-icons";
import { PURPLE } from "../constants";

const TabsNavigation = createBottomTabNavigator(
  {
    Home: {
      screen: HomeRoute,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <MaterialIcons
            name={"home"}
            size={25}
            color={focused ? PURPLE : "lightgrey"}
          />
        )
      }
    },
    Search: {
      screen: SearchRoute,
      navigationOptions: {
        header: null,
        tabBarIcon: ({ focused }) => (
          <MaterialIcons
            name={"list"}
            size={25}
            color={focused ? PURPLE : "lightgrey"}
          />
        ),
        tabBarLabel: "리스트"
      }
    },
    Profile: {
      screen: ProfileRoute,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <MaterialIcons
            name={"account-box"}
            size={25}
            color={focused ? PURPLE : "lightgrey"}
          />
        ),
        tabBarLabel: "계정"
      }
    }
  },
  {
    tabBarPosition: "bottom",
    tabBarOptions: {
      style: {
        backgroundColor: "#FBFBFB",
        height: 50
      },
      activeTintColor: "BlueGreen",
      inactiveTintColor: "grey",
      showLabel: false
    }
  }
);

export default TabsNavigation;
