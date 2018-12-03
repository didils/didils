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
import ThirdScreen from "../screens/ThirdScreen";
import { PURPLE } from "../constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import ChatListScreen from "../screens/ChatListScreen";
import ChatScreen from "../screens/ChatScreen";
import FileListScreen from "../screens/FileListScreen";
import FileDetailScreen from "../screens/FileDetailScreen";
import PickApplicantScreen from "../screens/PickApplicantScreen";
import AddressScreen from "../screens/AddressScreen";

const RootNavigation = createStackNavigator({
  Tabs: {
    screen: TabsNavigation,
    navigationOptions: {
      header: null
    }
  },
  FileDetail: {
    screen: FileDetailScreen,
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
  FileList: {
    screen: FileListScreen,
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
  },
  TakePhoto: {
    screen: TakePhotoScreen,
    navigationOptions: {
      header: null
    }
  },
  caseDetail: {
    screen: CaseDetailScreen,
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
  },
  LogIn: {
    screen: LogInScreen,
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
  },
  Third: {
    screen: ThirdScreen,
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
  },
  Address: {
    screen: AddressScreen,
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
  },
  PickApplicant: {
    screen: PickApplicantScreen,
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
  },
  ChatList: {
    screen: ChatListScreen,
    navigationOptions: {
      tabBarLabel: "채팅리스트"
    }
  },
  Chat: {
    screen: ChatScreen,
    navigationOptions: {
      tabBarLabel: "채팅"
    }
  }
});

export default RootNavigation;
