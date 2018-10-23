import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import HomeRoute from "../routes/HomeRoute";
import SearchRoute from "../routes/SearchRoute";
import CartScreen from "../screens/CartScreen";
import ProfileRoute from "../routes/ProfileRoute";
import { MaterialIcons } from "@expo/vector-icons";

const TabsNavigation = createBottomTabNavigator(
  {
    Home: {
      screen: HomeRoute,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <MaterialIcons
            name={"home"}
            size={30}
            color={focused ? "black" : "#31A5FF"}
          />
        ),
        tabBarLabel: "홈"
      }
    },
    Search: {
      screen: SearchRoute,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <MaterialIcons
            name={"list"}
            size={30}
            color={focused ? "black" : "#31A5FF"}
          />
        ),
        tabBarLabel: "리스트"
      }
    },
    Notifications: {
      screen: CartScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <MaterialIcons
            name={"shopping-cart"}
            size={30}
            color={focused ? "black" : "#31A5FF"}
          />
        ),
        tabBarLabel: "장바구니"
      }
    },
    Profile: {
      screen: ProfileRoute,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <MaterialIcons
            name={"account-box"}
            size={30}
            color={focused ? "black" : "#31A5FF"}
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
        height: 55
      },
      activeTintColor: "black",
      inactiveTintColor: "#31A5FF"
    }
  }
);

export default TabsNavigation;
