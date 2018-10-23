import { createStackNavigator } from "react-navigation";
import TakePhotoScreen from "../screens/TakePhotoScreen";
import TabsNavigation from "./TabsNavigation";
import PickPhotoScreen from "../screens/PickPhotoScreen";
import CameraScreen from "../screens/CameraScreen";
import LibraryScreen from "../screens/LibraryScreen";
import PickProductScreen from "../screens/PickProductScreen";

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
  }
});

export default RootNavigation;
