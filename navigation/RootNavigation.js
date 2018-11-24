import React, { Component } from "react";
import { Alert } from "react-native";
import { createStackNavigator } from "react-navigation";
import TakePhotoScreen from "../screens/TakePhotoScreen";
import TabsNavigation from "./TabsNavigation";
import PickPhotoScreen from "../screens/PickPhotoScreen";
import CameraScreen from "../screens/CameraScreen";
import LibraryScreen from "../screens/LibraryScreen";
import PickProductScreen from "../screens/PickProductScreen";
import SummaryScreen from "../screens/SummaryScreen";
import CaseDetailScreen from "../screens/CaseDetailScreen";
import LogInScreen from "../screens/LogInScreen";
import FirstScreen from "../screens/FirstScreen";
import SecondScreen from "../screens/SecondScreen";
import { PURPLE } from "../constants";
import Ionicons from "@expo/vector-icons/Ionicons";

const RootNavigation = createStackNavigator({
  Tabs: {
    screen: TabsNavigation,
    navigationOptions: {
      header: null
    }
  },
  PickProduct: {
    screen: PickProductScreen,
    navigationOptions: {
      header: null
    }
  },
  PickPhoto: {
    screen: PickPhotoScreen,
    navigationOptions: {
      header: null
    }
  },
  Summary: {
    screen: SummaryScreen,
    navigationOptions: {
      header: null
    }
  },
  Camera: {
    screen: CameraScreen,
    navigationOptions: {
      tabBarLabel: "카메라 촬영"
    }
  },
  Library: {
    screen: LibraryScreen,
    navigationOptions: {
      tabBarLabel: "카메라롤"
    }
  },
  TakePhoto: {
    screen: TakePhotoScreen,
    navigationOptions: {
      header: null
    }
  },
  caseDetail: {
    screen: CaseDetailScreen,
    navigationOptions: {
      tabBarLabel: "상세 정보"
    }
  },
  LogIn: {
    screen: LogInScreen
  },
  First: {
    screen: FirstScreen,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "white"
      },
      headerTintColor: PURPLE,
      headerLeft: (
        <Ionicons
          name={"ios-arrow-round-back"}
          onPress={() => {
            Alert.alert(
              "신청 초기화",
              "확인을 누르면 모든 작업이 초기화됩니다.",
              [
                {
                  text: "취소",
                  style: "cancel"
                },
                {
                  text: "확인",
                  onPress: () => {
                    navigation.goBack(null);
                  }
                }
              ],
              { cancelable: true }
            );
          }}
          color={PURPLE}
          size={40}
          style={{ paddingHorizontal: 15, paddingBottom: 10 }}
        />
      )
    })
  },
  Second: {
    screen: SecondScreen,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "white"
      },
      headerTintColor: PURPLE,
      headerLeft: (
        <Ionicons
          name={"ios-arrow-round-back"}
          onPress={() => {
            navigation.goBack(null);
          }}
          color={PURPLE}
          size={40}
          style={{ paddingHorizontal: 15, paddingBottom: 10 }}
        />
      )
    })
  }
});

export default RootNavigation;
